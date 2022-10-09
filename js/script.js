const navBtn = document.querySelector(".hamburger");
const items = document.querySelector(".nav-mobile");

const handleNav = () => {
	navBtn.classList.toggle("is-active");
	items.classList.toggle("active");
};

navBtn.addEventListener("click", handleNav);
