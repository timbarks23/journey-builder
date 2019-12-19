// @ is an alias to /src
import HeaderNav from '@/components/HeaderNav.vue';
import {headerComponentText} from '@/assets/staticText/components/headerText.js';

export default {
    name : "Header",
    components : {
        HeaderNav
    },
    data : function() {
        return {
            componentTitle : headerComponentText.componentTitle,
            componentText  : headerComponentText.componentText,
        }
    },
}