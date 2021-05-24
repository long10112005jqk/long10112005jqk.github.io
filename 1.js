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
 