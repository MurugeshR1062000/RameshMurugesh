import React from 'react';
import { useHistory } from 'react-router-dom';



const InvoiceCard = ()=>{
   const d = new Date();
const year = d.getFullYear();
console.log("2022-01-01,2022-01-31",year)
// console.log("year",jan(fromdate,todate))
// const year =

    const history = useHistory();

    const handlecardstyle = (path,fromdate,todate) =>{
        history.push (path);
        localStorage.setItem('dates',JSON.stringify({fromdate:fromdate,todate:todate}))
    }

    const history123 = useHistory();

    const handleliststyle = path =>{
        history123.push (path);
    }


    return(
        <>
        <div>
        <div class="row">
           <div>
           <div  class="m-t-20 text-center">
               <button style={{display:'flex',alignItems:"flex-end",marginLeft:"1100px",marginBottom:"20px"}} onClick={()=>handleliststyle('/AddInvoice')}  class="btn btn-primary">Add invoice</button>
            </div>
           </div>
        
       <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" style={{maxWidth:"19%"}}>
          <div class="dash-widget">
             {/* <span class="dash-widget-bg1"><i class="fas fa-users"></i></span> */}
             <div style={{width:"50px"}} class="dash-widget-info text-right">
                <h4 onClick={()=>handlecardstyle('/Invoice',`${year}-01-01`,`${year}-01-31`)}  style={{marginLeft:"40px",marginTop:"40px", width:"90px",height:"50px",marginBottom:"10px"}}>January</h4>
                <span class="widget-title1"> </span> 
             </div>
          </div>
       </div>
       <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" style={{maxWidth:"19%"}}>
          <div class="dash-widget">
             {/* <span class="dash-widget-bg1"><i class="fas fa-users"></i></span> */}
             <div style={{width:"50px"}} class="dash-widget-info text-right">
                <h4 onClick={()=>handlecardstyle('/Invoice',`${year}-02-01`,`${year}-02-28`)} style={{marginLeft:"40px",marginTop:"40px", width:"90px",height:"50px",marginBottom:"10px"}}>February</h4>
                <span class="widget-title1"> </span> 
             </div>
          </div>
       </div> 
       <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" style={{maxWidth:"19%"}}>
          <div class="dash-widget">
             {/* <span class="dash-widget-bg1"><i class="fas fa-users"></i></span> */}
             <div style={{width:"50px"}} class="dash-widget-info text-right">
                <h4 onClick={()=>handlecardstyle('/Invoice',`${year}-03-01`,`${year}-03-31`)}  style={{marginLeft:"40px",marginTop:"40px", width:"90px",height:"50px",marginBottom:"10px"}}>March</h4>
                <span class="widget-title1"> </span> 
             </div>
          </div>
       </div> 
       <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" style={{maxWidth:"19%"}}>
          <div class="dash-widget">
             {/* <span class="dash-widget-bg1"><i class="fas fa-users"></i></span> */}
             <div style={{width:"50px"}} class="dash-widget-info text-right">
                <h4 onClick={()=>handlecardstyle('/Invoice',`${year}-04-01`,`${year}-04-30`)}  style={{marginLeft:"40px",marginTop:"40px", width:"90px",height:"50px",marginBottom:"10px"}}>April</h4>
                <span class="widget-title1"> </span> 
             </div>
          </div>
       </div> 
       <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" style={{maxWidth:"19%"}}>
          <div class="dash-widget">
             {/* <span class="dash-widget-bg1"><i class="fas fa-users"></i></span> */}
             <div style={{width:"50px"}} class="dash-widget-info text-right">
                <h4 onClick={()=>handlecardstyle('/Invoice',`${year}-05-01`,`${year}-05-31`)}  style={{marginLeft:"40px",marginTop:"40px", width:"90px",height:"50px",marginBottom:"10px"}}>May</h4>
                <span class="widget-title1"> </span> 
             </div>
          </div>
       </div> 
       <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" style={{maxWidth:"19%"}}>
          <div class="dash-widget">
             {/* <span class="dash-widget-bg1"><i class="fas fa-users"></i></span> */}
             <div style={{width:"50px"}} class="dash-widget-info text-right">
                <h4 onClick={()=>handlecardstyle('/Invoice',`${year}-06-01`,`${year}-06-30`)}  style={{marginLeft:"40px",marginTop:"40px", width:"90px",height:"50px",marginBottom:"10px"}}>June</h4>
                <span class="widget-title1"> </span> 
             </div>
          </div>
       </div> 
       <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" style={{maxWidth:"19%"}}>
          <div class="dash-widget">
             {/* <span class="dash-widget-bg1"><i class="fas fa-users"></i></span> */}
             <div style={{width:"50px"}} class="dash-widget-info text-right">
                <h4 onClick={()=>handlecardstyle('/Invoice',`${year}-07-01`,`${year}-07-31`)}  style={{marginLeft:"40px",marginTop:"40px", width:"90px",height:"50px",marginBottom:"10px"}}>July</h4>
                <span class="widget-title1"> </span> 
             </div>
          </div>
       </div> 
       <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" style={{maxWidth:"19%"}}>
          <div class="dash-widget">
             {/* <span class="dash-widget-bg1"><i class="fas fa-users"></i></span> */}
             <div style={{width:"50px"}} class="dash-widget-info text-right">
                <h4 onClick={()=>handlecardstyle('/Invoice',`${year}-08-01`,`${year}-08-31`)}  style={{marginLeft:"40px",marginTop:"40px", width:"90px",height:"50px",marginBottom:"10px"}}>August</h4>
                <span class="widget-title1"> </span> 
             </div>
          </div>
       </div> 
       <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" style={{maxWidth:"19%"}}>
          <div class="dash-widget">
             {/* <span class="dash-widget-bg1"><i class="fas fa-users"></i></span> */}
             <div style={{width:"50px"}} class="dash-widget-info text-right">
                <h4 onClick={()=>handlecardstyle('/Invoice',`${year}-09-01`,`${year}-09-30`)}  style={{marginLeft:"40px",marginTop:"40px", width:"90px",height:"50px",marginBottom:"10px"}}>September</h4>
                <span class="widget-title1"> </span> 
             </div>
          </div>
       </div> 
       <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" style={{maxWidth:"19%"}}>
          <div class="dash-widget">
             {/* <span class="dash-widget-bg1"><i class="fas fa-users"></i></span> */}
             <div style={{width:"50px"}} class="dash-widget-info text-right">
                <h4 onClick={()=>handlecardstyle('/Invoice',`${year}-10-01`,`${year}-10-31`)}  style={{marginLeft:"40px",marginTop:"40px", width:"90px",height:"50px",marginBottom:"10px"}}>October</h4>
                <span class="widget-title1"> </span> 
             </div>
          </div>
       </div> 
       <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" style={{maxWidth:"19%"}}>
          <div class="dash-widget">
             {/* <span class="dash-widget-bg1"><i class="fas fa-users"></i></span> */}
             <div style={{width:"50px"}} class="dash-widget-info text-right">
                <h4 onClick={()=>handlecardstyle('/Invoice',`${year}-11-01`,`${year}-11-30`)}  style={{marginLeft:"40px",marginTop:"40px", width:"90px",height:"50px",marginBottom:"10px"}}>November</h4>
                <span class="widget-title1"> </span> 
             </div>
          </div>
       </div> 
       <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" style={{maxWidth:"19%"}}>
          <div class="dash-widget">
             {/* <span class="dash-widget-bg1"><i class="fas fa-users"></i></span> */}
             <div style={{width:"50px"}} class="dash-widget-info text-right">
                <h4 onClick={()=>handlecardstyle('/Invoice',`${year}-12-01`,`${year}-12-31`)}  style={{marginLeft:"40px",marginTop:"40px", width:"90px",height:"50px",marginBottom:"10px"}}>December</h4>
                <span class="widget-title1"> </span> 
             </div>
          </div>
       </div>
        
        </div>
        </div>
        </>
    )
}


export default InvoiceCard;