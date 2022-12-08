import React from 'react';
import { ImMenu } from "react-icons/im";
import { RiFileList3Fill } from "react-icons/ri";

function Sidebar() {
  return (

    
    <div class="sidebar" id="sidebar">
   <div class="sidebar-inner slimscroll">
      <div id="sidebar-menu" class="sidebar-menu">
         <ul>
            {/* <li class="menu-title">Main</li> */}
            <li class="active">
            <a href="/Home"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a>
            </li>
            <li>
               <a href="/Author"><i class="fas fa-users"></i> <span>Add client</span></a>
            </li>
            {/* <li>
               <a href="/AddInvoice"><i class="fas fa-border-all"></i> <span>Add Invoice</span></a>
            </li> */}
            {/* <li>
               <a href="/Videos"><i class="far fa-video"></i> <span>Video</span></a>
            </li>
            <li>
               <a href="/Photos"><i class="fas fa-images"></i> <span>Photo</span></a>
            </li>
            <li>
               <a href="#"><i class="far fa-envelope"></i><span> Subscriber </span></a>
            </li>
            <li>
               <a href="#"><i class="far fa-flag"></i><span> Reports </span></a>
            </li>
            <li>
               <a href="/Settings"><i class="fas fa-cog"></i><span>Settings</span></a>
            </li> */}

              <li>
               <a href="/InvoiceCard"><RiFileList3Fill/><span>Invoice</span></a>
            </li>
            <li>
               <a href="/pendinglist"><ImMenu style={{marginBottom:"5px"}}/><span>Pending Client Details</span></a>
            </li>

            <li>
               <a href="/Generateinvoice"><RiFileList3Fill/><span>Generate Invoice</span></a>
            </li>

           

            {/* <li class="submenu">
               <a href="#"><i class="fa fa-user"></i> <span> Employees </span> <span class="menu-arrow"></span></a>
               <ul>
                  <li><a href="employees.html">Employees List</a></li>
                  <li><a href="leaves.html">Leaves</a></li>
                  <li><a href="holidays.html">Holidays</a></li>
                  <li><a href="attendance.html">Attendance</a></li>
               </ul>
            </li> */}
    
         </ul>
      </div>
   </div>
</div>
       
    
    
  );
}

export default Sidebar;