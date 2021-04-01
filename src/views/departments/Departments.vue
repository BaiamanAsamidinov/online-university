<template>
  <div class="departments">
    <Bashky />
    <div class="page">
      <Header />
      <div class="section-body">
        <div class="container-fluid">
          <div class="d-flex justify-content-between align-items-center">
            <div class="header-action">
              <h1 class="page-title">Departments</h1>
              <ol class="breadcrumb page-breadcrumb">
                <li class="breadcrumb-item"><a href="#">Ericsson</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  Departments
                </li>
              </ol>
            </div>
            <ul class="nav nav-tabs page-header-tab">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#Dep-all"
                  >List View</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#Dep-add">Add</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="Dep-tab-Boot"
                  data-toggle="tab"
                  href="#Dep-add-Boot"
                  >Add Bootstrap Style</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section-body mt-4">
        <div class="container-fluid">
          <div class="tab-content">
            <div class="tab-pane active" id="Dep-all">
              <div class="table-responsive">
                <div class="table-responsive card">
                  <table
                    class="table table-hover table-striped table-vcenter text-nowrap mb-0"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Dept. Name</th>
                        <th>University</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>establish</th>
                        <th>Std. Capacity</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="department in departments"
                        :key="department.id"
                      >
                        <td>{{ department.id }}</td>
                        <td>{{ department.name }}</td>
                        <td>{{ department.university }}</td>
                        <td>+123 4567890</td>
                        <td>test@example.com</td>
                        <td>1998</td>
                        <td>150</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-icon btn-sm"
                            title="View"
                          >
                            <i class="fa fa-eye"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-icon btn-sm"
                            title="Edit"
                          >
                            <i class="fa fa-edit"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-icon btn-sm js-sweetalert"
                            title="Delete"
                            data-type="confirm"
                          >
                            <i class="fa fa-trash-o text-danger"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="Dep-add">
              <div class="col-lg-12 col-md-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Department Basic Info</h3>
                    <div class="card-options">
                      <a
                        href="#"
                        class="card-options-collapse"
                        data-toggle="card-collapse"
                        ><i class="fe fe-chevron-up"></i
                      ></a>
                      <a
                        href="#"
                        class="card-options-remove"
                        data-toggle="card-remove"
                        ><i class="fe fe-x"></i
                      ></a>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="row clearfix">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Department Name "
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Head of Department"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input
                            type="number"
                            class="form-control"
                            placeholder="No. of Students "
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input
                            data-provide="datepicker"
                            data-date-autoclose="true"
                            class="form-control"
                            placeholder="Department Start Date"
                          />
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="form-group">
                          <textarea
                            rows="4"
                            class="form-control no-resize"
                            placeholder="Brief"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                        <button
                          type="submit"
                          class="btn btn-outline-secondary btn-default"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Staff Member Account Info</h3>
                    <div class="card-options">
                      <a
                        href="#"
                        class="card-options-collapse"
                        data-toggle="card-collapse"
                        ><i class="fe fe-chevron-up"></i
                      ></a>
                      <a
                        href="#"
                        class="card-options-remove"
                        data-toggle="card-remove"
                        ><i class="fe fe-x"></i
                      ></a>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="row clearfix">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                        <button
                          type="submit"
                          class="btn btn-outline-secondary btn-default"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="Dep-add-Boot">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Add Department</h3>
                  <div class="card-options">
                    <a
                      href="#"
                      class="card-options-collapse"
                      data-toggle="card-collapse"
                      ><i class="fe fe-chevron-up"></i
                    ></a>
                    <a
                      href="#"
                      class="card-options-remove"
                      data-toggle="card-remove"
                      ><i class="fe fe-x"></i
                    ></a>
                  </div>
                </div>
                <form class="card-body">
                  <div class="form-group row">
                    <label class="col-md-3 col-form-label"
                      >Department Name <span class="text-danger">*</span></label
                    >
                    <div class="col-md-7">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-3 col-form-label"
                      >Head Of Department</label
                    >
                    <div class="col-md-7">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-3 col-form-label"
                      >Department Start Date
                      <span class="text-danger">*</span></label
                    >
                    <div class="col-md-7">
                      <input
                        data-provide="datepicker"
                        data-date-autoclose="true"
                        class="form-control"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-3 col-form-label"
                      >Student Capacity
                      <span class="text-danger">*</span></label
                    >
                    <div class="col-md-7">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-3 col-form-label"
                      >Department Details
                      <span class="text-danger">*</span></label
                    >
                    <div class="col-md-7">
                      <textarea
                        rows="4"
                        class="form-control no-resize"
                        placeholder="Please type what you want..."
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-3 col-form-label"></label>
                    <div class="col-md-7">
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                      <button type="submit" class="btn btn-outline-secondary">
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./departments.component.js'>