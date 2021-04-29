<template>
    <div class="attendance">
        <Bashky />
        <div class="page">
            <Header />

            <div class="section-body">
                <div class="container-fluid">
                    <div class="d-flex justify-content-between align-items-center ">
                        <div class="header-action">
                            <h1 class="page-title">Attendance</h1>
                            <ol class="breadcrumb page-breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Online University</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Attendance</li>
                            </ol>
                        </div>
                        <a href="javascript:void(0)" class="btn btn-info btn-sm">Export Excel</a>
                    </div>
                </div>
            </div>

            <div class='main-content'>
                <div class='container'>
<!--                    <h1>Attendance table</h1>-->
                    <br>

                    <table class='table table-data2'>
                        <tbody>
                        <tr class='tr-shadow'>
                            <td>

                                <div class='attendance-datepicker'>
                                    <date-picker v-model="selectedDate">
                                        <label>Select date</label>
                                    </date-picker>
                                </div>
                                <br>
                                <table class="table table-hover table-sm attendance-table">
                                    <thead class="thead">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th>Name</th>
                                        <th>Is present?</th>
                                    </tr>
                                    </thead>
                                    <tbody style='background: white'>
                                    <template v-for="(student, index) in students">
                                        <tr :key="student.id" class="tr-shadow">
                                            <td>{{index + 1}}</td>
                                            <td>{{ student.fullName }}</td>
                                            <td>
                                                <md-checkbox v-model="student.isPresent" class="md-primary"></md-checkbox>
                                                <input type="checkbox" value="Самат" class="md-primary" v-model="checkedNames">
                                            </td>
                                        </tr>
                                        <tr class="spacer" :key="'A'+ student.id"></tr>
                                    </template>
                                    </tbody>
                                </table>
                                <button class="au-btn au-btn-icon au-btn--green au-btn--small">
                                    <i class="zmdi zmdi-plus"></i>
                                    Submit
                                </button>

                            </td>
                        </tr>
                        </tbody>
                    </table>


                </div>
            </div>

            <Footer />
        </div>
    </div>

</template>
<style scoped>
    .thead-dark tr th {
        background-color: #555555;
        border-color:     #555555;
    }

    .md-checkbox {
        display: flex;
    }

    .attendance-datepicker {
        width: 200px;
    }

    .attendance-datepicker i::after {
        background: none !important;
    }

    .attendance-table {
        margin-bottom: 50px;
    }

    .attendance-table td {
        padding:        0 40px !important;
        vertical-align: middle !important;
    }

    table td {
        vertical-align: middle;
    }
</style>
<script src='./attendance.component.js'>

