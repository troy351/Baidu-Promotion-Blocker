setInterval(function () {
    if (typeof $ == 'undefined') return;

    // hide promotion in search result
    $('#content_left > div').each(function (index, element) {
        var elem = $(element);
        var elemId = elem.attr('id') || '';
        var elemClass = elem.attr('class') || '';
        if (elemId.match(/^\d{4}$/) || (elemClass.match(/^\w{6}$/) && elemClass != 'result')) {
            elem.hide();
        }
    });

    // hide promotion on the bottom right
    $('#ec_im_container').hide();
}, 100);