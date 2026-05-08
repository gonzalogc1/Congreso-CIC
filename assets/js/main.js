window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 30){

    navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.12)";

  }else{

    navbar.style.boxShadow = "none";

  }

});

// Schedule day switcher (muestra un día entero a la vez)
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.day-button');
  const panels = document.querySelectorAll('.schedule-panel');

  function showDay(day){
    buttons.forEach(b => b.classList.toggle('active', b.dataset.day === day));
    panels.forEach(p => p.hidden = p.dataset.day !== day);
    try{ localStorage.setItem('geoai-schedule-day', day); }catch(e){}
  }

  buttons.forEach(b => b.addEventListener('click', () => showDay(b.dataset.day)));

  const saved = (function(){ try{ return localStorage.getItem('geoai-schedule-day'); }catch(e){ return null;} })();
  showDay(saved || 'martes');
});