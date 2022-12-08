import {DropdownButton,Dropdown} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
// import Authorstyle from './Authorstyle.css'
import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react';
import { API } from '../../API/index';


const updateaddclientclear = {
   CompanyID:"",
    FromDate:"",
   ToDate:"",
   
      SNo:"",
      DocumentNo:"",
      Decription:"",
      SerialNo:"",
      
}


function Addclientdetails() {
   const[getaddclient123,setgetaddclient123]=useState([])
   const[getaddclient1234,setgetaddclient1234]=useState([])
   const [deleteclient,setdeleteclient]=useState({
      _Id:""
   })

   const [updateclient,setupdateclient]=useState({
  
   })

   const [catergoriesarray, setcatergoriesarray] = useState([])
   const [catergoriesarrayRecent, setcatergoriesarrayRevent] = useState([])
   const [todosPerPage, settodosPerPage] = useState(8)
   const [currentPage, setcurrentPage] = useState(1)

   const history=useHistory()

   useEffect(()=>{
      console.log("hii")
       getaddclient()
       getaddclients()
   },[]);


   const getaddclients = async(value) => {
      console.log("hi")
         await API.get('/getClient')
          .then(function (response) {
              // handle success
              console.log(response, "end");
              if (response.status == 200) {
                setgetaddclient1234(response.data.data);
              }
              
          })
          .catch(function (error) {
// handle error
              console.log(error);
          })
  }

 

   
   const changeactive = async (e,val)=>{
      console.log("e",e,val)
      e=e==true?"true":"false"
      console.log("e",e,val)
val.Active=e
      try{
         
         const { data } = await API.post('/editClient',val);
         
             console.log("data123",data);
             if(data.body.status==true){
               Swal.fire({
                    icon: 'success',
                    iconColor: '#28a745',
                    title: data?.body.message,
                    showConfirmButton: false,
                    timer: 2000
                  });
                  getaddclient();
               console.log(data);
               
              } else { 
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
               Swal.fire({
                 icon: 'warning',
                 iconColor: '#dc3545',
                 title: err.message,
                 showConfirmButton: false,
                 timer: 2000
                 });
         
             }
      console.log("newdata",val)
   }

   const handleupdateActive = async(val)=>{
      console.log("updateclient",val)
      // history.push (path);
      // try{
         
      //    const { data } = await API.post('/editClient',updateclient);
         
      //        console.log("data123",data);
      //        setupdateclient(data)
      //        if(data.body.status==true){
      //          Swal.fire({
      //               icon: 'success',
      //               iconColor: '#28a745',
      //               title: data?.body.message,
      //               showConfirmButton: false,
      //               timer: 2000
      //             });
      //          console.log(data);
      //          setupdateclient(updateaddclientclear);
               
   
      //         } else {
      //          setupdateclient(updateaddclientclear);
      //          Swal.fire({
      //            icon: 'warning',
      //            iconColor: '#dc3545',
      //            title: data?.body.message,
      //            showConfirmButton: false,
      //            timer: 2000
      //            });
      //         }
      //        }
      //        catch(err){
      //          setupdateclient(updateaddclientclear);
      //          Swal.fire({
      //            icon: 'warning',
      //            iconColor: '#dc3545',
      //            title: err.message,
      //            showConfirmButton: false,
      //            timer: 2000
      //            });
         
      //        }
           }
    

      const getaddclient = async(value) => {
        console.log("hi")
           await API.get('/getClientDetails')
            .then(function (response) {
                // handle success
                console.log(response, "end");
                if (response.status == 200) {
                  setgetaddclient123(response.data.data);
                }
                
            })
            .catch(function (error) {
// handle error
                console.log(error);
            })
    }

  
   const handleclick=(val)=>{
      // handleupdateclient()
      console.log("vkhkhgjgj",val)
      localStorage.setItem('Editclientdetails',JSON.stringify(val))
      // history.push(path )
      history.push('/CreateClientDetails1');
   }

   const handleDeleteclient =async(val)=>{
      console.log("hiiiii",val)
       const { data } = await API.post('/deleteclientdetails',val);
      console.log("datas123",data)
   
   if(data.body.status==true) {
      Swal.fire({
         icon: 'success',
         iconColor: '#539920',
         title: data?.body.message,
         showConfirmButton: false,
         timer: 1800
       });
       getaddclient();
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

const handleupdateclient = async(path)=>{
   history.push (path);
   try{
      
      const { data } = await API.post('/editClient',updateclient);
      
          console.log("data123",data);
          setupdateclient(data)
          if(data.body.status==true){
            Swal.fire({
                 icon: 'success',
                 iconColor: '#28a745',
                 title: data?.body.message,
                 showConfirmButton: false,
                 timer: 2000
               });
            console.log(data);
            setupdateclient(updateaddclientclear);
            

           } else {
            setupdateclient(updateaddclientclear);
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
            setupdateclient(updateaddclientclear);
            Swal.fire({
              icon: 'warning',
              iconColor: '#dc3545',
              title: err.message,
              showConfirmButton: false,
              timer: 2000
              });
      
          }
        }


        const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = getaddclient123 && getaddclient123.slice(indexOfFirstTodo, indexOfLastTodo);


        const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(getaddclient123 && getaddclient123.length / todosPerPage); i++) {
        pageNumbers.push(i);
    }

    const indexOfLast = 1 * 6;
    const indexOfFirst = indexOfLastTodo - 6;
    const Valpush = catergoriesarrayRecent && catergoriesarrayRecent.slice(indexOfFirst, indexOfLast);
   
    const handleClickpage = (event) => {
        setcurrentPage(Number(event.target.id))
       
    }


        
    const filtercompany = getaddclient1234.filter(getaddclient1234 => {
      return getaddclient1234._id===getaddclient123.CompanyID
    });
    console.log("filtercompany",filtercompany)
//     const numbers = [{value:30},{value:0}, {value:40}, {value:12}, {value:-8}];


// // responce
 
// // [60, 80, 24]


//     const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
//       console.log("accumulator",currentValue.value);
//       if (currentValue.value > 0) {
//         const doubled = currentValue.value * 2;
//         return [...accumulator, doubled];
//       }
//       return accumulator;
//     }, []);
    
//    console.log("doubledPositiveNumbers",doubledPositiveNumbers);

  return (
<div>
   {console.log("getaddclient123",getaddclient123,getaddclient1234)}

<div class="row">
      <div class="col-sm-4 col-3">
         <h4 class="page-title">ClientDetails</h4>
      </div>
      <div class="col-sm-8 col-9 text-right m-b-20">
         <a href="/CreateClientDetails" class="btn btn-primary btn-rounded float-right"><i class="fa fa-plus"></i> Add ClientDetails</a>
      </div>
   </div>
   <div class="blog_left_sidebar blog_update">
   <div class="row doctor-grid">
      {/* {getaddclient123&&getaddclient123.map((val,ind)=>{ */}
      {currentTodos&&currentTodos.map((val,ind)=>{
         console.log("currentval",val)
         return(
            <>
            <div class="col-md-4 col-sm-4  col-lg-3">
         <div class="profile-widget">

         <div class="menu-nav">
         {/* <label class="switch">
  <input type="checkbox" 
   checked={val.Active =="true"?true:false} 
   onChange={(e)=>changeactive(e.target.checked,val)}
         
   />
 
  
  <span class="slider round"></span>
</label> */}
        <div class="menu-item"></div>
        <div class="dropdown-container" tabindex="-1">
          <div class="three-dots"></div>
          <div class="dropdown">
            
          {/* {console.log("val",val)} */}
         <div onClick={()=>handleclick(val)} style={{cursor: "pointer",margin:"5px"}} ><i class="fa fa-pencil m-r-3"></i>  Edit</div>
            {/* <div  onClick={()=>handleDeleteclient(val)} style={{cursor: "pointer"}}><i class="fa fa-trash m-r-5"></i>Delete</div> */}
            
          </div>
        </div>
      </div>
{/* <div class="doctor-img" > */}
  {/* <a class="avatar" href="/AuthorDetail"><img alt="" src="assets/img/doctor-thumb-03.jpg" /></a> */}
               {/* </div> */}
               
               {/* <h4  style={{fontSize:"22px",fontWeight:"bold"}}>{getaddclient1234.Companyname}</h4> */}
             <h4  style={{fontSize:"22px",fontWeight:"bold"}}>{val.Decription}</h4>
            {/* <div class="doc-prof">{val.Contactperson}</div> */}
            <div>{val.Amount}</div>
            <div class="user-country">
             {/* <i ></i>{val.Active =="true"?"Active":"InActive"} */}
             {/* onFocus={val.Active =="true"?"Active":"InActive"} */}
             
            
            </div>
         </div>
      </div>
     
            </>
         )
      })}



                                </div>

                                <nav class="blog-pagination justify-content-center d-flex" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <ul class="pagination" style={{ width: '500%', display: 'flex', fontSize:"25px" , paddingLeft:"80px"}}>
                                        
                                        {pageNumbers && pageNumbers.map(number => {
                                            return (
                                                <li class="page-item"
                                                    key={number}
                                                    id={number}
                                                    onClick={(e) => handleClickpage(e)}
                                                >
                                                    {/* {number} */}
                                                    <a id={number}
                                                        onClick={(e) => handleClickpage(e)} class="page-link">{number}</a>
                                                </li>
                                            )
                                        })}
                                        
                                    </ul>
                                </nav>
      {/* <div class="col-md-4 col-sm-4  col-lg-3">
         <div class="profile-widget">

         <div class="menu-nav">
         <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
        <div class="menu-item"></div>
        <div class="dropdown-container" tabindex="-1">
          <div class="three-dots"></div>
          <div class="dropdown">
          
         <div onClick={()=>handleclick("/CreateAuthor1")} style={{cursor: "pointer"}} >Edit</div>
            <div  onClick={()=>handleDelete()} style={{cursor: "pointer"}}>Delete</div>
            
          </div>
        </div>
      </div>
<div class="doctor-img" >
  {/* <a class="avatar" href="/AuthorDetail">
  <img alt="" src="assets/img/doctor-thumb-03.jpg" />
  </a> */}
{/*               
            </div>

            <h4 class="doctor-name text-ellipsis"><a href="/AuthorDetail">Cristina Groves</a></h4>
            <div class="doc-prof">Reporter</div>
            <div class="user-country">
             <i class="far fa-map-marker-alt"></i> Salem, Tamil Nadu
            </div>
         </div>
      </div> */}
{/* //      <div class="col-md-4 col-sm-4  col-lg-3">
//          <div class="profile-widget">
            

//          <div class="menu-nav">
//          <label class="switch">
//   <input type="checkbox"/>
//   <span class="slider round"></span>
// </label>
//         <div class="menu-item"></div>
//         <div class="dropdown-container" tabindex="-1">
//           <div class="three-dots"></div>
//           <div class="dropdown">
             
//           <div onClick={()=>handleclick("/CreateAuthor1")} style={{cursor: "pointer"}} >Edit</div>
//           <div  onClick={()=>handleDelete()} style={{cursor: "pointer"}}>Delete</div>
            
//           </div>
//         </div>
//       </div>

//             <div class="doctor-img">
//                <a class="avatar" href="/AuthorDetail"><img alt="" src="assets/img/doctor-thumb-07.jpg" /></a>
//             </div>
//             <div class="dropdown profile-action">
//                <a href="/AuthorDetail" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
//                <div class="dropdown-menu dropdown-menu-right">
//                   <a class="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
//                   <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
//                </div>
//             </div>
//             <h4 class="doctor-name text-ellipsis"><a href="/AuthorDetail">Marie Wells</a></h4>
//             <div class="doc-prof">Cameraman</div>
//             <div class="user-country">
//              <i class="far fa-map-marker-alt"></i> Salem, Tamil Nadu
//             </div>
//          </div>
//       </div>
      <div class="col-md-4 col-sm-4  col-lg-3">
         <div class="profile-widget">

         <div class="menu-nav">
         <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
        <div class="menu-item"></div>
        <div class="dropdown-container" tabindex="-1">
          <div class="three-dots"></div>
          <div class="dropdown">
          <div onClick={()=>handleclick("/CreateAuthor1")} style={{cursor: "pointer"}} >Edit</div>
          <div  onClick={()=>handleDelete()} style={{cursor: "pointer"}}>Delete</div>
            
          </div>
        </div>
      </div>

            <div class="doctor-img">
               <a class="avatar" href="/AuthorDetail"><img alt="" src="assets/img/doctor-thumb-04.jpg" /></a>
            </div>
            <div class="dropdown profile-action">
               <a href="/AuthorDetail" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
               <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
               </div>
            </div>
            <h4 class="doctor-name text-ellipsis"><a href="/AuthorDetail">Henry Daniels</a></h4>
            <div class="doc-prof">Writer</div>
            <div class="user-country">
             <i class="far fa-map-marker-alt"></i> Salem, Tamil Nadu
            </div>
         </div>
      </div>
      <div class="col-md-4 col-sm-4  col-lg-3">
         <div class="profile-widget">

         <div class="menu-nav">
         <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
        <div class="menu-item"></div>
        <div class="dropdown-container" tabindex="-1">
          <div class="three-dots"></div>
          <div class="dropdown">
          <div onClick={()=>handleclick("/CreateAuthor1")} style={{cursor: "pointer"}} >Edit</div>
          <div  onClick={()=>handleDelete()} style={{cursor: "pointer"}}>Delete</div>
            
          </div>
        </div>
      </div>

            <div class="doctor-img">
               <a class="avatar" href="/AuthorDetail"><img alt="" src="assets/img/doctor-thumb-11.jpg" /></a>
            </div>
            <div class="dropdown profile-action">
               <a href="/AuthorDetail" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
               <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
               </div>
            </div>
            <h4 class="doctor-name text-ellipsis"><a href="/AuthorDetail">Mark Hunter</a></h4>
            <div class="doc-prof">Editor</div>
            <div class="user-country">
             <i class="far fa-map-marker-alt"></i> Salem, Tamil Nadu
            </div>
         </div>
      </div>
      <div class="col-md-4 col-sm-4  col-lg-3">
         <div class="profile-widget">

         <div class="menu-nav">
         <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
        <div class="menu-item"></div>
        <div class="dropdown-container" tabindex="-1">
          <div class="three-dots"></div>
          <div class="dropdown">
          <div onClick={()=>handleclick("/CreateAuthor1")} style={{cursor: "pointer"}} >Edit</div>
          <div  onClick={()=>handleDelete()} style={{cursor: "pointer"}}>Delete</div>
            
          </div>
        </div>
      </div>

            <div class="doctor-img">
               <a class="avatar" href="#"><img alt="" src="assets/img/doctor-thumb-12.jpg" /></a>
            </div>
            <div class="dropdown profile-action">
               <a href="/AuthorDetail" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
               <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
               </div>
            </div>
            <h4 class="doctor-name text-ellipsis"><a href="/AuthorDetail">Michael Sullivan</a></h4>
            <div class="doc-prof">Reporter</div>
            <div class="user-country">
             <i class="far fa-map-marker-alt"></i> Salem, Tamil Nadu
            </div>
         </div>
      </div>
      <div class="col-md-4 col-sm-4  col-lg-3">
         <div class="profile-widget">

         <div class="menu-nav">
         <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
        <div class="menu-item"></div>
        <div class="dropdown-container" tabindex="-1">
          <div class="three-dots"></div>
          <div class="dropdown">
          <div onClick={()=>handleclick("/CreateAuthor1")} style={{cursor: "pointer"}} >Edit</div>
          <div  onClick={()=>handleDelete()} style={{cursor: "pointer"}}>Delete</div>
            
          </div>
        </div>
      </div>

            <div class="doctor-img">
               <a class="avatar" href="/AuthorDetail"><img alt="" src="assets/img/doctor-thumb-02.jpg" /></a>
            </div>
            <div class="dropdown profile-action">
               <a href="/AuthorDetail" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
               <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
               </div>
            </div>
            <h4 class="doctor-name text-ellipsis"><a href="/AuthorDetail">Linda Barrett</a></h4>
            <div class="doc-prof">Writer</div>
            <div class="user-country">
             <i class="far fa-map-marker-alt"></i> Salem, Tamil Nadu
            </div>
         </div>
      </div>
      <div class="col-md-4 col-sm-4  col-lg-3">
         <div class="profile-widget">

         <div class="menu-nav">
         <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
        <div class="menu-item"></div>
        <div class="dropdown-container" tabindex="-1">
          <div class="three-dots"></div>
          <div class="dropdown">
          <div onClick={()=>handleclick("/CreateAuthor1")} style={{cursor: "pointer"}} >Edit</div>
          <div  onClick={()=>handleDelete()} style={{cursor: "pointer"}}>Delete</div>
            
          </div>
        </div>
      </div>


            <div class="doctor-img">
               <a class="avatar" href="/AuthorDetail"><img alt="" src="assets/img/doctor-thumb-09.jpg" /></a>
            </div>
            <div class="dropdown profile-action">
               <a href="/AuthorDetail" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
               <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
               </div>
            </div>
            <h4 class="doctor-name text-ellipsis"><a href="/AuthorDetail">Ronald Jacobs</a></h4>
            <div class="doc-prof">Editor</div>
            <div class="user-country">
             <i class="far fa-map-marker-alt"></i> Salem, Tamil Nadu
            </div>
         </div>
      </div>
      <div class="col-md-4 col-sm-4  col-lg-3">
         <div class="profile-widget">

         <div class="menu-nav">
         <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
        <div class="menu-item"></div>
        <div class="dropdown-container" tabindex="-1">
          <div class="three-dots"></div>
          <div class="dropdown">
          <div onClick={()=>handleclick("/CreateAuthor1")} style={{cursor: "pointer"}} >Edit</div>
          <div  onClick={()=>handleDelete()} style={{cursor: "pointer"}}>Delete</div>
            
          </div>
        </div>
      </div>

            <div class="doctor-img">
               <a class="avatar" href="/AuthorDetail"><img alt="" src="assets/img/doctor-thumb-01.jpg" /></a>
            </div>
            <div class="dropdown profile-action">
               <a href="/AuthorDetail" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
               <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
               </div>
            </div>
            <h4 class="doctor-name text-ellipsis"><a href="/AuthorDetail">Albert Sandoval</a></h4>
            <div class="doc-prof">Cameraman</div>
            <div class="user-country">
             <i class="far fa-map-marker-alt"></i> Salem, Tamil Nadu
            </div>
         </div>
      </div>
      <div class="col-md-4 col-sm-4  col-lg-3">
         <div class="profile-widget">

         <div class="menu-nav">
         <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
        <div class="menu-item"></div>
        <div class="dropdown-container" tabindex="-1">
          <div class="three-dots"></div>
          <div class="dropdown">
          <div onClick={()=>handleclick("/CreateAuthor1")} style={{cursor: "pointer"}} >Edit</div>
          <div  onClick={()=>handleDelete()} style={{cursor: "pointer"}}>Delete</div>
            
          </div>
        </div>
      </div>

            <div class="doctor-img">
               <a class="avatar" href="/AuthorDetail"><img alt="" src="assets/img/doctor-thumb-05.jpg" /></a>
            </div>
            <div class="dropdown profile-action">
               <a href="/AuthorDetail" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
               <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
               </div>
            </div>
            <h4 class="doctor-name text-ellipsis"><a href="/AuthorDetail">Diana Bailey</a></h4>
            <div class="doc-prof">Reporter</div>
            <div class="user-country">
             <i class="far fa-map-marker-alt"></i> Salem, Tamil Nadu
            </div>
         </div>
      </div>
      <div class="col-md-4 col-sm-4  col-lg-3">
         <div class="profile-widget">

         <div class="menu-nav">
         <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
        <div class="menu-item"></div>
        <div class="dropdown-container" tabindex="-1">
          <div class="three-dots"></div>
          <div class="dropdown">
          <div onClick={()=>handleclick("/CreateAuthor1")} style={{cursor: "pointer"}} >Edit</div>
          <div  onClick={()=>handleDelete()} style={{cursor: "pointer"}}>Delete</div>
            
          </div>
        </div>
      </div>

            <div class="doctor-img">
               <a class="avatar" href="/AuthorDetail"><img alt="" src="assets/img/doctor-thumb-10.jpg" /></a>
            </div>
            <div class="dropdown profile-action">
               <a href="/AuthorDetail" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
               <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
               </div>
            </div>
            <h4 class="doctor-name text-ellipsis"><a href="/AuthorDetail">Shirley Willis</a></h4>
            <div class="doc-prof">Editor</div>
            <div class="user-country">
             <i class="far fa-map-marker-alt"></i> Salem, Tamil Nadu
            </div>
         </div>
      </div>
      <div class="col-md-4 col-sm-4  col-lg-3">
         <div class="profile-widget">

         <div class="menu-nav">
         <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
        <div class="menu-item"></div>
        <div class="dropdown-container" tabindex="-1">
          <div class="three-dots"></div>
          <div class="dropdown">
          <div onClick={()=>handleclick("/CreateAuthor1")} style={{cursor: "pointer"}} >Edit</div>
          <div  onClick={()=>handleDelete()} style={{cursor: "pointer"}}>Delete</div>
            
          </div>
        </div>
      </div>

            <div class="doctor-img">
               <a class="avatar" href="/AuthorDetail"><img alt="" src="assets/img/doctor-thumb-08.jpg" /></a>
            </div>
            <div class="dropdown profile-action">
               <a href="/AuthorDetail" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
               <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
               </div>
            </div>
            <h4 class="doctor-name text-ellipsis"><a href="/AuthorDetail">Pamela Curtis</a></h4>
            <div class="doc-prof">Reporter</div>
            <div class="user-country">
             <i class="far fa-map-marker-alt"></i> Salem, Tamil Nadu
            </div>
         </div>
      </div>
      <div class="col-md-4 col-sm-4  col-lg-3">
         <div class="profile-widget">

         <div class="menu-nav">
         <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
        <div class="menu-item"></div>
        <div class="dropdown-container" tabindex="-1">
          <div class="three-dots"></div>
          <div class="dropdown">
          <div onClick={()=>handleclick("/CreateAuthor1")} style={{cursor: "pointer"}} >Edit</div>
          <div  onClick={()=>handleDelete()} style={{cursor: "pointer"}}>Delete</div>
            
          </div>
        </div>
      </div>

            <div class="doctor-img">
               <a class="avatar" href="/AuthorDetail"><img alt="" src="assets/img/doctor-thumb-06.jpg" /></a>
            </div>
            <div class="dropdown profile-action">
               <a href="/AuthorDetail" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
               <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
               </div>
            </div>
            <h4 class="doctor-name text-ellipsis"><a href="/AuthorDetail">Justin Parker</a></h4>
            <div class="doc-prof">Writerr</div>
            <div class="user-country">
             <i class="far fa-map-marker-alt"></i> Salem, Tamil Nadu
            </div>
         </div>
      </div> */} 
   </div>
   <div class="row">
      <div class="col-sm-12">
         {/* <div class="see-all">
            <a class="see-all-btn" href="javascript:void(0);">Load More</a>
         </div> */}
      </div>
   </div>
   

</div>

  );
}
export default Addclientdetails;

