import React from "react";
import { COLOR_PRIMARY } from "./constants";
import NavBar from "./components/navbar";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import ProjectDetails from './pages/Project/project-details';
import Wage from './pages/Wage/wage';
import Timetable from './pages/Timetable/timetable';

const ItemLink = ({ title }: any) => (
  <a
    style={{
      fontSize: "3rem",
      padding: "1rem 1.5rem"
    }}
  >
    {title}
  </a>
);

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex"
      }}
    >
      <div
        style={{
          width: "100vw",
          paddingRight: ".2rem",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex"
          }}
        >
          <Header />
        </div>
        <div
          style={{
            marginTop: '10vh',
          }}
        >
          <Router>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/project" component={ProjectDetails} />
              <Route path="/timetable" component={Timetable} />
              <Route path="/wage" component={Wage} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
