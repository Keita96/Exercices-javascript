navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;



document.querySelector('#start').addEventListener('click', function(e) {
    navigator.getUserMedia({
        audio: true,
        video: true
    }, function(stream) {
        var video = document.querySelector('#emmitter_v');
        window.URL = stream;
        if (window.URL) {
            video.srcObject = stream;
        } else {
            video.src = stream;
        }
        video.play();

    }, function(e) {
        console.log('Erreur :' + e);
    })

})