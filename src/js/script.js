import "../scss/style.scss"

import {initMenu} from "./menu"
import {initScroll} from "./scroll"
import {initForm} from "./form"

document.addEventListener("DOMContentLoaded", pageLoaded);

function pageLoaded() {	
	initMenu();
	initScroll();
	initForm();
}