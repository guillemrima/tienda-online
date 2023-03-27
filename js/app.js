import { openAndCloseHambgurger } from './contact.js';
import {openModal, closeModal, setCheckoutSectionModal, quitCheckoutSectionModal,} from'./modal.js';
import {flipCardToFront, flipCardToBack} from './swipeable-element.js';
import {openAndCloseFAQ} from './faq.js';

openModal();
closeModal();
setCheckoutSectionModal();
quitCheckoutSectionModal();

flipCardToFront();
flipCardToBack();

openAndCloseFAQ();

openAndCloseHambgurger();
