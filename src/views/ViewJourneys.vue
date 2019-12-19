<template>
    <div>
        <Header></Header>
        <div id="edit-journey">
            <h2>Edit a Journey</h2>
            <ul>
                <li v-for="journey in journeys" v-bind:key="journey">
                    <p><span>Journey Id : </span>{{ journey.id }}<br/>
                        <span>Published By : </span>{{journey.publisher}}<br/>
                        <span>Journey for product : </span>{{journey.product}}
                    </p>
                    <a href="#">Edit Journey</a>
                </li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        components: {
            Header,
            Footer},
        name: "ViewJourneys",
        data : function() {
            return {
                journeys: []
            }
        },
        mounted () {
            const baseURI = 'https://journeycreatorapi.azurewebsites.net/journey';
            this.$httpRequest.get(baseURI)
                .then((result) => {
                    this.journeys = result.data
                })
        }
    }
</script>

<style scoped>
 #edit-journey{
     text-align: center;
 }
    ul, li{
        list-style-type: none;
    }
</style>