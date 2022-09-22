import "./App.css"
import { useState } from "react"
import UserList from "./componets/UserList"
import { Users } from "./User"
//import Addvehicle from "./componets/Addvehicle"
//import { BrowserRouter, Route, Router } from "react-router-dom"

function App() {
  const [query, setQuery] = useState("")
  //const [sorted, setSorted] = useState({ sorted: "id", reversed: false })

  const search = (data) => {
    return data.filter((item) => item.vehicletype.toLowerCase().includes(query))
  }
  return (
    <>
      {/*<BrowserRouter>
        <Router></Router>
      </BrowserRouter>*/}

      <div>
        <h1>Toll Management Application</h1>
        <ul>
          <li>
            <a href="#">Add Vehicle Entry</a>
            <a href="#">Add New Toll</a>
            <a href="#">View All Toll</a>
          </li>
        </ul>
      </div>
      <h3>Toll Entries / Vehicle Entries</h3>
      <input
        type="text"
        placeholder="Search.."
        className="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <UserList data={search(Users)} />
      {/*<Addvehicle />*/}
    </>
  )
}

export default App
