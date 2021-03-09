import React from "react"
// import './App.css';
import Navigation from "./components/navigation/navigation"
import {GlobalStateProvider} from "./context/globalcontext"

function App() {

  return(<>
  <GlobalStateProvider>
  <Navigation/>

  </GlobalStateProvider>

 </> );
}

export default App;