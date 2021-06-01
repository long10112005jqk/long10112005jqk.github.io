 $(function(){
 	$(window).scroll(function() {
 		if ($('html').scrollTop() > 400)
 		{
 			$('.navbar.navbar-light.bg-faded.navbar-fixed-top').addClass('maunen');
 		} else
 		{
 			$('.navbar.navbar-light.bg-faded.navbar-fixed-top').removeClass('maunen');
 		}
 		if ($('html').scrollTop() > 100)
 		{
 			$('.navbar.navbar-light.bg-faded.navbar-fixed-top').addClass('maunenmobile');
 		} else
 		{
 			$('.navbar.navbar-light.bg-faded.navbar-fixed-top').removeClass('maunenmobile');
 		}
 		if($('html').scrollTop() > 400)
 		{
 			$('a.navbar-brand.pull-right.nutlen').addClass('maunenduoi');
 		} else
 		{
 			$('a.navbar-brand.pull-right.nutlen').removeClass('maunenduoi');
 		}
 	})
 	
 	$('a.navbar-brand.pull-right.nutlen').click(function() {
 		$('html').animate({'scrollTop':0});
 		return false;
 	})

}) 
document.addEventListener("DOMContentLoaded",function() {
	var nutan = document.getElementById("nutan"),
		menu = document.getElementsByClassName("menu"),
		nenden = document.getElementsByClassName("nenden"),
		khoito = document.getElementsByClassName("khoito"),
		tt = false;
	var menu = menu[0],
		nenden = nenden[0],
		khoito	 = khoito[0];
	nutan.onclick = function() {
		menu.classList.add("dayra");
		nenden.classList.add("hienden");
		khoito.classList.add("nhovao");
		tt = true;
	}
	nenden.onclick = function() {
		if (tt = true) 
		{
			menu.classList.remove("dayra");
			nenden.classList.remove("hienden");
			khoito.classList.remove("nhovao");
			tt = false;
		}
	}
	console.log(document.cookie);
},false)
 