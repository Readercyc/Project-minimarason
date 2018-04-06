

var flag = 0;
$("#pause").click(function(){
	console.log("!!");
	if(flag == 0)
	{
		$('audio')[0].pause();
		$(this).removeClass("fa-pause");
		$(this).addClass("fa-play");
		
		flag = 1;
	}
	else
	{
		$('audio')[0].play();
		$(this).removeClass("fa-play");
		$(this).addClass("fa-pause");
		flag = 0;
	}

	
})


var flag_muted = 0;
$("#mute").click(function(){
	if(flag_muted == 0)
	{
		$('audio')[1].muted = true;
		
		$(this).removeClass("fa-bell");
		$(this).addClass("fa-bell-slash");
		flag_muted = 1;
	}
	else
	{
		
		$('audio')[1].muted = false;
		$(this).removeClass("fa-bell-slash");
		$(this).addClass("fa-bell");
		flag_muted = 0;
	}

	
})

var isPlaying = false; 
var player = document.querySelector('#audio_dead');
        function dead() {
            
            if (isPlaying) {
                // 如果正在播放, 停止播放并停止读取此音乐文件
                player.pause();
                player.src = '';
            } else {
                player.src = './music/dead.mp3';
                player.play();
            }
        }
