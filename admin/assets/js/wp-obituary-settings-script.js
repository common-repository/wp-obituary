jQuery(document).ready(function($){
	$('#select-layout.obituary li img').on('click', function( e ){
		var parentId = $( this ).parent().attr('id');
		$( '#'+parentId+' input[type="radio"]' ).prop('checked', true);
		$("#select-layout.obituary>li").removeClass("selected");
		$( '#'+parentId ).addClass('selected' );
	});
	$('#upload-btn').click(function(e) {
		e.preventDefault();
		var image = wp.media({ 
			title: 'Upload Image',
			// mutiple: true if you want to upload multiple files at once
			multiple: false
		}).open()
		.on('select', function(e){
			// This will return the selected image from the Media Uploader, the result is an object
			var uploaded_image = image.state().get('selection').first();
			// We convert uploaded_image to a JSON object to make accessing it easier
			// Output to the console uploaded_image
			console.log(uploaded_image);
			var image_url = uploaded_image.toJSON().url;
			// Let's assign the url value to the input field
			$('#default_image_url').val(image_url);
		});
	});
});