window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 30){

    navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.12)";

  }else{

    navbar.style.boxShadow = "none";

  }

});