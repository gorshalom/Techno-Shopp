// variables de boton
const openModal = document.querySelector(".news-card__read-more");
const openModaltwo = document.querySelector(".dos");
const openModaltree = document.querySelector(".tres");
const openModalfour = document.querySelector(".cuatro");
const openModalfive = document.querySelector(".cinco");
const openModalsix = document.querySelector(".seis");
// const openModalseven = document.querySelector(".siete");

//varibles modal 1
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");

//varibles modal 2
const modaltwo = document.querySelector(".modaldos");
const closeModaltwo = document.querySelector(".modal__closedos");

//varibles modal 3
const modaltree = document.querySelector(".modaltres");
const closeModaltree = document.querySelector(".modal__closetres");

//varibles modal 4
const modalfour = document.querySelector(".modalcuatro");
const closeModalfour = document.querySelector(".modal__closecuatro");

//varibles modal 5
const modalfive = document.querySelector(".modalcinco");
const closeModalfive = document.querySelector(".modal__closecinco");

//varibles modal 6
const modalsix = document.querySelector(".modalseis");
const closeModalsix = document.querySelector(".modal__closeseis");

//variables modal 7
// const modalseven = document.querySelector(".modalsiete");
// const closeModalseven = document.querySelector(".modal__closesiete");

// MODAL 1
openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--show");
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
});

// MODAL 2

openModaltwo.addEventListener("click", (e) => {
  e.preventDefault();
  modaltwo.classList.add("modal--show");
});

closeModaltwo.addEventListener("click", (e) => {
  e.preventDefault();
  modaltwo.classList.remove("modal--show");
});

// MODAL 3

openModaltree.addEventListener("click", (e) => {
  e.preventDefault();
  modaltree.classList.add("modal--show");
});

closeModaltree.addEventListener("click", (e) => {
  e.preventDefault();
  modaltree.classList.remove("modal--show");
});

// MODAL 4

openModalfour.addEventListener("click", (e) => {
  e.preventDefault();
  modalfour.classList.add("modal--show");
});

closeModalfour.addEventListener("click", (e) => {
  e.preventDefault();
  modalfour.classList.remove("modal--show");
});

// MODAL 5

openModalfive.addEventListener("click", (e) => {
  e.preventDefault();
  modalfive.classList.add("modal--show");
});

closeModalfive.addEventListener("click", (e) => {
  e.preventDefault();
  modalfive.classList.remove("modal--show");
});

// MODAL 6

openModalsix.addEventListener("click", (e) => {
  e.preventDefault();
  modalsix.classList.add("modal--show");
});

closeModalsix.addEventListener("click", (e) => {
  e.preventDefault();
  modalsix.classList.remove("modal--show");
});

// MODAL 7
// openModalseven.addEventListener("click", (e) => {
//   e.preventDefault();
//   modalseven.classList.add("modal--show");
// });

// closeModalseven.addEventListener("click", (e) => {
//   e.preventDefault();
//   modalseven.classList.remove("modal--show");
// });
