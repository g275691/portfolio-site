document.addEventListener("DOMContentLoaded", pageLoaded);

function pageLoaded() {
	const menuBurger = document.querySelector(".mobile__burger");
	const menuCloseBtn = document.querySelector(".menu__mobile-close");
	const menu = document.querySelector(".menu__mobile");
	const footerBtn = document.querySelector(".footer__frame-button");
	const form = document.querySelector(".modal__form");
	const formCloseBtn = document.querySelector(".modal__form-close");
	const menuLinks = document.querySelectorAll(".menu__frame-link");
	const sections = document.querySelectorAll("section, footer");

	menuBurger.addEventListener("click", openMenu);
	menuCloseBtn.addEventListener("click", closeMenu);
	footerBtn.addEventListener("click", openForm);
	formCloseBtn.addEventListener("click", closeForm);

	menuLinks.forEach(link => {
		link.addEventListener("click", () => {
			const section = document.getElementById("section-" + link.dataset.target);
			section.scrollIntoView({behavior: 'smooth'});
			const activeLink = document.querySelector(".menu__frame-link.is-active");
			activeLink.classList.remove("is-active");
			link.classList.add("is-active");
		});
	})

	initScroll();

	function openMenu() {
		menu.classList.add("is-active");
	}

	function closeMenu() {
		menu.classList.remove("is-active");
	}

	function openForm() {
		form.classList.add("is-active");
	}

	function closeForm() {
		form.classList.remove("is-active");
	}

	function initScroll() {
		let sectionPos = {};
		sections.forEach(section => {
			sectionPos[section.id.replace("section-", "")] = section.id === "section-main"? 0 : section.offsetTop;
		});
		console.log(sectionPos);
	}
}