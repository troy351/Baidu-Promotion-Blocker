setInterval(function () {
    if (typeof $ == 'undefined') return;
    
    if (location.href.indexOf('www.baidu.com') > 0) {
        // for search result promotion

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
    }
    else if (location.href.indexOf('tieba.baidu.com') > 0) {
        // for tieba promotion

        // hide promotion in search result
        $('#thread_list > li').each(function (index, element) {
            var elem = $(element);
            if (!elem.hasClass('thread_top_list_folder') && !elem.hasClass('j_thread_list')) {
                elem.hide();
            }
        });
    }
}, 100);