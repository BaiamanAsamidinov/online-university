<template>
  <div id="main_content">
    <div id="header_top" class="header_top">
      <div class="container">
        <!--        <div class="hleft">-->
        <!--          <a class="header-brand" href="index.html"-->
        <!--            ><i class="fa fa-graduation-cap brand-logo"></i-->
        <!--          ></a>-->
        <!--          <div class="dropdown">-->
        <!--            <a href="javascript:void(0)" class="nav-link icon menu_toggle"-->
        <!--              ><i class="fe fe-align-center"></i-->
        <!--            ></a>-->
        <!--            <a href="page-search.html" class="nav-link icon"-->
        <!--              ><i-->
        <!--                class="fe fe-search"-->
        <!--                data-toggle="tooltip"-->
        <!--                data-placement="right"-->
        <!--                title="Search..."-->
        <!--              ></i-->
        <!--            ></a>-->
        <!--            <a href="app-email.html" class="nav-link icon app_inbox"-->
        <!--              ><i-->
        <!--                class="fe fe-inbox"-->
        <!--                data-toggle="tooltip"-->
        <!--                data-placement="right"-->
        <!--                title="Inbox"-->
        <!--              ></i-->
        <!--            ></a>-->
        <!--            <a-->
        <!--              href="app-filemanager.html"-->
        <!--              class="nav-link icon app_file xs-hide"-->
        <!--              ><i-->
        <!--                class="fe fe-folder"-->
        <!--                data-toggle="tooltip"-->
        <!--                data-placement="right"-->
        <!--                title="File Manager"-->
        <!--              ></i-->
        <!--            ></a>-->
        <!--            <a href="app-social.html" class="nav-link icon xs-hide"-->
        <!--              ><i-->
        <!--                class="fe fe-share-2"-->
        <!--                data-toggle="tooltip"-->
        <!--                data-placement="right"-->
        <!--                title="Social Media"-->
        <!--              ></i-->
        <!--            ></a>-->
        <!--            <a href="javascript:void(0)" class="nav-link icon theme_btn"-->
        <!--              ><i class="fe fe-feather"></i-->
        <!--            ></a>-->
        <!--            <a href="javascript:void(0)" class="nav-link icon settingbar"-->
        <!--              ><i class="fe fe-settings"></i-->
        <!--            ></a>-->
        <!--          </div>-->
        <!--        </div>-->
        <div class="hright">
          <a href="javascript:void(0)" class="nav-link icon right_tab"
            ><i class="fe fe-align-right"></i
          ></a>
          <router-link to="/login" class="nav-link icon settingbar"
            ><i class="fe fe-power"></i
          ></router-link>
        </div>
      </div>
    </div>
    <div id="left-sidebar" class="sidebar">
      <h5 class="brand-name">
        Online University<a
          href="javascript:void(0)"
          class="menu_option float-right"
          ><i
            class="icon-grid font-16"
            data-toggle="tooltip"
            data-placement="left"
            title="Grid & List Toggle"
          ></i
        ></a>
      </h5>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#menu-uni"
            >University</a
          >
        </li>
      </ul>
      <div class="tab-content mt-3">
        <div class="tab-pane fade show active" id="menu-uni" role="tabpanel">
          <nav class="sidebar-nav align-left">
            <ul class="metismenu">
              <li class="active">
                <router-link to="/"
                  ><i class="fa fa-dashboard"></i
                  ><span>Dashboard</span></router-link
                >
              </li>
              <li>
                <router-link to="/professors" v-if="authenticated"
                  ><i class="fa fa-black-tie"></i
                  ><span>Professors</span></router-link
                >
              </li>
              <li>
                <router-link to="/students"
                  ><i class="fa fa-users"></i><span>Students</span></router-link
                >
              </li>
              <li>
                <router-link to="/departments"
                  ><i class="fa fa-users"></i
                  ><span>Departments</span></router-link
                >
              </li>
              <li>
                <router-link to="/courses" v-if="authenticated"
                  ><i class="fa fa-graduation-cap"></i
                  ><span>Courses</span></router-link
                >
              </li>
              <li>
                <router-link to="/attendance"
                  ><i class="fa fa-calendar-check-o"></i
                  ><span>Attendance</span></router-link
                >
              </li>
            </ul>
          </nav>
        </div>
        <!-- <div class="tab-pane fade align-left" id="menu-admin" role="tabpanel">
          <nav class="sidebar-nav">
            <ul class="metismenu">
              <li>
                <router-link to="/attendance"
                  ><i class="fa fa-calendar-check-o"></i
                  ><span>Attendance</span></router-link
                >
              </li>
            </ul>
          </nav>
        </div> -->
      </div>
    </div>
    <!-- Start project content area -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters(["authenticated"]),
  },
};
</script>

<style scoped>
</style>