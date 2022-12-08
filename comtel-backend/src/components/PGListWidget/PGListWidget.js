import React from 'react';

function PGListWidget() {
  return (
 


    <div >
    <div class="row">
       <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" style={{maxWidth:"19%"}}>
          <div class="dash-widget">
             <span class="dash-widget-bg1"><i class="fas fa-users"></i></span>
             <div class="dash-widget-info text-right">
                <h3>001</h3>
                <span class="widget-title1">Pending Invoice Total amount </span> 
             </div>
          </div>
       </div>

<div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" style={{maxWidth:"19%"}}>
          <div class="dash-widget">
             <span class="dash-widget-bg2" ><i class="fas fa-video"></i></span>
             <div class="dash-widget-info text-right">
                <h3>002 </h3>
                <br>
                </br>
                <span class="widget-title2">Total client</span>
             </div>
          </div>
       </div>
       <div class="col-md-1 col-sm-1 col-lg-1 col-xl-3" style={{maxWidth:"19%"}}>
          <div class="dash-widget">
             <span class="dash-widget-bg3"><i class="fas fa-images"></i></span>
             <div class="dash-widget-info text-right">
                <h3>003</h3>
                <span class="widget-title3">current month invoice amount</span>
             </div>
          </div>
       </div>
       <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" style={{maxWidth:"19%"}}>
          <div class="dash-widget">
             <span class="dash-widget-bg1"><i class="fas fa-users"></i></span>
             <div class="dash-widget-info text-right">
                <h3>004</h3>
                <span class="widget-title1">current month received amount </span>
             </div>
          </div>
       </div>


       <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" style={{maxWidth:"19%", paddingBottom:"50px",height:"50%",width:"100px",marginBottom:"50px"}} >
          <div class="dash-widget">
             <span class="dash-widget-bg4"><i class="fas fa-globe-americas"></i></span>
             <div style={{padding:"10px"}} class="dash-widget-info text-right">
                <h3>005</h3>
                <a href="/pendinglist"><span class="widget-title4">pending client detail </span></a>
             </div>
             
          </div>
       </div>
    </div>  
  
    {/* <div class="row">
       <div class="col-12 col-md-6 col-lg-6 col-xl-6">
          <div class="card">
             <div class="card-body">
                <div class="chart-title">
                   <h4>This Week Reports</h4>
                   <span class="float-right"><i class="fa fa-caret-up" aria-hidden="true"></i> 15% Higher than Last Month</span>
                </div>
                <canvas id="linegraph"></canvas>
             </div>
          </div>
       </div>
       <div class="col-12 col-md-6 col-lg-6 col-xl-6">
          <div class="card">
             <div class="card-body">
                <div class="chart-title">
                   <h4>News Reports</h4>
                   <div class="float-right">
                      <ul class="chat-user-total">
                         <li><i class="fa fa-circle current-users" aria-hidden="true"></i>ICU</li>
                         <li><i class="fa fa-circle old-users" aria-hidden="true"></i> OPD</li>
                      </ul>
                   </div>
                </div>
                <canvas id="bargraph"></canvas>
             </div>
          </div>
       </div>
    </div>

     */}
 </div>
	   
  );
}

export default PGListWidget;