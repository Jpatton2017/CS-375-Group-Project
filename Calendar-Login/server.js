let express = require("express");
let app = express();
let pg = require("pg");
let session = require("express-session");
let flash = require("express-flash");
let env = require("./env.json");
let passport = require("passport");
let initpassport = require("./passportConfig");
let bcrypt = require("bcrypt");
let port = 3000;
let Pool = pg.Pool;
let pool = new Pool(env);

initpassport(passport);

app.set("view engine", "ejs");
app.use(express.urlencoded({extended : false}));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());


app.use(flash());
pool.connect().then(function() {
    console.log(`Connected to database ${env.database}`)
});
app.get("/", checkAuth, (req,res)=>{
    res.render('index');
});

app.get("/login", checkAuth, (req,res)=>{
    res.render('log');
});

app.get("/register", checkAuth, (req,res)=>{
    res.render('reg');
});

app.get("/calendar", checkNotAuth, (req,res)=>{
    res.render('calendar', {name: 'Rafay'});
});

app.post("/register", async (req, res)=>{
    let {name,username,password,password2} = req.body;
    let errors = [];

    if (password.length < 8){
        errors.push({message: "Password length must be at least 8 characters"});
    };
    if (password != password2) {
        errors.push({message: "Passwords don't match. Try Again"});
    };
    if (errors.length > 0){
        res.render("reg", {errors});
    };

    let hash = await bcrypt.hash(password, 10);
    pool.query(
        'SELECT * FROM users WHERE username = $1', [username], (err, result)=>{
            if(err){
                throw err;
            }
            console.log(res.rows);
            if (result.rows.length > 0){
                errors.push({message: "Username already registered"});
                res.render("reg", {errors});
            }else{
                pool.query(
                    'INSERT INTO users (name, username, password) VALUES ($1, $2, $3)', [name, username, hash], 
                    (err,result)=>{
                        if (err){
                            throw err;
                        }
                        console.log(result.rows);
                        req.flash("success", "You have been registered. Please log in.");
                        res.redirect('/login');
                    }
                )
            }
        })
    });

app.post('/login', passport.authenticate('local', {
    successRedirect: "/calendar",
    failureRedirect: "/login",
    failureFlash: true
})
);

function checkAuth(req, res, next){
    if(req.isAuthenticated()){
        return res.redirect("/calendar");
    }
    next();
}

function checkNotAuth(req,res,next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(port);