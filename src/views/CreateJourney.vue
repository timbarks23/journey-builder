
<template>
    <div>
       <Header></Header>
        <div id="journey-builder">
            <h1>Build your journey</h1>
            <JourneyInformation></JourneyInformation>
            <button id="show-modal" @click="showModal = true">Generate Journey</button>
        </div>
        <Footer></Footer>

<!--modal begin -->
        <modal id="modal" v-if="showModal" @close="showModal = false">
            <button id="hide-modal" @click="showModal = false">X</button>
            <!--
              you can use custom content here to overwrite
              default content
            -->
            <h3 slot="header">Generated Journey</h3>
            <div>
                {
                "journeyId": 1,
                "publisher": "James Price",
                "publishedDate": "18/08/2019",
                "product": "Pet",
                "pages": [
                {
                "title": "Your Pet",
                "questions": [
                {
                "id": 0,
                "name": "pet-type",
                "type": 1,
                "label": "What type of animal is your pet?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "options": [
                { "id": 1, "value": "Dog" },
                { "id": 2, "value": "Cat" }
                ],
                "default": null
                },
                {
                "id": 1,
                "name": "dog-type",
                "type": 1,
                "label": "What type of dog is your pet?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "options": [
                { "id": 1, "value": "Pedigree" },
                { "id": 2, "value": "Crossbreed" },
                { "id": 3, "value": "Mongrel" }
                ],
                "displayCondition": {
                "field": "pet-type",
                "value": 1,
                "operator": "==="
                }
                },
                {
                "id": 2,
                "name": "cat-type",
                "type": 1,
                "label": "What type of cat is your pet?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "options": [
                { "id": 1, "value": "Pedigree" },
                { "id": 2, "value": "Moggie" }
                ],
                "displayCondition": {
                "field": "pet-type",
                "value": 2,
                "operator": "==="
                }
                },
                {
                "id": 3,
                "name": "pet-name",
                "type": 0,
                "label": "What is your pet's name?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "default": "",
                "maxLength": 30,
                "minLength": 2
                },
                {
                "id": 4,
                "name": "pet-sex",
                "type": 1,
                "label": "Is your pet male or female?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "options": [
                { "id": 1, "value": "Male" },
                { "id": 2, "value": "Female" }
                ],
                "default": null
                },
                {
                "id": 5,
                "name": "pet-dob",
                "type": 2,
                "label": "When is your pet's date of birth?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "default": null,
                "maxDate": 7
                },
                {
                "id": 6,
                "name": "excess",
                "type": 3,
                "label": "How much did your pet cost?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "default": 0
                },
                {
                "id": 7,
                "name": "pet-neutered",
                "type": 1,
                "label": "Has your pet been neutered or spayed?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "options": [
                { "id": 1, "value": "Yes" },
                { "id": 2, "value": "No" }
                ],
                "default": null
                },
                {
                "id": 8,
                "name": "pet-chipped",
                "type": 1,
                "label": "Has your pet been microchipped?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "options": [
                { "id": 1, "value": "Yes" },
                { "id": 2, "value": "No" }
                ],
                "default": null
                },
                {
                "id": 9,
                "name": "pet-vaccinated",
                "type": 1,
                "label": "Are your pet's vaccines up to date?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "options": [
                { "id": 1, "value": "Yes" },
                { "id": 2, "value": "No" }
                ],
                "default": null
                },
                {
                "id": 10,
                "name": "pet-currently-ill",
                "type": 1,
                "label": "Is your pet showing any signs of illness or does your pet have any injuries or other pre-existing medical conditions?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "options": [
                { "id": 1, "value": "Yes" },
                { "id": 2, "value": "No" }
                ],
                "default": null
                },
                {
                "id": 11,
                "name": "pet-nutter",
                "type": 1,
                "label": "Has your pet shown any aggressive tendencies?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "options": [
                { "id": 1, "value": "Yes" },
                { "id": 2, "value": "No" }
                ],
                "default": null
                },
                {
                "id": 12,
                "name": "pet-on-bail",
                "type": 1,
                "label": "Has your pet been the subject of a complaint or legal action during the last 5 years?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "options": [
                { "id": 1, "value": "Yes" },
                { "id": 2, "value": "No" }
                ],
                "default": null
                },
                {
                "id": 13,
                "name": "pet-breeding",
                "type": 1,
                "label": "Has your pet ever been used for breeding, racing, guarding, hunting, or has had a connection with a trade or business?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "options": [
                { "id": 1, "value": "Yes" },
                { "id": 2, "value": "No" }
                ],
                "default": null
                },
                {
                "id": 14,
                "name": "pet-alcohol",
                "type": 1,
                "label": "Does your pet live on premises where alcohol is sold?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "options": [
                { "id": 1, "value": "Yes" },
                { "id": 2, "value": "No" }
                ],
                "default": null
                }
                ]
                },
                {
                "title": "Your Cover",
                "questions": [
                {
                "id": 15,
                "name": "cover-type",
                "type": 1,
                "label": "Are you looking for help paying vet bills if your pet has accidents only or accidents and illness?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "options": [
                { "id": 1, "value": "Accident Only" },
                { "id": 2, "value": "Accident and Illness" }
                ],
                "default": null
                },
                {
                "id": 16,
                "name": "start-date",
                "type": 2,
                "label": "What date would you like the policy to start?",
                "required": true,
                "default": null
                },
                {
                "id": 17,
                "name": "pet-owner",
                "type": 1,
                "label": "Is the animal your pet?",
                "labelField": "pet-name",
                "labelReplace": "the animal",
                "labelAfterReplace": "",
                "required": true,
                "options": [
                { "id": 1, "value": "Yes" },
                { "id": 2, "value": "No" }
                ],
                "default": null
                },
                {
                "id": 18,
                "name": "owner-title",
                "type": 1,
                "label": "What is your title?",
                "required": true,
                "options": [
                { "id": 1, "value": "Mr" },
                { "id": 2, "value": "Ms" },
                { "id": 3, "value": "Mrs" },
                { "id": 4, "value": "Miss" }
                ],
                "default": null
                },
                {
                "id": 19,
                "name": "owner-first-name",
                "type": 0,
                "label": "What is your first name?",
                "required": true,
                "default": "",
                "maxLength": 30,
                "minLength": 2
                },
                {
                "id": 20,
                "name": "owner-last-name",
                "type": 0,
                "label": "What is your last name?",
                "required": true,
                "default": "",
                "maxLength": 30,
                "minLength": 2
                },
                {
                "id": 21,
                "name": "owner-dob",
                "type": 2,
                "label": "What is your date of birth?",
                "required": true,
                "default": null
                },
                {
                "id": 22,
                "name": "owner-marital-status",
                "type": 1,
                "label": "What is your marital status?",
                "required": true,
                "options": [
                { "id": 1, "value": "Married / Civil Partner" },
                { "id": 2, "value": "Single" },
                { "id": 3, "value": "Divorced" },
                { "id": 4, "value": "Widowed" }
                ],
                "default": null
                },
                {
                "id": 23,
                "name": "post-code",
                "type": 0,
                "label": "What's your postcode?",
                "required": true,
                "default": "",
                "maxLength": 8,
                "minLength": 7
                },
                {
                "id": 24,
                "name": "kept-at-address",
                "type": 1,
                "label": "Will your pet be kept at this address?",
                "labelField": "pet-name",
                "labelReplace": "your pet",
                "labelAfterReplace": "",
                "required": true,
                "options": [
                { "id": 1, "value": "Yes" },
                { "id": 2, "value": "No" }
                ],
                "default": null
                },
                {
                "id": 25,
                "name": "owner-resident",
                "type": 1,
                "label": "Are you a full time UK resident?",
                "required": true,
                "options": [
                { "id": 1, "value": "Yes" },
                { "id": 2, "value": "No" }
                ],
                "default": null
                },
                {
                "id": 26,
                "name": "email",
                "type": 0,
                "label": "What's your email?",
                "required": true,
                "default": "",
                "maxLength": 50,
                "minLength": 5
                }
                ]
                }
                ]
                }

            </div>
        </modal>
<!-- end of modal section -->
    </div>
</template>

<script>
    import Header             from '@/components/Header.vue';
    import JourneyInformation from "../components/JourneyInformation";
    import Footer             from '@/components/Footer.vue';

    export default {
        components: {
            Header,
            JourneyInformation,
            Footer},
        data : function() {
            return {
                showModal : false,
            }
        },
    }
</script>

<style scoped>
    #show-modal{
        margin-top:2%;
    }
    #journey-builder{
        text-align:center;
    }
    #modal{
        z-index: 99999;
        position: absolute;
        float: left;
        top: 0;
        background: white;
        height: 100vh;
        width: 80%;
        margin-left: 5%;
        margin-right: 5%;
        text-align: center;
    }
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>