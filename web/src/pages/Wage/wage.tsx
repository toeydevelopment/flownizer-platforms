import React from "react";
import NavBar from "../../components/navbar";
import './wage.scss'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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


function createData(name:any , hour:any , wage:any, salary:any, net:any) {
  return { name, hour, wage, salary, net };
}

const rows = [
  createData('นรสิงห์ โพธิ์ไทยแท้', '120', '45', '5,400', 'x,xxx'),
  createData('ปัณฑา ปราโมทย์พร', '240', '45', '10,800', 'xx,xxx'),
  createData('ชัญญา พุกกะพุก', '300', '45', '13,500', 'xx,xxx'),
  createData('ชัชวาลย์ ทองแท่ง', '218', '45', '9,810', 'x,xxx'),
  createData('ฐิติวัชร์ พระพรหม', '220', '45', '9,900', 'x,xxx'),
  createData('อัฐพงศ์ วันเสาร์', '275', '45', '12,375', 'xx,xxx'),
  createData('ปันดี สุขกุล', '180', '45', '8,100', 'x,xxx'),
  createData('เทมปูระ ทีรามิสุ', '192', '45', '8,640', 'x,xxx'),
  createData('พีรพงศ์ พงศ์ระพี', '240', '45', '10,800', 'xx,xxx'),
  createData('นรสิงห์ โพธิ์ไทยแท้', '300', '45', '13,500', 'xx,xxx'),
  createData('ฐิติวัชร์ พระพรหม', '220', '45', '9,900', 'x,xxx'),
  createData('ชัญญา พุกกะพุก', '224', '45', '10,080', 'xx,xxx'),
  createData('เทมปูระ ทีรามิสุ', '218', '45', '9,810', 'x,xxx'),
];

function Wage() {
  const classes = useStyles();

  return (
    <div style={{
      display:'flex'
    }}>
      <NavBar />
      <div className='title'>
        ห้างสรรพสินค้า ก
      </div>
      <div className='wage'>
        <span>คำนวณเงินเดือน</span>
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell style={{marginLeft: 100}}>ชื่อพนักงาน</StyledTableCell>
                  <StyledTableCell align="center">ชม.ทำงาน</StyledTableCell>
                  <StyledTableCell align="center">รายได้ / ชม.</StyledTableCell>
                  <StyledTableCell align="center">รายได้รวม</StyledTableCell>
                  <StyledTableCell align="center">เงินเดือนสุทธิ</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.hour}</StyledTableCell>
                    <StyledTableCell align="center">{row.wage}</StyledTableCell>
                    <StyledTableCell align="center">{row.salary}</StyledTableCell>
                    <StyledTableCell align="center">{row.net}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Wage;
// https://eorisis.com/images/web-design/joomla-extensions/google-maps/screenshots/google-maps-content-plugin-joomla-extension-map-demo.png
