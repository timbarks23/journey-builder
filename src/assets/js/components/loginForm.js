import {loginFormComponentText} from '@/assets/staticText/components/loginFormText.js';

export default {
    name : "LoginForm",
    data : function() {
        return {
            componentTitle : loginFormComponentText.componentTitle,
            componentText  : loginFormComponentText.componentText,
        }
    },
}