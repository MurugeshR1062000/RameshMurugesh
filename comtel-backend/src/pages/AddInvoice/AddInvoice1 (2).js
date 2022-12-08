import add from "./add.css";
 import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import { API } from '../../../src/API/index';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const updateaddinvoiceclear = {
    _id:"",
    Clientname:"",
    invoicedate:"",
    invoiceamount:"",
    paymentstatus:""
 }


const AddInvoice1 = ()=>{

   const history = useHistory();

//    const handlecreateinvoice = path =>{
//       history.push (path);
//  }

    const[updateinvoice123,setupdateinvoice123]=useState({
        
       })

       useEffect(() => {
      
     
        // console.log("edithlo",JSON.parse(localStorage.getItem('Editclient')))
        let value =JSON.parse(localStorage.getItem('Editinvoice'))
         console.log("seteditnewscreate",value)
         setupdateinvoice123(value)
     }, []);
  


 const handlecreate =(e)=>{
      const newdata ={...updateinvoice123}
      newdata[e.target.id]= e.target.value
      setupdateinvoice123(newdata)
      console.log("newdata",newdata)
   }

   const handleupdateinvoice = async(path)=>{
      
    try{
       
       const { data } = await API.post('/editinvoice',updateinvoice123);
       
           console.log("data123",data);
           setupdateinvoice123(data)
           if(data.body.status==true){
             Swal.fire({
                  icon: 'success',
                  iconColor: '#28a745',
                  title: data?.body.message,
                  showConfirmButton: false,
                  timer: 2000
                });
             console.log(data);
             setupdateinvoice123(updateaddinvoiceclear);
             history.push (path);
            //  handlecreateinvoice()
 
            } else {
                setupdateinvoice123(updateaddinvoiceclear);
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
            setupdateinvoice123(updateaddinvoiceclear);
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
{/* {console.log("updateinvoice123",updateinvoice123)} */}
        <div class="row">
      <div class="col-lg-8 new_post">   
   <div class="row">
      <div class="col-lg-12">
      {/* <span  class="close" style={{fontSize:"40px"}} onClick={()=>handlecreateauthor('./Author')}>&times;</span> */}
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
                     {/* <input class="form-control" type="text" /> */}
                          <select class="form-control" name="Client name" id="Clientname"
                          value={updateinvoice123.Clientname}
                          onChange={(e)=>handlecreate(e)}
                          >
                          <option value=""></option>
                          <option value="camtel">camtel</option>
                          <option value="pasumai india">pasumai india</option>
                          <option value="krishione">krishione</option>
                          <option value="sumisugi">sumisugi</option>
                          
                 </select>
                  </div>
               </div>
               
               <div class="col-sm-6">
                  <div class="form-group">
                     <label for="start">invoice date<span class="text-danger">*</span></label>
                     {/* <input class="form-control" type="text"/> */}
                     <input  onClick={()=>mydatepicker()}  class="form-control" type="date" id="invoice date" name="invoicedate" defaultValue= "2022-03-02"
                     value={updateinvoice123.invoicedate}
                     onChange={(e)=>handlecreate(e)}
                     ></input>
                     {/* <input class="form-control" type="date" id="start" name="trip-start"
       value="2018-02-2"
       min="2018-01-01" max="2018-12-31"></input> */}
                  </div>
               </div>
    
               <div class="col-sm-6">
                  <div class="form-group">
                      
                     <label>invoice amount </label>
                     <input class="form-control" type="text" id="invoiceamount"
                     value={updateinvoice123.invoiceamount}
                     onChange={(e)=>handlecreate(e)}
                     />
                  </div>
               </div>
               
               <div class="col-sm-6">
                  <div class="form-group">
                     <label>payment status</label>
                     {/* <select  class="form-control datetimepicker" value="select option" name="payment status" id="payment status">
                          <option value="Pending">Pending</option>
                          <option value="completed">completed</option>
                          </select> */}
                          <select  class="form-control" name="payment status" id="paymentstatus"
                          value={updateinvoice123.paymentstatus}
                          onChange={(e)=>handlecreate(e)}
                          >
                          <option value=""></option>
                          <option value="Pending">Pending</option>
                          <option value="completed">completed</option>
                          </select>
                     <div class="cal-icon">
                        {/* <input type="text" class="form-control datetimepicker"/> */}
                     </div>
                  </div>
               </div>
               <div class="m-t-20 text-center">
               <button class="btn btn-primary"  onClick={()=>handleupdateinvoice('/Invoice')} style={{borderRadius:"10%", marginLeft:"580%"}}>Submit</button>
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


export default AddInvoice1;