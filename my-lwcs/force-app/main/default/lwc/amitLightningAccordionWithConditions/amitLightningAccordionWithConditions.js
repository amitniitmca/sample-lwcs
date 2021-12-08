/*
 * @description       : This is the JS file for "amitLightningAccordionWithConditions" component, which is actually a lightning component that shows/hides a complete accordion section according to the button clicked
 * @author            : Amit Kumar {amitniitmca@gmail.com}
 * @last modified on  : 12-08-2021
 * @last modified by  : Amit Kumar {amitniitmca@gmail.com}
*/
import { LightningElement } from 'lwc';

export default class AmitLightningAccordionWithConditions extends LightningElement {
    marketingEnabled=false;
    analyticsEnabled=false;

    handleMarketingButtonClick(){
        if(this.marketingEnabled === false){
            this.marketingEnabled = true;
        }
        else{
            this.marketingEnabled = false;
        }
    }

    handleAnalyticsButtonClick(){
        if(this.analyticsEnabled === false){
            this.analyticsEnabled = true;
        }
        else{
            this.analyticsEnabled = false;
        }
    }
}