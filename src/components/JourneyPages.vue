<template>
    <div>
        <button id="add-new-page-button">Add new page</button>
        <div id="pagesection">
            <h3>Add a journey page</h3>
            <label>Page Title</label><br/>
            <input type="text" placeholder="Page Title"><br/>
            <JourneyQuestion></JourneyQuestion>
        </div>
    </div>
</template>

<script>
    import JourneyQuestion from "../components/JourneyQuestion";
    export default {
        components: {JourneyQuestion},
        name: "JourneyPages"
    }
</script>

<style scoped>
#add-new-page-button{
    margin-top:2%;
}
</style>