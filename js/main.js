
// show the side menu
document.querySelector("#menu_trigger").addEventListener("click", sideMenuShows);
document.querySelector("#menu_close").addEventListener("click", sideMenuCloses);

function sideMenuShows() {
  document.querySelector(".side_menu").classList.add("show_side_menu");
}

function sideMenuCloses() {
  document.querySelector(".side_menu").classList.remove("show_side_menu");
}


// ------------------------------------------------------------------------------------------------------------------------------------------------------
// subscription form
const form = document.querySelector(".subscription_form");
const emailInput = document.querySelector(".form_email");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".form_button");
const closeModalBtn = document.querySelector(".btn_close");
const errorBox = document.querySelector('.error_message');

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function showModal() {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const isValidEmail = validateEmail(email);

  if (isValidEmail) {
    showModal();
  } else {
    errorBox.innerHTML = "Please enter a valid email address!";
  }
});


// ------------------------------------------------------------------------------------------------------------------------------------------------------
// blog carousel
const wrapper = document.querySelector('.blog_slides_wrapper');
const contents = document.querySelectorAll('.blog_content');

function getContentWidth() {
  return contents[0].offsetWidth;
}

const contentWidth = getContentWidth();
let scrollWidth = contentWidth;
let currentItem = 0;
const contentsNumber = contents.length;
let maxScrollItem = contentsNumber - Math.round(wrapper.offsetWidth / contentWidth);

function next() {
  currentItem++;
  if (currentItem > maxScrollItem) {
    currentItem = 0;
  }
  wrapper.scrollTo({ top: 0, left: scrollWidth * currentItem, behavior: 'smooth' });
}

function previous() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = maxScrollItem;
  }
  wrapper.scrollTo({ top: 0, left: scrollWidth * currentItem, behavior: 'smooth' });
}

window.addEventListener('resize', () => {
  const updatedContentWidth = getContentWidth();
  scrollWidth = updatedContentWidth;
  maxScrollItem = contentsNumber - Math.round(wrapper.offsetWidth / updatedContentWidth);
});

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// back to top button
let myButton = document.querySelector("#back-to-top-btn");
let myHeroText = document.querySelector(".hero_text");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

myButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});