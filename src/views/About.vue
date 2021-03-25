<template>
  <div class="about">
    <Bashky/>
    <div class="page">
      <!-- Start Page header -->
      <div class="section-body" id="page_top" >
        <div class="container-fluid">
          <div class="page-header">
            <div class="left">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="What you want to find">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">Search</button>
                </div>
              </div>
            </div>
            <div class="right">
              <ul class="nav nav-pills">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="page-empty.html">Empty page</a>
                    <a class="dropdown-item" href="page-profile.html">Profile</a>
                    <a class="dropdown-item" href="page-search.html">Search Results</a>
                    <a class="dropdown-item" href="page-timeline.html">Timeline</a>
                    <a class="dropdown-item" href="page-invoices.html">Invoices</a>
                    <a class="dropdown-item" href="page-pricing.html">Pricing</a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Auth</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="login.html">Login</a>
                    <a class="dropdown-item" href="register.html">Register</a>
                    <a class="dropdown-item" href="forgot-password.html">Forgot password</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="404.html">404 error</a>
                    <a class="dropdown-item" href="500.html">500 error</a>
                  </div>
                </li>
              </ul>
              <div class="notification d-flex">
                <div class="dropdown d-flex">
                  <a class="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i class="fa fa-language"></i></a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item" href="#"><img class="w20 mr-2" src="../assets/images/flags/us.svg" alt="">English</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><img class="w20 mr-2" src="../assets/images/flags/es.svg" alt="">Spanish</a>
                    <a class="dropdown-item" href="#"><img class="w20 mr-2" src="../assets/images/flags/jp.svg" alt="">japanese</a>
                    <a class="dropdown-item" href="#"><img class="w20 mr-2" src="../assets/images/flags/bl.svg" alt="">France</a>
                  </div>
                </div>
                <div class="dropdown d-flex">
                  <a class="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i class="fa fa-envelope"></i><span class="badge badge-success nav-unread"></span></a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <ul class="right_chat list-unstyled w350 p-0">
                      <li class="online">
                        <a href="javascript:void(0);" class="media">
                          <img class="media-object" src="../assets/images/xs/avatar4.jpg" alt="">
                          <div class="media-body">
                            <span class="name">Donald Gardner</span>
                            <div class="message">It is a long established fact that a reader</div>
                            <small>11 mins ago</small>
                            <span class="badge badge-outline status"></span>
                          </div>
                        </a>
                      </li>
                      <li class="online">
                        <a href="javascript:void(0);" class="media">
                          <img class="media-object " src="../assets/images/xs/avatar5.jpg" alt="">
                          <div class="media-body">
                            <span class="name">Wendy Keen</span>
                            <div class="message">There are many variations of passages of Lorem Ipsum</div>
                            <small>18 mins ago</small>
                            <span class="badge badge-outline status"></span>
                          </div>
                        </a>
                      </li>
                      <li class="offline">
                        <a href="javascript:void(0);" class="media">
                          <img class="media-object " src="../assets/images/xs/avatar2.jpg" alt="">
                          <div class="media-body">
                            <span class="name">Matt Rosales</span>
                            <div class="message">Contrary to popular belief, Lorem Ipsum is not simply</div>
                            <small>27 mins ago</small>
                            <span class="badge badge-outline status"></span>
                          </div>
                        </a>
                      </li>
                      <li class="online">
                        <a href="javascript:void(0);" class="media">
                          <img class="media-object " src="../assets/images/xs/avatar3.jpg" alt="">
                          <div class="media-body">
                            <span class="name">Phillip Smith</span>
                            <div class="message">It has roots in a piece of classical Latin literature from 45 BC</div>
                            <small>33 mins ago</small>
                            <span class="badge badge-outline status"></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <div class="dropdown-divider"></div>
                    <a href="javascript:void(0)" class="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
                  </div>
                </div>
                <div class="dropdown d-flex">
                  <a class="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i class="fa fa-bell"></i><span class="badge badge-primary nav-unread"></span></a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <ul class="list-unstyled feeds_widget">
                      <li>
                        <div class="feeds-left">
                          <span class="avatar avatar-blue"><i class="fa fa-check"></i></span>
                        </div>
                        <div class="feeds-body ml-3">
                          <p class="text-muted mb-0">Campaign <strong class="text-blue font-weight-bold">Holiday</strong> is nearly reach budget limit.</p>
                        </div>
                      </li>
                      <li>
                        <div class="feeds-left">
                          <span class="avatar avatar-green"><i class="fa fa-user"></i></span>
                        </div>
                        <div class="feeds-body ml-3">
                          <p class="text-muted mb-0">New admission <strong class="text-green font-weight-bold">32</strong> in computer department.</p>
                        </div>
                      </li>
                      <li>
                        <div class="feeds-left">
                          <span class="avatar avatar-red"><i class="fa fa-info"></i></span>
                        </div>
                        <div class="feeds-body ml-3">
                          <p class="text-muted mb-0">6th sem result <strong class="text-red font-weight-bold">67%</strong> in computer department.</p>
                        </div>
                      </li>
                      <li>
                        <div class="feeds-left">
                          <span class="avatar avatar-azure"><i class="fa fa-thumbs-o-up"></i></span>
                        </div>
                        <div class="feeds-body ml-3">
                          <p class="text-muted mb-0">New Feedback <strong class="text-azure font-weight-bold">53</strong> for university assessment.</p>
                        </div>
                      </li>
                    </ul>
                    <div class="dropdown-divider"></div>
                    <a href="javascript:void(0)" class="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
                  </div>
                </div>
                <div class="dropdown d-flex">
                  <a href="javascript:void(0)" class="chip ml-3" data-toggle="dropdown">
                    <span class="avatar" style="background-image: url(../assets/images/xs/avatar5.jpg)"></span> George</a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item" href="page-profile.html"><i class="dropdown-icon fe fe-user"></i> Profile</a>
                    <a class="dropdown-item" href="app-setting.html"><i class="dropdown-icon fe fe-settings"></i> Settings</a>
                    <a class="dropdown-item" href="app-email.html"><span class="float-right"><span class="badge badge-primary">6</span></span><i class="dropdown-icon fe fe-mail"></i> Inbox</a>
                    <a class="dropdown-item" href="javascript:void(0)"><i class="dropdown-icon fe fe-send"></i> Message</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="javascript:void(0)"><i class="dropdown-icon fe fe-help-circle"></i> Need help?</a>
                    <a class="dropdown-item" href="login.html"><i class="dropdown-icon fe fe-log-out"></i> Sign out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Start Page title and tab -->
      <div class="section-body">
        <div class="container-fluid">
          <div class="d-flex justify-content-between align-items-center ">
            <div class="header-action">
              <h1 class="page-title">Students</h1>
              <ol class="breadcrumb page-breadcrumb">
                <li class="breadcrumb-item"><a href="#">Ericsson</a></li>
                <li class="breadcrumb-item active" aria-current="page">Students</li>
              </ol>
            </div>
            <ul class="nav nav-tabs page-header-tab">
              <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#Student-all">List View</a></li>
              <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Student-profile">Profile</a></li>
              <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Student-add">Add</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section-body mt-4">
        <div class="container-fluid">
          <div class="tab-content">
            <div class="tab-pane active" id="Student-all">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-2 col-md-4 col-sm-6">
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Roll No.">
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Name">
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Department">
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                      <div class="input-group">
                        <input data-provide="datepicker" data-date-autoclose="true" class="form-control" placeholder="Admission Date">
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                      <a href="javascript:void(0);" class="btn btn-sm btn-primary btn-block" title="">Search</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="table-responsive card">
                <table class="table table-hover table-vcenter table-striped mb-0 text-nowrap">
                  <thead>
                  <tr>
                    <th>Roll No.</th>
                    <th>Name</th>
                    <th></th>
                    <th>Department</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Admission Date</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>A25</td>
                    <td class="w60">
                      <img class="avatar" src="../assets/images/xs/avatar1.jpg" alt="">
                    </td>
                    <td><span class="font-16">Ken Smith</span></td>
                    <td>Science</td>
                    <td>ken@gmail.com</td>
                    <td>(417) 646-7483</td>
                    <td>04 Jan, 2019</td>
                    <td>
                      <button type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                      <button type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                      <button type="button" class="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>A26</td>
                    <td class="w60">
                      <img class="avatar" src="../assets/images/xs/avatar2.jpg" alt="">
                    </td>
                    <td><span class="font-16">Gerald K Smith</span></td>
                    <td>M.C.A.</td>
                    <td>Gerald@gmail.com</td>
                    <td>(154) 646-2486</td>
                    <td>04 Jan, 2019</td>
                    <td>
                      <button type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                      <button type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                      <button type="button" class="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>A25</td>
                    <td class="w60">
                      <img class="avatar" src="../assets/images/xs/avatar3.jpg" alt="">
                    </td>
                    <td><span class="font-16">Ken Smith</span></td>
                    <td>Mechanical</td>
                    <td>ken@gmail.com</td>
                    <td>(417) 646-8377</td>
                    <td>04 Jan, 2019</td>
                    <td>
                      <button type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                      <button type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                      <button type="button" class="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>A27</td>
                    <td class="w60">
                      <img class="avatar" src="../assets/images/xs/avatar4.jpg" alt="">
                    </td>
                    <td><span class="font-16">Alice A Smith</span></td>
                    <td>M.B.B.S.</td>
                    <td>Patricia@gmail.com</td>
                    <td>(753) 646-4931</td>
                    <td>04 Jan, 2019</td>
                    <td>
                      <button type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                      <button type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                      <button type="button" class="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>A17</td>
                    <td class="w60">
                      <img class="avatar" src="../assets/images/xs/avatar5.jpg" alt="">
                    </td>
                    <td><span class="font-16">Ken Smith</span></td>
                    <td>Arts</td>
                    <td>ken@gmail.com</td>
                    <td>(417) 646-7642</td>
                    <td>04 Jan, 2019</td>
                    <td>
                      <button type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                      <button type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                      <button type="button" class="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>A11</td>
                    <td class="w60">
                      <img class="avatar" src="../assets/images/xs/avatar6.jpg" alt="">
                    </td>
                    <td><span class="font-16">Corrine M Johnson</span></td>
                    <td>Mechanical</td>
                    <td>Gladys@gmail.com</td>
                    <td>(349) 646-8377</td>
                    <td>04 Jan, 2019</td>
                    <td>
                      <button type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                      <button type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                      <button type="button" class="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>A12</td>
                    <td class="w60">
                      <img class="avatar" src="../assets/images/xs/avatar7.jpg" alt="">
                    </td>
                    <td><span class="font-16">Alan Johnson</span></td>
                    <td>Music</td>
                    <td>ken@gmail.com</td>
                    <td>(648) 646-8523</td>
                    <td>04 Jan, 2019</td>
                    <td>
                      <button type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                      <button type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                      <button type="button" class="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>A23</td>
                    <td class="w60">
                      <img class="avatar" src="../assets/images/xs/avatar8.jpg" alt="">
                    </td>
                    <td><span class="font-16">John Smith</span></td>
                    <td>Civil</td>
                    <td>Corrine@gmail.com</td>
                    <td>(417) 646-7845</td>
                    <td>04 Jan, 2019</td>
                    <td>
                      <button type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                      <button type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                      <button type="button" class="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane" id="Student-profile">
              <div class="row">
                <div class="col-xl-4 col-md-12">
                  <div class="card">
                    <div class="card-body w_user">
                      <div class="user_avtar">
                        <img class="rounded-circle" src="../assets/images/sm/avatar2.jpg" alt="">
                      </div>
                      <div class="wid-u-info">
                        <h5>Dessie Parks</h5>
                        <p class="text-muted m-b-0">119 Peepee Way, Hilo, HI, 96720</p>
                        <ul class="list-unstyled">
                          <li>
                            <h5 class="mb-0">270</h5>
                            <small>Followers</small>
                          </li>
                          <li>
                            <h5 class="mb-0">310</h5>
                            <small>Following</small>
                          </li>
                          <li>
                            <h5 class="mb-0">908</h5>
                            <small>Liks</small>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">About Me</h3>
                      <div class="card-options ">
                        <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                        <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
                      </div>
                    </div>
                    <div class="card-body">
                      <p>Hello I am Celena Anderson a Clerk in Xyz College USA. I love to work with all my college staff and seniour professors.</p>
                      <ul class="list-group">
                        <li class="list-group-item">
                          <b>Gender </b>
                          <div class="pull-right">Female</div>
                        </li>
                        <li class="list-group-item">
                          <b>Department</b>
                          <div class="pull-right">Mechanical</div>
                        </li>
                        <li class="list-group-item">
                          <b>Email </b>
                          <div class="pull-right">test@example.com</div>
                        </li>
                        <li class="list-group-item">
                          <b>Phone</b>
                          <div class="pull-right">1234567890</div>
                        </li>
                        <li class="list-group-item">
                          <div class="clearfix">
                            <div class="float-left"><strong>Study</strong></div>
                            <div class="float-right"><small class="text-muted">35%</small></div>
                          </div>
                          <div class="progress progress-xxs">
                            <div class="progress-bar bg-pink" role="progressbar" style="width: 35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="clearfix">
                            <div class="float-left"><strong>Cricket</strong></div>
                            <div class="float-right"><small class="text-muted">72%</small></div>
                          </div>
                          <div class="progress progress-xxs">
                            <div class="progress-bar bg-blue" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="clearfix">
                            <div class="float-left"><strong>Music</strong></div>
                            <div class="float-right"><small class="text-muted">60%</small></div>
                          </div>
                          <div class="progress progress-xxs">
                            <div class="progress-bar bg-green" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="card-footer text-center">
                      <div class="row">
                        <div class="col-md-4 col-sm-4 col-6">
                          <div class="font-18 font-weight-bold">37</div>
                          <div>Projects</div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-6">
                          <div class="font-18 font-weight-bold">51</div>
                          <div>Tasks</div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-6">
                          <div class="font-18 font-weight-bold">61</div>
                          <div>Uploads</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-8 col-md-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Timeline Activity</h3>
                      <div class="card-options">
                        <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                        <a href="#" class="card-options-fullscreen" data-toggle="card-fullscreen"><i class="fe fe-maximize"></i></a>
                        <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
                        <div class="item-action dropdown ml-2">
                          <a href="javascript:void(0)" data-toggle="dropdown"><i class="fe fe-more-vertical"></i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fa fa-eye"></i> View Details </a>
                            <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fa fa-share-alt"></i> Share </a>
                            <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fa fa-cloud-download"></i> Download</a>
                            <div class="dropdown-divider"></div>
                            <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fa fa-copy"></i> Copy to</a>
                            <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fa fa-folder"></i> Move to</a>
                            <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fa fa-edit"></i> Rename</a>
                            <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fa fa-trash"></i> Delete</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="summernote">
                        Hello there,
                        <br/>
                        <p>The toolbar can be customized and it also supports various callbacks such as <code>oninit</code>, <code>onfocus</code>, <code>onpaste</code> and many more.</p>
                        <p>Please try <b>paste some texts</b> here</p>
                      </div>
                      <div class="timeline_item ">
                        <img class="tl_avatar" src="../assets/images/xs/avatar1.jpg" alt="" />
                        <span><a href="javascript:void(0);">Elisse Joson</a> San Francisco, CA <small class="float-right text-right">20-April-2019 - Today</small></span>
                        <h6 class="font600">Hello, 'Im a single div responsive timeline without media Queries!</h6>
                        <div class="msg">
                          <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web card she has is the Lorem card.</p>
                          <a href="javascript:void(0);" class="mr-20 text-muted"><i class="fa fa-heart text-pink"></i> 12 Love</a>
                          <a class="text-muted" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fa fa-comments"></i> 1 Comment</a>
                          <div class="collapse p-4 section-gray mt-2" id="collapseExample">
                            <form class="well">
                              <div class="form-group">
                                <textarea rows="2" class="form-control no-resize" placeholder="Enter here for tweet..."></textarea>
                              </div>
                              <button class="btn btn-primary">Submit</button>
                            </form>
                            <ul class="recent_comments list-unstyled mt-4 mb-0">
                              <li>
                                <div class="avatar_img">
                                  <img class="rounded img-fluid" src="../assets/images/xs/avatar4.jpg" alt="">
                                </div>
                                <div class="comment_body">
                                  <h6>Donald Gardner <small class="float-right font-14">Just now</small></h6>
                                  <p>Lorem ipsum Veniam aliquip culpa laboris minim tempor</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_item ">
                        <img class="tl_avatar" src="../assets/images/xs/avatar4.jpg" alt="" />
                        <span><a href="javascript:void(0);" title="">Dessie Parks</a> Oakland, CA <small class="float-right text-right">19-April-2019 - Yesterday</small></span>
                        <h6 class="font600">Oeehhh, that's awesome.. Me too!</h6>
                        <div class="msg">
                          <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.</p>
                          <div class="timeline_img mb-20">
                            <img class="width100" src="../assets/images/gallery/1.jpg" alt="Awesome Image">
                            <img class="width100" src="../assets/images/gallery/2.jpg" alt="Awesome Image">
                          </div>
                          <a href="javascript:void(0);" class="mr-20 text-muted"><i class="fa fa-heart text-pink"></i> 23 Love</a>
                          <a class="text-muted" role="button" data-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"><i class="fa fa-comments"></i> 2 Comment</a>
                          <div class="collapse p-4 section-gray mt-2" id="collapseExample1">
                            <form class="well">
                              <div class="form-group">
                                <textarea rows="2" class="form-control no-resize" placeholder="Enter here for tweet..."></textarea>
                              </div>
                              <button class="btn btn-primary">Submit</button>
                            </form>
                            <ul class="recent_comments list-unstyled mt-4 mb-0">
                              <li>
                                <div class="avatar_img">
                                  <img class="rounded img-fluid" src="../assets/images/xs/avatar4.jpg" alt="">
                                </div>
                                <div class="comment_body">
                                  <h6>Donald Gardner <small class="float-right font-14">Just now</small></h6>
                                  <p>Lorem ipsum Veniam aliquip culpa laboris minim tempor</p>
                                  <div class="timeline_img mb-20">
                                    <img class="width150" src="../assets/images/gallery/7.jpg" alt="Awesome Image">
                                    <img class="width150" src="../assets/images/gallery/8.jpg" alt="Awesome Image">
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div class="avatar_img">
                                  <img class="rounded img-fluid" src="../assets/images/xs/avatar3.jpg" alt="">
                                </div>
                                <div class="comment_body">
                                  <h6>Dessie Parks <small class="float-right font-14">1min ago</small></h6>
                                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_item ">
                        <img class="tl_avatar" src="../assets/images/xs/avatar7.jpg" alt="" />
                        <span><a href="javascript:void(0);" title="" >Rochelle Barton</a> San Francisco, CA <small class="float-right text-right">12-April-2019</small></span>
                        <h6 class="font600">An Engineer Explains Why You Should Always Order the Larger Pizza</h6>
                        <div class="msg">
                          <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, is the Lorem card.</p>
                          <a href="javascript:void(0);" class="mr-20 text-muted"><i class="fa fa-heart text-pink"></i> 7 Love</a>
                          <a class="text-muted" role="button" data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2"><i class="fa fa-comments"></i> 1 Comment</a>
                          <div class="collapse p-4 section-gray mt-2" id="collapseExample2">
                            <form class="well">
                              <div class="form-group">
                                <textarea rows="2" class="form-control no-resize" placeholder="Enter here for tweet..."></textarea>
                              </div>
                              <button class="btn btn-primary">Submit</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="Student-add">
              <div class="row clearfix">
                <div class="col-lg-8 col-md-12 col-sm-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Basic Information</h3>
                      <div class="card-options ">
                        <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                        <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
                      </div>
                    </div>
                    <form class="card-body">
                      <div class="form-group row">
                        <label class="col-md-3 col-form-label">First Name <span class="text-danger">*</span></label>
                        <div class="col-md-9">
                          <input type="text" class="form-control" placeholder="Enter First name">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-md-3 col-form-label">Last Name <span class="text-danger">*</span></label>
                        <div class="col-md-9">
                          <input type="text" class="form-control" placeholder="Enter Last name">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-md-3 col-form-label">Roll No <span class="text-danger">*</span></label>
                        <div class="col-md-9">
                          <input type="text" class="form-control">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-md-3 col-form-label">Email</label>
                        <div class="col-md-9">
                          <input type="text" class="form-control">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-md-3 col-form-label">Registration Date <span class="text-danger">*</span></label>
                        <div class="col-md-9">
                          <input data-provide="datepicker" data-date-autoclose="true" class="form-control" placeholder="">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-md-3 col-form-label">Class <span class="text-danger">*</span></label>
                        <div class="col-md-9">
                          <select class="form-control input-height" name="department">
                            <option value="">Select...</option>
                            <option value="Category 1">Computer</option>
                            <option value="Category 2">Mechanical</option>
                            <option value="Category 3">Mathematics</option>
                            <option value="Category 3">Commerce</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-md-3 col-form-label">Gender <span class="text-danger">*</span></label>
                        <div class="col-md-9">
                          <select class="form-control input-height" name="gender">
                            <option value="">Select...</option>
                            <option value="Category 1">Male</option>
                            <option value="Category 2">Female</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-md-3 col-form-label">Mobile No. <span class="text-danger">*</span></label>
                        <div class="col-md-9">
                          <input type="text" class="form-control">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-md-3 col-form-label">Parents Name <span class="text-danger">*</span></label>
                        <div class="col-md-9">
                          <input type="text" class="form-control">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-md-3 col-form-label">Parents Mobile No. <span class="text-danger">*</span></label>
                        <div class="col-md-9">
                          <input type="text" class="form-control">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-md-3 col-form-label">Date Of Birth  <span class="text-danger">*</span></label>
                        <div class="col-md-9">
                          <input type="text" class="form-control">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-md-3 col-form-label">Address <span class="text-danger">*</span></label>
                        <div class="col-md-9">
                          <input type="text" class="form-control">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-md-3 col-form-label">Profile Picture</label>
                        <div class="col-md-9">
                          <input type="file" class="dropify">
                          <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Account Information</h3>
                      <div class="card-options ">
                        <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                        <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="row clearfix">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <label>User Name</label>
                            <input type="text" class="form-control">
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <label>Password</label>
                            <input type="text" class="form-control">
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <label>Confirm Password</label>
                            <input type="text" class="form-control">
                          </div>
                        </div>
                        <div class="col-sm-12">
                          <button type="submit" class="btn btn-primary">Submit</button>
                          <button type="submit" class="btn btn-outline-secondary">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Account Information</h3>
                      <div class="card-options ">
                        <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                        <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="form-group">
                        <label>Facebook</label>
                        <input type="text" class="form-control">
                      </div>
                      <div class="form-group">
                        <label>Twitter</label>
                        <input type="text" class="form-control">
                      </div>
                      <div class="form-group">
                        <label>LinkedIN</label>
                        <input type="text" class="form-control">
                      </div>
                      <div class="form-group">
                        <label>Behance</label>
                        <input type="text" class="form-control">
                      </div>
                      <div class="form-group">
                        <label>dribbble</label>
                        <input type="text" class="form-control">
                      </div>
                      <button type="submit" class="btn btn-primary">Submit</button>
                      <button type="submit" class="btn btn-outline-secondary">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Start main footer -->
      <div class="section-body">
        <footer class="footer">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                Copyright © 2019 <a href="https://themeforest.net/user/puffintheme/portfolio">PuffinTheme</a>.
              </div>
              <div class="col-md-6 col-sm-12 text-md-right">
                <ul class="list-inline mb-0">
                  <li class="list-inline-item"><a href="../doc/index.html">Documentation</a></li>
                  <li class="list-inline-item"><a href="javascript:void(0)">FAQ</a></li>
                  <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-outline-primary btn-sm">Buy Now</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
  // @ is an alias to /src
  import Bashky from '@/components/BashkyBet.vue'

  export default {
    name: 'Home',
    components: {
      Bashky
    }
  }
</script>