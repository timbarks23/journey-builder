<template>
    <div id="dashboardComponent">
        <h3>{{componentTitle}}</h3>
        <p>{{componentText}}</p>
    </div>
</template>

<script src="../assets/js/components/dashboardContent.js"></script>

<style lang="scss">
    @import "../assets/styles/sass/baseStyles";
    @import "../assets/styles/sass/components/dashboardContentStyles";
    #dashboardComponent{
        text-align: center;
    }
</style>