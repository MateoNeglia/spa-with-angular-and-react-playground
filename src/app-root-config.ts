import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import { HTMLLayoutData } from "single-spa-layout/dist/types/isomorphic/constructRoutes";
import microfrontendLayout from "./microfrontend-layout.html";

const data: HTMLLayoutData =  {
  props: {
    customProp: {
      users: [],
      products: [],
      checkoutProducts: [], 
      product: {}      
    }
  },
  loaders: {}
}

//the other way to modify the layout:
// const routes = constructRoutes(`
// <single-spa-router>  
//   <main>    
//     <route default>
//       <div class="">
//         <div style='padding:2em;'>
//         <application name="angular-app" props="customProp"></application> 
//         </div>    
//       <application name="@react-app/react-app" props="customProp"></application>       
//       </div>
//     </route>  
//     <route path="chart-list">
//       <application name="@react-receiver/product-receiver" props="customProp"></application>           
//     </route>
//   </main>

// </single-spa-router>

// `, data);

const routes = constructRoutes(microfrontendLayout, data);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();


