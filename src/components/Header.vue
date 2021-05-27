<template>
  <!-- Start Page header -->
  <div class="section-body" id="page_top">
    <div class="container-fluid">
      <div class="page-header">
        <div class="left">
          <!-- <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="What you want to find"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                Search
              </button>
            </div>
          </div> -->
        </div>
        <div class="right">
          <ul class="nav nav-pills">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Pages</a
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" href="page-empty.html">Empty page</a>
                <a class="dropdown-item" href="page-profile.html">Profile</a>
                <a class="dropdown-item" href="page-search.html"
                  >Search Results</a
                >
                <a class="dropdown-item" href="page-timeline.html">Timeline</a>
                <a class="dropdown-item" href="page-invoices.html">Invoices</a>
                <a class="dropdown-item" href="page-pricing.html">Pricing</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Auth</a
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" href="login.html">Login</a>
                <a class="dropdown-item" href="register.html">Register</a>
                <a class="dropdown-item" href="forgot-password.html"
                  >Forgot password</a
                >
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="404.html">404 error</a>
                <a class="dropdown-item" href="500.html">500 error</a>
              </div>
            </li>
          </ul>
          <div class="notification d-flex">
            <div class="dropdown d-flex">
              <a
                class="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
                data-toggle="dropdown"
                ><i class="fa fa-bell"></i
                ><span class="badge badge-primary nav-unread"></span
              ></a>
              <div
                class="dropdown-menu dropdown-menu-right dropdown-menu-arrow"
              >
                <ul class="list-unstyled feeds_widget">
                  <li>
                    <div class="feeds-left">
                      <span class="avatar avatar-blue"
                        ><i class="fa fa-check"></i
                      ></span>
                    </div>
                    <div class="feeds-body ml-3">
                      <p class="text-muted mb-0">
                        Campaign
                        <strong class="text-blue font-weight-bold"
                          >Holiday</strong
                        >
                        is nearly reach budget limit.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="feeds-left">
                      <span class="avatar avatar-green"
                        ><i class="fa fa-user"></i
                      ></span>
                    </div>
                    <div class="feeds-body ml-3">
                      <p class="text-muted mb-0">
                        New admission
                        <strong class="text-green font-weight-bold">32</strong>
                        in computer department.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="feeds-left">
                      <span class="avatar avatar-red"
                        ><i class="fa fa-info"></i
                      ></span>
                    </div>
                    <div class="feeds-body ml-3">
                      <p class="text-muted mb-0">
                        6th sem result
                        <strong class="text-red font-weight-bold">67%</strong>
                        in computer department.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="feeds-left">
                      <span class="avatar avatar-azure"
                        ><i class="fa fa-thumbs-o-up"></i
                      ></span>
                    </div>
                    <div class="feeds-body ml-3">
                      <p class="text-muted mb-0">
                        New Feedback
                        <strong class="text-azure font-weight-bold">53</strong>
                        for university assessment.
                      </p>
                    </div>
                  </li>
                </ul>
                <div class="dropdown-divider"></div>
                <a
                  href="javascript:void(0)"
                  class="dropdown-item text-center text-muted-dark readall"
                  >Mark all as read</a
                >
              </div>
            </div>
            <div class="dropdown d-flex" v-if="user.username">
              <a
                href="javascript:void(0)"
                class="chip ml-3"
                data-toggle="dropdown"
              >
                <span
                  class="avatar"
                  style="background-image: url(@/assets/images/xs/avatar5.jpg)"
                ></span>
                {{ user.username }}</a
              >
              <div
                class="dropdown-menu dropdown-menu-right dropdown-menu-arrow"
              >
                <a class="dropdown-item" href="page-profile.html"
                  ><i class="dropdown-icon fe fe-user"></i> Profile</a
                >
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" v-on:click.prevent="logout()"
                  ><i class="dropdown-icon fe fe-log-out"></i> Sign out</a
                >
              </div>
            </div>
            <div class="dropdown d-flex" v-else>
              <router-link to="/login" class="btn btn-primary btn-block"
                >login <i class="fe fe-power"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { BASE_FRONT_URL } from "../shared/constants";

export default {
  methods: {
    logout() {
      localStorage.removeItem("authenticationToken");
      localStorage.removeItem("user1");
      sessionStorage.removeItem("authenticationToken");
      this.$store.commit("logout");
      window.location.href = `${BASE_FRONT_URL}/login`;
    },
  },

  data: function () {
    return {
      showMenu: true,
      number: 0,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>