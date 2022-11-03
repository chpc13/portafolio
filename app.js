const scrollBtn = document.querySelector(".scroll-to-top");

const refreshButtonVisibility = () => {
  if (document.documentElement.scrollTop >= 150) {
    scrollBtn.style.display = "none";
  } else {
    scrollBtn.stylle.display = "block";
  }
};


scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 
});

const boton = document.querySelector('.boton')
const titulo = document.querySelector('#tittle')

boton.addEventListener("click", () => {
  document.body.style.background = 'blue '
  // titulo.innerHML = 'sobre mi'
  // titulo.style.color = 'green'
  Swal.fire({
    position: 'top-end',
    icon: 'info',
    title: 'stiven gusfraba',
    show: false,
    timer: 6000
  })
})