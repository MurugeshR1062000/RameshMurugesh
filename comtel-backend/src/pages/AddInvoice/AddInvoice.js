//  import React from 'react';
 import add from "./add.css";
 import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import { API } from '../../../src/API/index';
import React, { useEffect, useState } from 'react';
import axios from 'axios'



 const basicaddinvoiceclear = {
    Clientname:"",
    invoicedate:"",
    invoiceamount:"",
    paymentstatus:""
 }


const AddInvoice = ()=>{

   const history = useHistory();

   


const[addinvoice123,setaddinvoice123]=useState({
    Clientname:"",
    invoicedate:"",
    invoiceamount:"",
    paymentstatus:""
   })

   const handlecreateaddinvoice = path =>{
      history.push (path);
 }

   

   const handleaddinvoice=async(e,path)=>{
    // e.preventDefault();
    console.log("handleaddclient",addinvoice123)
    history.push(path)
    try{
    
    const { data } = await API.post('/Addinvoice',addinvoice123);
    
        console.log("data123",data);
        setaddinvoice123(data)
        if(data.body.status==true){
         Swal.fire({ 
            icon: 'success',
            iconColor: '#28a745',
            title: data?.body.message,
            showConfirmButton: false,
            timer: 2000
          });
          console.log(data);
          setaddinvoice123(basicaddinvoiceclear);
          
         } else {
            setaddinvoice123(basicaddinvoiceclear);
            Swal.fire({
              icon: 'warning',
              iconColor: '#dc3545',
              title: data?.body.message,
              showConfirmButton: false,
              timer: 2000
              });
         }
      }
        catch(err){
            setaddinvoice123(basicaddinvoiceclear);
          Swal.fire({
            icon: 'warning',
            iconColor: '#dc3545',
            title: err.message,
            showConfirmButton: false,
            timer: 2000
            });
    
        }
      }


const mydatepicker = ()=>{
    document.getElementById("invoice date").defaultValue = "2022-03-02";
}
  

  return(
        <>
        <div>

        <div class="row">
      <div class="col-lg-8 new_post">   
   <div class="row">
      <div class="col-lg-12">
      <span  class="close" style={{fontSize:"40px"}} onClick={()=>handlecreateaddinvoice('./InvoiceCard')}>&times;</span>
         <h4 class="page-title page-title-center">add invoice</h4>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-12">
         <form onSubmit={(e)=>e.preventDefault()}>
            <div class="row">
               <div class="col-sm-6">
                  <div class="form-group">
                    
                     <label>Client name<span class="text-danger">*</span> </label>
                     <div style={{marginTop:"7px"}}>
                     {/* <input class="form-control" type="text" /> */}
                          <select class="form-control" name="Client name" id="Client name"
                          value={addinvoice123.Clientname}
                          onChange={(e)=>setaddinvoice123({...addinvoice123,Clientname:e.target.value})}
                          >
                          <option value=""></option>
                          <option value="camtel">camtel</option>
                          <option value="pasumai india">pasumai india</option>
                          <option value="krishione">krishione</option>
                          <option value="sumisugi">sumisugi</option>
                          
                 </select>
                 </div>
                  </div>
               </div>
               
               <div class="col-sm-6">
                  <div class="form-group">
                     <label for="start">invoice date<span class="text-danger">*</span></label>
                     {/* <input class="form-control" type="text"/> */}
                     <div >
                     <input  onClick={()=>mydatepicker()}  class="form-control" type="date" id="invoice date" name="invoice date" defaultValue= "2022-03-02"
                     value={addinvoice123.invoicedate}
                     onChange={(e)=>setaddinvoice123({...addinvoice123,invoicedate:e.target.value})}
                     ></input></div>
                     {/* <input class="form-control" type="date" id="start" name="trip-start"
       value="2018-02-2"
       min="2018-01-01" max="2018-12-31"></input> */}
                  </div>
               </div>
    
               <div class="col-sm-6">
                  <div class="form-group">
                      
                     <label>invoice amount </label>
                     <div style={{marginBottom:"10px"}}>
                     <input class="form-control" type="text"
                     value={addinvoice123.invoiceamount}
                     onChange={(e)=>setaddinvoice123({...addinvoice123,invoiceamount:e.target.value})}
                     />
                     </div>
                  </div>
               </div>
               
               <div class="col-sm-6">
                  <div class="form-group">
                     <label>payment status</label>
                     {/* <select  class="form-control datetimepicker" value="select option" name="payment status" id="payment status">
                          <option value="Pending">Pending</option>
                          <option value="completed">completed</option>
                          </select> */}
                          <div style={{marginBottom:"8px",marginTop:"6px"}}>
                          <select  class="form-control" name="payment status" id="payment status"
                          value={addinvoice123.paymentstatus}
                          onChange={(e)=>setaddinvoice123({...addinvoice123,paymentstatus:e.target.value})}
                          >
                          <option value=""></option>
                          <option value="Pending">Pending</option>
                          <option value="completed">completed</option>
                          </select>
                          </div>
                     <div class="cal-icon">
                        {/* <input type="text" class="form-control datetimepicker"/> */}
                     </div>
                  </div>
               </div>
               <div class="m-t-20 text-center">
               <button class="btn btn-primary" onClick={()=>handleaddinvoice('./Invoice')} style={{borderRadius:"10%", marginLeft:"500%"}}>Submit</button>
            </div>
               </div>
               </form>
               </div>
        </div>
        </div>
        </div>
        
        </div>
        {/* </div> */}
        </>
    )
}


export default AddInvoice;