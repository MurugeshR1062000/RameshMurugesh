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
        <div>
        {console.log("getinvoice123",getinvoice123)}
        <div class="m-t-20 text-center">
               <button style={{marginLeft:"80%"}} onClick={()=>handleliststyle('/InvoiceCard')}  class="btn btn-primary">Back</button>
            </div>
        
            <div>
          
<table>
    <tr>
        <th>s.no</th>
        <th >Clientname</th>
        <th>Invoicedate</th>
        <th>Invoiceamount</th>
        <th>Paymentstatus</th>
        <th>Actions</th>
       
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