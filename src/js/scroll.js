import {makeLinkActive} from "./menu"

const sections = document.querySelectorAll("section, footer");
let sectionPos = [];

export function initScroll() {
	document.body.onscroll = scrollListener;
	sections.forEach(section => {
		sectionPos.push(section.offsetTop);
	});
	sectionPos[0] = 0;
}

function scrollListener() {
	const pos = document.body.scrollTop;
	let activeSectionIndex;
	sectionPos.forEach((secPos, index) => {
		if (pos >= secPos) {
			activeSectionIndex = index;
		}
	});
	const activeSection = sections[activeSectionIndex];
	const activeSectionId = activeSection.id.replace("section-", "");
	makeLinkActive(activeSectionId);
}