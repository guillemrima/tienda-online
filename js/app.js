import {openAndCloseHamburger} from './team.js';
import {openModal, closeModal, setCheckoutSectionModal, quitCheckoutSectionModal, setCarrouselImages} from'./modal.js';
import {flipCardToFront, flipCardToBack,sendForm} from './swipeable-element.js';
import {openAndCloseFAQ} from './faq.js';
import './slider.js';


openModal();
closeModal();
setCheckoutSectionModal();
quitCheckoutSectionModal();
setCarrouselImages();

flipCardToFront();
flipCardToBack();
sendForm();

openAndCloseFAQ();

openAndCloseHamburger();
