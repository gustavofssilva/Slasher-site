const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
  
})

function scrollToIdOnClick(event) {
 const element = event.target;
 const id = element.getAttribute('href')
const section = document.querySelector(id);

}
