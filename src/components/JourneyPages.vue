<template>
    <div>
        <h3>Add a journey page</h3>
        <label>Page Title</label><br/>
        <input type="text" placeholder="Page Title"><br/>
        <JourneyQuestion></JourneyQuestion>
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

</style>