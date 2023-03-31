import { openAndCloseHambgurger } from './contact.js';
import {openModal, closeModal, setCheckoutSectionModal, quitCheckoutSectionModal, setCarrouselImages} from'./modal.js';
import {flipCardToFront, flipCardToBack} from './swipeable-element.js';
import {openAndCloseFAQ} from './faq.js';
import './slider.js';


openModal();
closeModal();
setCheckoutSectionModal();
quitCheckoutSectionModal();
setCarrouselImages();

flipCardToFront();
flipCardToBack();

openAndCloseFAQ();

openAndCloseHambgurger();
