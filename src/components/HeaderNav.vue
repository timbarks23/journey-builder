<template>
    <div id="headerNav">
        <ul>
            <li>
                <a :href="`${dashboardLink}`">
                    {{dashboardLinkText}}
                </a>
            </li>
            <li>
                <a :href="`${viewJourneyLink}`">
                    {{viewJourneyLinkText}}
                </a>
            </li>
            <li>
                <a :href="`${createJourneyLink}`">
                    {{createJourneyLinkText}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script src="../assets/js/components/headerNav.js"></script>

<style lang="scss">
    @import "../assets/styles/sass/baseStyles";
    @import "../assets/styles/sass/components/headerNavStyles";
    #headerNav{
        text-align: center;
        width:100%;
    }
    #headerNav ul, li{
        display: inline-block;
        width: 100%;
    }
    #headerNav li{
        width:30%;
    }
</style>