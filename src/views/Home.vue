<template>
  <div class="home">
    <Bashky/>
    <div class="page">
      <!-- Start Page header -->
      <div class="section-body" id="page_top">
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
          <div class="d-flex justify-content-between align-items-center">
            <div class="header-action">
              <h1 class="page-title">Dashboard</h1>
              <ol class="breadcrumb page-breadcrumb">
                <li class="breadcrumb-item"><a href="#">Ericsson</a></li>
                <li class="breadcrumb-item"><a href="#">University</a></li>
                <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
              </ol>
            </div>
            <ul class="nav nav-tabs page-header-tab">
              <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#admin-Dashboard">Dashboard</a></li>
              <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#admin-Activity">Activity</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section-body mt-4">
        <div class="container-fluid">
          <div class="row clearfix row-deck">
            <div class="col-6 col-md-4 col-xl-2">
              <div class="card">
                <div class="card-body ribbon">
                  <div class="ribbon-box green" data-toggle="tooltip" title="New Professors">5</div>
                  <a href="professors.html" class="my_sort_cut text-muted">
                    <i class="fa fa-black-tie"></i>
                    <span>Professors</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-xl-2">
              <div class="card">
                <div class="card-body">
                  <a href="app-contact.html" class="my_sort_cut text-muted">
                    <i class="fa fa-address-book"></i>
                    <span>Contact</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-xl-2">
              <div class="card">
                <div class="card-body ribbon">
                  <div class="ribbon-box orange" data-toggle="tooltip" title="New Staff">8</div>
                  <a href="staff.html" class="my_sort_cut text-muted">
                    <i class="fa fa-user-circle-o"></i>
                    <span>Staff</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-xl-2">
              <div class="card">
                <div class="card-body">
                  <a href="app-filemanager.html" class="my_sort_cut text-muted">
                    <i class="fa fa-folder"></i>
                    <span>FileManager</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-xl-2">
              <div class="card">
                <div class="card-body">
                  <a href="library.html" class="my_sort_cut text-muted">
                    <i class="fa fa-book"></i>
                    <span>Library</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-xl-2">
              <div class="card">
                <div class="card-body">
                  <a href="holiday.html" class="my_sort_cut text-muted">
                    <i class="fa fa-bullhorn"></i>
                    <span>Holiday</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="admin-Dashboard" role="tabpanel">
              <div class="row clearfix">
                <div class="col-xl-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">University Report</h3>
                      <div class="card-options">
                        <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                        <a href="#" class="card-options-fullscreen" data-toggle="card-fullscreen"><i class="fe fe-maximize"></i></a>
                        <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="d-sm-flex justify-content-between">
                        <div class="font-12 mb-2"><span>Measure How Fast You’re Growing Monthly Recurring Revenue. <a href="#">Learn More</a></span></div>
                        <div class="selectgroup w250">
                          <label class="selectgroup-item">
                            <input type="radio" name="intensity" value="low" class="selectgroup-input" checked="">
                            <span class="selectgroup-button">1D</span>
                          </label>
                          <label class="selectgroup-item">
                            <input type="radio" name="intensity" value="medium" class="selectgroup-input">
                            <span class="selectgroup-button">1W</span>
                          </label>
                          <label class="selectgroup-item">
                            <input type="radio" name="intensity" value="high" class="selectgroup-input">
                            <span class="selectgroup-button">1M</span>
                          </label>
                          <label class="selectgroup-item">
                            <input type="radio" name="intensity" value="veryhigh" class="selectgroup-input">
                            <span class="selectgroup-button">1Y</span>
                          </label>
                        </div>
                      </div>
                      <div id="apex-chart-line-column"></div>
                    </div>
                    <div class="card-footer">
                      <div class="row">
                        <div class="col-xl-3 col-md-6 mb-2">
                          <div class="clearfix">
                            <div class="float-left"><strong>Fees</strong></div>
                            <div class="float-right"><small class="text-muted">35%</small></div>
                          </div>
                          <div class="progress progress-xs">
                            <div class="progress-bar bg-indigo" role="progressbar" style="width: 35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <span class="text-uppercase font-10">Compared to last year</span>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-2">
                          <div class="clearfix">
                            <div class="float-left"><strong>Donation</strong></div>
                            <div class="float-right"><small class="text-muted">61%</small></div>
                          </div>
                          <div class="progress progress-xs">
                            <div class="progress-bar bg-yellow" role="progressbar" style="width: 61%" aria-valuenow="61" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <span class="text-uppercase font-10">Compared to last year</span>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-2">
                          <div class="clearfix">
                            <div class="float-left"><strong>Income</strong></div>
                            <div class="float-right"><small class="text-muted">87%</small></div>
                          </div>
                          <div class="progress progress-xs">
                            <div class="progress-bar bg-green" role="progressbar" style="width: 87%" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <span class="text-uppercase font-10">Compared to last year</span>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-2">
                          <div class="clearfix">
                            <div class="float-left"><strong>Expense</strong></div>
                            <div class="float-right"><small class="text-muted">42%</small></div>
                          </div>
                          <div class="progress progress-xs">
                            <div class="progress-bar bg-pink" role="progressbar" style="width: 42%" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <span class="text-uppercase font-10">Compared to last year</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row clearfix row-deck">
                <div class="col-xl-6 col-lg-6 col-md-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Exam Toppers</h3>
                      <div class="card-options">
                        <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
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
                    <div class="table-responsive" style="height: 310px;">
                      <table class="table card-table table-vcenter text-nowrap table-striped mb-0">
                        <tbody>
                        <tr>
                          <th>No.</th>
                          <th>Name</th>
                          <th></th>
                          <th>Marks</th>
                          <th>%AGE</th>
                        </tr>
                        <tr>
                          <td>11</td>
                          <td class="w40">
                            <div class="avatar">
                              <img class="avatar" src="../assets/images/xs/avatar1.jpg" alt="avatar">
                            </div>
                          </td>
                          <td>
                            <div>Merri Diamond</div>
                            <div class="text-muted">Science</div>
                          </td>
                          <td>199</td>
                          <td>99.00</td>
                        </tr>
                        <tr>
                          <td>23</td>
                          <td class="w40">
                            <div class="avatar">
                              <img class="avatar" src="../assets/images/xs/avatar2.jpg" alt="avatar">
                            </div>
                          </td>
                          <td>
                            <div>Sara Hopkins</div>
                            <div class="text-muted">Mechanical</div>
                          </td>
                          <td>197</td>
                          <td>98.00</td>
                        </tr>
                        <tr>
                          <td>41</td>
                          <td class="w40">
                            <div class="avatar">
                              <img class="avatar" src="../assets/images/xs/avatar3.jpg" alt="avatar">
                            </div>
                          </td>
                          <td>
                            <div>Allen Collins</div>
                            <div class="text-muted">M.C.A.</div>
                          </td>
                          <td>197</td>
                          <td>98.00</td>
                        </tr>
                        <tr>
                          <td>17</td>
                          <td class="w40">
                            <div class="avatar">
                              <img class="avatar" src="../assets/images/xs/avatar4.jpg" alt="avatar">
                            </div>
                          </td>
                          <td>
                            <div>Erin Gonzales</div>
                            <div class="text-muted">Arts</div>
                          </td>
                          <td>194</td>
                          <td>97.00</td>
                        </tr>
                        <tr>
                          <td>57</td>
                          <td class="w40">
                            <div class="avatar">
                              <img class="avatar" src="../assets/images/xs/avatar5.jpg" alt="avatar">
                            </div>
                          </td>
                          <td>
                            <div>Claire Peters</div>
                            <div class="text-muted">Science</div>
                          </td>
                          <td>192</td>
                          <td>95.00</td>
                        </tr>
                        <tr>
                          <td>85</td>
                          <td class="w40">
                            <div class="avatar">
                              <img class="avatar" src="../assets/images/xs/avatar6.jpg" alt="avatar">
                            </div>
                          </td>
                          <td>
                            <div>Claire Peters</div>
                            <div class="text-muted">Science</div>
                          </td>
                          <td>192</td>
                          <td>95.00</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td class="w40">
                            <div class="avatar">
                              <img class="avatar" src="../assets/images/xs/avatar7.jpg" alt="avatar">
                            </div>
                          </td>
                          <td>
                            <div>Claire Peters</div>
                            <div class="text-muted">Science</div>
                          </td>
                          <td>191</td>
                          <td>95.00</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                      <div class="font-14"><span>Measure How Fast You’re Growing Monthly Recurring Revenue. <a href="#">View All</a></span></div>
                      <div>
                        <button type="button" class="btn btn-primary">Export</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Performance</h3>
                    </div>
                    <div class="card-body">
                      <div id="apex-radar-multiple-series"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">New Student List</h3>
                      <div class="card-options">
                        <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                        <a href="#" class="card-options-fullscreen" data-toggle="card-fullscreen"><i class="fe fe-maximize"></i></a>
                        <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-striped mb-0 text-nowrap">
                          <thead>
                          <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Assigned Professor</th>
                            <th>Date Of Admit</th>
                            <th>Fees</th>
                            <th>Branch</th>
                            <th>Edit</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>1</td>
                            <td>Jens Brincker</td>
                            <td>Kenny Josh</td>
                            <td>27/05/2016</td>
                            <td>
                              <span class="tag tag-success">paid</span>
                            </td>
                            <td>Mechanical</td>
                            <td>
                              <a href="javascript:void(0)"><i class="fa fa-check"></i></a>
                              <a href="javascript:void(0)"><i class="fa fa-trash"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Mark Hay</td>
                            <td> Mark</td>
                            <td>26/05/2018</td>
                            <td>
                              <span class="tag tag-warning">unpaid</span>
                            </td>
                            <td>Science</td>
                            <td>
                              <a href="javascript:void(0)"><i class="fa fa-check"></i></a>
                              <a href="javascript:void(0)"><i class="fa fa-trash"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Anthony Davie</td>
                            <td>Cinnabar</td>
                            <td>21/05/2018</td>
                            <td>
                              <span class="tag tag-success ">paid</span>
                            </td>
                            <td>Commerce</td>
                            <td>
                              <a href="javascript:void(0)"><i class="fa fa-check"></i></a>
                              <a href="javascript:void(0)"><i class="fa fa-trash"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>David Perry</td>
                            <td>Felix </td>
                            <td>20/04/2019</td>
                            <td>
                              <span class="tag tag-danger">unpaid</span>
                            </td>
                            <td>Mechanical</td>
                            <td>
                              <a href="javascript:void(0)"><i class="fa fa-check"></i></a>
                              <a href="javascript:void(0)"><i class="fa fa-trash"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Anthony Davie</td>
                            <td>Beryl</td>
                            <td>24/05/2017</td>
                            <td>
                              <span class="tag tag-success ">paid</span>
                            </td>
                            <td>M.B.A.</td>
                            <td>
                              <a href="javascript:void(0)"><i class="fa fa-check"></i></a>
                              <a href="javascript:void(0)"><i class="fa fa-trash"></i></a>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="admin-Activity" role="tabpanel">
              <div class="row clearfix row-deck">
                <div class="col-xl-7 col-lg-6 col-md-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Quick Mail</h3>
                      <div class="card-options">
                        <a href="javascript:void(0)" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
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
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text w80">To:</span>
                        </div>
                        <input type="text" class="form-control">
                        <div class="input-group-append">
                          <span class="input-group-text">CC BCC</span>
                        </div>
                      </div>
                      <div class="input-group mt-1 mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text w80">Subject:</span>
                        </div>
                        <input type="text" class="form-control">
                      </div>

                      <div class="summernote">
                        Hi there,
                        <br/>
                        <p>The toolbar can be customized and it also supports various callbacks such as <code>oninit</code>, <code>onfocus</code>, <code>onpaste</code> and many more.</p>
                        <br/>
                        <p>Thank you!</p>
                        <h6>Summer Note</h6>
                      </div>
                      <button class="btn btn-default mt-3">Send</button>
                    </div>
                  </div>

                </div>
                <div class="col-xl-5 col-lg-6 col-md-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">University Stats</h3>
                      <div class="card-options">
                        <a href="javascript:void(0)" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
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
                      <div class="row text-center">
                        <div class="col-lg-4 col-4 border-right">
                          <label class="mb-0 font-10">Department</label>
                          <h4 class="font-20 font-weight-bold">05</h4>
                        </div>
                        <div class="col-lg-4 col-4 border-right">
                          <label class="mb-0 font-10">Total Teacher</label>
                          <h4 class="font-20 font-weight-bold">43</h4>
                        </div>
                        <div class="col-lg-4 col-4">
                          <label class="mb-0 font-10">Total Student</label>
                          <h4 class="font-20 font-weight-bold">267</h4>
                        </div>
                      </div>
                      <table class="table table-striped mt-4">
                        <tbody><tr>
                          <td>
                            <label class="d-block">Mechanical Engineering<span class="float-right">43%</span></label>
                            <div class="progress progress-xs">
                              <div class="progress-bar bg-indigo" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style="width: 43%;"></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="d-block">Business Analysis - BUS <span class="float-right">27%</span></label>
                            <div class="progress progress-xs">
                              <div class="progress-bar bg-blue" role="progressbar" aria-valuenow="27" aria-valuemin="0" aria-valuemax="100" style="width: 27%;"></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="d-block">Computer Technology - CT <span class="float-right">81%</span></label>
                            <div class="progress progress-xs">
                              <div class="progress-bar bg-cyan" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style="width: 81%;"></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="d-block">Management - MGT <span class="float-right">61%</span></label>
                            <div class="progress progress-xs">
                              <div class="progress-bar bg-pink" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style="width: 61%;"></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="d-block">Science <span class="float-right">77%</span></label>
                            <div class="progress progress-xs">
                              <div class="progress-bar bg-orange" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style="width: 77%;"></div>
                            </div>
                          </td>
                        </tr>
                        </tbody></table>
                    </div>
                    <div class="card-footer">
                      <small>Measure How Fast You’re Growing Monthly Recurring Revenue. <a href="#">Learn More</a></small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-12 col-lg-12">
                  <div class="card">
                    <div class="table-responsive todo_list">
                      <table class="table table-hover text-nowrap table-striped table-vcenter mb-0">
                        <thead>
                        <tr>
                          <th>Task</th>
                          <th class="w150 text-right">Due</th>
                          <th class="w100">Priority</th>
                          <th class="w80 text-center"><i class="icon-user"></i></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>
                            <label class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1" checked>
                              <span class="custom-control-label">Report Panel Usag</span>
                            </label>
                          </td>
                          <td class="text-right">Feb 12-2019</td>
                          <td><span class="tag tag-danger ml-0 mr-0">HIGH</span></td>
                          <td>
                            <span class="avatar avatar-pink"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar Name">NG</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1">
                              <span class="custom-control-label">Report Panel Usag</span>
                            </label>
                          </td>
                          <td class="text-right">Feb 18-2019</td>
                          <td><span class="tag tag-warning ml-0 mr-0">MED</span></td>
                          <td>
                            <img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="avatar" data-original-title="Avatar Name">
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1" checked>
                              <span class="custom-control-label">New logo design for Angular Admin</span>
                            </label>
                          </td>
                          <td class="text-right">March 02-2019</td>
                          <td><span class="tag tag-success ml-0 mr-0">High</span></td>
                          <td>
                            <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="avatar" data-original-title="Avatar Name">
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1" checked>
                              <span class="custom-control-label">Report Panel Usag</span>
                            </label>
                          </td>
                          <td class="text-right">Feb 12-2019</td>
                          <td><span class="tag tag-danger ml-0 mr-0">HIGH</span></td>
                          <td>
                            <span class="avatar avatar-pink"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar Name">NG</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1">
                              <span class="custom-control-label">Report Panel Usag</span>
                            </label>
                          </td>
                          <td class="text-right">Feb 18-2019</td>
                          <td><span class="tag tag-warning ml-0 mr-0">MED</span></td>
                          <td>
                            <img src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="avatar" data-original-title="Avatar Name">
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1" checked>
                              <span class="custom-control-label">New logo design for Angular Admin</span>
                            </label>
                          </td>
                          <td class="text-right">March 02-2019</td>
                          <td><span class="tag tag-success ml-0 mr-0">High</span></td>
                          <td>
                            <span class="avatar avatar-blue"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar Name">NG</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1">
                              <span class="custom-control-label">Design PSD files for Angular Admin</span>
                            </label>
                          </td>
                          <td class="text-right">March 20-2019</td>
                          <td><span class="tag tag-warning ml-0 mr-0">MED</span></td>
                          <td>
                            <img src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="avatar" data-original-title="Avatar Name">
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1">
                              <span class="custom-control-label">Design PSD files for Angular Admin</span>
                            </label>
                          </td>
                          <td class="text-right">March 20-2019</td>
                          <td><span class="tag tag-warning ml-0 mr-0">MED</span></td>
                          <td>
                            <img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="avatar" data-original-title="Avatar Name">
                          </td>
                        </tr>
                        </tbody>
                      </table>
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
