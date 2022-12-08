// import { useHistory } from 'react-router-dom';
// import Swal from 'sweetalert2'; 
// import { API } from '../../../src/API/index';
// import React, { useState } from 'react';

// const basicaddclientclear = {
//    Companyname:"",
//    Companyaddress:"",
//    Contactperson:"",
//    Contactpersonname:"",
//    Active:"",
//    Amount:"",
//    EmailID:""
// }

// function CreateAuthor() {

//    const history = useHistory();

   

//    const[addclient123,setaddclient123]=useState({
//       Companyname:" ",
//    Companyaddress:" ",
//    Contactperson:" ",
//    Contactpersonname:" ",
//    Active:" ",
//    Amount:" ",
//    EmailID:" "
//    })


//    const handleaddclient=async(path)=>{
//      
//         history.push (path);
      
//       try{
      
//        const { data } = await API.post('/Addclient',addclient123);
      
//          
//           setaddclient123(data)
//           if(data.body.status==true){
//             Swal.fire({
//                  icon: 'success',
//                  iconColor: '#28a745',
//                  title: data?.body.message,
//                  showConfirmButton: false,
//                  timer: 2000
//                });
//            
//             setaddclient123(basicaddclientclear);
//             // history.push('/Author');
            
//            } else {
//             setaddclient123(basicaddclientclear);
//             Swal.fire({
//               icon: 'warning',
//               iconColor: '#dc3545',
//               title: data?.body.message,
//               showConfirmButton: false,
//               timer: 2000
//               });
//            }
//           }
//           catch(err){
//             setaddclient123(basicaddclientclear);
//             Swal.fire({
//               icon: 'warning',
//               iconColor: '#dc3545',
//               title: err.message,
//               showConfirmButton: false,
//               timer: 2000
//               });
      
//           }
//         }

   

//    const handlecreateauthor = path =>{
//       history.push (path);
//  }


//   return (


 
// <div> 
//    <div class="row">
//      
//       <div class="col-lg-8 new_post">   
//    <div class="row">
//       <div class="col-lg-12">
//       <span  class="close" style={{fontSize:"40px"}} onClick={()=>handlecreateauthor('./Author')}>&times;</span>
//          <h4 class="page-title page-title-center">Add Client</h4>
//       </div>
//    </div>
//    <div class="row">
//       <div class="col-lg-12">
//          <form onSubmit={(e)=>e.preventDefault()}>
//             <div class="row">
//                <div class="col-sm-6">
//                   <div class="form-group">
//                      <label>Company name <span class="text-danger">*</span></label>
                     
//                      <input class="form-control" type="text" 
//                      value={addclient123.Companyname}
//                      onChange={(e)=>setaddclient123({...addclient123,Companyname:e.target.value})}
//                      />
//                   </div>
//                </div>
//                {/* <div class="col-sm-6">
//                   <div class="form-group">
//                      <label>Last Name</label>
//                      <input class="form-control" type="text"/>
//                   </div>
//                </div> */}
//                <div class="col-sm-6">
//                   <div class="form-group">
//                      <label>Company address <span class="text-danger">*</span></label>
//                      <input class="form-control" type="text"
//                      value={addclient123.Companyaddress}
//                      onChange={(e)=>setaddclient123({...addclient123,Companyaddress:e.target.value})}
//                      />
//                   </div>
//                </div>
//                {/* <div class="col-sm-6">
//                   <div class="form-group">
//                      <label>Email <span class="text-danger">*</span></label>
//                      <input class="form-control" type="email"/>
//                   </div>
//                </div> */}
//                <div class="col-sm-6">
//                   <div class="form-group">
//                      <label>Contact person </label>
//                      <input class="form-control" type="text"
//                      value={addclient123.Contactperson}
//                      onChange={(e)=>setaddclient123({...addclient123,Contactperson:e.target.value})}
//                      />
//                   </div>
//                </div>
               
//                <div class="col-sm-6">
//                   <div class="form-group">
//                      <label>Contect person name</label>
//                      <div class="cal-icon">
//                         <input type="text" class="form-control datetimepicker"
//                         value={addclient123.Contactpersonname}
//                         onChange={(e)=>setaddclient123({...addclient123,Contactpersonname:e.target.value})}
//                         />
//                      </div>
//                   </div>
//                </div>
//                  <div class="col-sm-6">
//                   <div  class="form-group">
//                   <label value={addclient123.Active}
//                         onChange={(e)=>setaddclient123({...addclient123,Active:e.target.value})}>Status <br/>
//                         <div style={{flexDirection:"row" ,display:"flex"}}>
//                   <div style={{marginTop:"10px"}}>
//                      <input style={{padding:"20px",marginRight:"5px"}} type="radio" name="status" id="Active" value="true" />Active<br/>
//                      </div>
//                      <div style={{marginTop:"10px"}}>
//                         <input style={{padding:"20px", marginLeft:"20px",marginRight:"5px"}} type="radio" name="status" id="Active"  value="false"/>InActive
//                         </div>
//                      </div>
//                      </label>
                     
//                   </div>
//                </div>
//                <div class="col-sm-6">
//                   <div class="form-group">
//                      <label>Amount </label>
//                      <div class="cal-icon">
//                         <input type="text" class="form-control datetimepicker"
//                         value={addclient123.Amount}
//                         onChange={(e)=>setaddclient123({...addclient123,Amount:e.target.value})}
//                         />
//                      </div>
//                   </div>
//                </div>
//                <div class="col-sm-6">
//                   <div class="form-group">
//                      <label>Email ID </label>
//                      <input class="form-control" type="text"
//                      value={addclient123.EmailID}
//                      onChange={(e)=>setaddclient123({...addclient123,EmailID:e.target.value})}
//                      />
//                   </div>
//                </div>
//                {/* <div class="col-sm-6">
//                   <div class="form-group gender-select">
//                      <label class="gen-label">Gender:</label>
//                      <div class="form-check-inline">
//                         <label class="form-check-label">
//                         <input type="radio" name="gender" class="form-check-input"/>Male
//                         </label>
//                      </div>
//                      <div class="form-check-inline">
//                         <label class="form-check-label">
//                         <input type="radio" name="gender" class="form-check-input"/>Female
//                         </label>
//                      </div>
//                   </div>
//                </div> */}
//                {/* <div class="col-sm-6">
//                   <div class="form-group">
//                      <label>Avatar</label>
//                      <div class="profile-upload">
//                         <div class="upload-img">
//                            <img alt="" src="assets/images/user.jpg"/>
//                         </div>
//                         <div class="upload-input">
//                            <input type="file" class="form-control"/>
//                         </div>
//                      </div>
//                   </div>
//                </div> */}
//                {/* <div class="col-sm-12">
//                   <div class="row">
//                      <div class="col-sm-12">
//                         <div class="form-group">
//                            <label>Address</label>
//                            <input type="text" class="form-control "/>
//                         </div>
//                      </div>
//                      <div class="col-sm-6 col-md-6 col-lg-3">
//                         <div class="form-group">
//                            <label>State</label>
//                            <select class="select select2-selection select2-selection--single">
//                            <option>Select</option>
//                               <option>Tamil Nadu</option>
//                               <option>Sport</option>
//                               <option>Business</option>
//                            </select>
//                         </div>                     
                  
//                      </div>
//                      <div class="col-sm-6 col-md-6 col-lg-3">
//                         <div class="form-group">
//                            <label>District</label>
//                            <select class="select select2-selection select2-selection--single">
//                            <option>Select</option>
//                               <option>Tamil Nadu</option>
//                               <option>Sport</option>
//                               <option>Business</option>
//                            </select>
//                         </div>                     
                  
//                      </div>
//                      <div class="col-sm-6 col-md-6 col-lg-3">
//                         <div class="form-group">
//                            <label>City</label>
//                            <input type="text" class="form-control"/>
//                         </div>
//                      </div>
                  
//                      <div class="col-sm-6 col-md-6 col-lg-3">
//                         <div class="form-group">
//                            <label>Postal Code</label>
//                            <input type="text" class="form-control"/>
//                         </div>
//                      </div>
//                   </div>
//                </div> */}
             
            
//             </div>
//             {/* <div class="form-group">
//                <label>Short Biography</label>
//                <textarea class="form-control" rows="3" cols="30"></textarea>
//             </div> */}
//             {/* <div class="form-group">
//                <label class="display-block">Status</label>
//                <div class="form-check form-check-inline">
//                   <input class="form-check-input" type="radio" name="status" id="doctor_active" value="option1" checked=""/>
//                   <label class="form-check-label" for="doctor_active">
//                   Active
//                   </label>
//                </div>
//                <div class="form-check form-check-inline">
//                   <input class="form-check-input" type="radio" name="status" id="doctor_inactive" value="option2"/>
//                   <label class="form-check-label" for="doctor_inactive">
//                   Inactive
//                   </label>
//                </div>
//             </div> */}
//             <div class="m-t-20 text-center">
//                <button class="btn btn-primary submit-btn" onClick={()=>handleaddclient('/Author')} >Submit</button>
//             </div>
//          </form>
//       </div>
//    </div>

//       </div>
//    </div>
// </div>

//   );
// }
// export default CreateAuthor;





// murugesh edit



import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import { API } from '../../../src/API/index';
import React, { useEffect, useState } from 'react';

const basicaddclientclear = {
   Companyname:"",
   Companyaddress1:"",
   Companyaddress2:"",
   Companyaddress3:"",
   Gst:"",
   InvoiceDate:"",
   InvoiceNo:"",
   InvoiceGst:"",
   DueDate:"",
   counter:""
   // FromDate:"",
   // ToDate:"",
   // SNo:"",
   // DocumentNo:"",
   // Decription:"",
   // SerialNo:"",
   // DueAmount:"",
   // Amount:"",
}

function CreateAuthor() {
   
   // location.reload(true);
   const history = useHistory();

   var fiscalyear = "";
    var today = new Date();
    if ((today.getMonth() + 1) <= 3) {
      fiscalyear = (today.getFullYear() - 1) + "-" + today.getFullYear()

    } else {
      fiscalyear = today.getFullYear() + "-" + (today.getFullYear() + 1)
    }

   
   


var currentyear = today.getFullYear()
var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let d = new Date();
const [load, setLoad] = useState(false);
useEffect(()=>{

      
    
  
   const filter = getaddclient123.filter(getaddclient123 => {
      return getaddclient123.InvoiceNo === fiscalyear;
    });
    localStorage.setItem('filterlength',filter.length+1)

   //counter 
   // var today =( 02-(d.getMonth()+1)-(d.getFullYear()))
  
// if((2/(today.getMonth() + 1)/(today.getFullYear()))==(2/4/(today.getFullYear()))){
//    setCounter(1)
//   }

getaddclient()


 
// var lenth = filter.length;
})


// setTimeout(() => {
//    document.location.reload();
//  },10000);


  const[getaddclient123,setgetaddclient123]=useState([])
  const[addclient123,setaddclient123]=useState({
   Companyname:"",
Companyaddress1:"",
Companyaddress2:"",
Companyaddress3:"",
Gst:"",
InvoiceDate:(2 + "-" +(d.getMonth()+1)+ "-" +(d.getFullYear())),
InvoiceNo:fiscalyear,
InvoiceGst:"33AAPFC0012R1ZF",
DueDate:(6 + "-" +(d.getMonth()+1)+ "-" +(d.getFullYear())),
counter:localStorage.getItem('filterlength'),
Month:months[d.getMonth()],
createdDate:new Date()
// ToDate:"",
// SNo:"",
// DocumentNo:"",
// Decription:"",
// SerialNo:"",
// DueAmount:"",
// Amount:"",
})

const reload=()=>window.location.reload();


// if(! localStorage.getItem('filterlength')===addclient123.counter){
//    reload()
//     }


  
  console.log("filter.length+1===localStorage.getItem('filterlength')",load,addclient123.counter,localStorage.getItem('filterlength'))
  
   // const [counter, setCounter] = useState(1);
  

 


 
 

//    if(getaddclient123.length>=counter){
//       setCounter( counter + 1);
//   }



  

// {filter&&filter.map((val,ind)=>{
//    localStorage.setItem('index',ind+1)
//  
//    return (
//       <>
//       {}
//       </>
//    )
   
// })}





const getaddclient = async(value) => {
   //
      await API.get('/getClient')
       .then(function (response) {
           // handle success
        
           if (response.status == 200) {
             setgetaddclient123(response.data.data);
           }
           
       })
       .catch(function (error) {
// handle error
         return error
       })
}

const refreshPage = ()=>{
   window.location.reload();
}


//submit button
const handlesubmit =(path,e)=>{
   // setCounter(counter+1)
  
   // window.location.reload();
   // localStorage.setItem('counter',counter)
   handleaddclient(path)
   history.push (path);
  
   
 
   
   
}


// count


 
   const handleaddclient=async(path)=>{
      
      // history.push (path);
      try{
      
       const { data } = await API.post('/Addclient',addclient123);
      
        
          setaddclient123(data)
          if(data.body.status==true){
            Swal.fire({
                 icon: 'success',
                 iconColor: '#28a745',
                 title: data?.body.message,
                 showConfirmButton: false,
                 timer: 2000
               });
          
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
   {localStorage.getItem('filterlength')===addclient123.counter?console.log("hii"):setaddclient123({...addclient123,counter:localStorage.getItem('filterlength')})}
 
    {load}
      { console.log("addclient",addclient123)}
      <div class="col-lg-8 new_post">   
   <div class="row">
      <div class="col-lg-12">
      <span  class="close" style={{fontSize:"40px",color:"black"}} onClick={()=>handlecreateauthor('./Author')}>&times;</span>
         <h4 class="page-title page-title-center">Add Client</h4>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-12">
         <form onSubmit={(e)=>e.preventDefault()}>
            <div class="row">
               <div class="col-sm-6">
                  <div class="form-group" >
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
                     <label>Company address1 <span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.Companyaddress1}
                     onChange={(e)=>setaddclient123({...addclient123,Companyaddress1:e.target.value})}
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
                     <label>Company address2 </label>
                     <input class="form-control" type="text"
                     value={addclient123.Companyaddress2}
                     onChange={(e)=>setaddclient123({...addclient123,Companyaddress2:e.target.value})}
                     />
                  </div>
               </div>
               
               <div class="col-sm-6">
                  <div class="form-group">
                     <label>Company address3</label>
                     <div class="cal-icon">
                        <input type="text" class="form-control datetimepicker"
                        value={addclient123.Companyaddress3}
                        onChange={(e)=>setaddclient123({...addclient123,Companyaddress3:e.target.value})}
                        />
                     </div>
                  </div>
               </div>
                 {/* <div class="col-sm-6">
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
               </div> */}
               <div class="col-sm-6">
                  <div class="form-group">
                     <label>Gst </label>
                     <div class="cal-icon">
                        <input type="text" class="form-control datetimepicker"
                        value={addclient123.Gst}
                        onChange={(e)=>setaddclient123({...addclient123,Gst:e.target.value})}
                        />
                     </div>
                  </div>
               </div>
               {/* <div class="col-sm-6">
                  <div class="form-group">
                     <label>InvoiceDate</label>
                     <input class="form-control" type="text"
                     value={addclient123.InvoiceDate}
                     onChange={(e)=>setaddclient123({...addclient123,InvoiceDate:e.target.value})}
                     />
                  </div>
               </div>

               <div class="col-sm-6">
                  <div class="form-group">
                     <label>InvoiceNo <span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.InvoiceNo}
                     onChange={(e)=>setaddclient123({...addclient123,InvoiceNo:e.target.value})}
                     />
                  </div>
               </div> */}

               {/* <div class="col-sm-6">
                  <div class="form-group">
                     <label>InvoiceGst <span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.InvoiceGst}
                     onChange={(e)=>setaddclient123({...addclient123,InvoiceGst:e.target.value})}
                     />
                  </div>
               </div> */}

               {/* <div class="col-sm-6">
                  <div class="form-group">
                     <label>DueDate <span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.DueDate}
                     onChange={(e)=>setaddclient123({...addclient123,DueDate:e.target.value})}
                     />
                  </div>
               </div>

               <div class="col-sm-6">
                  <div class="form-group">
                     <label>FromDate <span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.FromDate}
                     onChange={(e)=>setaddclient123({...addclient123,FromDate:e.target.value})}
                     />
                  </div>
               </div>

               <div class="col-sm-6">
                  <div class="form-group">
                     <label>ToDate <span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.ToDate}
                     onChange={(e)=>setaddclient123({...addclient123,ToDate:e.target.value})}
                     />
                  </div>
               </div>

               <div class="col-sm-6">
                  <div class="form-group">
                     <label>SNo <span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.SNo}
                     onChange={(e)=>setaddclient123({...addclient123,SNo:e.target.value})}
                     />
                  </div>
               </div>

               <div class="col-sm-6">
                  <div class="form-group">
                     <label>DocumentNo<span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.DocumentNo}
                     onChange={(e)=>setaddclient123({...addclient123,DocumentNo:e.target.value})}
                     />
                  </div>
               </div>

               <div class="col-sm-6">
                  <div class="form-group">
                     <label>Decription <span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.Decription}
                     onChange={(e)=>setaddclient123({...addclient123,Decription:e.target.value})}
                     />
                  </div>
               </div>

               <div class="col-sm-6">
                  <div class="form-group">
                     <label>SerialNo <span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.SerialNo}
                     onChange={(e)=>setaddclient123({...addclient123,SerialNo:e.target.value})}
                     />
                  </div>
               </div>

               <div class="col-sm-6">
                  <div class="form-group">
                     <label>DueAmount <span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.DueAmount}
                     onChange={(e)=>setaddclient123({...addclient123,DueAmount:e.target.value})}
                     />
                  </div>
               </div>

               <div class="col-sm-6">
                  <div class="form-group">
                     <label>Amount <span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.Amount}
                     onChange={(e)=>setaddclient123({...addclient123,Amount:e.target.value})}
                     />
                  </div>
               </div> */}

                
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
               <button class="btn btn-primary submit-btn"   onClick={(e)=>{handlesubmit('/Author',e)}} >Submit</button>
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



