var mainApp = angular.module('finnApp', []);

mainApp.controller("IndexController", function IndexController($scope, $timeout) {

    var vm = this;
    vm.musicPlaying = false;
    vm.volStorageName = "sound-vol"; 
    vm.activeAudio = false;
    vm.clicks = {};
    vm.sounds = ["juanito", "partridge", "ram", "keegan", "win", "sad", "trophy", "cena", "christian"];
    vm.colors = ["#ff1dce", "#DCD9D4", "#00BF57", "#0982d0", "#FF0000", "#ffcc00", "#ff1dce", "#DCD9D4", "#00BF57", "#0982d0", "#FF0000", "#ffcc00"];

    vm.playMusic = function (name) {

        if (!vm.activeAudio || vm.activeAudio.paused) {
            if (vm.volume > 0) {
                var clicks = vm.increaseClicks(name + '_clicks');
                var zeroFilled = ('000' + clicks).substr(-3);
                vm.clicks[name] = zeroFilled;

                vm.activeAudio = new Audio(name + '.mp3');
                vm.activeAudio.volume = vm.volume / 10;
                vm.activeAudio.play();
            }
        }
    };

    vm.setVol = function () {
        localStorage.setItem(vm.volStorageName, vm.volume);

        if (vm.activeAudio) {
            vm.activeAudio.volume = vm.volume / 10;
        }
    };

    vm.getVolFromStorage = function () {
        var vol = localStorage.getItem(vm.volStorageName);

        if (!vol) {
            vol = 5;
        }
        else {
            vol = parseInt(vol);
        }

        vm.volume = vol;
    };

    vm.getClicks = function (storageName) {
        var clicks = localStorage.getItem(storageName);

        if (!clicks) {
            clicks = 0;
        }
        else {
            clicks = parseInt(clicks);
        }
        return clicks;
    };

    vm.increaseClicks = function (storageName) {
        var clicks = vm.getClicks(storageName);
        clicks = clicks + 1;

        localStorage.setItem(storageName, clicks);

        return clicks;
    };

    vm.getCounts = function () {

        $.each(vm.sounds, function (i, name) {
            var clicks = vm.getClicks(name + '_clicks');
            var zeroFilled = ('000' + clicks).substr(-3);
            vm.clicks[name] = zeroFilled;
        });
    };

    vm.getVolFromStorage();
    vm.getCounts();
});



function playJuanito() {
    playMusic("juanito_clicks", "juanito_audio", "juan-clicks");
} 


function playPartridge() {
    playMusic("partridge_clicks", "partridge_audio", "partridge-clicks");
}  

function playRam() {
    playMusic("ram_clicks", "ram_audio", "ram-clicks");
} 

function playKeegan() {
    playMusic("keegan_clicks", "keegan_audio", "keegan-clicks");
} 

$(document).ready(function () {
    setCounter("juanito_clicks", "juan-clicks");
    setCounter("partridge_clicks", "partridge-clicks");
    setCounter("ram_clicks", "ram-clicks");
    setCounter("keegan_clicks", "keegan-clicks");
});