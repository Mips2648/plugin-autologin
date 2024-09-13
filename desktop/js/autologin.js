document.querySelectorAll('div.autologin a.maskToggle').forEach(function (element) {
  element.addEventListener('click', function () {
    this.parentNode.querySelectorAll('span.mask').forEach(function (e) {
      e.classList.toggle('masked')
    })
    this.querySelector('i').classList.toggle('fa-eye-slash')
  });
});

function printEqLogic(_eqLogic) {
  document.querySelectorAll('div.autologin span.eqLogic_id').forEach(function (element) {
    element.innerHTML = _eqLogic.id;
  });
}