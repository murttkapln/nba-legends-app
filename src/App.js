import "bootstrap/dist/css/bootstrap.css"
import Header from "./components/Header"
import "./index.css"
import CardContainer from "./components/CardContainer"
import { useState } from "react"



function App() {
  const [search, setSearch] = useState("")
  return (
    <div>  
      <Header setSearch={setSearch}/>
      <CardContainer search={search}/>
    </div>
  )
}

export default App
