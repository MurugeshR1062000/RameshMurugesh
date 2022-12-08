import React from 'react';
import PendingClientDetailsStyle from './PendingClientDetailsStyle.css';
//import image from "../../../components/image/abi.jpg";
import image1 from "../image/ams.jpg";
import image2 from "../image/jjabirami.jpg";
//import image3 from "../../../components/image/murugesh.jpg";
import image4 from "../image/r.murugeswari.jpg";
import image5 from "../image/sepasthi.jpg";
import image6 from "../image/sugi.jpg";
//import image7 from "../../../components/image/sumi.jpg";

const PendingClientDetails = () =>{

    return(
        <>
        <div>
            <h4 style={{fontSize:"22px",color:"black",marginBottom:"25px"}}><b>Pending Client Name</b></h4>
<table>
    <tr>
        <th>Images</th>
        <th>Period 1</th>
        <th>Period 2</th>
        <th>Period 3</th>
        <th>Period 4</th>
        <th>Period 5</th>
        <th>Period 6</th>
        <th> Action</th>
    </tr>
    <tr>
    <td> <a href='/Images1'><img src={image1} style={{ height:"50px",width:"15%", borderRadius:"150%",float:"left"}}></img></a>
          <h5 style={{float:"center",marginTop:"5px"}}>Bugatti Veyron Super Sport</h5>
          <h6 style={{float:"center"}}> Alsace, France</h6>
    </td>
    <td>tamil</td>
    <td>english</td>
    <td>maths</td>
    <td>physics</td>
    <td>chemistry</td>
    <td>biolegy</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
    <tr>
    <td> <a href='/Images1'><img src={image2} style={{ height:"50px",width:"15%", borderRadius:"150%",float:"left"}}></img></a>
          <h5 style={{float:"center", marginTop:"5px"}}>Koenigsegg CCX</h5>
          <h6 style={{float:"center"}}> Sweden</h6>
    </td>
    <td >maths</td>
    <td>chemistry</td>
    <td>biolegy</td>
    <td>physics</td>
    <td>english</td>
    <td>tamil</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
    <tr>
    <td> <a href='/Images1'><img src={image4} style={{ height:"50px",width:"15%", borderRadius:"150%",float:"left"}}></img></a>
          <h5 style={{float:"center", marginTop:"5px"}}>Saleen S7</h5>
          <h6 style={{float:"center"}}> United States</h6>
    </td>
    <td>chemistry</td>
    <td>maths</td>
    <td>physics</td>
    <td>biolegy</td>
    <td>tamil</td>
    <td>english</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
    <tr>
    <td> <a href='/Images1'><img src={image5} style={{ height:"50px",width:"15%", borderRadius:"150%",float:"left"}}></img></a>
          <h5 style={{float:"center", marginTop:"5px"}}>McLaren F1</h5>
          <h6 style={{float:"center"}}> England</h6>
    </td>
    <td>physics</td>
    <td>english</td>
    <td>maths</td>
    <td>chemistry</td>
    <td>tamil</td>
    <td>biolegy</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
    <tr>
    <td> <a href='/Images1'><img src={image1} style={{ height:"50px",width:"15%", borderRadius:"150%",float:"left"}}></img></a>
          <h5 style={{float:"center", marginTop:"5px"}}>Ferrari Enzo</h5>
          <h6 style={{float:"center"}}> Italy</h6>
    </td>
    <td>biolegy</td>
    <td>tamil</td>
    <td>maths</td>
    <td>english</td>
    <td>chemistry</td>
    <td>physics</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
    <tr>
    <td> <a href='/Images1'><img src={image6} style={{ height:"50px",width:"15%", borderRadius:"150%",float:"left"}}></img></a>
          <h5 style={{float:"center", marginTop:"5px"}}>Pagani Zonda F Clubsport</h5>
          <h6 style={{float:"center"}}>Italy</h6>
    </td>
    <td>english</td>
    <td>physics</td>
    <td>tamil</td>
    <td>physics</td>
    <td>chemistry</td>
    <td>maths</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
    <tr>
    <td> <a href='/Images1'><img src={image2} style={{ height:"50px",width:"15%", borderRadius:"150%",float:"left"}}></img></a>
          <h5 style={{float:"center", marginTop:"5px"}}>SSC Ultimate Aero TT  TopSpeed</h5>
          <h6 style={{float:"center"}}> United States</h6>
    </td>
    <td>tamil</td>
    <td>english</td>
    <td>maths</td>
    <td>physics</td>
    <td>chemistry</td>
    <td>biolegy</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
    <tr>
    <td> <a href='/Images1'><img src={image4} style={{ height:"50px",width:"15%", borderRadius:"150%",float:"left"}}></img></a>
          <h5 style={{float:"center", marginTop:"5px"}}>Zendaya Grace</h5>
          <h6 style={{float:"center"}}>France</h6>
    </td>
    <td>maths</td>
    <td>chemistry</td>
    <td>biolegy</td>
    <td>physics</td>
    <td>english</td>
    <td>tamil</td>
    <td> <select>
                <option value=''></option>
                <option value='Edit'>Edit</option>
                <option value='Delete'>Delete</option>
            </select></td>
    </tr>
   
</table>

        </div>
        </>
    )
}
export default PendingClientDetails;