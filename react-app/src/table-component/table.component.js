import React, { useEffect, useState } from "react";
import '../root.component.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';



export default function ProductTable(props) {
     
    const darkTheme = createTheme({ palette: { mode: 'dark' } });
    const lightTheme = createTheme({ palette: { mode: 'light' } });   
    
    let products = props?.props.products;
    
    console.log('products are,', products);
    
    const deleteProduct = (product) =>{
      console.log('products that came to here', products);
      console.log('product that came to here', product);
      const productIndex = products.indexOf(product);
      const dataCopy = [...products];
      dataCopy.splice(productIndex, 1);
      console.log('products that came to here', dataCopy);
      return products = dataCopy;
      
    }

    return (
        
        <ThemeProvider theme = {props.props.darkModeOn ? darkTheme : lightTheme}>
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className = {props.props.darkModeOn ? "header-default-mimic-dark" : "header-default-mimic"}>Product ID</TableCell>
                  <TableCell align="right" className = {props.props.darkModeOn ? "header-default-mimic-dark" : "header-default-mimic"}>Product Name</TableCell>
                  <TableCell align="right" className = {props.props.darkModeOn ? "header-default-mimic-dark" : "header-default-mimic"}>Price</TableCell>
                  <TableCell align="right" className = {props.props.darkModeOn ? "header-default-mimic-dark" : "header-default-mimic"}>Description</TableCell> 
                  <TableCell align="right" className = {props.props.darkModeOn ? "header-default-mimic-dark" : "header-default-mimic"}>Delete / Modify</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, productIndex) => ( 
                  <TableRow                        
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" key={product.id} className="angular-mat-mimic-row first-table-element">{product.id}</TableCell>
                    <TableCell align="right" key={product.id} className="angular-mat-mimic-row">{product.name}</TableCell>
                    <TableCell align="right" key={product.id} className="angular-mat-mimic-row">{product.price}</TableCell>
                    <TableCell align="right" key={product.id} className="angular-mat-mimic-row">{product.description}</TableCell>
                    <TableCell align="right" key={product.id} className="angular-mat-mimic-row last-table-element">
                      <button className="btn red-color-danger-bg white-color-dark-mode angular-mat-button-mimic me-2" onClick={() => {deleteProduct(product)}}>Delete</button>  
                      <button className="btn lighter-blue-primary-bg white-color-dark-mode angular-mat-button-mimic">Edit</button> 
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
    </ThemeProvider>        
    );
}