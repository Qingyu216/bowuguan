$(document).ready(function(){$('.details_query').mouseover(function(){$('.details_query_img').attr('src','images/search_ico_hover.png');});$('.details_query').mouseout(function(){$('.details_query_img').attr('src','images/search_ico.png');});});var i=0;var stop;stop=setInterval(function(){i++;if(i>3){i=1;}
xiaoguo2(i);xiaoguo(i);},4000);function xiaoguo2(n){$('.fugai1').css({"background-image":"url(images/lunbo"+n+".jpg)",'background-repeat':'no-repeat','display':'block',"backgroundPosition-x":0+'px'}).animate({"backgroundPosition-x":-1000+'px'},3000).css({'display':'none'})
$('.fugai2').css({"background-image":"url(images/lunbo"+n+".jpg)",'background-repeat':'no-repeat','display':'block',"backgroundPosition-x":-200+'px'}).animate({"backgroundPosition-x":-1000*2+'px'},3000).animate({'display':'none'})
$('.fugai3').css({"background-image":"url(images/lunbo"+n+".jpg)",'background-repeat':'no-repeat','display':'block',"backgroundPosition-x":0+'px'}).animate({"backgroundPosition-x":-1000*3+'px'},3000).animate({'display':'none'})}
$('.list-li>li').eq(0).css({'background-color':'orange'})
function xiaoguo(n){var b=n-1;$('.list-li>li').css({'background-color':'#F9263E'})
$('.list-li>li').eq(b).css({'background-color':'orange'})
$('.dian').animate({'width':1000+'px'},2000)
$('.dian').animate({'width':0+'px'},100)
$('.box').animate({'margin-left':-n*1000+'px'},2000,function(){if(n==3){$('.box').css({'margin-left':0+'px'})}})}
function huan(n){var j=i;i=i+n;if(i>3){i=1;}
if(i<0){i=2;}
xiaoguo(i);}
$('.btn-l').click(function(){clearInterval(stop);stop=null;huan(-1);if(i==0){$('.btn-con-l').html('<img src="images/lunbo'+parseInt(3)+'.jpg">')}else{$('.btn-con-l').html('<img src="images/lunbo'+parseInt(i)+'.jpg">')}
$('.box').stop(true,true);$('.dian').stop(true,true);});$('.btn-r').click(function(){clearInterval(stop);stop=null;huan(1);if(i==2){$('.btn-con-r').html('<img src="images/lunbo'+parseInt(1)+'.jpg">')}else if(i==3){$('.btn-con-r').html('<img src="images/lunbo'+parseInt(2)+'.jpg">')}else{$('.btn-con-r').html('<img src="images/lunbo'+parseInt(i+2)+'.jpg">')}
$('.box').stop(true,true);$('.dian').stop(true,true);});$('.lunbo').mouseover(function(){clearInterval(stop);stop=null;$('.btn').show();})
$('.lunbo').mouseout(function(){if(stop==null){stop=setInterval(function(){i++;if(i>=3){i=1;}
xiaoguo(i);xiaoguo2(i);},4000)}
$('.btn').hide();$('.btn-con-l').text('');$('.btn-con-r').text('');})
$('.list-li>li').mouseover(function(){clearInterval(stop);stop=null;i=Number($(this).text());xiaoguo($(this).text())
$('.box').stop(true,true);$('.dian').stop(true,true);})