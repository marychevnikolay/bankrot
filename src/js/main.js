import modals from './modules/modals';
// import changeModalState from './modules/changeModalState';
import forms from './modules/forms';
import mask from './modules/mask';
import accordion from './modules/accordion';



window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};
    // changeModalState(modalState);
    modals();
    forms(modalState);
    mask('[name="phone"]');
    accordion('.accordion-heading');
   
});


