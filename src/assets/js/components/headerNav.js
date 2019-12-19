import {headerNavComponentText} from '@/assets/staticText/components/headerNavText.js';

export default {
    name: "HeaderNav",
    data : function() {
        return {
            componentTitle        : headerNavComponentText.componentTitle,
            componentText         : headerNavComponentText.componentText,
            dashboardLink         : headerNavComponentText.dashboardLink,
            dashboardLinkText     : headerNavComponentText.dashboardLinkText,
            viewJourneyLink       : headerNavComponentText.viewJourneyLink,
            viewJourneyLinkText   : headerNavComponentText.viewJourneyLinkText,
            createJourneyLink     : headerNavComponentText.createJourneyLink,
            createJourneyLinkText : headerNavComponentText.createJourneyLinkText
        }
    }
}