const menuBurger = document.querySelector(".mobile__burger");
const menuCloseBtn = document.querySelector(".menu__mobile-close");
const menu = document.querySelector(".menu__mobile");
const menuLinks = document.querySelectorAll(".menu__frame-link");

function openMenu() {
	menu.classList.add("is-active");
}

function closeMenu() {
	menu.classList.remove("is-active");
}

export function makeLinkActive(id) {
	const link = document.querySelector(`.menu__frame-link[data-target="${id}"]`);
	const activeLink = document.querySelector(".menu__frame-link.is-active");
	activeLink.classList.remove("is-active");
	link.classList.add("is-active");
}

export function initMenu() {
	menuBurger.addEventListener("click", openMenu);
	menuCloseBtn.addEventListener("click", closeMenu);

	menuLinks.forEach(link => {
		link.addEventListener("click", () => {
			const section = document.getElementById("section-" + link.dataset.target);
			section.scrollIntoView({behavior: 'smooth'});
			makeLinkActive(link.dataset.target);
		});
	})
}