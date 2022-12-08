// // import {React} from 'react';
// // import Invoice from './Invioce.css'
// import Computer from '../../Images123/Computer.jpg'
// import React, { useEffect, useState } from 'react';
// import {API} from '../../API/index'


// const Generateinvoice = () =>{

//     const[getaddclient123,setgetaddclient123]=useState([])

//     useEffect(()=>{
//         console.log("hii")
//          getaddclient()
//      },[]);

//     const getaddclient = async(value) => {
//         console.log("hi")
//            await API.get('/getClient')
//             .then(function (response) {
              
//                 console.log(response, "end");
//                 if (response.status == 200) {
//                   setgetaddclient123(response.data.data);
//                 }
                
//             })
//             .catch(function (error) {

//                 console.log(error);
//             })
//     }



//     return(
//         <>
//         {console.log("generateval",getaddclient123)}

//         {getaddclient123&&getaddclient123.length>0 && getaddclient123.map((val,ind)=>{

// console.log("generateval1",val)
        
// return(
//     <>
//      <div style={{border:"1px solid black"}}>
//             <div style={{display:"flex",flexDirection:"row",marginTop:"50px",height:"150px",marginBottom:"20px",backgroundColor:"rgb(218,236,250)"}}>
//             <div> <img style={{width:"60%",height:"80%",marginLeft:"110px",marginTop:"15px",borderRadius:"10px"}} src={Computer}/></div>
//            <div style={{marginleft:"10px",marginLeft:"5px"}}>
//            <div style={{fontSize:"50px",color:"black",marginLeft:"140px"}}><b>COMTAL TECHNOLOGIES</b></div>
//            <div style={{fontSize:"23px",color:"black",marginLeft:"90px"}}>NO.41/2,42/2,2nd cross street,Thiru VI GA Thundalam,chenni,Tamil/Nadu,600011</div>
//            <div style={{fontSize:"21px",color:"black",marginLeft:"120px"}}>Email-helpdesk @ comtal.in,Mobile-+919042574600,Web-WWW.comtal,in </div>
//          <h5></h5>
//            </div>
//             </div>
          
       

// <div style={{ display:"flex",flexDirection:"row"}}>
//          <div style={{float:"left",marginLeft:"10px",fontSize:"18px"}}>
//         <p>
//         <h5>TO:-</h5>
//             <h5>{val.Companyname}</h5>
//             <h5>{val.Companyaddress1},{val.Companyaddress2}</h5>
//             <h5>{val.Companyaddress3}</h5>
//             <h5> Gst {val.Gst}</h5>
           



//              </p>
//         </div>
//              <div style={{float:"right",marginLeft:"650px",marginBottom:"50px"}}>
//                 <h1 style={{fontSize:"22px"}}><b>Rental Invioce</b></h1>
//                 <h4>Invoice Date   {val.InvoiceDate}</h4>
//                 <h4>Invoice No   {val.InvoiceNo}</h4>
//                 <h5>Po No</h5>
//                 <h3>GST NO   {val.InvoiceGst}</h3>
              


               
//              </div>
//          </div>
       

// {/* <div> */}
// <div style={{display:"flex",flexDirection:"row"}}>
// <div>  <b>Rental changes from : {val.FromDate} To : {val.ToDate}</b></div>
// <b> <div style={{marginLeft:"600px"}}>  Due Date :   {val.DueDate}</div></b>

// </div>

//              <table style={{width:"100%"}}>
//                  {/* <tr style={{ border:"none",fontSize:"18px"}}>
               
//                  </tr> */}
//                  {/* <div > */}
//                  <tr>
//                      <th style={{width:"5%"}}><b>S/NO</b></th>
//                      <th><b>DC NO</b></th>
//                      <th><b>Descriptions</b></th>
//                      <th><b>Serial No</b></th>
//                      <th><b>Due Amount</b></th>
//                      <th><b>Amout</b></th>
//                      </tr>
//                      <tr>
//                          <td>{val.SNo}</td>
//                          <td>{val.DocumentNo}</td>
//                          <td>{val.Decription}</td>
//                          <td> {val.SerialNo}</td>
//                          <td>{val.DueAmount}</td>
//                          <td>{val.Amount}</td>
//                      </tr>
//                      {/* <tr>
//                          <td>2</td>
//                          <td>65</td>
//                          <td>DELL7040</td>
//                          <td>7674TD2</td>
//                          <td>4100</td>
//                          <td>4100</td>
//                      </tr> */}
//                      {/* <tr>
//                          <td>3</td>
//                          <td>65</td>
//                          <td>TV</td>
//                          <td>ME</td>
//                          <td>1000</td>
//                          <td>1000</td>
//                      </tr> */}
//                      {/* <tr>
//                          <td>4</td>
//                          <td>66</td>
//                          <td>DELL 7040</td>
//                          <td>2RL3VG2</td>
//                          <td>2900</td>
//                          <td>2900</td>
//                      </tr>
//                      <tr>
//                          <td>5</td>
//                          <td>66</td>
//                          <td>DELL 7040</td>
//                          <td>2S62VG2</td>
//                          <td>2900</td>
//                          <td>2900</td>
//                      </tr>
//                      <tr>
//                          <td>6</td>
//                          <td>66</td>
//                          <td>DEll 7040</td>
//                          <td>JDOOSD2</td>
//                          <td>2900</td>
//                          <td>2900</td>
//                      </tr>
//                      <tr>
//                          <td>7</td>
//                          <td>66</td>
//                          <td>DELL7040</td>
//                          <td>FD1YB02</td>
//                          <td>2900</td>
//                          <td>2900</td>
//                      </tr>
// <tr>
//     <td colSpan={6}>
// 23-02-2022 to 28-02-2022
//     </td>
// </tr>
// <tr>
//                          <td>8</td>
//                          <td>85</td>
//                          <td>DELL E5250</td>
//                          <td>CTY2662</td>
//                          <td>1800</td>
//                          <td>321</td>
//                      </tr> */}
//                      <tr>
//     <td colSpan={4} rowSpan={4}>

//     </td>
//     <td>Sub Total</td>
//     <td>
// 21121
//     </td>
// </tr>
// <tr>
//     {/* <td colSpan={4}>

//     </td> */}
//     <td>SGST 9%</td>
//     <td>

//     </td>
// </tr>
// <tr>
//     {/* <td colSpan={4}>

//     </td> */}
//     <td>CGST 9%</td>
//     <td>

//     </td>
// </tr>
// <tr>
//     {/* <td colSpan={4}>

//     </td> */}
//     <td>Others</td>
//     <td>

//     </td>
// </tr>
// <tr>
//     <td colSpan={4}>
// SAC CODE 997315 HSN CODE 84711000
//     </td>
//     <td>Grand Total</td>
//     <td>
// 21121
//     </td>
// </tr>
// <tr style={{fontSize:"15px",margin:"0px",padding:"0px"}} >
//     <td colSpan={4}   >
// Terms & Conditions:<br/>
// 1. The above goods are given on rental basic & returnable<br/>
// 2. Any loss or damage due to any reson  shall be borne by the customer<br/>
// 3. Tny clarifications in the bill to be informed within 2 days
//     </td>
//     <td colSpan={2} >for COMTAL TECHNOLOGIES</td>

// </tr>
// {/* </div> */}

//              </table>

       
//              {/* </div> */}
//         </div>
//     </>
// )

//        })}

       
//         </>
//     )
// }


// export default Generateinvoice;


// import {React} from 'react';
// import Invoice from './Invioce.css'
import Computer from '../../Images123/Computer.jpg'
import React, { useEffect, useState ,Component,useRef} from 'react';
import {API} from '../../API/index'
import GetFiscalYear from "get-fiscal-year";
// import React, { Component } from "react";
import ReactToPrint from 'react-to-print';
import { FiPrinter } from "react-icons/fi";


const Generateinvoice = () =>{

    const[getaddclient123,setgetaddclient123]=useState([])
    const[getaddclient123details,setgetaddclient123details]=useState([])
const [Companyname,setCompanyname]=useState('')
const [Month,setMonth]=useState('')  
 
const componentRef = useRef();
  
    //increase counter
    // const increase = () => {
    //   setCounter(count => count + 1);
    // };
 
    // const  [products,setproducts]=useState([
    //     {title: 'Apple', count: localStorage.getItem('Difference_In_Days'), price: localStorage.getItem('Round')},
       
    //   ]) 
    useEffect(()=>{
       

//    console.log("Total number of days between dates :",date1,date2,localStorage.getItem('Difference_In_Days'),localStorage.getItem('MonthlyRent'),localStorage.getItem('Round'),localStorage.getItem('DueAmount'))
   
   

        // console.log("hii")
         getaddclient()
         getaddclientdetails()
         
     },[]);
// if(counter===0){
//     setCounter(localStorage.getItem('ind'))
// }
    const getaddclient = async(value) => {
        // console.log("hi")
           await API.get('/getClient')
            .then(function (response) {
              
                // console.log(response, "end");
                if (response.status == 200) {
                  setgetaddclient123(response.data.data);
                }
                
            })
            .catch(function (error) {

                console.log(error);
            })
    }



    


    const getaddclientdetails = async(value) => {
        // console.log("hi")
           await API.get('/getClientDetails')
            .then(function (response) {
              
                // console.log(response, "end");
                if (response.status == 200) {
                    setgetaddclient123details(response.data.data);
                }
                
            })
            .catch(function (error) {

                console.log(error);
            })
    }

    
  

  


 

  // Due Amount
//   var fromdate =  localStorage.getItem('FromDate')
//   var todate =  localStorage.getItem('ToDate')
//   var date1 = new Date(fromdate);
//   var date2 = new Date(todate);
    
  
//   var Difference_In_Time = date2.getTime() - date1.getTime();
    
  
//   var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

//    localStorage.setItem('Difference_In_Days', Difference_In_Days)
//   console.log("Total number of days between dates :",date1,date2)

//  var dueAmount = products.reduce((sum, i) => (
//     sum += i.count * i.price

  
//   ), 0)

// oneday rent amount 

// function getDaysInMonth(year, month) {
//     return new Date(year, month, 0).getDate();
//   }
  
//   const date = new Date();
//   const currentYear = date.getFullYear();
//   const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based
  

// const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);


// const day = localStorage.getItem('MonthlyRent')/daysInCurrentMonth
// const round =Math.round(day)
// localStorage.setItem('Round',round)
// console.log( "onedaysAmount",round);


{
console.log("getaddclient123details",getaddclient123details);}
{console.log("companyid",localStorage.getItem('CompanyID'))}



//invoice no
var fiscalyear = "";
    var today = new Date();
    if ((today.getMonth() + 1) <= 3) {
      fiscalyear = (today.getFullYear() - 1) + "-" + today.getFullYear()

    } else {
      fiscalyear = today.getFullYear() + "-" + (today.getFullYear() + 1)
    }
     localStorage.getItem('fiscalyear',fiscalyear)


//fincialyear data

const filter = getaddclient123.filter(getaddclient123 => {
    return getaddclient123.InvoiceNo === fiscalyear;
  });
console.log("filter",filter);

//fincialyear data last data only

const lastdata =getaddclient123[getaddclient123.length - 1]



         // same company product details filter 
         const filtered = getaddclient123details.filter(getaddclient123details => {
            return getaddclient123details.CompanyID === lastdata._id;
          });
// console.log("filtered",filtered);


//Total Amount
const total = filtered.reduce((prev,next) => prev + next.Amount,0);
// console.log("11111", total);

//invoice date
        

//dropdown get datas
        const fill = getaddclient123.filter(getaddclient123=>{
            return getaddclient123.Companyname===Companyname
        })

       
        const fillmonth =fill.filter(fill=>{
           return fill.Month===Month
        }
            )
           console.log("fill",fillmonth)

          

       
    return(
        <>
 

<div class="row">

               { console.log("Company",Companyname,Month)}
<form class=" row col-lg-12 needs-validation" novalidate >
        <div class="col-md-6 position-relative"  >
    <label for="validationTooltip04" ><b>Select CompanyName </b><span class="text-danger">*</span></label>
    <select class="form-control" id="validationTooltip04"  
    value={Companyname}  onChange={(e)=>setCompanyname(e.target.value)} 
    required>
     
      <option selected disabled value="" >--  Select Company --</option>
            {getaddclient123&&getaddclient123.map((val,ind)=>{
               

               console.log("val",val)
                return(
                    <>
                    
                     <option value={val.Companyname}  >{val.Companyname}</option>
                    
                    </>
                )
            })}
    </select>
    <p id='demo1' style={{color:"white" }}> </p>
    <div class="invalid-tooltip">
      Please select a valid CompanyName.
    </div>
  </div>
  <div class="col-md-6 position-relative"  >
    <label for="validationTooltip04" ><b>Select Month </b><span class="text-danger">*</span></label>
    <select class="form-control" id="validationTooltip04"  
    value={Month}  onChange={(e)=>setMonth(e.target.value)} 
    required>
     
      <option selected disabled value="" >--  Select Month --</option>
      <option value="January"  >January</option>
      <option value="February"  >February</option>
      <option value="March"  >March</option>
      <option value="April" >April</option>
      <option value="May"  >May</option>
      <option value="June"  >June</option>
      <option value="July"  >July</option>
      <option value="August"  >August</option>
      <option value="September"  >September</option>
      <option value="October"  >October</option>
      <option value="November"  >November</option>
      <option value="December"  >December</option>
    </select>
    <p id='demo1' style={{color:"white" }}> </p>
    <div class="invalid-tooltip">
      Please select a valid CompanyName.
    </div>
  </div>
 
  </form>
  </div>

  <div>
    <div style={{width:"200px",marginLeft:"800px"}}>
    <ReactToPrint
        trigger={()=>{
          return  <div ><button  class="btn btn-primary" style={{width:"200px"}}><FiPrinter style={{fontSize:"20px"}}/>   Print</button></div>
          
          

    }}
    content= {() =>componentRef.current}
    documentTitle='new document'
    pageStyle="Print"

    />
    </div>
        
    <div ref={componentRef} style={{}}>

    <div>
{fillmonth&&fillmonth.length>0&&fillmonth.map((val,index)=>{
           

           
//company product filter
const filtered = getaddclient123details.filter(getaddclient123details => {
               return getaddclient123details.CompanyID === val._id;
             });



//Total Amount
const total = filtered.reduce((prev,next) => prev + next.Amount,0);




 //from date,to date
 localStorage.setItem('createdDate',val.createdDate)
 var d = new Date(localStorage.getItem('createdDate'))
//  var d = val.createdDate

console.log("d",d);

 var monthhh =d.getMonth()+1
 var yearrr = d.getFullYear()
 
            function getDaysInMonth(year, month) {
             return new Date(year, month, 0).getDate();
            }
            var day =getDaysInMonth(yearrr,monthhh);


            var toddd = (d.getMonth()+1)+"-"+day+"-"+(d.getFullYear())
 
            localStorage.setItem('toddd', toddd)

            var fromddd =(d.getMonth()+1)+"-"+(d.getDate())+"-"+(d.getFullYear())
            localStorage.setItem('fromddd', fromddd)

//first count
 var date11 = new Date(localStorage.getItem('fromddd'));
   var date22 = new Date(localStorage.getItem('toddd'));
     
   
   var Difference_In_Times = date22.getTime() - date11.getTime();
     
   
   var Difference_In_Dayss = Difference_In_Times / (1000 * 3600 * 24);
 
//    second count
// var date1 = new Date(localStorage.getItem('fromdate'));
// var date2 = new Date(localStorage.getItem('todate'));
     
   
//    var Difference_In_Time = date2.getTime() - date1.getTime();
     
   
//    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
 
 
//  console.log("Difference_In_Days",Difference_In_Dayss,Difference_In_Days,toddd,d,localStorage.getItem('toddd'),localStorage.getItem('fromddd'));
 


const filtereddate = filtered.filter(filtered => {

    var date1 = new Date(filtered.FromDate);
    var date2 = new Date(filtered.ToDate);
         
       
       var Difference_In_Time = date2.getTime() - date1.getTime();
         
       
       var Difference_In_Daysss = Difference_In_Time / (1000 * 3600 * 24);


    return Difference_In_Dayss>Difference_In_Daysss

  });
console.log("filtereddate",filtereddate)

const filtereddates = filtered.filter(filtered => {

    var date1 = new Date(filtered.FromDate);
    var date2 = new Date(filtered.ToDate);
         
       
       var Difference_In_Time = date2.getTime() - date1.getTime();
         
       
       var Difference_In_Days123 = Difference_In_Time / (1000 * 3600 * 24);


    return Difference_In_Dayss<=Difference_In_Days123

  });
console.log("filtereddate",filtereddates)

           
// if(Difference_In_Dayss<=Difference_In_Days){
    return(

        <>
         
         <div style={{}}>

        

             <div style={{border:"1px solid gray"}}>
             <div style={{display:"flex",flexDirection:"row",marginTop:"50px",height:"130px",marginBottom:"20px",marginLeft:"5px",backgroundColor:"rgb(218,236,250)"}}>
        <div> <img style={{width:"50%",height:"70%",marginLeft:"40px",marginTop:"15px",borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlABIEPOyTnCC1sSFzIg_6E4o_3fpJ9e-Erw&usqp=CAU"/></div>
       <div style={{marginTop:"30px"}}>
       <div style={{fontSize:"25px",color:"black",marginLeft:"50px"}}><b>COMTAL TECHNOLOGIES</b></div>
       <div style={{fontSize:"15px",color:"black",marginLeft:"20px"}}>NO.41/2,42/2,2nd cross street,Thiru VI GA Thundalam,chenni,Tamil/Nadu,600011</div>
       <div style={{fontSize:"12px",color:"black",marginLeft:"30px"}}>Email-helpdesk @ comtal.in,Mobile-+919042574600,Web-WWW.comtal,in </div>
    
       </div>
        </div>
      
   
     <div style={{ display:"flex",flexDirection:"row"}}>
     <div style={{float:"left",marginLeft:"10px",fontSize:"18px"}}>
    <p>
    <h5>TO:-</h5>

        <h5 style={{marginLeft:"22px"}}>{val.Companyname}</h5>
        <h5 style={{marginLeft:"22px"}}>{val.Companyaddress1}</h5>
        <h5 style={{marginLeft:"22px"}}>{val.Companyaddress2}</h5>
        <h5 style={{marginLeft:"22px",marginBottom:"20px"}}>{val.Companyaddress3}</h5>
        <h5 style={{marginLeft:"22px"}}>GST  :  <b>{val.Gst}</b>  </h5>
         </p>
    </div>
         <div style={{float:"right",marginLeft:"580px",marginBottom:"50px"}}>
            <h1 style={{fontSize:"22px"}}><b>Rental Invioce</b></h1>
            <h4>Invoice Date   {val.InvoiceDate}</h4>
            <h4 >Invoice No  {val.InvoiceNo} C/CT-{val.counter} </h4>
            <h4>Po No  </h4>
            <h4>GST NO   <b>{val.InvoiceGst}</b> </h4>

         </div>
     </div>
   



    {filtereddates&&filtereddates.length>0? 
    <>
    <div  style={{display:"flex",flexDirection:"row"}}>
     <div>  <b>Rental changes From : {(d.getDate())+"-"+(d.getMonth()+1)+"-"+(d.getFullYear())} To : {day+"-"+(d.getMonth()+1)+"-"+(d.getFullYear())}</b></div><div style={{fontSize:18,marginLeft:"400px"}}><b>Due Date : {val.DueDate}  </b></div>
     </div>
    </>
   
:<div style={{fontSize:18,marginLeft:"700px"}}><b>Due Date : {val.DueDate}  </b></div>}

       


         <table style={{width:"100%"}}>
             
             <tr>
                 <th style={{width:"5%"}}><b>S/NO</b></th>
                 <th><b>DC NO</b></th>
                 <th><b>Descriptions</b></th>
                 <th><b>Serial No</b></th>
                 <th><b>Due Amount</b></th>
                 <th><b>Amout</b></th>
                 </tr>
                
                 {filtereddates&&filtereddates.map((value,ind)=>{

let fromdd = new Date(value.FromDate)
let tdd =new Date(value.ToDate)
let fromm =(fromdd.getDate())+"-"+(fromdd.getMonth()+1 )+"-"+(fromdd.getFullYear())
let too =(tdd.getDate())+"-"+(tdd.getMonth()+1 )+"-"+(tdd.getFullYear())
console.log("f",fromdd,fromm,value.FromDate,tdd,too)


return(

    <>
   
     <tr>
 <td>
   
  {ind+1}
 </td>
 <td>{value.DocumentNo}</td>
 <td>{value.Decription}</td>
 <td> {value.SerialNo}</td>
 <td>
    {value.DueAmount}
</td>
 <td>
 {value.Amount} 
 </td> 


</tr>
    </>
)
})}


{filtereddate&&filtereddate.map((value,ind)=>{

    let fromd = new Date(value.FromDate)
 let td =new Date(value.ToDate)
let from =(fromd.getDate())+"-"+(fromd.getMonth()+1 )+"-"+(fromd.getFullYear())
let to =(td.getDate())+"-"+(td.getMonth()+1 )+"-"+(td.getFullYear())
console.log("f",fromd,from,value.FromDate,td,to)


    return(

        <>
        <tr >
            <td colSpan={6}>
            {from} To {to}
            </td>
         
        </tr>
         <tr>
     <td>
       
      {ind+1}
     </td>
     <td>{value.DocumentNo}</td>
     <td>{value.Decription}</td>
     <td> {value.SerialNo}</td>
     <td>
        {value.DueAmount}
    </td>
     <td>
     {value.Amount} 
     </td> 
    
    
 </tr>
        </>
    )
})}
                {/* //    if(Difference_In_Dayss>Difference_In_Days){
                    
                   
                    // }else{
                    //     return(

                    //         <>
                           
                    //          <tr>
                    //      <td>
                           
                    //       {ind+1}
                    //      </td>
                    //      <td>{value.DocumentNo}</td>
                    //      <td>{value.Decription}</td>
                    //      <td> {value.SerialNo}</td>
                    //      <td>
                    //         {value.DueAmount}
                    //     </td>
                    //      <td>
                    //      {value.Amount} 
                    //      </td> 
                        
                        
                    //  </tr>
                    //         </>
                    //     )
                    // } */}
                    
              
              
                 <tr>
<td colSpan={4} rowSpan={4}>

</td>
<td>Sub Total</td>
<td>
{total}
</td>
</tr>
<tr>

</tr>
<tr>

</tr>
<tr>

<td>Others</td>
<td>
  -
</td>
</tr>
<tr>
<td colSpan={4}>
SAC CODE 997315 HSN CODE 84711000
</td>
<td>Grand Total</td>
<td>
{total}
</td>
</tr>
<tr style={{fontSize:"15px",margin:"0px",padding:"0px"}} >
<td colSpan={4}   >
Terms & Conditions:<br/>
1. The above goods are given on rental basic & returnable<br/>
2. Any loss or damage due to any reson  shall be borne by the customer<br/>
3. Tny clarifications in the bill to be informed within 2 days
</td>
<td colSpan={2} >for COMTAL TECHNOLOGIES</td>

</tr>

         </table>
             </div>
        
        

       
    </div>
        </>
       ) 
// }
// else{
//     return(

//         <>
         
//          <div style={{}}>

        

//              <div style={{border:"1px solid gray"}}>
//              <div style={{display:"flex",flexDirection:"row",marginTop:"50px",height:"130px",marginBottom:"20px",backgroundColor:"rgb(218,236,250)"}}>
//         <div> <img style={{width:"50%",height:"70%",marginLeft:"50px",marginTop:"15px",borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlABIEPOyTnCC1sSFzIg_6E4o_3fpJ9e-Erw&usqp=CAU"/></div>
//        <div style={{marginTop:"30px"}}>
//        <div style={{fontSize:"25px",color:"black",marginLeft:"50px"}}><b>COMTAL TECHNOLOGIES</b></div>
//        <div style={{fontSize:"15px",color:"black",marginLeft:"20px"}}>NO.41/2,42/2,2nd cross street,Thiru VI GA Thundalam,chenni,Tamil/Nadu,600011</div>
//        <div style={{fontSize:"12px",color:"black",marginLeft:"30px"}}>Email-helpdesk @ comtal.in,Mobile-+919042574600,Web-WWW.comtal,in </div>
    
//        </div>
//         </div>
      
   
//      <div style={{ display:"flex",flexDirection:"row"}}>
//      <div style={{float:"left",marginLeft:"10px",fontSize:"18px"}}>
//     <p>
//     <h5>TO:-</h5>

//         <h5 style={{marginLeft:"22px"}}>{val.Companyname}</h5>
//         <h5 style={{marginLeft:"22px"}}>{val.Companyaddress1}</h5>
//         <h5 style={{marginLeft:"22px"}}>{val.Companyaddress2}</h5>
//         <h5 style={{marginLeft:"22px",marginBottom:"20px"}}>{val.Companyaddress3}</h5>
//         <h5 style={{marginLeft:"22px"}}>GST  :  <b>{val.Gst}</b>  </h5>
//          </p>
//     </div>
//          <div style={{float:"right",marginLeft:"580px",marginBottom:"50px"}}>
//             <h1 style={{fontSize:"22px"}}><b>Rental Invioce</b></h1>
//             <h4>Invoice Date   {val.InvoiceDate}</h4>
//             <h4 >Invoice No  {val.InvoiceNo} C/CT-{index+1} </h4>
//             <h4>Po No  </h4>
//             <h4>GST NO   <b>{val.InvoiceGst}</b> </h4>

//          </div>
//      </div>
   



// {/* <div>  <b>Rental changes From : {fromdate} To : {todate}</b></div> */}
//         <div style={{fontSize:18,marginLeft:"800px"}}><b>Due Date : {val.DueDate}  </b></div>
//          <table style={{width:"100%"}}>
             
//              <tr>
//                  <th style={{width:"5%"}}><b>S/NO</b></th>
//                  <th><b>DC NO</b></th>
//                  <th><b>Descriptions</b></th>
//                  <th><b>Serial No</b></th>
//                  <th><b>Due Amount</b></th>
//                  <th><b>Amout</b></th>
//                  </tr>
                
//                  {filtered&&filtered.length>0 &&filtered.map((value,ind)=>{

//                     localStorage.setItem('ind', ind+1)
                   
                   
//                     return(

//                         <>
//                         <tr>
//                          {value.FromDate} To {value.ToDate}
//                         </tr>
//                          <tr>
//                      <td>
                       
//                       {ind+1}
//                      </td>
//                      <td>{value.DocumentNo}</td>
//                      <td>{value.Decription}</td>
//                      <td> {value.SerialNo}</td>
//                      <td>
//                         {value.DueAmount}
//                     </td>
//                      <td>
//                      {value.Amount} 
//                      </td> 
                    
                    
//                  </tr>
//                         </>
//                     )
                
                    
//                  })}
              
//                  <tr>
// <td colSpan={4} rowSpan={4}>

// </td>
// <td>Sub Total</td>
// <td>
// {total}
// </td>
// </tr>
// <tr>

// </tr>
// <tr>

// </tr>
// <tr>

// <td>Others</td>
// <td>
//   -
// </td>
// </tr>
// <tr>
// <td colSpan={4}>
// SAC CODE 997315 HSN CODE 84711000
// </td>
// <td>Grand Total</td>
// <td>
// {total}
// </td>
// </tr>
// <tr style={{fontSize:"15px",margin:"0px",padding:"0px"}} >
// <td colSpan={4}   >
// Terms & Conditions:<br/>
// 1. The above goods are given on rental basic & returnable<br/>
// 2. Any loss or damage due to any reson  shall be borne by the customer<br/>
// 3. Tny clarifications in the bill to be informed within 2 days
// </td>
// <td colSpan={2} >for COMTAL TECHNOLOGIES</td>

// </tr>

//          </table>
//              </div>
        
        

       
//     </div>
//         </>
//        ) 
// }

//           return(

//            <>
            
//             <div style={{}}>

           

//                 <div style={{border:"1px solid gray"}}>
//                 <div style={{display:"flex",flexDirection:"row",marginTop:"50px",height:"130px",marginBottom:"20px",backgroundColor:"rgb(218,236,250)"}}>
//            <div> <img style={{width:"50%",height:"70%",marginLeft:"50px",marginTop:"15px",borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlABIEPOyTnCC1sSFzIg_6E4o_3fpJ9e-Erw&usqp=CAU"/></div>
//           <div style={{marginTop:"30px"}}>
//           <div style={{fontSize:"25px",color:"black",marginLeft:"50px"}}><b>COMTAL TECHNOLOGIES</b></div>
//           <div style={{fontSize:"15px",color:"black",marginLeft:"20px"}}>NO.41/2,42/2,2nd cross street,Thiru VI GA Thundalam,chenni,Tamil/Nadu,600011</div>
//           <div style={{fontSize:"12px",color:"black",marginLeft:"30px"}}>Email-helpdesk @ comtal.in,Mobile-+919042574600,Web-WWW.comtal,in </div>
       
//           </div>
//            </div>
         
      
//         <div style={{ display:"flex",flexDirection:"row"}}>
//         <div style={{float:"left",marginLeft:"10px",fontSize:"18px"}}>
//        <p>
//        <h5>TO:-</h5>

//            <h5 style={{marginLeft:"22px"}}>{val.Companyname}</h5>
//            <h5 style={{marginLeft:"22px"}}>{val.Companyaddress1}</h5>
//            <h5 style={{marginLeft:"22px"}}>{val.Companyaddress2}</h5>
//            <h5 style={{marginLeft:"22px",marginBottom:"20px"}}>{val.Companyaddress3}</h5>
//            <h5 style={{marginLeft:"22px"}}>GST  :  <b>{val.Gst}</b>  </h5>
//             </p>
//        </div>
//             <div style={{float:"right",marginLeft:"580px",marginBottom:"50px"}}>
//                <h1 style={{fontSize:"22px"}}><b>Rental Invioce</b></h1>
//                <h4>Invoice Date   {val.InvoiceDate}</h4>
//                <h4 >Invoice No  {val.InvoiceNo} C/CT-{index+1} </h4>
//                <h4>Po No  </h4>
//                <h4>GST NO   <b>{val.InvoiceGst}</b> </h4>

//             </div>
//         </div>
      



// <div>  <b>Rental changes From : {(d.getDate())+"-"+(d.getMonth()+1)+"-"+(d.getFullYear())} To : {day+"-"+(d.getMonth()+1)+"-"+(d.getFullYear())}</b></div>
//            <div style={{fontSize:18,marginLeft:"800px"}}><b>Due Date : {val.DueDate}  </b></div>
//             <table style={{width:"100%"}}>
                
//                 <tr>
//                     <th style={{width:"5%"}}><b>S/NO</b></th>
//                     <th><b>DC NO</b></th>
//                     <th><b>Descriptions</b></th>
//                     <th><b>Serial No</b></th>
//                     <th><b>Due Amount</b></th>
//                     <th><b>Amout</b></th>
//                     </tr>
                   
//                     {filtered&&filtered.length>0 &&filtered.map((value,ind)=>{

//                        localStorage.setItem('ind', ind+1)
                      
                      
//                        return(

//                            <>
//                            <tr>
//                             {value.FromDate} To {value.ToDate}
//                            </tr>
//                             <tr>
//                         <td>
                          
//                          {ind+1}
//                         </td>
//                         <td>{value.DocumentNo}</td>
//                         <td>{value.Decription}</td>
//                         <td> {value.SerialNo}</td>
//                         <td>
//                            {value.DueAmount}
//                        </td>
//                         <td>
//                         {value.Amount} 
//                         </td> 
                       
                       
//                     </tr>
//                            </>
//                        )
                   
                       
//                     })}
                 
//                     <tr>
//    <td colSpan={4} rowSpan={4}>

//    </td>
//    <td>Sub Total</td>
//    <td>
// {total}
//    </td>
// </tr>
// <tr>
  
// </tr>
// <tr>

// </tr>
// <tr>
  
//    <td>Others</td>
//    <td>
//      -
//    </td>
// </tr>
// <tr>
//    <td colSpan={4}>
// SAC CODE 997315 HSN CODE 84711000
//    </td>
//    <td>Grand Total</td>
//    <td>
// {total}
//    </td>
// </tr>
// <tr style={{fontSize:"15px",margin:"0px",padding:"0px"}} >
//    <td colSpan={4}   >
// Terms & Conditions:<br/>
// 1. The above goods are given on rental basic & returnable<br/>
// 2. Any loss or damage due to any reson  shall be borne by the customer<br/>
// 3. Tny clarifications in the bill to be informed within 2 days
//    </td>
//    <td colSpan={2} >for COMTAL TECHNOLOGIES</td>

// </tr>

//             </table>
//                 </div>
           
           

          
//        </div>
//            </>
//           ) 
       })}
</div>
    </div>
    
  
      </div>

{/* {fillmonth? 
    <div>
{fillmonth&&fillmonth.length>0&&fillmonth.map((val,index)=>{
           

           
           //company product filter
           const filtered = getaddclient123details.filter(getaddclient123details => {
                          return getaddclient123details.CompanyID === val._id;
                        });
           
           
           
           //Total Amount
           const total = filtered.reduce((prev,next) => prev + next.Amount,0);
           
           
           
           //invoice date
                      const d = new Date();
           
           
           
                      
           
           
                     return(
           
                      <>
                       
                       <div style={{}}>
           
                      
           
                           <div style={{border:"1px solid gray"}}>
                           <div style={{display:"flex",flexDirection:"row",marginTop:"50px",height:"160px",marginBottom:"20px",backgroundColor:"rgb(218,236,250)"}}>
                      <div> <img style={{width:"50%",height:"80%",marginLeft:"50px",marginTop:"15px",borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO--Si-m6-6ykHiVYAdQ3-OQbFL2i-jL7cQ&usqp=CAU"/></div>
                     <div style={{marginTop:"30px"}}>
                     <div style={{fontSize:"25px",color:"black",marginLeft:"50px"}}><b>COMTAL TECHNOLOGIES</b></div>
                     <div style={{fontSize:"15px",color:"black",marginLeft:"20px"}}>NO.41/2,42/2,2nd cross street,Thiru VI GA Thundalam,chenni,Tamil/Nadu,600011</div>
                     <div style={{fontSize:"12px",color:"black",marginLeft:"30px"}}>Email-helpdesk @ comtal.in,Mobile-+919042574600,Web-WWW.comtal,in </div>
                  
                     </div>
                      </div>
                    
                 
                   <div style={{ display:"flex",flexDirection:"row"}}>
                   <div style={{float:"left",marginLeft:"10px",fontSize:"18px"}}>
                  <p>
                  <h5>TO:-</h5>
           
                      <h5 style={{marginLeft:"22px"}}>{val.Companyname}</h5>
                      <h5 style={{marginLeft:"22px"}}>{val.Companyaddress1}</h5>
                      <h5 style={{marginLeft:"22px"}}>{val.Companyaddress2}</h5>
                      <h5 style={{marginLeft:"22px",marginBottom:"20px"}}>{val.Companyaddress3}</h5>
                      <h5 style={{marginLeft:"22px"}}>GST  :  <b>{val.Gst}</b>  </h5>
                       </p>
                  </div>
                       <div style={{float:"right",marginLeft:"580px",marginBottom:"50px"}}>
                          <h1 style={{fontSize:"22px"}}><b>Rental Invioce</b></h1>
                          <h4>Invoice Date   {val.InvoiceDate}</h4>
                          <h4 >Invoice No  {val.InvoiceNo} C/CT-{index+1} </h4>
                          <h4>Po No  </h4>
                          <h4>GST NO   <b>{val.InvoiceGst}</b> </h4>
           
                       </div>
                   </div>
                 
           
           
           
           <div>  <b>Rental changes </b></div>
                      <div style={{fontSize:18,marginLeft:"800px"}}><b>Due Date : {val.DueDate}  </b></div>
                       <table style={{width:"100%"}}>
                           
                           <tr>
                               <th style={{width:"5%"}}><b>S/NO</b></th>
                               <th><b>DC NO</b></th>
                               <th><b>Descriptions</b></th>
                               <th><b>Serial No</b></th>
                               <th><b>Due Amount</b></th>
                               <th><b>Amout</b></th>
                               </tr>
                              
                               {filtered&&filtered.length>0 &&filtered.map((value,ind)=>{
           
                                  localStorage.setItem('ind', ind+1)
                                 
                                 
                                  return(
           
                                      <>
                                      <tr>
                                       {}
                                      </tr>
                                       <tr>
                                   <td>
                                     
                                    {ind+1}
                                   </td>
                                   <td>{value.DocumentNo}</td>
                                   <td>{value.Decription}</td>
                                   <td> {value.SerialNo}</td>
                                   <td>
                                      {value.DueAmount}
                                  </td>
                                   <td>
                                   {value.Amount} 
                                   </td> 
                                  
                                  
                               </tr>
                                      </>
                                  )
                              
                                  
                               })}
                            
                               <tr>
              <td colSpan={4} rowSpan={4}>
           
              </td>
              <td>Sub Total</td>
              <td>
           {total}
              </td>
           </tr>
           <tr>
             
           </tr>
           <tr>
           
           </tr>
           <tr>
             
              <td>Others</td>
              <td>
                -
              </td>
           </tr>
           <tr>
              <td colSpan={4}>
           SAC CODE 997315 HSN CODE 84711000
              </td>
              <td>Grand Total</td>
              <td>
           {total}
              </td>
           </tr>
           <tr style={{fontSize:"15px",margin:"0px",padding:"0px"}} >
              <td colSpan={4}   >
           Terms & Conditions:<br/>
           1. The above goods are given on rental basic & returnable<br/>
           2. Any loss or damage due to any reson  shall be borne by the customer<br/>
           3. Tny clarifications in the bill to be informed within 2 days
              </td>
              <td colSpan={2} >for COMTAL TECHNOLOGIES</td>
           
           </tr>
           
                       </table>
                           </div>
                      
                      
           
                     
                  </div>
                      </>
                     ) 
                  })}
</div>
:""} */}


       



     
            
           
  
     
        </>
    )
}


export default Generateinvoice;