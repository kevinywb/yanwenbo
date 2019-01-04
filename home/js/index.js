$(function () {
    //页面变量
    var my = {};
    my.time = 0; //页面加载计时(毫秒)
    my.timer = null; //计时器
    my.$body = $('body'); //获取body
    my.$menu = $('.menu'); //获取menu
    my.$page = $('.page'); //获取page
    my.$view = $('<iframe></iframe>'); //定义view

    //页面路由
    if (window.os.isPc) {
        my.$menu.on('click', function () {
            var $a = $(this).find('a'),
                $c = my.$page.find('.page-content'),
                url = $a.attr('href');
            if ($a.attr('target') == '_blank') {
                if (confirm('“' + $(this).text() + '” 应用需要打开新窗口，是否继续？')) {
                    window.open(url);
                }
                return;
            }
            if (url && url != my.$view.attr('src')) {
                my.$view.attr('src', url).appendTo($c.html(''));
                my.time = new Date().getTime();
            }
            my.$page.show();
            my.$page.find('.page-loading').show();
            my.$page.find('.page-header-title').text($(this).text());
            my.$body.scrollTop(0);
            my.$body.addClass('noscroll');
        });
    } else {
        my.$menu.on('touchstart', function (e) {
            e.preventDefault();
            $(this).addClass('touch');
            my.time = new Date().getTime();
            my.timer = setInterval(function () {
                if (new Date().getTime() - my.time > 1000) {
                    clearInterval(my.timer);
                    alert('按这么久干嘛呀');
                }
            }, 500);       
        });
        my.$menu.on('touchend', function () {
            $(this).removeClass('touch');
            clearInterval(my.timer);
            if (new Date().getTime() - my.time < 1000) {
                window.location.href = $(this).find('a').attr('href');
            }
        });
    }

    //路由结束
    my.$view.on('load', function () {
        my.$page.find('.page-loading').hide();
        my.$page.find('.page-footer-title').html('加载耗时: ' + (new Date().getTime() - my.time) + 'ms');
    });

    //关闭当前页
    my.$page.find('.page-header-btn-close').on('click', function () {
        my.$page.hide();
        my.$body.removeClass('noscroll');
    });

    //打开新页面
    my.$page.find('.page-header-btn-open').on('click', function () {
        window.open(my.$view.attr('src'));
    })

    //栅格布局
    minigrid('.grid', '.grid-item', 0);

    //菜单拖拽
    // dragula([document.getElementsByClassName('grid')]);

    //系统时间
    setInterval(function () {
        $('#today').html(new Date().Format('yyyy-MM-dd hh:mm:ss'));
    }, 1000);

    //窗口重置
    window.onresize = function () {
        minigrid('.grid', '.grid-item', 0);
    }

    //异常捕获
    window.onerror = function (msg, url, line) {
        alert('Error:' + msg + '\nURL' + url + '\nLine:' + line)
        return true;
    }

    //离开页面
    window.onbeforeunload = function () {
        //return "手滑了吗?";
    }

    //屏幕滑动
    window.ontouchmove = function (e) {
        e.preventDefault();
    }
})