import { LightningElement } from 'lwc';

export default class AmitLightningMap extends LightningElement {
    mapMarkers = [
        {
            location: {
                City: 'San Francisco',
                Country: 'USA',
                PostalCode: '94105',
                State: 'CA',
                Street: '425 Mission St',
            }
        }
    ];
}
