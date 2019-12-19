import {dashboardContentComponentText} from '@/assets/staticText/components/dashboardContentText.js';

export default {
    name : "DashboardContent",
    data : function() {
        return {
            componentTitle : dashboardContentComponentText.componentTitle,
            componentText  : dashboardContentComponentText.componentText,
        }
    },
}