<template>
    <div id="dashboard">
        <Header></Header>
            <div id="dashcontent">
                <h1>{{viewTitle}}</h1>
            </div>
        <DashboardContent></DashboardContent>
        <Footer></Footer>
    </div>
</template>

<script src="../assets/js/views/dashboard.js"></script>

<style lang="scss">
    @import "../assets/styles/sass/baseStyles";
    @import "../assets/styles/sass/views/dashboardStyles";
    #dashcontent{
        text-align: center;
    }
</style>
