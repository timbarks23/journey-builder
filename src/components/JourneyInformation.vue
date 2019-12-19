<template>
    <div>
        <h3>Journey Information</h3>
        <form>
            <lable>Journey for product</lable><br/>
            <select @change="journeyPages = true">
                <option>Select a product</option>
                <option>Car</option>
                <option>Van</option>
                <option>Energy</option>
                <option>Pet</option>
                <option>Bike</option>
            </select>
            <div v-show="journeyPages">
                <JourneyPages></JourneyPages>
            </div>

        </form>
    </div>
</template>

<script>
    import JourneyPages from "./JourneyPages";
    export default {
        name: "JourneyInformation",
        components : {JourneyPages},
        data : function() {
            return {
                journeyPages : false,
            }
        },
    }
</script>

<style scoped>

</style>