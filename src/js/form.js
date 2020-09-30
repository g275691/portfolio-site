const footerBtn = document.querySelector(".footer__frame-button");
const form = document.querySelector(".modal__form");
const formCloseBtn = document.querySelector(".modal__form-close");

export function initForm() {
	footerBtn.addEventListener("click", openForm);
	formCloseBtn.addEventListener("click", closeForm);
}

function openForm() {
	form.classList.add("is-active");
}

function closeForm() {
	form.classList.remove("is-active");
}