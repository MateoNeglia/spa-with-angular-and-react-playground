import './product-receiver-styles.css';

const cleanProductList = () => {
  sessionStorage.clear();
  location.reload();
}

export default function Root(props) {
  let producList = JSON.parse(sessionStorage.getItem('purchasedProducts'));
  

  if(!producList) {
    return (
      <section className = 'react-section'>
        <h2>Welcome to your checkout, this are the products on your buy list:</h2>  
        <p>Sorry, you didn't add any product to your chart yet.</p>
        <a href="http://localhost:9000/">Go to the main page to add some!</a>
      </section>  
    )   
  } else {
    return (
      <section className = 'react-section'>
        <h2>This are the products on your buy list:</h2>       
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>      
              </tr>
            </thead>
            <tbody>
              {producList.map(product => (
                <tr>
                  <td key={product.id}>#{product.id}</td>
                  <td key={product.id}>{product.name}</td>
                  <td key={product.id}>${product.price}</td>  
                </tr>      
              ))}    
            </tbody>
        </table>
      <button
          className="btn products-btn clean-storage-btn m-2"
          onClick={() => {
            cleanProductList();}}          
        >
          Delete Items from chart
        </button>
        <button
          className="btn btn-success products-btn p-3">
          Proceed to Checkout
        </button>   
    </section>
  
    )
  }
  
}
