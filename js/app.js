$(document).ready(function(){
	var bgArray = ['intro-bg1' , 'intro-bg2' , 'intro-bg3' , 'intro-bg4' , 'intro-bg5'];
    var i = Math.floor(Math.random() * bgArray.length);
    var bg = bgArray[i];
    var path = 'img/';

    $(".intro").css("background-image", "url("+ path + bg +".jpg)");
});