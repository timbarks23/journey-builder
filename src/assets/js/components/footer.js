import {footerComponentText} from '@/assets/staticText/components/footerText.js';

export default {
    name : "Footer",
    data : function() {
        return {
            componentTitle : footerComponentText.componentTitle,
            componentText  : footerComponentText.componentText,
        }
    },
}