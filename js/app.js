import {openAndCloseHamburger} from './team.js';
import {openModal, closeModal, setCheckoutSectionModal, quitCheckoutSectionModal, setModalTabDescription} from'./modal.js';
import {flipCardToFront, flipCardToBack,sendForm} from './swipeable-element.js';
import {openAndCloseFAQ} from './faq.js';
import { changeAmountValue } from './amount-input-form.js';
import {showMessage} from './message.js';
import { countInputCharacters } from './inputCounter.js';
import './slider.js';


openModal();
closeModal();
setCheckoutSectionModal();
quitCheckoutSectionModal();
setModalTabDescription();

flipCardToFront();
flipCardToBack();
sendForm();

openAndCloseFAQ();

openAndCloseHamburger();

changeAmountValue();

showMessage();

countInputCharacters();
