console.log("Hi š, I'm Swarit Choudhari. A passionate frontend developer from America and am a data scientist.š­ Iām currently working on TypeMaster 1.5 š± Iām currently learning Java š¬ Ask me about Python š« How to reach me swaritchoudhari.p.s.y@gmail.com š Released Games: TypeMaster and TimeSphere. More Coming Soon! ā” Fun fact I am a kid who loves to code and am a state champ at chess!");

// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})

//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }
	 
	}

window.onload = () => navSlide();
