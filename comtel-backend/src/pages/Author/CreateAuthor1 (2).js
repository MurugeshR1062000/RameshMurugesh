// import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import { API } from '../../../src/API/index';
import React, { useState,useEffect } from 'react';



const updateaddclientclear = {
   _Id:"",
   Companyname:"",
   Companyaddress:"",
   Contactperson:"",
   Contactpersonname:"",
   Active:"",
   Amount:"",
   EmailID:""
}

function CreateAuthor1() {

   

   const [updateclient,setupdateclient]=useState({
  
   })


   useEffect(() => {
      
     
      // console.log("edithlo",JSON.parse(localStorage.getItem('Editclient')))
      let value =JSON.parse(localStorage.getItem('Editclient'))
       console.log("seteditnewscreate",value)
       setupdateclient(value)
   }, []);


   const history = useHistory();

   const handlecreateauthor = path =>{
      history.push (path);
 }


 const handlecreate =async (e,updateclient)=>{
   const newdata ={...updateclient}
   newdata[e.target.id]= e.target.value
   setupdateclient(newdata)
   // console.log("newdata",newdata)
   
}

const changeactive123 = async (e,updateclient)=>{
   const newdata ={...updateclient}
   console.log("newdata",newdata)
   newdata["Active"]= e
   setupdateclient(newdata)
   console.log("newdata123",newdata)
  
   console.log("newdata",updateclient)
}

const handleupdateclient = async(path)=>{
   console.log("updateclient",updateclient)
   history.push (path);
   try{
      
      const { data } = await API.post('/editClient',updateclient);
      
          console.log("data123",data);
          setupdateclient(data)
          if(data.body.status==true){
            Swal.fire({
                 icon: 'success',
                 iconColor: '#28a745',
                 title: data?.body.message,
                 showConfirmButton: false,
                 timer: 2000
               });
            console.log(data);
            setupdateclient(updateaddclientclear);
            

           } else {
            setupdateclient(updateaddclientclear);
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
            setupdateclient(updateaddclientclear);
            Swal.fire({
              icon: 'warning',
              iconColor: '#dc3545',
              title: err.message,
              showConfirmButton: false,
              timer: 2000
              });
      
          }
        }

      
  return (



<div> 
   <div class="row">
      <div class="col-lg-8 new_post">   
   <div class="row">
      <div class="col-lg-12">
      <span  class="close" style={{fontSize:"40px"}} onClick={()=>handlecreateauthor('./Author')}>&times;</span>
         <h4 class="page-title page-title-center">Add Client</h4>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-12">
         <form>
            <div class="row">
               <div class="col-sm-6">
                  <div class="form-group">
                     <label>Company name <span class="text-danger">*</span></label>
                     <input class="form-control" type="text" onChange={(e)=>handlecreate(e)} id="Companyname"
                     value={updateclient.Companyname}
                     // onChange={(e)=>setaddclient123({...addclient123,Companyname:e.target.value})}
                     />
                  </div>
               </div>
               <div class="col-sm-6">
                  <div class="form-group">
                     <label>Company address <span class="text-danger">*</span></label>
                     <input class="form-control" type="text" onChange={(e)=>handlecreate(e)} id="Companyaddress"
                     value={updateclient.Companyaddress}
                     // onChange={(e)=>setaddclient123({...addclient123,Companyname:e.target.value})}
                     />
                  </div>
               </div>
               <div class="col-sm-6">
                  <div class="form-group">
                     <label>Contact person </label>
                     <input class="form-control" type="text" onChange={(e)=>handlecreate(e)} id="Contactperson"
                      value={updateclient.Contactperson}
                     // onChange={(e)=>setaddclient123({...addclient123,Companyname:e.target.value})}
                     />
                  </div>
               </div>
               <div class="col-sm-6">
                  <div class="form-group">
                     <label>Contect person name</label>
                     <div class="cal-icon">
                        <input type="text" class="form-control datetimepicker" value={updateclient.Contactpersonname} onChange={(e)=>handlecreate(e)} id="Contactpersonname"/>
                     </div>
                  </div>
               </div>
                 <div class="col-sm-6">
                  <div  class="form-group">
                     
                     <label     id="Active" >Status <br/>
                        <div  style={{flexDirection:"row" ,display:"flex"}}><div>
                           
                  <input onChange={(e)=>changeactive123("true",updateclient)} style={{padding:"20px",marginRight:"5px"}}type="radio" checked={updateclient.Active =="true"?true:false} name="status" id="Active" value={updateclient.Active}
                  // onChange={(e)=>changeactive123(e.target.checked,updateclient)}
                  />Active
                  </div>
                  <div>
                     {console.log("value={updateclient.Active}",updateclient.Active)}
                     <input onChange={(e)=>changeactive123("false",updateclient)} style={{padding:"20px", marginLeft:"20px",marginRight:"5px"}} checked={updateclient.Active =="false"?true:false}  type="radio" name="status" id="Active" value={updateclient.Active}
                     // onChange={(e)=>changeactive123(e.target.checked,updateclient)}
                     />InActive</div>
                     </div>
                     </label>
                  </div>
               </div>
               <div class="col-sm-6">
                  <div class="form-group">
                     <label>Amount </label>
                     <div class="cal-icon">
                        <input type="text" class="form-control datetimepicker"  onChange={(e)=>handlecreate(e)} id="Amount"
                        value={updateclient.Amount}
                     // onChange={(e)=>setaddclient123({...addclient123,Companyname:e.target.value})}
                     />
                     </div>
                  </div>
               </div>
               <div class="col-sm-6">
                  <div class="form-group">
                     <label>Email ID </label>
                     <input class="form-control" type="text" value={updateclient.EmailID} onChange={(e)=>handlecreate(e)} id="EmailID"
                     // onChange={(e)=>setaddclient123({...addclient123,Companyname:e.target.value})}
                     />
                  </div>
               </div>
               {/* <div class="col-sm-6">
                  <div class="form-group gender-select">
                     <label class="gen-label">Gender:</label>
                     <div class="form-check-inline">
                        <label class="form-check-label">
                        <input type="radio" name="gender" class="form-check-input"/>Male
                        </label>
                     </div>
                     <div class="form-check-inline">
                        <label class="form-check-label">
                        <input type="radio" name="gender" class="form-check-input"/>Female
                        </label>
                     </div>
                  </div>
               </div> */}
               {/* <div class="col-sm-6">
                  <div class="form-group">
                     <label>Avatar</label>
                     <div class="profile-upload">
                        <div class="upload-img">
                           <img alt="" src="assets/images/user.jpg"/>
                        </div>
                        <div class="upload-input">
                           <input type="file" class="form-control"/>
                        </div>
                     </div>
                  </div>
               </div> */}
               {/* <div class="col-sm-12">
                  <div class="row">
                     <div class="col-sm-12">
                        <div class="form-group">
                           <label>Address</label>
                           <input type="text" class="form-control "/>
                        </div>
                     </div>
                     <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="form-group">
                           <label>State</label>
                           <select class="select select2-selection select2-selection--single">
                           <option>Select</option>
                              <option>Tamil Nadu</option>
                              <option>Sport</option>
                              <option>Business</option>
                           </select>
                        </div>                     
                  
                     </div>
                     <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="form-group">
                           <label>District</label>
                           <select class="select select2-selection select2-selection--single">
                           <option>Select</option>
                              <option>Tamil Nadu</option>
                              <option>Sport</option>
                              <option>Business</option>
                           </select>
                        </div>                     
                  
                     </div>
                     <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="form-group">
                           <label>City</label>
                           <input type="text" class="form-control"/>
                        </div>
                     </div>
                  
                     <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="form-group">
                           <label>Postal Code</label>
                           <input type="text" class="form-control"/>
                        </div>
                     </div>
                  </div>
               </div> */}
             
            
            </div>
            {/* <div class="form-group">
               <label>Short Biography</label>
               <textarea class="form-control" rows="3" cols="30"></textarea>
            </div> */}
            {/* <div class="form-group">
               <label class="display-block">Status</label>
               <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="status" id="doctor_active" value="option1" checked=""/>
                  <label class="form-check-label" for="doctor_active">
                  Active
                  </label>
               </div>
               <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="status" id="doctor_inactive" value="option2"/>
                  <label class="form-check-label" for="doctor_inactive">
                  Inactive
                  </label>
               </div>
            </div> */}
            <div class="m-t-20 text-center">
               <button class="btn btn-primary submit-btn" onClick={()=>handleupdateclient('/Author')}>Submit</button>
            </div>
         </form>
      </div>
   </div>

      </div>
   </div>
</div>

  );
}
export default CreateAuthor1;


