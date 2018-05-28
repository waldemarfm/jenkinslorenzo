$(document).ready(function() {

  $.featherlight.defaults = {
    otherClose: 'a.js-close-featherlight',
  };

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
