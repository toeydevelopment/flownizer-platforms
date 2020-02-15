import React, { useState } from "react";
import NavBar from "../../components/navbar";
import './timetable.scss'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DatePicker } from 'react-datepicker';

const StyledTableCell:any = withStyles(theme => ({
  head: {
    backgroundColor: '#F2F2F2',
    color: '#4F4F4F',
    fontSize: 18,
    border: 0,
    fontFamily: 'Kanit',
    padding: '18px 0px 18px 57px',
  },
  body: {
    fontSize: 18,
    color: '#4F4F4F',
    border: 0,
    fontFamily: 'Kanit',
    padding: '18px 0px 18px 57px',
  },
}))(TableCell);

const StyledTableRow:any = withStyles(theme => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: '#F9FBFF',
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: "100%",
  },
});


function createData(name:any , time:any , clockin:any, clockout:any, count:any, area:any) {
  return { name, time, clockin, clockout, count, area };
}

const rows = [
  createData('นรสิงห์ โพธิ์ไทยแท้', '7:00', '6:38', '19:14', 12, 'ทางออก 2'),
  createData('ปัณฑา ปราโมทย์พร', '7:00', '6:38', '19:14', 12, 'ทางออก 3'),
  createData('ชัญญา พุกกะพุก', '7:00', '6:39', '19:14', 12, 'ประตูหลักที่ 2'),
  createData('ชัชวาลย์ ทองแท่ง', '19:00', '18:24', '7:23', 12, 'ทางออก 3'),
  createData('ฐิติวัชร์ พระพรหม', '19:00', '18:25', '7:22', 12, 'ลานจอดรถ B'),
  createData('อัฐพงศ์ วันเสาร์', '19:00', '18:25', '7:23', 12, 'ประตูหลักที่ 2'),
  createData('ปันดี สุขกุล', '19:00', '18:26', '7:24', 12, 'ทางออก 3'),
  createData('เทมปูระ ทีรามิสุ', '7:00', '6:40', '19:13', 12, 'ประตูหลักที่ 1'),
  createData('พีรพงศ์ พงศ์ระพี', '7:00', '6:40', '19:15', 12, 'ลานจอดรถ B'),
  createData('นรสิงห์ โพธิ์ไทยแท้', '7:00', '6:41', '19:14', 12, 'ทางออก 3'),
  createData('ฐิติวัชร์ พระพรหม', '19:00', '18:25', '7:22', 12, 'ลานจอดรถ B'),
  createData('ชัญญา พุกกะพุก', '7:00', '6:39', '19:14', 12, 'ประตูหลักที่ 2'),
  createData('เทมปูระ ทีรามิสุ', '7:00', '6:40', '19:13', 12, 'ประตูหลักที่ 1'),
];

function Timetable() {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div style={{
      display:'flex'
    }}>
      <NavBar />
      <div className='timetable'>
        <span>ประวัติการทำงาน</span>
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell style={{marginLeft: 100}}>ชื่อพนักงาน</StyledTableCell>
                  <StyledTableCell align="center">กำหนดเข้างาน</StyledTableCell>
                  <StyledTableCell align="center">เข้างาน</StyledTableCell>
                  <StyledTableCell align="center">ออกงาน</StyledTableCell>
                  <StyledTableCell align="center">จำนวนชม</StyledTableCell>
                  <StyledTableCell>พื้นที่รับผิดชอบ</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.time}</StyledTableCell>
                    <StyledTableCell align="center">{row.clockin}</StyledTableCell>
                    <StyledTableCell align="center">{row.clockout}</StyledTableCell>
                    <StyledTableCell align="center">{row.count}</StyledTableCell>
                    <StyledTableCell>{row.area}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Timetable;
// https://eorisis.com/images/web-design/joomla-extensions/google-maps/screenshots/google-maps-content-plugin-joomla-extension-map-demo.png
