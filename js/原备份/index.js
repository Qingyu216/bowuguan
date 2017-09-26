$(document).ready(function () {
    $('.details_query').mouseover(function () {
        $('.details_query_img').attr('src', '../images/search_ico_hover.png');
    });
    $('.details_query').mouseout(function () {
        $('.details_query_img').attr('src', '../images/search_ico.png');
    });
});

//轮播图
$(function () {
    var i = 0;
    var timer = null;
    //创建原点
    for (var j = 0; j < $('.img li').length; j++) {
        $('.num').append('<li></li>');
    }
    //给第一个圆点添加样式
    $('.num li').first().addClass('active');
    //复制第一张图片
    var firstimg = $('.img li').first().clone();
    //将第一张图片放到最后一张图片后面,设置ul的宽度为图片的张数*图片的宽度
    $('.img').append(firstimg).width($('.img li').length * ($('.img img').width()));
    //下一个按钮
    $('.next').click(function () {
        i++;
        if (i == $('.img li').length) {
            //i不可能等于零
            i = 1;
            $('.img').css({
                'left': '0'
            });
        }
        $('.img').animate({
            left: -i * 1000
        }, 300);
        //设置小圆点
        if (i == $('.img li').length - 1) {
            $('.num li').eq(0).addClass('active').siblings().removeClass('active');
        } else {
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        }
    });
    //上一个按钮
    $('.prev').click(function () {
        i--;
        if (i == -1) {
            i = $('.img li').length - 2;
            $('.img').css({
                'left': -($('.img li').length - 1) * 1000
            });
        }
        $('.img').animate({
            'left': -i * 1000
        }, 300);
        //下面的小圆点
        if (i == $('.img li').length - 1) {
            $('.num li').eq(0).addClass('active').siblings().removeClass('active');
        } else {
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        }
    });
    //鼠标移入圆点之后跳转到指定图片
    $('.num li').click(function () {
        var index = $(this).index();
        $('.img').animate({
            'left': -index * 1000
        });
        $('.num li').eq(index).addClass('active').siblings().removeClass('active');
        i = index;
    });
    //自动播放
    function autoPlay() {
        timer = setInterval(function () {
            i++;
            //判断i的大小
            if (i == $('.img li').length) {
                i = 1;
                $('.img').css('left', '0');
            }
            $('.img').animate({
                'left': -i * 1000
            }, 300);
            if (i == $('.img li').length - 1) {
                $('.num li').eq(0).addClass('active').siblings().removeClass('active');
            } else {
                $('.num li').eq(i).addClass('active').siblings().removeClass('active');
            }
        }, 5000);
    }
    autoPlay();
    //鼠标移入移出
    $('.banner').hover(function () {
        $('.btn').show();
        clearInterval(timer);
        timer = null;
    }, function () {
        $('.btn').hide();
        autoPlay();
    });
});



$('.list-li>li').eq(0).css({
    'background-color': 'orange'
})

function xiaoguo(n) {
    var b = n - 1;
    $('.list-li>li').css({
        'background-color': '#F9263E'
    })
    $('.list-li>li').eq(b).css({
        'background-color': 'orange'
    })
    $('.dian').animate({
        'width': 1000 + 'px'
    }, 2000)
    $('.dian').animate({
        'width': 0 + 'px'
    }, 100)
    $('.box').animate({
        'margin-left': -n * 1000 + 'px'
    }, 2000, function () {
        if (n == 3) {
            $('.box').css({
                'margin-left': 0 + 'px'
            })
        }
    })
}
/*	左右按钮*/
function huan(n) {
    var j = i;
    i = i + n;

    if (i > 3) {
        i = 1;
    }
    if (i < 0) {
        i = 2;
    }
    xiaoguo(i);
}
//左箭头
$('.btn-l').click(function () {
    clearInterval(stop);
    stop = null;
    huan(-1);
    if (i == 0) {
        $('.btn-con-l').html('<img src="images/lunbo' + parseInt(3) + '.jpg">')
    } else {
        $('.btn-con-l').html('<img src="images/lunbo' + parseInt(i) + '.jpg">')
    }
    $('.box').stop(true, true);
    $('.dian').stop(true, true);

});
//右箭头
$('.btn-r').click(function () {
    clearInterval(stop);
    stop = null;
    huan(1);
    if (i == 2) {
        $('.btn-con-r').html('<img src="images/lunbo' + parseInt(1) + '.jpg">')
    } else if (i == 3) {
        $('.btn-con-r').html('<img src="images/lunbo' + parseInt(2) + '.jpg">')
    } else {
        $('.btn-con-r').html('<img src="images/lunbo' + parseInt(i + 2) + '.jpg">')
    }
    $('.box').stop(true, true);
    $('.dian').stop(true, true);
});
//$('.btn-l').click(function(){huan(-1);});
//$('.btn-r').click(function(){huan(1);});

/*	鼠标放上大块*/
$('.lunbo').mouseover(function () {
    clearInterval(stop);
    stop = null;
    $('.btn').show();

})
/*	鼠标离开大块*/
$('.lunbo').mouseout(function () {
    if (stop == null) {
        stop = setInterval(function () {
            i++;
            if (i >= 3) {
                i = 1;
            }
            xiaoguo(i);
            xiaoguo2(i);
        }, 4000)
    }
    $('.btn').hide();
    $('.btn-con-l').text('');
    $('.btn-con-r').text('');
})
/*按钮小标题*/
$('.list-li>li').mouseover(function () {
    clearInterval(stop);
    stop = null;
    i = Number($(this).text());
    xiaoguo($(this).text())
    $('.box').stop(true, true);
    $('.dian').stop(true, true);
})