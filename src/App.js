import React, { useState, useEffect } from "react";
import "./App.css";
import { getPatients } from "./api";

export default function App() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [order, setOrder] = React.useState("");
  const [orderBy, setOrderBy] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    getPatients()
      .then(data => {
        const mapTest = data.patients.map((item, idx) => {
          var d = new Date(item.birthdate);
          let timeStampCon = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();
          return { ...item, birthdate: timeStampCon };
        });
        setIsLoading(false);
        setData(mapTest)
      })
      .catch(err => console.log(err, "error"))
  }, [])

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function filterBySearchText(i) {
    if (searchText.length === 0) return true;
    if (searchText.length > 0) {
      return JSON.stringify(i).toLowerCase().includes(searchText.toLowerCase());
    }
    return false;
  }

  const cardElements = data
    .filter((i) => filterBySearchText(i))
    .sort(getComparator(order, orderBy))
    .map((item, idx) => (
      // const cardElements = data.map((item, idx) => (
      <div className="card" key={idx}>
        <p><b>First Name:</b> {item.firstName}</p>
        <p><b>Last Name:</b> {item.lastName}</p>
        <p><b>Sex:</b> {item.sex}</p>
        <p><b>Date of Birth: </b> {item.birthdate}</p>
        <span><b>Conditions:</b> {item.conditions.join(", ")}</span>
      </div>
    ));

  function getOrder(buttonClicked) {
    if (orderBy !== buttonClicked) {
      return "asc";
    } else {
      return order === "asc" ? "desc" : "asc";
    }
  }
  if (isLoading) {
    return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Patients Directory</h1>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search"
          name="searchTxt"
          className="search"
          onChange={(e) => { setSearchText(e.target.value); }}
        />
      </div>

      {
      //these needed if the search bar is fixed in css
      /* <br></br>
      <br></br>
      <br></br> */}

      <div className="btn-container">
        <button
          className={orderBy === "firstName" ? "lighted" : null}
          value="firstName"
          name="firstName"
          onClick={(e) => {
            setOrderBy("firstName");
            setOrder(getOrder("firstName"));
          }}
        >
          First Name  {orderBy === "firstName" ? `${order}` : null}
        </button>
        <button
          className={orderBy === "lastName" ? "lighted" : null}
          value="lastName"
          name="lastName"
          order="asc"
          onClick={(e) => {
            setOrderBy("lastName");
            setOrder(getOrder("lastName"));
          }}
        >
          Last Name {orderBy === "lastName" ? `${order}` : null}
        </button>
        <button
          className={orderBy === "sex" ? "lighted" : null}
          value="sex"
          name="sex"
          onClick={(e) => {
            setOrderBy("sex");
            setOrder(getOrder("sex"));
          }}
        >
          Sex {orderBy === "sex" ? `${order}` : null}
        </button>
        <button
          className={orderBy === "birthdate" ? "lighted" : null}
          label="birthdate"
          name="birthdate"
          onClick={(e) => {
            setOrderBy("birthdate");
            setOrder(getOrder("birthdate"));
          }}
        >
          Date of Birth {orderBy === "birthdate" ? `${order}` : null}
        </button>
      </div>
      <div className="box-container">{cardElements} </div>


    </div>
  );
}
