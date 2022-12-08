import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import PGListWidget from "./components/PGListWidget/PGListWidget"; 
import CreateNews from "./pages/News/CreateNews";
import NewsDetail from "./pages/News/NewsDetail";
import Author from "./pages/Author/Author";
import AuthorDetail from "./pages/Author/AuthorDetail";
import CreateAuthor from "./pages/Author/CreateAuthor";
import CreateAuthor1 from "./pages/Author/CreateAuthor1";
import Photos from "./pages/News/Photos";
import Videos from "./pages/News/Videos";
import Invoice from "./pages/Invoice/Invoice";
import PendingClientDetails from './pages/PendingClientDetails/PendingClientDetails';
import Option1 from './pages/Invoice/Option-1'
import Month from './pages/Invoice/Month'
import AddInvoice from './pages/AddInvoice/AddInvoice';
import AddInvoice1 from './pages/AddInvoice/AddInvoice1';
import Generateinvoice from './pages/Generateinvoice/Generateinvoice';
import Images1 from "./pages/PendingClientDetails/Images1";
import InvoiceCard from "./pages/Invoice/InvoiceCard";
import ClientDetails from './pages/Addclientdetails/Addclientdetails';
import CreateClientDetails from './pages/Addclientdetails/Createclientdetails';
import CreateClientDetails1 from './pages/Addclientdetails/CreateClientDetails1';
import Print from './pages/Generateinvoice/Print'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

  return (

    <Router>

     <Switch>

      <Route exact path="/Login">          
          <Login />
      </Route>

      <main class="main-wrapper">

      <Topbar />  

        <Sidebar />

          <Switch>
		
          <div class="page-wrapper">
             
            <div class="content">
            <Route path="/Print">
                  <Print />
              </Route> 
              <Route path="/ClientDetails">
                  <ClientDetails />
              </Route> 

              <Route path="/CreateClientDetails">
                  <CreateClientDetails />
              </Route> 
              <Route path="/CreateClientDetails1">
                  <CreateClientDetails1 />
              </Route> 

              <Route path="/Home">
                  <Home />
              </Route> 
                
              <Route path="/PGListWidget">
                  <PGListWidget />
              </Route>    

              <Route path="/CreateNews">
                  <CreateNews />
              </Route> 

              <Route path="/NewsDetail">
                  <NewsDetail />
              </Route> 
              
              <Route path="/Author">
                  <Author />
              </Route> 
              <Route path="/Invoice">
                  <Invoice />
              </Route> 

              <Route path="/pendinglist">
                  <PendingClientDetails />
              </Route>

              <Route path="/Option1">
                  <Option1 />
              </Route> 
              <Route path="/Month">
                  <Month />
              </Route> 

              <Route path="/AuthorDetail">
                  <AuthorDetail />
              </Route>  

              <Route path="/CreateAuthor">
                  <CreateAuthor />
              </Route>   
              <Route path="/CreateAuthor1">
                  <CreateAuthor1 />
              </Route>   

              <Route path="/Photos">
                  <Photos />
              </Route>  

              <Route path="/Videos">
                  <Videos />
              </Route> 

              <Route path="/AddInvoice">
                  <AddInvoice />
              </Route>

              <Route path="/AddInvoice1">
                  <AddInvoice1 />
              </Route>

              <Route path="/Generateinvoice">
                  <Generateinvoice />
              </Route> 

              <Route path="/Images1">
                  <Images1/>
                  </Route>

                  <Route path="/InvoiceCard">
                  <InvoiceCard/>
                  </Route>


            
          </div>
        </div>  

        </Switch>
          
      </main>

      </Switch>
    </Router>
  
  );
}

export default App;
