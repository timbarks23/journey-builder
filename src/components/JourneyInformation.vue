<template>
    <div>
        <h3>Journey Information</h3>
        <form>
            <lable>Journey for product</lable><br/>
            <select>
                <option>Car</option>
                <option>Van</option>
                <option>Energy</option>
                <option>Pet</option>
                <option>Bike</option>
            </select>
            <JourneyPages></JourneyPages>
        </form>
    </div>
</template>

<script>
    import JourneyPages from "./JourneyPages";
    export default {
        name: "JourneyInformation",
        components : {JourneyPages},
    }
</script>

<style scoped>

</style>