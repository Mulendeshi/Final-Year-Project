// import "./App.css";Add_Patient

// //import LoginPage from "./Components/Login/Login.js";
// // import Admin from "./Components/Admin/Admin_Navigation.js";
// //import Change_password from "./Components/Change_Password/change_password.js";
import Add_Patient from "./Components/General_Practitioner/AddPatient/Patient_Add.js";
// //import SideBar from "./Components/SideBar/SideBar.js";
// import UpdatePatientList from "./Components/General_Practitioner/UpdatePatient/UpdatePatientList/UpdatePatientList.js";
// function App() {
//   return (
//     <div className="App">
//       <UpdatePatientList />
//     </div>
//   );
// }

// export default App;

// App.js or index.js

import React from "react";
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import MiniSideBar from "./Components/MiniSideBar/MiniSideBar.js";
//import Admin_Navigation from "./Components/Admin/Admin_Navigation.js";
import SideBar from "./Components/SideBar/SideBar.js";
//import Add_Patient from "./Add_Patient"; // Assuming you have a Add_Patient component

function App() {
  return (
    <BrowserRouter>
      <div>
        <MiniSideBar />
       {/* <Switch>
          <Route exact path="/patients" component={Add_Patient} />
           Other routes 
        </Switch>*/}
      </div>
     </BrowserRouter>
    
  );
}

export default App;
