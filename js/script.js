const navBtn = document.querySelector(".hamburger");
const items = document.querySelector(".nav-mobile");
const a = document.querySelectorAll(".links");
const copy = document.querySelector(".footer-year");

const handleNav = () => {
	navBtn.classList.toggle("is-active");
	items.classList.toggle("active");
};

navBtn.addEventListener("click", handleNav);

a.forEach((item) =>
	item.addEventListener("click", () => items.classList.remove("active"))
);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	copy.innerHTML = year;
};
handleCurrentYear();
