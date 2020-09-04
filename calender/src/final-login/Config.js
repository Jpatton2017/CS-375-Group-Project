let LocalStrategy = require("passport-local").Strategy;
let pg = require("pg");
let env = require("./env.json");
let Pool = pg.Pool;
let pool = new Pool(env);
let bcrypt = require("bcrypt");

function initialize(passport){
    let authenticate = (username,password,done)=>(
        pool.query(
            'SELECT * FROM users WHERE username = $1', [username], (err, result)=>{
                if(err){
                    throw err;
                }
                console.log(result.rows);
                if (result.rows.length > 0){
                    let user = result.rows[0];
                    bcrypt.compare(password, user.password, (err, match)=>{
                        if(err){
                            throw err;
                        }
                        if(match){
                            return done(null, user);
                        }else{
                            return done(null, false, {message: "Password is not correct"});
                        }
                    });
                }else{
                    return done(null, false, {message: "Username is not registered"})
                }
            }
        )
    )
    passport.use(
        new LocalStrategy(
            {
            usernameField: "username",
            passwordField: "password"
        },
        authenticate
        )
    )
    passport.serializeUser((user,done)=>done(null, user.id));
    passport.deserializeUser((id, done)=>{
        pool.query(
            'SELECT * FROM users WHERE id = $1', [id], (err, result) => {
                if (err){
                    throw err;
                }
                return done(null, result.rows[0]);
            }
        )
    })
}
module.exports = initialize;