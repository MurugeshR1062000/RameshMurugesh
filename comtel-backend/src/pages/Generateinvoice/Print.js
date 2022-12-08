
import React, { Component } from "react";
import ReactToPrint from 'react-to-print';
class Print extends Component{
  render(){
    return(
      <div>
        <ReactToPrint
        trigger={()=>{
          return <button>Print the table</button>

    }}
    content= {() => this.componentRef}
    documentTitle='new document'
    pageStyle="Print"

    />
    <div ref={el =>(this.componentRef=el)}>

    <table  style={{width:"60%",border:'1px solid',margin:'auto'}} border="1">
         
         <tr>
           <th>No</th>
           <th>Name</th>
           <th>ID</th>
           </tr>
           <tr>
             <td>1</td>
             <td>tiger</td>
             <td>lion</td>
           </tr>
         
       </table>
    </div>
    
  
      </div>
      
      
    )
  }
}
export default Print;
