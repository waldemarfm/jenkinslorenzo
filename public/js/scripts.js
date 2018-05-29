$(document).ready(function() {

  $.featherlight.defaults = {
    otherClose: 'a.js-close-featherlight',
  };

  /**
   * Local navigation
   */
  var $nav = $('#js-navigation');
  $nav.localScroll({
    offset: -72,
  });

  /**
   * Navigation active state while scrolling
   */
  var $sections = $('.jl-js-section');

  $sections.waypoint({
    handler: function(dir) {
      var id = this.element.id;

      if (dir === 'down') {
        markActive(id);
      }
    },
    offset: '90%',
  });

  $sections.waypoint({
    handler: function(dir) {
      var id = this.element.id;

      if (dir === 'up') {
        markActive(id);
      }
    },
    offset: function() {
      return -$(this.element).height() + 100;
    },
  });

  // Mark link as selected
  function markActive(id) {
    $nav.find('a').removeClass('is-active');
    $nav.find('a[href="#' + id + '"]').addClass('is-active');
  }

  /**
   * Homepage hero
   */
  const desktop = window.matchMedia('(min-width: 61.25em)');

  function appendVideo(mq) {
    const $video = $('.js-jl-hero-video');

    if (mq.matches) {
      const videoSrc = $video.data('src');
      const $source = `<source type="video/mp4" src="${ videoSrc }" />`;
      $video.append($source);
    } else {
      $video.find('source').remove();
    }
  }

  appendVideo(desktop);
  desktop.addListener(appendVideo);
});
