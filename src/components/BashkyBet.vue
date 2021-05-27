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
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#menu-admin">Admin</a>
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
                <a href="staff.html"
                  ><i class="fa fa-user-circle-o"></i><span>Staff</span></a
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
                <a href="library.html"
                  ><i class="fa fa-book"></i><span>Library</span></a
                >
              </li>
              <li>
                <a href="holiday.html"
                  ><i class="fa fa-bullhorn"></i><span>Holiday</span></a
                >
              </li>
              <li class="g_heading">Extra</li>
              <li>
                <a href="events.html"
                  ><i class="fa fa-calendar"></i><span>Calender</span></a
                >
              </li>
              <li>
                <a href="app-chat.html"
                  ><i class="fa fa-comments-o"></i><span>Chat App</span></a
                >
              </li>
              <li>
                <a href="app-contact.html"
                  ><i class="fa fa-address-book"></i><span>Contact</span></a
                >
              </li>
              <li>
                <a href="app-filemanager.html"
                  ><i class="fa fa-folder"></i><span>FileManager</span></a
                >
              </li>
              <li>
                <a href="our-centres.html"
                  ><i class="fa fa-map"></i><span>OurCentres</span></a
                >
              </li>
              <li>
                <a href="gallery.html"
                  ><i class="fa fa-camera-retro"></i><span>Gallery</span></a
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="tab-pane fade align-left" id="menu-admin" role="tabpanel">
          <nav class="sidebar-nav">
            <ul class="metismenu">
<!--              <li>-->
<!--                <a href="payments.html"-->
<!--                  ><i class="fa fa-credit-card"></i><span>Payments</span></a-->
<!--                >-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="noticeboard.html"-->
<!--                  ><i class="fa fa-dashboard"></i><span>Noticeboard</span></a-->
<!--                >-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="taskboard.html"-->
<!--                  ><i class="fa fa-list-ul"></i><span>Taskboard</span></a-->
<!--                >-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="hostel.html"-->
<!--                  ><i class="fa fa-bed"></i><span>Hostel</span></a-->
<!--                >-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="transport.html"-->
<!--                  ><i class="fa fa-truck"></i><span>Transport</span></a-->
<!--                >-->
<!--              </li>-->
              <li>
                <router-link to="/attendance"
                ><i class="fa fa-calendar-check-o"></i
                ><span>Attendance</span></router-link>
              </li>
              <li>
                <a href="leave.html"
                  ><i class="fa fa-flag"></i><span>Leave</span></a
                >
              </li>
              <li>
                <a href="setting.html"
                  ><i class="fa fa-gear"></i><span>Settings</span></a
                >
              </li>
            </ul>
          </nav>
        </div>
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