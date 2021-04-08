import React from "react";
import { Form } from "./components/Form";
import { Join } from "./components/Join"
import Practise from "./components/Practise";
import { Studentdoc } from "./components/Studentdoc";
import { Teacherdoc } from "./components/Teacherdoc";
// import { BrowserRouter as Router,  Route } from 'react-router-dom';
export class App extends React.Component {
  render() {
    return(
        // <div>
        //   <Router>
        //   <Route path={"form"} component={Form} />
        //   <Route path={"studentdoc"} comonent={Studentdoc} />
        //   <Route path={"teacherdoc"} component={Teacherdoc} />
        //   <Route path={"join"} component={Join} />
        //   </Router>
        // </div>
        <div>
          <Practise/>
        </div>
    );
  }
} 
