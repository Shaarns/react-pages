import React from "react";
import About from "./components/About"
import Contact from "./components/Contact";
import { Form } from "./components/Form";
import { Join } from "./components/Join"
import Practise from "./components/Practice";
import { Studentdoc } from "./components/Studentdoc";
import { Teacherdoc } from "./components/Teacherdoc";
import Teachercarousel from "./components/Techercarousel";
import { Forget } from "./components/Forget";
import { Verification } from "./components/Verification";
import { ResetPass } from "./components/ResetPass";
import { ChangePassword } from "./components/ChangePassword";
import { TeacherProfile } from "./components/TeacherPorfile";
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
          {/* <Teachercarousel/> */}
          {/* <About /> */}
          {/* <Contact /> */}
          {/* <Practise /> */}
          {/* <Teacherdoc/> */}
          {/* <Verification/> */}
          {/* <ResetPass /> */}
          {/* <ChangePassword/> */}
          <TeacherProfile/>
        </div>
    );
  }
} 
