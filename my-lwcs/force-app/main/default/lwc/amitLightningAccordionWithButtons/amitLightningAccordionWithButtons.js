/*
 * @description       : This is the JS file for "amitLightningAccordionWithButtons" component, which is actually a lightning component that shows a specific section according to the button clicked
 * @author            : Amit Kumar {amitniitmca@gmail.com}
 * @last modified on  : 12-08-2021
 * @last modified by  : Amit Kumar {amitniitmca@gmail.com}
**/
import { LightningElement } from 'lwc';

export default class AmitLightningAccordionWithButtons extends LightningElement {
    activeSection;

    handleButtonClick(event){
        this.activeSection = event.target.label;
    }
}