import React from "react";
import "./App.scss";
import Dropdown from './Dropdown';

const months = [
  {
    id: 1,
    value: 'January',
  },
  {
    id: 2,
    value: 'February',
  },
  {
    id: 3,
    value: 'March',
  },
  {
    id: 4,
    value: 'April',
  },
  {
    id: 5,
    value: 'May',
  },
  {
    id: 6,
    value: 'June',
  },  
  {
    id: 7,
    value: 'July',
  },
  {
    id: 8,
    value: 'August',
  },
  {
    id: 9,
    value: 'September',
  },
  {
    id: 10,
    value: 'October',
  },
  {
    id: 11,
    value: 'November',
  },
  {
    id: 12,
    value: 'December',
  },
];

const years = [
  {
    id: 1,
    value: '2023',
  },
  {
    id: 2,
    value: '2022',
  },
  {
    id: 3,
    value: '2021',
  },
  {
    id: 4,
    value: '2020',
  },
  {
    id: 5,
    value: '2019',
  },
  {
    id: 6,
    value: '2018',
  },  
  {
    id: 7,
    value: '2017',
  },
  {
    id: 8,
    value: '2016',
  },
  {
    id: 9,
    value: '2015',
  },
  {
    id: 10,
    value: '2014',
  },
  {
    id: 11,
    value: '2013',
  },
  {
    id: 12,
    value: '2012',
  },
];

function App() {
  return (
    <div classname="container">
      <Dropdown title="Month" items={months} multiSelect />
      <Dropdown title="Year" items={years} multiSelect />
    </div>
  );
}

export default App;