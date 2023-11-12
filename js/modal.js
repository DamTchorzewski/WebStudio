document.addEventListener("DOMContentLoaded", function() {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  console.log("openModalBtn:", refs.openModalBtn);
  console.log("closeModalBtn:", refs.closeModalBtn);
  console.log("modal:", refs.modal);

  if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  } else {
    console.error("Nie znaleziono co najmniej jednego elementu. Sprawdź swoje znaczniki HTML.");
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
});