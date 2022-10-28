import React, { useEffect, useState } from "react";
import './root.component.css';
//import MaterialTable from 'material-table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import ProductTable from "./table-component/table.component";

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });  

// class Root extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       error: null,
//       isLoaded: false,
//       dataFromAngular: false,
//       darkModeOn:false,
//       tableUpdate: false,
//       products: [],
//       users: []
//     };  

//     this.getProducts = this.getProducts.bind(this);
//     //this.deleteProduct = this.deleteProduct.bind(this);
//     //this.deletingProduct = this.deletingProduct.bind(this);
//   }

//   componentDidMount() {   
    
//     this.getProducts();  
    

//     window.addEventListener('dispatchToReact', () => {
//       this.setState({
//         users: this.props.customProp.users,
//         //dataFromAngular: true,

//       })
//     });

//     window.addEventListener('activateDarkMode', () => {
//       this.setState({        
//         darkModeOn: true,
//       })     
//       this.props.tableProps.darkModeOn = true;
//     });

//     window.addEventListener('deactivateDarkMode', () => {
//       this.setState({        
//         darkModeOn: false,
//       })      
//       this.props.tableProps.darkModeOn = false;
//     });

//     window.addEventListener('isDeleting', () => {
//       this.deletingProduct();      
//     });

//     console.log('props are', this.props);
//   }

  

//   sendProducts(productsState) {          
//     console.log('getting this for props in react: ', productsState);    
//     this.props.customProp.products = productsState;
//     window.dispatchEvent(new Event('dataSent'));
//     console.log('here comes from react props: ', this.props.customProp);    
//   }

//   getProducts = () => {
//     console.log('is calling the db');
//     fetch('http://localhost:2000/products')
//     .then(response => response.json())
//     .then(
//       (result) => {
//         console.log('result products is: ', result);
//         this.setState({
//           isLoaded: true,                    
//           products: result,
//         });
        
//       },
//       (error) => {
//         this.setState({
//           isLoaded: true,
//           error
//         });        
//       }
//     )
//   }

//   deleteProduct = (product) => {
//     console.log('this prod is comin', product);
  
//     const productIndex = this.state.products.indexOf(product);
//     const dataCopy = [...this.state.products];
//     dataCopy.splice(productIndex, 1);
//     this.setState({
//       products: dataCopy
//     })
//   }


//   render() {
//     const { error, isLoaded, dataFromAngular, products, users, darkModeOn, tableUpdate} = this.state;
//     this.props.tableProps = {
//       products: products,
//       darkModeOn: darkModeOn
//     }
    
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (isLoaded) {
//       return (        
//           <section className = {darkModeOn ? 'black-primary-bg white-color-dark-mode' : 'react-section'}>
//             <h2 className = {darkModeOn ? 'white-color-dark-mode' : 'light-blue-primary-color'}>Product Management:</h2>
//             <button className="btn users-btn light-blue-primary-bg mb-2 data-transfer-button"
//                     onClick={() => {this.sendProducts(products)}}>
//                     Send All Products to Angular
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="angular-logo" width="25px"></img>
//             </button>              
//             <ThemeProvider theme = {darkModeOn ? darkTheme : lightTheme}>
//         <TableContainer component={Paper} >
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell className = {darkModeOn ? "header-default-mimic-dark" : "header-default-mimic"}>Product ID</TableCell>
//                   <TableCell align="right" className = {darkModeOn ? "header-default-mimic-dark" : "header-default-mimic"}>Product Name</TableCell>
//                   <TableCell align="right" className = {darkModeOn ? "header-default-mimic-dark" : "header-default-mimic"}>Price</TableCell>
//                   <TableCell align="right" className = {darkModeOn ? "header-default-mimic-dark" : "header-default-mimic"}>Description</TableCell> 
//                   <TableCell align="right" className = {darkModeOn ? "header-default-mimic-dark" : "header-default-mimic"}>Delete / Modify</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {products.map((product, productIndex) => ( 
//                   <TableRow                        
//                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                   >
//                     <TableCell component="th" scope="row" key={product.id} className="angular-mat-mimic-row first-table-element">{product.id}</TableCell>
//                     <TableCell align="right" key={product.id} className="angular-mat-mimic-row">{product.name}</TableCell>
//                     <TableCell align="right" key={product.id} className="angular-mat-mimic-row">{product.price}</TableCell>
//                     <TableCell align="right" key={product.id} className="angular-mat-mimic-row">{product.description}</TableCell>
//                     <TableCell align="right" key={product.id} className="angular-mat-mimic-row last-table-element">
//                       <button className="btn red-color-danger-bg white-color-dark-mode angular-mat-button-mimic me-2" onClick={() => {this.deleteProduct(product)}}>Delete</button>  
//                       <button className="btn lighter-blue-primary-bg white-color-dark-mode angular-mat-button-mimic">Edit</button> 
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
          
//     </ThemeProvider>        

//               {/* <ProductTable props={this.props.tableProps}/>                                           */}
//             <p>To get the Users Data you first need to sent that from angular</p>
//           </section>)
      
//     } else {
//       return (
//         <section className = {darkModeOn ? 'black-primary-bg white-color-dark-mode' : 'react-section'}>
//           <h2 className = {darkModeOn ? 'white-color-dark-mode' : 'light-blue-primary-color'}>Product Management:</h2>
//           <button className="btn users-btn light-blue-primary-bg mb-2 data-transfer-button"
//                     onClick={() => {this.sendProducts(products)}}>
//                     Send All Products to Angular
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="angular-logo" width="25px"></img>
//           </button> 
          
//           <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell className="header-default-mimic">Product ID</TableCell>
//                       <TableCell align="right" className="header-default-mimic">Product Name</TableCell>
//                       <TableCell align="right" className="header-default-mimic">Price</TableCell>
//                       <TableCell align="right" className="header-default-mimic">Description</TableCell> 
//                       <TableCell align="right" className="header-default-mimic">Delete / Modify</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {products.map((product) => (
//                       <TableRow                        
//                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                       >
//                         <TableCell component="th" scope="row" key={product.id} className="angular-mat-mimic-row first-table-element">{product.id}</TableCell>
//                         <TableCell align="right" key={product.id} className="angular-mat-mimic-row">{product.name}</TableCell>
//                         <TableCell align="right" key={product.id} className="angular-mat-mimic-row">{product.price}</TableCell>
//                         <TableCell align="right" key={product.id} className="angular-mat-mimic-row">{product.description}</TableCell>
//                         <TableCell align="right" key={product.id} className="angular-mat-mimic-row last-table-element">
//                           <button className="btn red-color-danger-bg white-color-dark-mode angular-mat-button-mimic me-2">Delete</button>  
//                           <button className="btn lighter-blue-primary-bg white-color-dark-mode angular-mat-button-mimic">Edit</button> 
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>

//           <h3 className="m-2">The users that were sent from Angular:</h3>          
//           <table className="table table-striped table-light m-2">
//             <thead>
//               <tr>
//               <th scope="col">User ID</th>
//                 <th scope="col">User Name</th>
//                 <th scope="col">User Lastname</th>                  
//               </tr>
//             </thead>
//             <tbody>
//               {users.map(user => (
//                 <tr>
//                   <td key={user.id}>#{user.id}</td>
//                   <td key={user.id}>{user.name}</td>
//                   <td key={user.id}>{user.lastName}</td>  
//                 </tr>      
//               ))}    
//             </tbody>
//         </table>
//       </section>

//       )
//     }
    
//   }



// }

// export default Root;

export default function Root(props) {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [dataFromAngular, setDataFromAngular] = useState(false);
  const [darkModeOn, setDarkModeOn] = useState(false);

  const fetchData = () => {
    console.log('is calling the db');
    fetch('http://localhost:2000/products')
    .then(response => response.json())
    .then(
      (result) => {
        console.log('result products is: ', result);
        setProducts(result);        
        
      },
      (error) => {
        setError(error);
        
      }
    )

  }

  useEffect(() => {
    fetchData();
    window.addEventListener('dispatchToReact', () => {
      setUsers(this.props.customProp.users);
      setDataFromAngular(true);
    });

    window.addEventListener('activateDarkMode', () => {
      setDarkModeOn(true);            
    });

    window.addEventListener('deactivateDarkMode', () => {
      setDarkModeOn(false);            
    });

    window.addEventListener('isDeleting', () => {
      
    });
  }, []);

  const handleDelete = (product) => {
    console.log('products are', products);
    console.log('product being deleted', product);
    const productIndex = products.indexOf(product);
    const dataCopy = [...products];
    dataCopy.splice(productIndex, 1);
    setProducts(dataCopy);
  }

  if (error) {
      return <div>Error: {error.message}</div>;
    } else if (products.length) {
      return (        
          <section className = {darkModeOn ? 'black-primary-bg white-color-dark-mode' : 'react-section'}>
            <h2 className = {darkModeOn ? 'white-color-dark-mode' : 'light-blue-primary-color'}>Product Management:</h2>
            <button className="btn users-btn light-blue-primary-bg mb-2 data-transfer-button"
                    onClick={() => {this.sendProducts(products)}}>
                    Send All Products to Angular
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="angular-logo" width="25px"></img>
            </button>              
            <ThemeProvider theme = {darkModeOn ? darkTheme : lightTheme}>
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className = {darkModeOn ? "header-default-mimic-dark" : "header-default-mimic"}>Product ID</TableCell>
                  <TableCell align="right" className = {darkModeOn ? "header-default-mimic-dark" : "header-default-mimic"}>Product Name</TableCell>
                  <TableCell align="right" className = {darkModeOn ? "header-default-mimic-dark" : "header-default-mimic"}>Price</TableCell>
                  <TableCell align="right" className = {darkModeOn ? "header-default-mimic-dark" : "header-default-mimic"}>Description</TableCell> 
                  <TableCell align="right" className = {darkModeOn ? "header-default-mimic-dark" : "header-default-mimic"}>Delete / Modify</TableCell>
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
                      <button className="btn red-color-danger-bg white-color-dark-mode angular-mat-button-mimic me-2" onClick={() => {handleDelete(product)}}>Delete</button>  
                      <button className="btn lighter-blue-primary-bg white-color-dark-mode angular-mat-button-mimic">Edit</button> 
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
    </ThemeProvider>        

              {/* <ProductTable props={this.props.tableProps}/>                                           */}
            <p>To get the Users Data you first need to sent that from angular</p>
          </section>)
      
    } else {
      return (
        <section className = {darkModeOn ? 'black-primary-bg white-color-dark-mode' : 'react-section'}>
          <h2 className = {darkModeOn ? 'white-color-dark-mode' : 'light-blue-primary-color'}>Product Management:</h2>
          <button className="btn users-btn light-blue-primary-bg mb-2 data-transfer-button"
                    onClick={() => {this.sendProducts(products)}}>
                    Send All Products to Angular
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="angular-logo" width="25px"></img>
          </button> 
          
          <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="header-default-mimic">Product ID</TableCell>
                      <TableCell align="right" className="header-default-mimic">Product Name</TableCell>
                      <TableCell align="right" className="header-default-mimic">Price</TableCell>
                      <TableCell align="right" className="header-default-mimic">Description</TableCell> 
                      <TableCell align="right" className="header-default-mimic">Delete / Modify</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow                        
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row" key={product.id} className="angular-mat-mimic-row first-table-element">{product.id}</TableCell>
                        <TableCell align="right" key={product.id} className="angular-mat-mimic-row">{product.name}</TableCell>
                        <TableCell align="right" key={product.id} className="angular-mat-mimic-row">{product.price}</TableCell>
                        <TableCell align="right" key={product.id} className="angular-mat-mimic-row">{product.description}</TableCell>
                        <TableCell align="right" key={product.id} className="angular-mat-mimic-row last-table-element">
                          <button className="btn red-color-danger-bg white-color-dark-mode angular-mat-button-mimic me-2">Delete</button>  
                          <button className="btn lighter-blue-primary-bg white-color-dark-mode angular-mat-button-mimic">Edit</button> 
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

          <h3 className="m-2">The users that were sent from Angular:</h3>          
          <table className="table table-striped table-light m-2">
            <thead>
              <tr>
              <th scope="col">User ID</th>
                <th scope="col">User Name</th>
                <th scope="col">User Lastname</th>                  
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr>
                  <td key={user.id}>#{user.id}</td>
                  <td key={user.id}>{user.name}</td>
                  <td key={user.id}>{user.lastName}</td>  
                </tr>      
              ))}    
            </tbody>
        </table>
      </section>
      )}
}
