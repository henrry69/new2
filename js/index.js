'use strict';
let votonSi = window.document.getElementById('yes');
let votonNo = window.document.getElementById('no');

let partner = prompt('ð¥° Dyme 2 naMe ð¥°');
document.querySelector('.contenedor__titulo').innerHTML += partner + ' â¤';

const zomosNobios = () => {
  // alert('ðNow zomos ParTnEr ' + ${partner} + 'ð');
  alert(`ðNow zomos ParTnEr ${partner} ð`);

  location.href = "https://www.youtube.com/watch?v=bCoFfCgxBeM";
};

const ebitarKCRompaMyBobo = () => {
  votonNo.style.position = 'absolute';
  votonNo.style.top = (Math.random() * window.innerHeight) + 'px';
  votonNo.style.left = (Math.random() * window.innerWidth) + 'px';
};

votonSi.addEventListener('click', zomosNobios);
votonNo.addEventListener('mouseover', ebitarKCRompaMyBobo);