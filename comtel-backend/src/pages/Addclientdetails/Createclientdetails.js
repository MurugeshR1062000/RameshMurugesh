import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import { API } from '../../../src/API/index';
import React, { useState,useEffect } from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import React, { useState } from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";





const basicaddclientclear = {
//    Companyname:"",
//    Companyaddress1:"",
//    Companyaddress2:"",
//    Companyaddress3:"",
//    Gst:"",
//    InvoiceDate:"",
//    InvoiceNo:"",
//    InvoiceGst:"",
//    DueDate:"",
CompanyID:"",
   FromDate:"",
   ToDate:"",
   // SNo:"",
   MonthlyRent:"",
   DocumentNo:"",
   Decription:"",
   SerialNo:"",
  
}

function CreateClientDetails() {


   //due date





   const history = useHistory();
   // const [startDate, setStartDate] = useState("");
   // const [endDate, setEndDate] = useState("");
   // const [CompanyID,setCompanyID]=useState('')
   // localStorage.setItem('CompanyID', CompanyID)
   // {console.log("getaddclient123",CompanyID)} 
const [getaddclient123,setgetaddclient123]=useState([])
// const [fromdate,setfromdate]=useState(localStorage.getItem('fromdate'))
// const [todate,settodate]=useState(localStorage.getItem('todate'))
   const[addclient123,setaddclient123]=useState({
//       Companyname:"",
//    Companyaddress1:"",
//    Companyaddress2:"",
//    Companyaddress3:"",
//    Gst:"",
//    InvoiceDate:"",
//    InvoiceNo:"",
//    InvoiceGst:"33AAPFC0012R1ZF",
//    Month:"",
CompanyID:"",
   FromDate:"",
   ToDate:"",
   // SNo:"",
   MonthlyRent:"",
   DocumentNo:"",
   Decription:"",
   SerialNo:"",
   DueAmount:localStorage.getItem('DueAmount'),
   Amount:localStorage.getItem('DueAmount'),
   })
console.log("localStorage.getItem('DueAmount')",localStorage.getItem('DueAmount'));
   localStorage.setItem('MonthlyRent', addclient123.MonthlyRent)
   // localStorage.setItem('FromDate', addclient123.FromDate)
                          
   // localStorage.setItem('ToDate', addclient123.ToDate)
   console.log("date,amount", addclient123.MonthlyRent, localStorage.getItem('fromdate'),localStorage.getItem('fromdate'),localStorage.getItem('DueAmount'));
   const handlefrom =(date)=>{
   
      // localStorage.setItem('fromdate', date)
      setaddclient123({...addclient123,FromDate:date})
      localStorage.setItem('fromdate', date)
      // setfromdate(date)
   }
   
   
   const handleto =(date)=>{
     
      // localStorage.setItem('todate', date)
      setaddclient123({...addclient123,ToDate:date})
      localStorage.setItem('todate', date)
      // settodate(date)
   }
useEffect(
   
   ()=>{



      const  products=[
         {title: 'Apple', count: localStorage.getItem('Difference_In_Days'), price: localStorage.getItem('Round')},
        
       ] 



// oneday rent amount 

function getDaysInMonth(year, month) {
 return new Date(year, month, 0).getDate();
}

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based


const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);


const day = localStorage.getItem('MonthlyRent')/daysInCurrentMonth
const round =Math.round(day)  
localStorage.setItem('Round',round)
//    console.log( "onedaysAmount",round);
       
   // due amount
  
   var date1 = new Date(localStorage.getItem('fromdate'));
   var date2 = new Date(localStorage.getItem('todate'));
     
   
   var Difference_In_Time = date2.getTime() - date1.getTime();
     
   
   var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
   
    localStorage.setItem('Difference_In_Days', Difference_In_Days)

  
   
   var dueAmount = products.reduce((sum, i) => (
     sum += i.count * i.price
   
  
   ), 0)
   
   localStorage.setItem('DueAmount', dueAmount)


   console.log("i",localStorage.getItem('fromdate'),localStorage.getItem('todate'),localStorage.getItem('Difference_In_Days'), localStorage.getItem('MonthlyRent'),localStorage.getItem('Round'),localStorage.getItem('DueAmount'))





    getaddclient();






})


// if(localStorage.getItem('fromdate')&&localStorage.getItem('todate')){

    

  
   // setaddclient123({...addclient123,DueAmount:dueAmount})
   // }

   const getaddclient = async(value) => {
   //  console.log("hi")
       await API.get('/getClient')
        .then(function (response) {
            // handle success
            // console.log(response, "end");
            if (response.status == 200) {
              setgetaddclient123(response.data.data);
            }
            
        })
        .catch(function (error) {
// handle error
            console.log(error);
        })
}







function myFunction(path,e) {
   const inpcompanyid = document.getElementById("validationTooltip04");
   const inpmonthlyrent = document.getElementById("id1");
   const inpdocumentno = document.getElementById("validationTooltip02");
   const inpdescription = document.getElementById("validationTooltipUsername");
   const inpserialno = document.getElementById("validationTooltip03");
   const inpfromdate = document.getElementById("validationTooltip01");
   const inptodate = document.getElementById("validationTooltip00");
   const inpdueamount = document.getElementById("validationTooltip33");
   const inpamount = document.getElementById("validationTooltip44");
 
   if (!inpcompanyid.checkValidity()) {
     document.getElementById("demo1").innerHTML = inpcompanyid.validationMessage;
    
   } 
   else if (!inpmonthlyrent.checkValidity()) {
      document.getElementById("demo2").innerHTML = inpmonthlyrent.validationMessage;
    } else if (!inpdocumentno.checkValidity()) {
      document.getElementById("demo3").innerHTML = inpdocumentno.validationMessage;
    } else if (!inpdescription.checkValidity()) {
      document.getElementById("demo4").innerHTML = inpdescription.validationMessage;
    } 
    else if (!inpserialno.checkValidity()) {
      document.getElementById("demo5").innerHTML = inpserialno.validationMessage;
    } 
    else if (!inpfromdate.checkValidity()) {
      document.getElementById("demo6").innerHTML = inpfromdate.validationMessage;
    } 
    else if (!inptodate.checkValidity()) {
      document.getElementById("demo7").innerHTML = inptodate.validationMessage;
    } 
    else if (!inpdueamount.checkValidity()) {
      document.getElementById("demo8").innerHTML = inpdueamount.validationMessage;
    } 
    else if (!inpamount.checkValidity()) {
      document.getElementById("demo9").innerHTML = inpamount.validationMessage;
    } 
   else {
    handleaddclient(path,e);
     
   } 
  
 } 


   const handleaddclient=async(path,e)=>{
      
      // myFunction()
      history.push (path);
     if(addclient123){
     
      console.log("handleaddclient",addclient123)
    try{
    
     const { data } = await API.post('/ClientDetails',addclient123);
    
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
     }else{

     }
       
        }

   

   const handlecreateauthor = path =>{
      history.push (path);
 }

//  const handleChange = event => {
//    console.log(event.target.value);
//    setCompanyID(event.target.value);
//  };
  
//renu
const numbers = [{value:30},{value:0},{value:40},{value:12},{value:-8}];

const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
   console.log("currentValue",currentValue.value,accumulator)
  if (currentValue.value > 0) {
    const doubled = currentValue.value * 2;
    return [...accumulator, doubled];
  }
  return accumulator;
}, []);

console.log("doubledPositiveNumbers",doubledPositiveNumbers); // [12, 4]


//abi chithi
//1
const characters = [
   { name: 'hello', team: 'apple',price:"30" },
   { name: 'hiii', team: 'orange',price:"20" },
   { name: 'world', team: 'banana' ,price:"10"},
   { name: 'Man', team: 'apple' ,price:"30"},
   { name: 'hee', team: 'apple' ,price:"30"}
 ];
 
 const avengers = characters.filter(character => character.team === 'apple');
 console.log("avengers",avengers); 

//2
 let text = "Hello World";
const myArray = text.split(" ");
console.log("myArray",myArray); 


// document.getElementById("demo").innerHTML = myArray; 

 // priya athai

 let num = [
   { name: 'mani', products: 'apple',value:"56" },
   { name: 'suresh',  products:  'orange',value:"25" },
   { name: 'kamala', products:  'banana' ,value:"18"},
   { name: 'arun',   products:   'grapes' ,value:"78"},
   { name: 'naresh',   products:   'strawberry' ,value:"45"}
 ];
 
 let userFullnames = num.map(function(element){
     return Math.round(element.value/2);
 })
 
 console.log("userFullnames",userFullnames);
 // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]
  return (


 
<div>


  
{localStorage.getItem('DueAmount')===addclient123.DueAmount?
console.log("hii"):
setaddclient123({...addclient123,DueAmount:localStorage.getItem('DueAmount')})}
{localStorage.getItem('DueAmount')===addclient123.Amount?console.log("hii"):setaddclient123({...addclient123,Amount:localStorage.getItem('DueAmount')})}
  
   <div class="row">
      {/* {  console.log("date,amount", addclient123)} */}
      {/* {console.log("handleaddclient",handleaddclient())} */}
      {/* { console.log("dataaddclient123",endDate)} */}
      {/* { console.log("handleaddclient",addclient123)} */}




      <div class="col-lg-8 new_post">   
   <div class="row">
      <div class="col-lg-12">
      <span  class="close" style={{fontSize:"40px",color:"black"}} onClick={()=>handlecreateauthor('./ClientDetails')}>&times;</span>
         <h4 class="page-title page-title-center">Add ClientDetails</h4>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-12">
         <form onSubmit={(e)=>e.preventDefault()}>

        
            <div  >
           
                  <div class="form-group" >
                     
                     {/* <div style={{marginLeft:'200px',marginRight:"200px"}}>
                       

                     <label ><b>Select CompanyName </b><span class="text-danger">*</span></label>
                     
                     <select placeholder='Select CompanyName' value={addclient123.CompanyID}  onChange={(e)=>setaddclient123({...addclient123,CompanyID:e.target.value})} class="form-control" required="required">
         <option value="" >--  Select Company --</option>
            {getaddclient123&&getaddclient123.map((val,ind)=>{
               

               console.log("val",val)
                return(
                    <>
                    
                     <option value={val._id}  >{val.Companyname}</option>
                    
                    </>
                )
            })}
               
            </select>
                     </div> */}
                    
                  </div>
               </div> 

            <div class="row">

               
            <form class=" row col-lg-12 needs-validation" novalidate >



            <div class="col-md-6 position-relative"  style={{marginLeft:'200px',marginRight:"200px"}}>
    <label for="validationTooltip04" ><b>Select CompanyName </b><span class="text-danger">*</span></label>
    <select class="form-control" id="validationTooltip04"  value={addclient123.CompanyID}  onChange={(e)=>setaddclient123({...addclient123,CompanyID:e.target.value})} required>
     
      <option selected disabled value="" >--  Select Company --</option>
            {getaddclient123&&getaddclient123.map((val,ind)=>{
               

               console.log("val",val)
                return(
                    <>
                    
                     <option value={val._id}  >{val.Companyname}</option>
                    
                    </>
                )
            })}
    </select>
    <p id='demo1' style={{color:"white" }}> </p>
    <div class="invalid-tooltip">
      Please select a valid CompanyName.
    </div>
  </div>
  <div class="col-md-6 position-relative">
<div class="form-group">
    <label  >MonthlyRent<span class="text-danger">*</span></label>
    <input type="text" class="form-control" id="id1" value={addclient123.MonthlyRent}
                     onChange={(e)=>setaddclient123({...addclient123,MonthlyRent:e.target.value})} required/>
                     <p id='demo2' style={{color:"white" }}> </p>
    <div class="valid-tooltip">
    Please enter the MonthlyRent.
    </div>
    </div>
  </div>
  <div class="col-md-6 position-relative">
   <div class="form-group">
   
   <label for="validationTooltip02" class="form-label">DocumentNo<span class="text-danger">*</span></label>
   
    <input type="text" class="form-control" id="validationTooltip02"  value={addclient123.DocumentNo}
                     onChange={(e)=>setaddclient123({...addclient123,DocumentNo:e.target.value})} required/>
                     <p id='demo3' style={{color:"white" }}> </p>
    <div class="valid-tooltip">
    Please enter a unique and valid DocumentNo.
    
    </div>
   
   </div>
  
   
  </div>
  <div class="col-md-6 position-relative">
   <div class="form-group" >
   <label for="validationTooltipUsername" class="form-label">Decription <span class="text-danger">*</span></label>
    {/* <div class="input-group has-validation"> */}
      
      <input type="text" class="form-control" id="validationTooltipUsername" value={addclient123.Decription}
                     onChange={(e)=>setaddclient123({...addclient123,Decription:e.target.value})} required/>
      <p id='demo4' style={{color:"white" }}> </p>
      <div class="invalid-tooltip">
        Please enter a unique and valid Decription.
      </div>
   {/* </div> */}
   
    </div>
  </div>

  <div class="col-md-6 ">
  <div class="form-group" >
  <label >SerialNo <span class="text-danger">*</span></label>
    <input type="text" class="form-control" id="validationTooltip03"  value={addclient123.SerialNo}
                     onChange={(e)=>setaddclient123({...addclient123,SerialNo:e.target.value})} required/>
    <p id='demo5' style={{color:"white" }}> </p>
    <div class="invalid-tooltip">
      Please enter a valid SerialNo.
    </div>
</div>  
  </div>
 
  <div class="col-md-6 ">
  <div class="form-group" >
  <label >FromDate<span class="text-danger">*</span></label>
    {/* <input type="text" class="form-control" id="validationTooltip05" required/> */}
    <DatePicker  className='form-control' id="validationTooltip01" selected={addclient123.FromDate} onChange={(date) => {handlefrom(date)}} required />
    <p id='demo6' style={{color:"white" }}> </p>
    <div class="invalid-tooltip">
      Please select a valid fromdate.
    </div>
</div>
   
  </div>
  <div class="col-md-6 ">
  <div class="form-group" >
  <label >ToDate<span class="text-danger">*</span></label>
    {/* <input type="text" class="form-control" id="validationTooltip05" required/> */}
    <DatePicker  className='form-control' id="validationTooltip00" selected={addclient123.ToDate} onChange={(date) => {handleto(date)}} required />
    <p id='demo7' style={{color:"white" }}> </p>
    <div class="invalid-tooltip">
      Please select a valid Todate.
    </div>
</div>
   
  </div>

<div class="col-md-6 ">
  <div class="form-group" >
  <label >DueAmount <span class="text-danger">*</span></label>
    <input type="text" class="form-control" id="validationTooltip33"  value={addclient123.DueAmount}
                     // onChange={(e)=>setaddclient123({...addclient123,DueAmount:e.target.value})} 
                     required/>
    <p id='demo8' style={{color:"white" }}> </p>
    <div class="invalid-tooltip">
      Please enter a valid DueAmount.
    </div>
</div>  
  </div>

  <div class="col-md-6 ">
  <div class="form-group" >
  <label >Amount <span class="text-danger">*</span></label>
    <input type="text" class="form-control" id="validationTooltip44"  value={addclient123.Amount}
                     // onChange={(e)=>setaddclient123({...addclient123,Amount:e.target.value})} 
                     required/>
    <p id='demo9' style={{color:"white" }}> </p>
    <div class="invalid-tooltip">
      Please enter a valid Amount.
    </div>
</div>  
  </div>


 

  {/* <div class="m-t-20 text-center">
               <button class="btn btn-primary submit-btn"  onClick={()=>handleaddclient('/ClientDetails')} >Submit</button>
            </div> */}
  <div class="col-12 text-center ">
  
    <button class="btn btn-primary submit-btn"   onClick={(e)=>myFunction('/ClientDetails',e)} >Submit</button>
  </div>
</form>
               {/* <div class="col-sm-6">
                  <div class="form-group">
                     <label>Company name <span class="text-danger">*</span></label>
                     
                     <input class="form-control" type="text" 
                     value={addclient123.Companyname}
                     onChange={(e)=>setaddclient123({...addclient123,Companyname:e.target.value})}
                     />
                  </div>
               </div> */}
               {/* <div class="col-sm-6">
                  <div class="form-group">
                     <label>Last Name</label>
                     <input class="form-control" type="text"/>
                  </div>
               </div> */}
               {/* <div class="col-sm-6">
                  <div class="form-group">
                     <label>Company address1 <span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.Companyaddress1}
                     onChange={(e)=>setaddclient123({...addclient123,Companyaddress1:e.target.value})}
                     />
                  </div>
               </div> */}
               {/* <div class="col-sm-6">
                  <div class="form-group">
                     <label>Email <span class="text-danger">*</span></label>
                     <input class="form-control" type="email"/>
                  </div>
               </div> */}
               {/* <div class="col-sm-6">
                  <div class="form-group">
                     <label>Company address2 </label>
                     <input class="form-control" type="text"
                     value={addclient123.Companyaddress2}
                     onChange={(e)=>setaddclient123({...addclient123,Companyaddress2:e.target.value})}
                     />
                  </div>
               </div> */}
               
               {/* <div class="col-sm-6">
                  <div class="form-group">
                     <label>Company address3</label>
                     <div class="cal-icon">
                        <input type="text" class="form-control datetimepicker"
                        value={addclient123.Companyaddress3}
                        onChange={(e)=>setaddclient123({...addclient123,Companyaddress3:e.target.value})}
                        />
                     </div>
                  </div>
               </div> */}
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
               {/* <div class="col-sm-6">
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
               <div class="col-sm-6">
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
               </div> */}
 

               {/* <div class="col-sm-6">
                  <div class="form-group">
                     <label>SNo <span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.SNo}
                     onChange={(e)=>setaddclient123({...addclient123,SNo:e.target.value})}
                     />
                  </div>
               </div> */}

{/* <div class="col-sm-6 " >
                  <div class="form-group">
                     <label>MonthlyRent<span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.MonthlyRent}
                     onChange={(e)=>setaddclient123({...addclient123,MonthlyRent:e.target.value})}
                     />
                  </div>
               </div> */}

               {/* <div class="col-sm-6 position-relative">
                  <div class="form-group">
                     <label>DocumentNo<span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.DocumentNo}
                     onChange={(e)=>setaddclient123({...addclient123,DocumentNo:e.target.value})}
                     />
                  </div>
               </div> */}

               {/* <div class="col-sm-6 position-relative">
                  <div class="form-group">
                     <label>Decription <span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.Decription}
                     onChange={(e)=>setaddclient123({...addclient123,Decription:e.target.value})}
                     />
                  </div>
               </div> */}

               {/* <div class="col-sm-6 position-relative">
                  <div class="form-group">
                     <label>SerialNo <span class="text-danger">*</span></label>
                     <input class="form-control" type="text"
                     value={addclient123.SerialNo}
                     onChange={(e)=>setaddclient123({...addclient123,SerialNo:e.target.value})}
                     />
                  </div>
               </div> */}

               {/* <div class="col-sm-6 position-relative">
                  <div class="form-group">
                 
                     <label>FromDate<span class="text-danger">*</span></label>
                     <DatePicker   className='form-control' selected={addclient123.FromDate} onChange={(date) => {handlefrom(date)}} />
                    
                  </div>
               </div> */}
               {/* <div class="col-sm-6 position-relative">
                  <div class="form-group">
                  <label>ToDate<span class="text-danger">*</span></label>
                  <DatePicker  className='form-control' selected={addclient123.ToDate} onChange={(date) => {handleto(date)}} />
                 
                    
                  </div>
               </div> */}
{/* <div style={{display:"flex",flexDirection:"row"}}>
   <div>
   <label>Start Date <span class="text-danger">*</span></label>
     <DatePicker
       selected={addclient123.FromDate}
      //  selectsStart
      //  startDate={addclient123.FromDate}
      //  endDate={addclient123.ToDate}
       onChange={(date)=>setaddclient123({...addclient123,FromDate:date})}
     />
   </div>
<div>
<label>End Date <span class="text-danger">*</span></label>
     <DatePicker
       selected={addclient123.ToDate}
      //  selectsEnd
      //  startDate={addclient123.FromDate}
      //  endDate={addclient123.ToDate}
      //  minDate={addclient123.FromDate}
       onChange={(date)=>setaddclient123({...addclient123,ToDate:date})}
     />

</div>
     
   </div> */}
              
               

               {/* <div class="col-sm-6">
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
            {/* <div class="m-t-20 text-center">
               <button class="btn btn-primary submit-btn"  onClick={()=>handleaddclient('/ClientDetails')} >Submit</button>
            </div> */}
         </form>
      </div>
   </div>

      </div>
   </div>
</div>

  );
}

export default CreateClientDetails;

