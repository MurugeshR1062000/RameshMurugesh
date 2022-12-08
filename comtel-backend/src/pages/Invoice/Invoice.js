// import {React} from "react"
import Invoicestyle from './Invoice.css';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { API } from '../../../src/API/index';
import Swal from 'sweetalert2';

const Invoice = () =>{

    useEffect(()=>{
        console.log("hii",JSON.parse(localStorage.getItem('dates')))
        getinvoice()
     },[]);

     const[getinvoice123,setgetinvoice123]=useState([])
     const [deleteclient,setdeleteclient]=useState({
        _id:""
     })

     const getinvoice = async(value) => {
        console.log("hi")
        await API.get(`/getInvoice?fromdate=${JSON.parse(localStorage.getItem('dates')).fromdate}&todate=${JSON.parse(localStorage.getItem('dates')).todate}`)
            .then(function (response) {
                // handle success
                console.log(response, "end");
                if (response.status == 200) {
                 setgetinvoice123(response.data.data);
                }

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
  

    const history = useHistory();

    const handleliststyle = path =>{
        history.push (path);
    }

    const handleclick=(val)=>{
        // handleupdateclient()
        console.log("vkhkhgjgj",val)
        localStorage.setItem('Editinvoice',JSON.stringify(val))
        // history.push(path )
        history.push('/AddInvoice1');
     }

     const handleDeleteclient =async(val)=>{
        // console.log(val,_id)
         const { data } = await API.post('/deleteinvoice', val);
        console.log("datas12345",data)
     
     if(data.body.status==true) {
        Swal.fire({
           icon: 'success',
           iconColor: '#539920',
           title: data?.body.message,
           showConfirmButton: false,
           timer: 1800
         });
         getinvoice();
        //  history.push('/Home');
  
        //  localStorage.setItem('Admin', true);
     } else {
        Swal.fire({
           icon: 'warning',
           iconColor: '#dc3545',
           title: data?.body.message,
           showConfirmButton: false,
           timer: 1800
          });
     }
  }

    return(
        <>

 {/* genrerate page dropdown */}
{/* <div class="row">

               
<form class=" row col-lg-12 needs-validation" novalidate >
        <div class="col-md-6 position-relative"  style={{marginLeft:'200px',marginRight:"200px"}}>
    <label for="validationTooltip04" ><b>Select CompanyName </b><span class="text-danger">*</span></label>
    <select class="form-control" id="validationTooltip04"  
    value={addclient123.CompanyID}  onChange={(e)=>setaddclient123({...addclient123,CompanyID:e.target.value})} 
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
  <div class="col-md-6 position-relative"  style={{marginLeft:'200px',marginRight:"200px"}}>
    <label for="validationTooltip04" ><b>Select Month </b><span class="text-danger">*</span></label>
    <select class="form-control" id="validationTooltip04"  
    value={addclient123.CompanyID}  onChange={(e)=>setaddclient123({...addclient123,CompanyID:e.target.value})} 
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
  </div> */}

  {/* genrerate page invoice */}
{/* {filter&&filter.length>0&&filter.map((val,index)=>{
           



           const filtered = getaddclient123details.filter(getaddclient123details => {
               return getaddclient123details.CompanyID === val._id;
             });



//Total Amount
const total = filtered.reduce((prev,next) => prev + next.Amount,0);



//invoice date
           const d = new Date();



           


          return(
           <>
           
            <div style={{border:"1px solid black"}}>
           <div style={{display:"flex",flexDirection:"row",marginTop:"50px",height:"150px",marginBottom:"20px",backgroundColor:"rgb(218,236,250)"}}>
           <div> <img style={{width:"60%",height:"80%",marginLeft:"110px",marginTop:"15px",borderRadius:"10px"}} src={Computer}/></div>
          <div style={{}}>
          <div style={{fontSize:"50px",color:"black",marginLeft:"140px"}}><b>COMTAL TECHNOLOGIES</b></div>
          <div style={{fontSize:"23px",color:"black",marginLeft:"90px"}}>NO.41/2,42/2,2nd cross street,Thiru VI GA Thundalam,chenni,Tamil/Nadu,600011</div>
          <div style={{fontSize:"21px",color:"black",marginLeft:"120px"}}>Email-helpdesk @ comtal.in,Mobile-+919042574600,Web-WWW.comtal,in </div>
       
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
            <div style={{float:"right",marginLeft:"650px",marginBottom:"50px"}}>
               <h1 style={{fontSize:"22px"}}><b>Rental Invioce</b></h1>
               <h4>Invoice Date   {val.InvoiceDate}</h4>
               <h4 >Invoice No  {val.InvoiceNo} C/CT-{index+1} </h4>
               <h4>Po No  </h4>
               <h4>GST NO   <b>{val.InvoiceGst}</b> </h4>
{filter.length}
            </div>
        </div>
      



<div>  <b>Rental changes from : 01-02-2022 To : 28-02-2022</b></div>
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
           </>
          ) 
       })} */}
      
{/* last invoice data */}

{/*  <div style={{border:"1px solid black"}}>
     <div style={{display:"flex",flexDirection:"row",marginTop:"50px",height:"150px",marginBottom:"20px",backgroundColor:"rgb(218,236,250)"}}>
     <div> <img style={{width:"60%",height:"80%",marginLeft:"110px",marginTop:"15px",borderRadius:"10px"}} src={Computer}/></div>
    <div style={{}}>
    <div style={{fontSize:"50px",color:"black",marginLeft:"140px"}}><b>COMTAL TECHNOLOGIES</b></div>
    <div style={{fontSize:"23px",color:"black",marginLeft:"90px"}}>NO.4 1/2,42/2,2nd cross street,Thiru VI GA Thundalam,chenni,Tamil/Nadu,600011</div>
    <div style={{fontSize:"21px",color:"black",marginLeft:"120px"}}>Email-helpdesk @ comtal.in,Mobile-+919042574600,Web-WWW.comtal,in </div>
 
    </div>
     </div>
   

  <div style={{ display:"flex",flexDirection:"row"}}>
  <div style={{float:"left",marginLeft:"10px",fontSize:"18px"}}>
 <p>
 <h5>TO:-</h5>

     <h5 style={{marginLeft:"22px"}}>{lastdata.Companyname}</h5>
     <h5 style={{marginLeft:"22px"}}>{lastdata.Companyaddress1}</h5>
     <h5 style={{marginLeft:"22px"}}>{lastdata.Companyaddress2}</h5>
     <h5 style={{marginLeft:"22px",marginBottom:"20px"}}>{lastdata.Companyaddress3}</h5>
     <h5 style={{marginLeft:"22px"}}>GST  :  <b>{lastdata.Gst}</b>  </h5>
      </p>
 </div>
      <div style={{float:"right",marginLeft:"650px",marginBottom:"50px"}}>
         <h1 style={{fontSize:"22px"}}><b>Rental Invioce</b></h1>
         <h4>Invoice Date   {lastdata.InvoiceDate}</h4>
         <h4 >Invoice No  {lastdata.InvoiceNo} C/CT-{filter.length} </h4>
         <h4>Po No  </h4>
         <h4>GST NO   <b>{lastdata.InvoiceGst}</b> </h4>

      </div>
  </div>




<div>  <b>Rental changes from : 01-02-2022 To : 28-02-2022</b></div>
     <div style={{fontSize:18,marginLeft:"800px"}}><b>Due Date : {lastdata.DueDate}  </b></div>
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
    
 </div> */}
        <div>
        {console.log("getinvoice123",getinvoice123)}
        <div class="m-t-20 text-center">
               <button style={{marginLeft:"80%"}} onClick={()=>handleliststyle('/InvoiceCard')}  class="btn btn-primary">Back</button>
            </div>
        
            <div>
          
<table>
    <tr>
        <th>s.no</th>
       
        <th>Invoicedate</th>
        <th >Companyname</th>
        <th>Description</th>
        <th>Amount</th>
        <th>paymentstatus</th>
       
    </tr>
    {getinvoice123&&getinvoice123.map((val,ind)=>{
                console.log("val",val)
                return(
                    <>
    <tr>
    <td > <a href="/Option1">{ind+1}</a></td>
    <td>{val.Clientname}</td>
    <td>{val.invoiceamount}</td>
    <td>{val.invoicedate}</td>
    <td>{val.paymentstatus}</td>
    <td>
        <div >
    <div  class="menu-item"></div>
        <div class="dropdown-container" tabindex="-1">
          <div class="three-dots"></div>
          <div style={{marginRight:"310px",marginBottom:"50%"}} class="dropdown">
          {/* {console.log("val",val)} */}
         <div onClick={()=>handleclick(val)} style={{cursor: "pointer"}} ><i class="fa fa-pencil m-r-5"></i>Edit</div>
            <div onClick={()=>handleDeleteclient(val)}  style={{cursor: "pointer"}}><i class="fa fa-trash m-r-5"></i>Delete</div>
            
          </div>
        </div>
        </div>
    </td>
     </tr>
     </>
                )
            })}
   
</table>


                 
{/* <table>
    <tr>
        <th >option 1</th>
        <th>option 2</th>
        <th>option 3</th>
        <th>option 4</th>
        <th>option 5</th>
        <th>option 6</th>
        <th>
           Action
        </th>
    </tr>
    <tr>
    <td > <a href="/Option1">hiiii</a></td>
    <td>hello</td>
    <td>world</td>
    <td>oiiii</td>
    <td>flower</td>
    <td>nature</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
    <tr>
    <td > <a href="/Option1">hiiii</a></td>
    <td>hello</td>
    <td>world</td>
    <td>oiiii</td>
    <td>flower</td>
    <td>nature</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
    <tr>
    <td > <a href="/Option1">hiiii</a></td>
    <td>hello</td>
    <td>world</td>
    <td>oiiii</td>
    <td>flower</td>
    <td>nature</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
    <tr>
    <td > <a href="/Option1">hiiii</a></td>
    <td>hello</td>
    <td>world</td>
    <td>oiiii</td>
    <td>flower</td>
    <td>nature</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
    <tr>
    <td > <a href="/Option1">hiiii</a></td>
    <td>hello</td>
    <td>world</td>
    <td>oiiii</td>
    <td>flower</td>
    <td>nature</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
    <tr>
    <td > <a href="/Option1">hiiii</a></td>
    <td>hello</td>
    <td>world</td>
    <td>oiiii</td>
    <td>flower</td>
    <td>nature</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
    <tr>
    <td > <a href="/Option1">hiiii</a></td>
    <td>hello</td>
    <td>world</td>
    <td>oiiii</td>
    <td>flower</td>
    <td>nature</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
    <tr>
    <td > <a href="/Option1">hiiii</a></td>
    <td>hello</td>
    <td>world</td>
    <td>oiiii</td>
    <td>flower</td>
    <td>nature</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
    <tr>
    <td > <a href="/Option1">hiiii</a></td>
    <td>hello</td>
    <td>world</td>
    <td>oiiii</td>
    <td>flower</td>
    <td>nature</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
</table> */}
</div>

        </div>
        </>
    )
}
export default Invoice;