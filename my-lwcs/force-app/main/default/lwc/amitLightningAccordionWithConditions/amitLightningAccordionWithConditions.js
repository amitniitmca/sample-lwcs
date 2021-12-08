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