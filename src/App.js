import React from "react";
import Practice from "./components/extra-pages/Practice";
import HomeView from "./components/home/HomeView";
import About from "./components/extra-pages/About";
import TeacherProfile  from "./components/teacherSection/TeacherPorfile";
import ClassProfile  from "./components/classSection/ClassesProfile"
import Counter from "./components/extra-pages/Counter";
import { BrowserRouter as Router,  Route,  } from 'react-router-dom';
import ImageSlider from "./components/extra-pages/ImageSlider";
import { Button } from "@material-ui/core";
import Book from './components/book-page/Book';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';
import './App.css';
import Login from "./components/forms/Login";
import SignUp from "./components/forms/SignUp";
import EnterOtp from "./components/forms/EnterOtp";
import AvailableRides from "./components/rides/AvailableRides";
import FormPractice1 from "./components/forms/FormPractice1";
import Game from "./components/game/Game";
import Todo from "./components/todo-app/Todo";

class App extends React.Component {
  state = {
    visible: true
  };
  render(){
    const buttonText = this.state.visible ? " Hide " : " Show ";
    // const image = this.state.visible ?
    // (
    // <ImageSlider />
    // ) : (
    // <Counter />
    // );

    return(
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path="/" >
            <HomeView />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/enterotp">
            <EnterOtp />
          </Route>
          <Route path="/availablerides">
            <AvailableRides />
          </Route>
          <Route path="/book" >
            <Book />
          </Route>
          <Route path="/practice" >
            <Practice />
          </Route>
          <Route path="/about" >
            <About />
          </Route >
          <Route path="/classporfile" >
            <ClassProfile />
          </Route >
          <Route path="/teacherprofile">
            <TeacherProfile />
          </Route>
          <Route path="/formpractice1">
            <FormPractice1   />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/imageslider">
            <div style={this.state.visible ? {} : {
              visibility: "hidden"
            }}>
              <ImageSlider />
            </div>
            <Button
              onClick={() =>
                this.setState({
                  visible: !this.state.visible
                })}
            >
              {buttonText}
            </Button>
          </Route>
        </Router>
      </ThemeProvider>
    );
  }
}
export default App;