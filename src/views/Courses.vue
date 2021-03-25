<template>
    <div class="courses">
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
                            <h1 class="page-title">Courses</h1>
                            <ol class="breadcrumb page-breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Ericsson</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Courses</li>
                            </ol>
                        </div>
                        <ul class="nav nav-tabs page-header-tab">
                            <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#Courses-all">List View</a></li>
                            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Courses-add">Add</a></li>
                            <li class="nav-item"><a class="nav-link" id="Courses-tab-Boot" data-toggle="tab" href="#Courses-add-Boot">Add Bootstrap Style</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="section-body mt-4">
                <div class="container-fluid">
                    <div class="tab-content">
                        <div class="tab-pane active" id="Courses-all">
                            <div class="row row-deck">
                                <div class="col-xl-4 col-lg-4 col-md-6">
                                    <div class="card">
                                        <a href="#"><img class="card-img-top" src="../assets/images/gallery/1.jpg" alt=""></a>
                                        <div class="card-body d-flex flex-column">
                                            <h5><a href="courses-details.html">PHP Development Course</a></h5>
                                            <div class="text-muted">Look, my liege! The Knights Who Say Ni demand a sacrifice!</div>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table table-striped table-vcenter mb-0">
                                                <tbody>
                                                <tr>
                                                    <td class="w20"><i class="fa fa-calendar text-blue"></i></td>
                                                    <td class="tx-medium">Duration</td>
                                                    <td class="text-right">6 Months</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-cc-visa text-danger"></i></td>
                                                    <td class="tx-medium">Fees</td>
                                                    <td class="text-right">$1,674</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-users text-warning"></i></td>
                                                    <td class="tx-medium">Students</td>
                                                    <td class="text-right">125+</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="card-footer">
                                            <div class="d-flex align-items-center mt-auto">
                                                <img class="avatar avatar-md mr-3" src="../assets/images/xs/avatar4.jpg" alt="avatar">
                                                <div>
                                                    <a href="#">Pro. Jane</a>
                                                    <small class="d-block text-muted">Head OF Dept.</small>
                                                </div>
                                                <div class="ml-auto text-muted">
                                                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 521</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6">
                                    <div class="card ribbon">
                                        <div class="ribbon-box orange"><i class="fa fa-star"></i></div>
                                        <a href="#"><img class="card-img-top" src="../assets/images/gallery/2.jpg" alt=""></a>
                                        <div class="card-body d-flex flex-column">
                                            <h5><a href="courses-details.html">Account Management Course</a></h5>
                                            <div class="text-muted">Look, my liege! The Knights Who Say Ni demand a sacrifice!</div>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table table-striped table-vcenter mb-0">
                                                <tbody>
                                                <tr>
                                                    <td class="w20"><i class="fa fa-calendar text-blue"></i></td>
                                                    <td class="tx-medium">Duration</td>
                                                    <td class="text-right">1 Year</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-cc-visa text-danger"></i></td>
                                                    <td class="tx-medium">Fees</td>
                                                    <td class="text-right">$1,674</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-users text-warning"></i></td>
                                                    <td class="tx-medium">Students</td>
                                                    <td class="text-right">50+</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="card-footer">
                                            <div class="d-flex align-items-center mt-auto">
                                                <img class="avatar avatar-md mr-3" src="../assets/images/xs/avatar2.jpg" alt="avatar">
                                                <div>
                                                    <a href="#">Pro. Alan</a>
                                                    <small class="d-block text-muted">Head OF Dept.</small>
                                                </div>
                                                <div class="ml-auto text-muted">
                                                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 521</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6">
                                    <div class="card">
                                        <a href="#"><img class="card-img-top" src="../assets/images/gallery/3.jpg" alt=""></a>
                                        <div class="card-body d-flex flex-column">
                                            <h5><a href="courses-details.html">Angular Programmer Course</a></h5>
                                            <div class="text-muted">Look, my liege! The Knights Who Say Ni demand a sacrifice!</div>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table table-striped table-vcenter mb-0">
                                                <tbody>
                                                <tr>
                                                    <td class="w20"><i class="fa fa-calendar text-blue"></i></td>
                                                    <td class="tx-medium">Duration</td>
                                                    <td class="text-right">6 Months</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-cc-visa text-danger"></i></td>
                                                    <td class="tx-medium">Fees</td>
                                                    <td class="text-right">$1,674</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-users text-warning"></i></td>
                                                    <td class="tx-medium">Students</td>
                                                    <td class="text-right">125+</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="card-footer">
                                            <div class="d-flex align-items-center mt-auto">
                                                <img class="avatar avatar-md mr-3" src="../assets/images/xs/avatar3.jpg" alt="avatar">
                                                <div>
                                                    <a href="#">Pro. Jane</a>
                                                    <small class="d-block text-muted">Head OF Dept.</small>
                                                </div>
                                                <div class="ml-auto text-muted">
                                                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 521</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6">
                                    <div class="card">
                                        <a href="#"><img class="card-img-top" src="../assets/images/gallery/4.jpg" alt=""></a>
                                        <div class="card-body d-flex flex-column">
                                            <h5><a href="courses-details.html">PHP Development Course</a></h5>
                                            <div class="text-muted">Look, my liege! The Knights Who Say Ni demand a sacrifice!</div>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table table-striped table-vcenter mb-0">
                                                <tbody>
                                                <tr>
                                                    <td class="w20"><i class="fa fa-calendar text-blue"></i></td>
                                                    <td class="tx-medium">Duration</td>
                                                    <td class="text-right">6 Months</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-cc-visa text-danger"></i></td>
                                                    <td class="tx-medium">Fees</td>
                                                    <td class="text-right">$1,674</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-users text-warning"></i></td>
                                                    <td class="tx-medium">Students</td>
                                                    <td class="text-right">125+</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="card-footer">
                                            <div class="d-flex align-items-center mt-auto">
                                                <img class="avatar avatar-md mr-3" src="../assets/images/xs/avatar4.jpg" alt="avatar">
                                                <div>
                                                    <a href="#">Pro. Jane</a>
                                                    <small class="d-block text-muted">Head OF Dept.</small>
                                                </div>
                                                <div class="ml-auto text-muted">
                                                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 521</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6">
                                    <div class="card">
                                        <a href="#"><img class="card-img-top" src="../assets/images/gallery/5.jpg" alt=""></a>
                                        <div class="card-body d-flex flex-column">
                                            <h5><a href="courses-details.html">Magento Programmer Course</a></h5>
                                            <div class="text-muted">Look, my liege! The Knights Who Say Ni demand a sacrifice!</div>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table table-striped table-vcenter mb-0">
                                                <tbody>
                                                <tr>
                                                    <td class="w20"><i class="fa fa-calendar text-blue"></i></td>
                                                    <td class="tx-medium">Duration</td>
                                                    <td class="text-right">1 Year</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-cc-visa text-danger"></i></td>
                                                    <td class="tx-medium">Fees</td>
                                                    <td class="text-right">$1,674</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-users text-warning"></i></td>
                                                    <td class="tx-medium">Students</td>
                                                    <td class="text-right">50+</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="card-footer">
                                            <div class="d-flex align-items-center mt-auto">
                                                <img class="avatar avatar-md mr-3" src="../assets/images/xs/avatar5.jpg" alt="avatar">
                                                <div>
                                                    <a href="#">Pro. Corrine</a>
                                                    <small class="d-block text-muted">Head OF Dept.</small>
                                                </div>
                                                <div class="ml-auto text-muted">
                                                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 521</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6">
                                    <div class="card">
                                        <a href="#"><img class="card-img-top" src="../assets/images/gallery/6.jpg" alt=""></a>
                                        <div class="card-body d-flex flex-column">
                                            <h5><a href="courses-details.html">UI UX Design Course</a></h5>
                                            <div class="text-muted">Look, my liege! The Knights Who Say Ni demand a sacrifice!</div>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table table-striped table-vcenter mb-0">
                                                <tbody>
                                                <tr>
                                                    <td class="w20"><i class="fa fa-calendar text-blue"></i></td>
                                                    <td class="tx-medium">Duration</td>
                                                    <td class="text-right">6 Months</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-cc-visa text-danger"></i></td>
                                                    <td class="tx-medium">Fees</td>
                                                    <td class="text-right">$1,674</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-users text-warning"></i></td>
                                                    <td class="tx-medium">Students</td>
                                                    <td class="text-right">125+</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="card-footer">
                                            <div class="d-flex align-items-center mt-auto">
                                                <img class="avatar avatar-md mr-3" src="../assets/images/xs/avatar6.jpg" alt="avatar">
                                                <div>
                                                    <a href="#">Pro. Emmett</a>
                                                    <small class="d-block text-muted">Head OF Dept.</small>
                                                </div>
                                                <div class="ml-auto text-muted">
                                                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 521</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="Courses-add">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Department Basic Info</h3>
                                    <div class="card-options ">
                                        <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                                        <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="row clearfix">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Department Name ">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Head of Department">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="number" class="form-control" placeholder="No. of Students ">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input data-provide="datepicker" data-date-autoclose="true" class="form-control" placeholder="Department Start Date">
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <textarea rows="4" class="form-control no-resize" placeholder="Brief"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                            <button type="submit" class="btn btn-outline-secondary btn-default">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Staff Member Account Info</h3>
                                    <div class="card-options ">
                                        <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                                        <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="row clearfix">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Phone">
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                            <button type="submit" class="btn btn-outline-secondary btn-default">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="Courses-add-Boot">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Add Department</h3>
                                    <div class="card-options ">
                                        <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                                        <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
                                    </div>
                                </div>
                                <form class="card-body">
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label">Department Name <span class="text-danger">*</span></label>
                                        <div class="col-md-7">
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label">Head Of Department</label>
                                        <div class="col-md-7">
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label">Department Start Date <span class="text-danger">*</span></label>
                                        <div class="col-md-7">
                                            <input data-provide="datepicker" data-date-autoclose="true" class="form-control" placeholder="">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label">Student Capacity <span class="text-danger">*</span></label>
                                        <div class="col-md-7">
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label">Department Details <span class="text-danger">*</span></label>
                                        <div class="col-md-7">
                                            <textarea rows="4" class="form-control no-resize" placeholder="Please type what you want..."></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label"></label>
                                        <div class="col-md-7">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                            <button type="submit" class="btn btn-outline-secondary">Cancel</button>
                                        </div>
                                    </div>
                                </form>
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
    import Bashky from '@/components/BashkyBet.vue'
    export default {
        name: "Courses",
        components: {
            Bashky
        }
    }
</script>

<style scoped>

</style>