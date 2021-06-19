import React from 'react'
import Practice from './components/extra-pages/Practice'
import HomeView from './components/home/HomeView'
import About from './components/extra-pages/About'
import TeacherProfile from './components/teacherSection/TeacherPorfile'
import ClassProfile from './components/classSection/ClassesProfile'
import Counter from './components/extra-pages/Counter'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ImageSlider from './components/extra-pages/ImageSlider'
import { Button } from '@material-ui/core'
import Book from './components/book-page/Book'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme.js'
import './App.css'
import Login from './components/forms/Login'
import SignUp from './components/forms/SignUp'
import EnterOtp from './components/forms/EnterOtp'
import AvailableRides from './components/rides/AvailableRides'
import FormPractice1 from './components/forms/FormPractice1'
import FormPractice2 from './components/forms/practice-2'
import Game from './components/game/Game'
import Todo from './components/todo-app/Todo'
import FetchData from './components/fetch-data/FetchData'
import UseRefBasic from './components/forms/useRefBasic'
import Reducers from './components/reducers/Reducers'
import Home from './components/Social-App/Home'
import Calculator from './components/calculator/Calculator'
import Links from './components/Links'
// import ErrorPage from './components/home/ErrorPage'

class App extends React.Component {
  state = {
    visible: true,
  }
  render() {
    const buttonText = this.state.visible ? ' Hide ' : ' Show '
    // const image = this.state.visible ?
    // (
    // <ImageSlider />
    // ) : (
    // <Counter />
    // );

    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path='/'>
            <Links />
          </Route>
          <Route path='/carpool-homepage'>
            <HomeView />
          </Route>
          <Route path='/social-app'>
            <Home />
          </Route>
          {/* <Route exact>
            <ErrorPage />
          </Route> */}
          <Route path='/game'>
            <Game />
          </Route>
          <Route path='/todo'>
            <Todo />
          </Route>
          <Route path='/calculator'>
            <Calculator />
          </Route>
          <Route path='/fetchdata'>
            <FetchData />
          </Route>
          <Route path='/userefbasic'>
            <UseRefBasic />
          </Route>
          <Route path='/reducers'>
            <Reducers />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/enterotp'>
            <EnterOtp />
          </Route>
          <Route path='/availablerides'>
            <AvailableRides />
          </Route>
          <Route path='/book'>
            <Book />
          </Route>
          <Route path='/practice'>
            <Practice />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/classprofile'>
            <ClassProfile />
          </Route>
          <Route path='/teacherprofile'>
            <TeacherProfile />
          </Route>
          <Route path='/formpractice1'>
            <FormPractice1 />
          </Route>
          <Route path='/formpractice2'>
            <FormPractice2 />
          </Route>
          <Route path='/counter'>
            <Counter />
          </Route>
          <Route path='/imageslider'>
            <div
              style={
                this.state.visible
                  ? {}
                  : {
                      visibility: 'hidden',
                    }
              }
            >
              <ImageSlider />
            </div>
            <Button
              onClick={() =>
                this.setState({
                  visible: !this.state.visible,
                })
              }
            >
              {buttonText}
            </Button>
          </Route>
        </Router>
      </ThemeProvider>
    )
  }
}
export default App
