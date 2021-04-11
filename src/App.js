import React from "react";
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
