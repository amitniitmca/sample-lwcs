import { LightningElement } from 'lwc';

export default class AmitLightningMapWithoutZoomAndDrag extends LightningElement {
    mapOptions = {
        'disableDefaultUI': true,
        'draggable': false
    };
    
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
