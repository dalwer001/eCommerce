import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../AdminPanel/Sidebar/Sidebar';
// import Sidebar from "../../AdminPanel/Sidebar/Sidebar";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AdminManageProduct() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
          .then((res) => res.json())
          .then((data) => setProduct(data));
      }, []);
  const classes = useStyles();

  return (
   <div className="row m-0">
       <div className="col-md-2 col-lg-2 p-0">
           <Sidebar></Sidebar>
       </div>
       <div className="col-md-10">
       <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="left">Picture</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="left">Price</StyledTableCell>
            
            <StyledTableCell align="left">Size</StyledTableCell>
            <StyledTableCell align="left">Category</StyledTableCell>
            <StyledTableCell align="left">Type</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((p) => (
            <StyledTableRow key={p.name}>
                  <StyledTableCell align="left">{p.title}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
              {p.image ? (
                      <img
                        style={{ width: "8rem", height: "8rem" }}
                        src={`data:image/png;base64,${p.image.img}`}
                        alt=""
                      />
                    ) : (
                      <img
                        style={{ width: "8rem", height: "8rem" }}
                        className="img-fluid mb-3"
                        src={`http://localhost:5000/${p.img}`}
                        alt=""
                      />
                    )}
              </StyledTableCell>
              <StyledTableCell align="left">{p.description}</StyledTableCell>
              <StyledTableCell align="left">{p.price}</StyledTableCell>
             
              <StyledTableCell align="left">{p.size}</StyledTableCell>
              <StyledTableCell align="left">{p.category}</StyledTableCell>
              <StyledTableCell align="left">{p.type}</StyledTableCell>
              <StyledTableCell align="left">{p.quantity}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

       </div>

   </div>
  );
}