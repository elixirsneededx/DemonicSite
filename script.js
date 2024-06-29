document.addEventListener('DOMContentLoaded', function() {
    var videoPlayer = document.getElementById('videoPlayer');
    var audioPlayerContainer = document.getElementById('audioPlayerContainer');
    var playButton = document.getElementById('playButton');
    var playMusicButton = document.getElementById('playMusicButton');
    var stopMusicButton = document.getElementById('stopMusicButton');
    var audio = null;

    playButton.addEventListener('click', function() {
        videoPlayer.innerHTML = '<video width="560" height="315" controls autoplay><source src="media/video.mp4" type="video/mp4">Your browser does not support the video tag.</video>';
        document.body.style.backgroundImage = "url('media/troll.jpg')";
        document.body.style.backgroundSize = "cover";
    });

    playMusicButton.addEventListener('click', function() {
        if (audio === null) {
            audio = new Audio('media/music.mp3');
            audio.play();
            document.body.style.backgroundColor = "#FFFFFF"; 
            toggleMusicButtons(true);
            showAudioPlayer();
        } else if (audio.paused) {
            audio.play();
            document.body.style.backgroundColor = "#FFFFFF"; 
            toggleMusicButtons(true);
            showAudioPlayer();
        } else {
            audio.pause();
            document.body.style.backgroundColor = "#FFFFFF"; 
            toggleMusicButtons(false);
            hideAudioPlayer();
        }
    });

    // Stop music button click handler
    stopMusicButton.addEventListener('click', function() {
        if (audio !== null && !audio.paused) {
            audio.pause();
            document.body.style.backgroundColor = "#FFFFFF"; 
            toggleMusicButtons(false);
            hideAudioPlayer();
        }
    });

    function toggleMusicButtons(isPlaying) {
        playMusicButton.style.display = isPlaying ? 'none' : 'inline-block';
        stopMusicButton.style.display = isPlaying ? 'inline-block' : 'none';
    }

    function showAudioPlayer() {
        audioPlayerContainer.innerHTML = '<audio controls autoplay><source src="media/music.mp3" type="audio/mpeg">Your browser does not support the audio tag.</audio>';
    }

    function hideAudioPlayer() {
        audioPlayerContainer.innerHTML = '';
    }

    function updateSessionInfo() {
        var ipAddress = '127.0.0.1';
        var browserInfo = navigator.userAgent;
        var hardwareInfo = navigator.hardwareConcurrency || 'N/A';
        var osInfo = navigator.platform;
        var sessionRuntime = ''; 
        var currentTime = new Date().toLocaleString();

        document.getElementById('ipAddress').textContent = ipAddress;
        document.getElementById('browserInfo').textContent = browserInfo;
        document.getElementById('hardwareInfo').textContent = hardwareInfo;
        document.getElementById('osInfo').textContent = osInfo;
        document.getElementById('sessionRuntime').textContent = sessionRuntime;
        document.getElementById('currentTime').textContent = currentTime;
    }

    updateSessionInfo();
    setInterval(updateSessionInfo, 1000);
});
