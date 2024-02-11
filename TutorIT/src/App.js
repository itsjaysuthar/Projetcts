import './App.css';
import React from 'react';
import './components/style.css';
import Header from './components/Header';
import Carousal from './components/Carousal';
import TutorOverview from './components/TutorOverview';
import Courses from './components/Courses';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FindTutors from './components/FindTutors';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import StudentAppointments from './components/StudentAppointments';
import Welcome from './components/Welcome';
import StudentOptions from './components/StudentOptions';
import FavouriteButton from './components/FavouriteButton';
import UpdateProfile from './components/UpdateProfile';
import axios from 'axios'
import { getLoginDetails } from './components/utils';
import TutorAppointments from './components/TutorAppointments';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      UserDetails: null
    }
  }

  componentDidMount() {


    axios.post('https://57bd-97-99-97-140.ngrok.io', {
      Name: 'Fred',
      Age: '23'
    })
      .then(function (response) {
        this.setState({
          ...this.state,
          UserDetails: response.data
        })
      })
  }

  render() {
    return (
      <div className='App'>

        <Header />
        <BrowserRouter>
          <Routes>

            <Route
              path="/"
              element={<>
                <Carousal></Carousal>
                <TutorOverview></TutorOverview>
                <Courses></Courses>
              </>
              }
            />

            <Route
              path="/dashboard"
              element={<>
                <Welcome name="Anjum" hours="35" ratings="4.6"></Welcome>

                {
                  getLoginDetails()?.role==0 ? <>
                    <StudentOptions role={this.state?.UserDetails?.role}></StudentOptions>
                    <FindTutors></FindTutors>
                    <StudentAppointments></StudentAppointments>
                  </> :
                    <>
                      <StudentOptions role={this.state?.UserDetails?.role}></StudentOptions>
                      <UpdateProfile></UpdateProfile>
                      <TutorAppointments></TutorAppointments>
                    </>
                }

              </>}
            />

            <Route
              path="/login"
              element={<LoginPage />}
            />

            <Route
              path="/signup"
              element={<SignUpPage />}
            />
          </Routes>
        </BrowserRouter>

        <Footer></Footer>
      </div >
    );
  }
}

export default App;
