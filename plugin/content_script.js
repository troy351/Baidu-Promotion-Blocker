// baidu promotion block
(function($) {
  if (typeof $ === 'undefined') return;

  function restoreGlobalAPI(name) {
    if (window[name]) return;
    const iframe = document.createElement('iframe');
    iframe.width = iframe.height = 0;
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    window[name] = iframe.contentWindow[name];
    iframe.remove();
  }

  function hideAds() {
    // hide promotion in search result
    $('#content_left > div').each((index, element) => {
      const elem = $(element);
      const elemId = elem.attr('id') || '';
      let elemClass = elem.attr('class') || '';
      const spaceIndex = elemClass.indexOf(' ') > 0 ? elemClass.indexOf(' ') : elemClass.length;
      elemClass = elemClass.slice(0, spaceIndex);
      if (
        elemId.match(/^\d{4}$/) ||
        (elemClass.match(/^\w{6}$/) && elemClass !== 'result') ||
        elem.html().includes('<span class="m ec_tuiguang_pplink">广告</span>')
      ) {
        elem.hide();
      }
    });

    // hide promotion on the bottom right
    $('#ec_im_container').hide();
  }

  function detect() {
    // prevent ads show delay
    let count = 0;
    (function() {
      hideAds();
      count++;
      // use requestAnimationFrame to prevent blink
      if (count < 150) requestAnimationFrame(arguments.callee);
    }());
  }

  if (location.hostname === 'www.baidu.com') {
    // restore api
    restoreGlobalAPI('MutationObserver');

    const observer = new MutationObserver(detect);
    const wrapper = $('#wrapper_wrapper')[0];

    observer.observe(wrapper, {
      childList: true,
      arrtibutes: true,
    });

    // trigger a detect when load
    detect();
  }
}(jQuery));
