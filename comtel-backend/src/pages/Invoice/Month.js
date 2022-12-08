import React, { useState , useEffect } from 'react';

import Monthstyle from './Monthstyle.css'
import { useHistory } from 'react-router-dom';



const Month = () =>{
    const history = useHistory();
 
    const [activecolor,setactivecolor]=useState("");
   
    
    const handleoption = path =>{
        history.push (path);
    }
  
const handlecolor1=()=>{
    console.log("handlecolor1")
if(activecolor==""){
    setactivecolor('green')
 }
    else{
        setactivecolor('')
      
    }
}


const myFunction=($value)=>
{       
    if($value=="")
    {document.getElementById("selectBox").innerHTML = "";}
    else if($value=="Active")
    {document.getElementById("selectBox").innerHTML = "green";}
     else if($value=="Pending")
    {document.getElementById("selectBox").innerHTML = "red";}
}

    return(
        <>
        <div>
<table>
    <tr>
        <th colspan="4" id="head">Pending</th>
       
    </tr>
    <tr>
    <th> SI.no</th>
    <th>Client name</th>
    <th>Company name</th>
    <th>Status</th>
    </tr>
    <tr>
    <td > </td>
    <td></td>
    <td></td>
    <td> <select id="selectBox" onchange={(value)=>myFunction(value)}>
                <option value=''></option>
                <option value='Active'>Active</option>
                <option value='Pending'>Pending</option> 
            </select></td>
   
    </tr>
    <tr>
    <td > </td>
    <td></td>
    <td></td>
    <td> <select>
                <option value=''></option>
                <option value='Active'>Active</option>
                <option value='Pending'>Pending</option> 
            </select></td>
   
    </tr>
    <tr>
    <td > </td>
    <td></td>
    <td></td>
    <td> <select>
                <option value=''></option>
                <option value='Active'>Active</option>
                <option value='Pending'>Pending</option> 
            </select></td>
    </tr>


    <tr>
    <th colspan="4" id="head"> Accepted</th>
   
    </tr>

    <tr>
    <th> SI.no</th>
    <th>Client name</th>
    <th>Company name</th>
    <th>Status</th>
    </tr>

    <tr>
    <td > </td>
    <td></td>    
    <td></td>
    <td> <select  onClick={(e)=>handlecolor1()} style={{color:activecolor,borderColor:activecolor}}>
                <option value=''></option>
                <option  value="Active">Active</option>
                <option value='Pending'>Pending</option>
            </select></td>
    </tr>
    <tr>
    <td > </td>
    <td></td>
    <td></td>
    <td> <select>
                <option value=''></option>
                <option value='Active'>Active</option>
                <option value='Pending'>Pending</option> 
            </select></td>
    </tr>
    <tr>
    <td > </td>
    <td></td>
    <td></td>
    <td> <select >
                <option value=''></option>
                <option  value='Active'>Active</option>
                <option  value='Pending'>Pending</option>
            </select></td>
    </tr>
  
</table>
<button class="btn btn-primary " style={{marginLeft:"90%", color:"white", width:"100px", borderRadius:"50px", border:"none", padding:"5px"}} onClick={()=>handleoption('/Option1')}>Back</button>
        </div>
      
        </>
         
    )
}
export default Month;


