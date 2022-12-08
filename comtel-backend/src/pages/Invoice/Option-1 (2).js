import {React} from "react"
import Invoicestyle from './Invoice.css';
import Month from './Month'
import { useHistory } from 'react-router-dom';

const Option1 = () =>{

    const history = useHistory();

    const handleoption = path =>{
        history.push (path);
    }

    return(
        <>
        <div>
<table>
    <tr>
        <th >Month</th>
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
    <td > <a href="/Month">January</a></td>
  
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
    <td > <a href="/Month">February</a></td>
   
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
    <td > <a href="/Month">March</a></td>
   
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
    <td > <a href="/Month">April</a></td>
   
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
    <td > <a href="/Month">May</a></td>
   
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
    <td > <a href="/Month">Jun</a></td>

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
    <td > <a href="/Month">July</a></td>
    
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
    <td > <a href="/Month">August</a></td>
    
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
    <td > <a href="/Month">September</a></td>
    
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
    <td > <a href="/Month">October</a></td>
    
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
    <td > <a href="/Month">November</a></td>
    
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
    <td > <a href="/Month">December</a></td>
   
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
</table>
<button  class="btn btn-primary " style={{marginLeft:"90%", color:"white", width:"100px", borderRadius:"50px", border:"none", padding:"5px"}} onClick={()=>handleoption('/Invoice')}>Back</button>
        </div>
        </>
    )
}
export default Option1;