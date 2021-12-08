import { LightningElement } from 'lwc';

export default class AmitLightningAccordionWithButtons extends LightningElement {
    activeSection;

    handleButtonClick(event){
        this.activeSection = event.target.label;
    }
}