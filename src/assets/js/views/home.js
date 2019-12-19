// @ is an alias to /src
import Header         from '@/components/Header.vue';
import LoginForm      from '@/components/LoginForm.vue';
import Footer         from '@/components/Footer.vue';
import {homeViewText} from '@/assets/staticText/views/homeText.js';

export default {
    name : 'home',
    components : {
        Header,
        LoginForm,
        Footer
    },
    data : function() {
        return {
            viewTitle : homeViewText.viewTitle,
        }
    },
}