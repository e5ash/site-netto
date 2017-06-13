

$('form').submit(function() {
	$.ajax({
	    type: "POST",
	    url: "/order.php",
	    data: $(this).serialize()
	}).done(function() {
	    // popupForm.css('display','none');
	    // popupMessage.css('display','block');
	});
	return false;
});


$('input.tel').mask("+7 (999) 999-99-99");



$('.slider').slick({
	dots: true
});


var langSwitchP = $('.lang-switch p'),
	langSwitch = $('.lang-switch'),
	lang = langSwitchP.html();

langSwitchP.click(function() {
	langSwitch.toggleClass('open');
});

if (lang == 'RU') {
	$('.lang-switch li:nth-child(1)').hide()
}
if (lang == 'EN') {
	$('.lang-switch li:nth-child(2)').hide()
}
if (lang == 'DE') {
	$('.lang-switch li:nth-child(3)').hide()
}

$("header .nav").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top;
	
	$('body,html').animate({scrollTop: top + 20}, 1500);
});