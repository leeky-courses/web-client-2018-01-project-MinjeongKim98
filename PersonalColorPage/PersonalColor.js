$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle(3000);
    });
});

$(document).ready(function() {
	$("#animate").click(function(){
		$("#animate-demo").animate({backgroundColor: "black", left:"800px", opacity:"0.5"}, 2000);
	$("#animate-demo").animate({fontSize:"5em"}, 1000);
});
});

$(document).ready(function() {
		setInterval(function(){
    $("#cl1").fadeToggle();},3000);
});

$(document).ready(function() {
		setInterval(function(){
    $("#co1").fadeToggle();},6000);
});

$(document).ready(function() {
		setInterval(function(){
    $("#cl2").fadeToggle();},2000);
});

$(document).ready(function() {
		setInterval(function(){
    $("#co2").fadeToggle();},4000);
});
