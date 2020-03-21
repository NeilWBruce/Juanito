var audioStorageName = "sound-vol";

function setVolText(value) {
    $('#volRangeText').html(value);
    localStorage.setItem(audioStorageName, value);

    var music = $('.audio');
    var vol = value / 10;
    $.each(music, function (i, item) {
        $(item).prop('volume', vol);
    });

    localStorage.setItem(audioStorageName, value);
}

function getVolFromStorage() {
    var vol = localStorage.getItem(audioStorageName);

    if (!vol) {
        vol = 5;
    }
    else {
        vol = parseInt(vol);
    }

    return vol;
}

function setCounter(storageName, clicksName) {
    var clicks = localStorage.getItem(storageName);

    if (!clicks) {
        clicks = 0;
    }
    var zeroFilled = ('000' + clicks).substr(-3)
    $('#' + clicksName).html(zeroFilled);
}


function playMusic(storageName, idName, clickName) {

    var music = document.getElementById(idName);

    if (music.paused) {
        var clicks = localStorage.getItem(storageName);

        if (!clicks) {
            clicks = 0;
        }
        else {
            clicks = parseInt(clicks);
        }

        clicks = clicks + 1;

        localStorage.setItem(storageName, clicks);

        var zeroFilled = ('000' + clicks).substr(-3)
        $('#' + clickName).html(zeroFilled);

        music.play();
    }
}

$(document).ready(function () {
    var vol = getVolFromStorage();
    $('#volRange').val(vol);
    setVolText(vol);
});
