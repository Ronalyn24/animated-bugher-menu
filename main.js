$(document).ready(function() {

  function openNav() {
    $('body').addClass('main-nav-open');
  }

  function closeNav() {
      $('body').removeClass('main-nav-open');

      setTimeout(function() {
        $('.awMainNav').css('transition', '');
      }, 3000); 
  }

  $('#main-burger').click(openNav);
  $('#main-burger-close').click(closeNav);

  // Toggle visibility of direct submenu when clicking on the anchor within a parent
  $('.awMainNav__parent > a').on('click', function(e) {
    // If it's a parent item, handle the submenu
    if ($(this).siblings('.awMainNav__sub').length) {
        // Prevent default link action
        e.preventDefault();

        // Close any other open submenus
        $('.awMainNav__sub').not($(this).siblings('.awMainNav__sub')).hide();

        // Toggle the direct submenu of clicked parent
        $(this).siblings('.awMainNav__sub').toggle();

        // Hide the .awMainNav__subsub when a main menu item is clicked
        $('.awMainNav__subsub').hide();
    }
    // Otherwise, do nothing and let the natural link action occur
  });

  // Toggle visibility of sub-submenu when clicking on the anchor within an item
  $('.awMainNav__sub > ul > li > a').on('click', function(e) {
    // If it's a parent item, handle the subsub menu
    if ($(this).siblings('.awMainNav__subsub').length) {
        // Prevent default link action
        e.preventDefault();

        // Close any other open sub-submenus
        $('.awMainNav__subsub').not($(this).siblings('.awMainNav__subsub')).hide();

        // Toggle the direct sub-submenu of clicked item
        $(this).siblings('.awMainNav__subsub').toggle();
    }
    // Otherwise, do nothing and let the natural link action occur
  });

  // Ads display rules
  $('.awMainNav__menu a').on('click', function(e) {
    $('body').addClass('clicked-menu');
  });

  // Hide the ads when the sub-menu is opened
  $('.menu-parent a').on('click', function(e) {
    $('.ads-item').css({
        'opacity': 0,
        'visibility': 'hidden'
    });
  });

  $('a[data-ads]').on('click', function(e) {
    // Prevent the default action of the anchor tag
    //e.preventDefault();

    // Retrieve the value of the data-ads attribute
    var adId = $(this).attr('data-ads');

    // Reset visibility for all .ads-item elements
    $('.ads-item').css({
        'opacity': 0,
        'visibility': 'hidden'
    });

    // Set the corresponding div to be visible
    $('#' + adId).css({
        'opacity': 1,
        'visibility': 'visible'
    });
  });


  function adjustWrapperHeight() {
    // Check if the .very-long-menu is visible
    if ($('.very-long-menu').css('display') === 'block') {
        // Get the height of .very-long-menu
        var menuHeight = $('.very-long-menu').height();

        // Set the height of .awMainNav__wrapper
        $('.awMainNav__wrapper').css('height', (menuHeight + 300) + 'px');
    } else {
        // If the menu is not visible, revert .awMainNav__wrapper's height to 100%
        $('.awMainNav__wrapper').css('height', '100%');
    }
  }

  // Listen for clicks that toggle the .very-long-menu's visibility
  $(document).on('click', function() {
      adjustWrapperHeight();
  });

});
