import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import { API } from '../../../src/API/index';
import React, { useState } from 'react';

const basicaddclientclear = {
   Companyname:"",
   Companyaddress:"",
   Contactperson:"",
   Contactpersonname:"",
   Active:"",
   Amount:"",
   EmailID:""
}

function CreateAuthor() {

   const history = useHistory();

   

   const[addclient123,setaddclient123]=useState({
      Companyname:" ",
   Companyaddress:" ",
   Contactperson:" ",
   Contactpersonname:" ",
   Active:" ",
   Amount:" ",
   EmailID:" "
   })


   const handleaddclient=async(path)=>{
      console.log("handleaddclient",addclient123)
        history.push (path);
      
      try{
      
       const { data } = await API.post('/Addclient',addclient123);
      
          console.log("data123",data);
          setaddclient123(data)
          if(data.body.status==true){
            Swal.fire({
                 icon: 'success',
                 iconColor: '#28a745',
                 title: data?.body.message,
                 showConfirmButton: false,
                 timer: 2000
               });
            console.log(data);
            setaddclient123(basicaddclientclear);
            // history.push('/Author');
            
           } else {
            setaddclient123(basicaddclientclear);
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
            setaddclient123(basicaddclientclear);
            Swal.fire({
              icon: 'warning',
              iconColor: '#dc3545',
              title: err.message,
              showConfirmButton: false,
              timer: 2000
              });
      
          }
        }

   

   const handlecreateauthor = path =>{
      history.push (path);
 }


  return (


 
<div> 
   <div class="row">
      {/* {console.log("handleaddclient",handleaddclient())} */}
      { console.log("data",addclient123)}
      {/* { console.log("handleaddclient",addclient123)} */}
      <div class="col-lg-8 new_post">   
   <div class="row">
      <div class="col-lg-12">
      <span  class="close" style={{fontSize:"40px"}} onClick={()=>handlecreateauthor('./Author')}>&times;</span>
         <h4 class="page-title page-title-center">Add Client</h4>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-12">
         <form onSubmit={(e)=>e.preventDefault()}>
            <div class="row">
               <div class="col-sm-6">
                  <div class="form-group">
                     <label>Company name <span class="text-danger">*</span></label>
                     
                     <input class="form-control" type="text" 
                     value={addclient123.Companyname}
                     onChange={(e)=>setaddclient123({...addclient123,Companyname:e.target.value})}
                     />
                  </div>
               </div>
               {/* <div class="col-sm-6">
                  <div class="form-group">
                     <label>Last Name</label>
                     <input class="form-control" type="text"/>
                  </div>
               </div> */}
               <div class="col-sm-6">
                  <div class="form-group">
                     <label>Company address <span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.Companyaddress}
                     onChange={(e)=>setaddclient123({...addclient123,Companyaddress:e.target.value})}
                     />
                  </div>
               </div>
               {/* <div class="col-sm-6">
                  <div class="form-group">
                     <label>Email <span class="text-danger">*</span></label>
                     <input class="form-control" type="email"/>
                  </div>
               </div> */}
               <div class="col-sm-6">
                  <div class="form-group">
                     <label>Contact person </label>
                     <input class="form-control" type="text"
                     value={addclient123.Contactperson}
                     onChange={(e)=>setaddclient123({...addclient123,Contactperson:e.target.value})}
                     />
                  </div>
               </div>
               
               <div class="col-sm-6">
                  <div class="form-group">
                     <label>Contect person name</label>
                     <div class="cal-icon">
                        <input type="text" class="form-control datetimepicker"
                        value={addclient123.Contactpersonname}
                        onChange={(e)=>setaddclient123({...addclient123,Contactpersonname:e.target.value})}
                        />
                     </div>
                  </div>
               </div>
                 <div class="col-sm-6">
                  <div  class="form-group">
                  <label value={addclient123.Active}
                        onChange={(e)=>setaddclient123({...addclient123,Active:e.target.value})}>Status <br/>
                        <div style={{flexDirection:"row" ,display:"flex"}}>
                  <div style={{marginTop:"10px"}}>
                     <input style={{padding:"20px",marginRight:"5px"}} type="radio" name="status" id="Active" value="true" />Active<br/>
                     </div>
                     <div style={{marginTop:"10px"}}>
                        <input style={{padding:"20px", marginLeft:"20px",marginRight:"5px"}} type="radio" name="status" id="Active"  value="false"/>InActive
                        </div>
                     </div>
                     </label>
                     
                  </div>
               </div>
               <div class="col-sm-6">
                  <div class="form-group">
                     <label>Amount </label>
                     <div class="cal-icon">
                        <input type="text" class="form-control datetimepicker"
                        value={addclient123.Amount}
                        onChange={(e)=>setaddclient123({...addclient123,Amount:e.target.value})}
                        />
                     </div>
                  </div>
               </div>
               <div class="col-sm-6">
                  <div class="form-group">
                     <label>Email ID </label>
                     <input class="form-control" type="text"
                     value={addclient123.EmailID}
                     onChange={(e)=>setaddclient123({...addclient123,EmailID:e.target.value})}
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
               <button class="btn btn-primary submit-btn" onClick={()=>handleaddclient('/Author')} >Submit</button>
            </div>
         </form>
      </div>
   </div>

      </div>
   </div>
</div>

  );
}
export default CreateAuthor;


