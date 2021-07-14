document.addEventListener("DOMContentLoaded",function(){
	var ListInfo = document.querySelector('.ListInfo');
	var Info = document.querySelector('.Info');
	var Off = document.querySelector('.Off');
	var state = false;
	Info.addEventListener('click',function() {
		if (state == false) 
		{
			state = true;
			ListInfo.classList.remove('Off');
			ListInfo.classList.add('Show');
		}
		else {
			state = false;
			ListInfo.classList.add('Off');
			ListInfo.classList.remove('Show');
		}
		

	})
},false)