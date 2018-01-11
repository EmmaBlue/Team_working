jQuery(document).ready(function($) {

	$('.lightbox_trigger').click(function(e) {

		//prevent default action (hyperlink)
		e.preventDefault();

		//Get clicked link href
		var image_href = $(this).attr("src");
		var text0 = document.createTextNode("This just got added");
		var text1 = document.createTextNode("Huzzah!");
	  console.log(e.target.id);
		var text = ["This just got added", "Volvo", "BMW", "Huzzah!"];


		/*
		If the lightbox window HTML already exists in document,
		change the img src to to match the href of whatever link was clicked

		If the lightbox window HTML doesn't exists, create it and insert it.
		(This will only happen the first time around)
		*/

		if ($('#lightbox').length > 0) { // #lightbox exists

			//place href as img src value
			$('#content').html('<img src="' + image_href + '" />' + '<p class="description">' +  text[e.currentTarget.dataset.offset] + '</p>');
			$('#navContain').html('<div class="lightBut">' +
				'</div>' +
				'<div class="lightBut">' +
				'</div>' +
				'<div class="lightBut">' + "</div>");

			//place text

			//$('#content').html('<p class="description">' +  text[e.currentTarget.dataset.offset] + '</p>');

			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox').show();
		}

		else { //#lightbox does not exist - create and insert (runs 1st time only)

			//create HTML markup for lightbox window
			var lightbox =
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_href +'" />' +
					'<p class="description">' +  text[e.currentTarget.dataset.offset] + '</p>' +
				'</div>' +
				'<div id="navContain">' +
					'<div class="lightBut">' +
					'</div>' +
					'<div class="lightBut">' +
					'</div>' +
					'<div class="lightBut">' +
					'</div>'
				'</div>' +
			'</div>';

			//insert lightbox HTML into page
			$('body').append(lightbox);

			$('#lightbox').on('click', function() { // live is depecrated and will throw errors
			     $('#lightbox').hide();
			});
		}



	});




});
