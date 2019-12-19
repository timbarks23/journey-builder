// @ is an alias to /src
import Header              from '@/components/Header.vue';
import DashboardContent    from "@/components/DashboardContent";
import Footer              from '@/components/Footer.vue';
import {dashboardViewText} from '@/assets/staticText/views/dashboardText.js';

export default {
    name : "Dashboard",
    components : {
        Header,
        DashboardContent,
        Footer
    },
    data : function() {
        return {
            viewTitle : dashboardViewText.viewTitle,
        }
    },
}