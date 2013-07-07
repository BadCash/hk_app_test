function onLoad(){
	// Wait for PhoneGap to load
	document.addEventListener("deviceready", onDeviceReady, false);
}


$('[data-exec-function]').on('click', function(event){
	console.log('exec_function');
	window[ $(this).data('exec-function') ]($(this), event);
});

$('.item_title').on('click', function(event){
	$(this).parent().parent().children().children('.item_content').hide();
	$(this).siblings('.item_content').toggle();
});

$('.play_audio').on('click', function(event){
	console.log('play_audio');
	console.log( $(this).attr('data-src') );
	var m = new Media( $(this).data('src'), mediaSuccess );
	//media.play();
});


// PhoneGap is ready
function onDeviceReady() {
	console.log("onDeviceReady");
}


function change_page(element, event){
	console.log('change_page');
	$('.page').hide();
	$('.page[data-name="'+element.data('pagename')+'"]').show();
}


function mediaSuccess(){
	console.log('mediaSuccess');
}