// Telling JQuery to run some code when we click on a image in a section

$("section img").on("click",function(){

// Tells JQuery to fade in the div with an id of lightbox and do it in 250ms
	$("div#lightbox").fadeIn(250);

// Tells Jquery to a) create a variable called "ImageSource" and b) fetch the images src attribute e.g "images/work_1_1.jpg"
	
	var ImageSource= $(this).attr("src");
	
// Tell jQuery to find the image inside the lightbox and change its "src" to whatever is in the ImageSource variable.
	$("div#lightbox img").attr("src", src);
});

$("div#lightbox").on("click",function () {
	$("div#lightbox").fadeOut(250);
})