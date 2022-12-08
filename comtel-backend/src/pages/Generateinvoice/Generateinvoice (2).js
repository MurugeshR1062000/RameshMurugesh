import {React} from 'react';
// import Invoice from './Invioce.css'
import Computer from '../../Images123/Computer.jpg'


const Generateinvoice = () =>{


    return(
        <>
        <div style={{border:"1px solid black"}}>
            <div style={{display:"flex",flexDirection:"row",marginTop:"50px",height:"150px",marginBottom:"20px",backgroundColor:"rgb(218,236,250)"}}>
            <div> <img style={{width:"60%",height:"80%",marginLeft:"110px",marginTop:"15px",borderRadius:"10px"}} src={Computer}/></div>
           <div style={{marginleft:"10px",marginLeft:"5px"}}>
           <div style={{fontSize:"50px",color:"black",marginLeft:"140px"}}><b>COMTAL TECHNOLOGIES</b></div>
           <div style={{fontSize:"23px",color:"black",marginLeft:"90px"}}>NO.41/2,42/2,2nd cross street,Thiru VI GA Thundalam,chenni,Tamil/Nadu,600011</div>
           <div style={{fontSize:"21px",color:"black",marginLeft:"120px"}}>Email-helpdesk @ comtal.in,Mobile-+919042574600,Web-WWW.comtal,in </div>
         <h5></h5>
           </div>
            </div>
          
       
         <div style={{ display:"flex",flexDirection:"row"}}>
         <div style={{float:"left",marginLeft:"10px",fontSize:"18px"}}>
        <p>
        <h5>TO:-</h5>
            <h5>pasumi indai</h5>
            <h5>31/6,Amrutha colony,Voc street,kaikaankuppam</h5>
            <h5>Valasaravakkam,chennai</h5>
             </p>
        </div>
             <div style={{float:"right",marginLeft:"650px",marginBottom:"50px"}}>
                <h1 style={{fontSize:"22px"}}><b>Rental Invioce</b></h1>
                <h4>Invoice Date   02-03-2022</h4>
                <h4>Invoice No   2021-2022/CT-100</h4>
                <h5>Po No</h5>
                <h3>GST NO   33AAPFCOO12RIZF</h3>
              
             </div>
         </div>
       

{/* <div> */}

{/* <div>  <b>Rental changes from : 01-02-2022 To : 28-02-2022</b></div> */}
            
             <table style={{width:"100%"}}>
                 {/* <tr style={{ border:"none",fontSize:"18px"}}>
               
                 </tr> */}
                 {/* <div > */}
                 <tr>
                     <th style={{width:"5%"}}><b>S/NO</b></th>
                     <th><b>DC NO</b></th>
                     <th><b>Descriptions</b></th>
                     <th><b>Serial No</b></th>
                     <th><b>Due Amount</b></th>
                     <th><b>Amout</b></th>
                     </tr>
                     <tr>
                         <td>1</td>
                         <td>65</td>
                         <td>DELL 7040</td>
                         <td> 89XDHB2</td>
                         <td>4100</td>
                         <td>4100</td>
                     </tr>
                     <tr>
                         <td>2</td>
                         <td>65</td>
                         <td>DELL7040</td>
                         <td>7674TD2</td>
                         <td>4100</td>
                         <td>4100</td>
                     </tr>
                     <tr>
                         <td>3</td>
                         <td>65</td>
                         <td>TV</td>
                         <td>ME</td>
                         <td>1000</td>
                         <td>1000</td>
                     </tr>
                     <tr>
                         <td>4</td>
                         <td>66</td>
                         <td>DELL 7040</td>
                         <td>2RL3VG2</td>
                         <td>2900</td>
                         <td>2900</td>
                     </tr>
                     <tr>
                         <td>5</td>
                         <td>66</td>
                         <td>DELL 7040</td>
                         <td>2S62VG2</td>
                         <td>2900</td>
                         <td>2900</td>
                     </tr>
                     <tr>
                         <td>6</td>
                         <td>66</td>
                         <td>DEll 7040</td>
                         <td>JDOOSD2</td>
                         <td>2900</td>
                         <td>2900</td>
                     </tr>
                     <tr>
                         <td>7</td>
                         <td>66</td>
                         <td>DELL7040</td>
                         <td>FD1YB02</td>
                         <td>2900</td>
                         <td>2900</td>
                     </tr>
<tr>
    <td colSpan={6}>
23-02-2022 to 28-02-2022
    </td>
</tr>
<tr>
                         <td>8</td>
                         <td>85</td>
                         <td>DELL E5250</td>
                         <td>CTY2662</td>
                         <td>1800</td>
                         <td>321</td>
                     </tr>
                     <tr>
    <td colSpan={4} rowSpan={4}>

    </td>
    <td>Sub Total</td>
    <td>
21121
    </td>
</tr>
<tr>
    {/* <td colSpan={4}>

    </td> */}
    <td>SGST 9%</td>
    <td>

    </td>
</tr>
<tr>
    {/* <td colSpan={4}>

    </td> */}
    <td>CGST 9%</td>
    <td>

    </td>
</tr>
<tr>
    {/* <td colSpan={4}>

    </td> */}
    <td>Others</td>
    <td>

    </td>
</tr>
<tr>
    <td colSpan={4}>
SAC CODE 997315 HSN CODE 84711000
    </td>
    <td>Grand Total</td>
    <td>
21121
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
{/* </div> */}

             </table>
             {/* </div> */}
        </div>
        </>
    )
}


export default Generateinvoice;