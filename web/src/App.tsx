import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import './App.css';

import { Grid, Avatar } from '@material-ui/core';
import NotificationsNone from '@material-ui/icons/NotificationsNone';

import { HomeView, NotificationView, ManageView, OverviewView, EmployeeView, TimetableView, WagesView } from './views/Views';

const MenuItem = (props: any) => {
  let match: any = useRouteMatch({
    path: props.path,
    strict: true,
    sensitive: true
  });
  return match ? <p className='link-selected'>{props.title}</p> : <p className='link'>{props.title}</p>;
}

export default function App() {
  const [currentTitle] = useState('ห้างสรรพสินค้า ก');
  const [fullname] = useState('Theresa Steward');
  const [title] = useState('ผู้ดูแลระบบ');

  return (
    <div style={{ flexGrow: 1 }}>
      <Router>
        <Grid container>
          <Grid item xs={2}>
            <div style={{ backgroundColor: '#3C78D8', height: '100vh' }}>
              <Grid container>
                <Grid item xs={2} />
                <Grid item xs={10}>
                  <br /><br /><br /><br />
                  <Link to="/" className="no-decoration"><MenuItem title='หน้าหลัก' /></Link>
                  <Link to="/notification" className="no-decoration"><MenuItem title='การแจ้งเตือน' path='/notification' /></Link>
                  <br /><br />
                  <Link to="/manage" className="no-decoration"><MenuItem title='จัดการ' path='/manage' /></Link>
                  <Link to="/overview" className="no-decoration"><MenuItem title='ภาพรวม' path='/overview' /></Link>
                  <Link to="/employee" className="no-decoration"><MenuItem title='พนักงาน' path='/employee' /></Link>
                  <Link to="/timetable" className="no-decoration"><MenuItem title='ตารางเวลา' path='/timetable' /></Link>
                  <Link to="/wages" className="no-decoration"><MenuItem title='คำนวณเงิน' path='/wages' /></Link>
                </Grid>
              </Grid>
              <br />
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', color: 'white' }} >
                <Grid item className='align-vertical-center'>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Grid>
                <Grid item>
                  <div style={{ textAlign: 'left' }}>
                    <span>{fullname}</span>
                    <br />
                    <span style={{ fontSize: '0.8em' }}>{title}</span>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={10}>
            <div className="header">
              <Grid item xs={1} />
              <Grid container>
                <Grid item xs={4} className='align-vertical-center'>
                  <h2>{currentTitle}</h2>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={3} className='align-vertical-center'>
                  <Grid container spacing={2} >
                    <Grid item>
                      <div style={{ textAlign: 'right' }}>
                        <span>{fullname}</span>
                        <br />
                        <span style={{ color: '#999999', fontSize: '0.8em' }}>{title}</span>
                      </div>
                    </Grid>
                    <Grid item className='align-vertical-center'>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Grid>
                    <Grid item className='align-vertical-center'>
                      <NotificationsNone />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div>
              <Switch>
                <Route exact path="/" >
                  <HomeView />
                </Route>
                <Route path="/notification">
                  <NotificationView />
                </Route>
                <Route path="/manage">
                  <ManageView />
                </Route>
                <Route path="/overview">
                  <OverviewView />
                </Route>
                <Route path="/employee">
                  <EmployeeView />
                </Route>
                <Route path="/timetable">
                  <TimetableView />
                </Route>
                <Route path="/wages">
                  <WagesView />
                </Route>
              </Switch>
            </div>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}
