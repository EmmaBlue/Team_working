jQuery(document).ready(function($) {

  // global variables to use in several functions
  var current, size;

  $('.trigger').click(function(e) {


    // grab source from clicked project
    var image_href = $(this).attr("src");
		console.log(image_href);

    // determine the index of clicked trigger
    var slideNum = $('.trigger').index(this);
		//console.log(slideNum);

    // find out if #lightbox exists
    if ($('#lightbox').length > 0) {

			//place href as img src value
      // #lightbox exists
      $('#lightbox').fadeIn(300);
      // #lightbox does not exist - create and insert (runs 1st time only)
    } else {
      // create HTML markup for lightbox window
      var lightbox =
          '<div id="lightbox">' +
          '<p class="close">Click to close</p>' +
          '<div id="slideshow">' +
          '<ul></ul>' +
					'<div id="paraList">' +
					'</div>' +
          '<div class="navGal">' +
          '<a href="#prev" class="prev slide-nav fa fa-2x fa-angle-left"></a>' +
          '<a href="#next" class="next slide-nav fa fa-2x fa-angle-right"></a>' +
          '</div>' +
          '</div>' +
          '</div>';


      //insert lightbox HTML into page
      $('body').append(lightbox);


      // fill lightbox with .trigger srcs in #imageSet
      $('#imageSet').find('.trigger').each(function() {
        var $href = $(this).attr('src');
        $('#slideshow ul').append(
          '<li class="imageHover">' +
          '<img src="' + $href + '">' +
          '</li>');
      });

			$('#imageSet').find('.paraImage').each(function() {
				var $id = $(this).text();
				$('#paraList').append(
					'<p class="galPara">' +
					$id +
					'</p>');
				console.log($id);
			});


    }


    // setting size based on amount of slideshow objects
    size = $('#slideshow ul > li').length;

    // hide all slide, then show the selected slide
    $('#slideshow ul > li').hide();
    $('#slideshow ul > li:eq(' + slideNum + ')').show();

		$('#paraList p').hide();
		$('#paraList p:eq(' + slideNum + ')').show();


    // set current to selected slide
    current = slideNum;
  });

  //Click anywhere on the page to get rid of lightbox
  $('body').on('click', '#lightbox', function() {
    $('#lightbox').fadeOut(300);
  });

  // show/hide navigation when hovering over the slider
  $('body').on(
    { mouseenter: function() {
      $('.navGal').fadeIn(300);
    }, mouseleave: function() {
      $('.navGal').fadeOut(300);
    }
    },'#slideshow');

		//my own






  // navigation prev/next
  $('body').on('click', '.slide-nav', function(e) {

    // prevent default click event, and prevent event bubbling to prevent lightbox from closing
    e.preventDefault();
    e.stopPropagation();

    var $this = $(this);
    var dest;

    // looking for .prev
    if ($this.hasClass('prev')) {
      dest = current - 1;
      if (dest < 0) {
        dest = size - 1;
      }
    } else {
      // in absence of .prev, assume .next
      dest = current + 1;
      if (dest > size - 1) {
        dest = 0;
      }
    }

    // fadeOut curent slide, FadeIn next/prev slide
    $('#slideshow ul > li:eq(' + current + ')').fadeOut(750);
    $('#slideshow ul > li:eq(' + dest + ')').fadeIn(750);
		$('#slideshow p:eq(' + current + ')').fadeOut(1);
    $('#slideshow p:eq(' + dest + ')').fadeIn(1);

    // update current slide
    current = dest;
  });

});
