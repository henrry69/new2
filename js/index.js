'use strict';
let votonSi = window.document.getElementById('yes');
let votonNo = window.document.getElementById('no');

let partner = prompt('🥰 Dyme 2 naMe 🥰');
document.querySelector('.contenedor__titulo').innerHTML += partner + ' ❤';

const zomosNobios = () => {
  // alert('💞Now zomos ParTnEr ' + ${partner} + '💞');
  alert(`💞Now zomos ParTnEr ${partner} 💞`);

  location.href = "https://www.youtube.com/watch?v=bCoFfCgxBeM";
};

const ebitarKCRompaMyBobo = () => {
  votonNo.style.position = 'absolute';
  votonNo.style.top = (Math.random() * window.innerHeight) + 'px';
  votonNo.style.left = (Math.random() * window.innerWidth) + 'px';
};

votonSi.addEventListener('click', zomosNobios);
votonNo.addEventListener('mouseover', ebitarKCRompaMyBobo);