<template>
    <div>
        <button id="add-new-question-button">Add new question</button>
        <h3>Add a journey question for the page</h3>
        <label>Question Title</label><br/>
        <input type="text" placeholder="Page Title"><br/>
        <label>Question Type</label><br/>
        <select name="question-type" id="question-type"><br/>
            <option>Input</option>
            <option>Select</option>
            <option>Date Picker</option>
            <option>Yes/No</option>
            <option>Reg look up</option>
            <option>Address Lookup</option>
        </select><br/>
        <label>Question Label</label><br/>
        <input type="text" placeholder="Question Label"><br/>
        <label>Is Question required</label>
        <input type="checkbox" id="question-required" name="question-required" checked>
    </div>
</template>

<script>
    export default {
        name: "JourneyQuestion"
    }
</script>

<style scoped>
#add-new-question-button{
    margin-top:2%;
}
</style>