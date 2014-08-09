/* global $, Template, moment */
//Template.hello.greeting = function () {
//    return "It's just a Big Fucking Timer.";
//};

var startTime = null;
var intervalID = null;

Template.bft.rendered = function () {
    //$('.title').fitText(0.9);
    $('.timer').fitText(0.48);
};

Template.bft.events({
    'click .count-up': function () {
        if (intervalID) {
            clearInterval(intervalID);
        }
        startTime = moment();
        intervalID = setInterval(function () {
            var timeSince = moment.duration((moment().diff(startTime)));
            var seconds = timeSince.seconds();
            var minutes = timeSince.minutes();
            var hours = Math.floor(timeSince.asHours());

            var secondsStr = seconds.toString();
            if (seconds < 10) {
                secondsStr = "0" + secondsStr;
            }

            var minutesStr = minutes.toString();
            if (minutes < 10) {
                minutesStr = "0" + minutesStr;
            }

            var hoursStr = hours.toString();
            if (hours < 10) {
                hoursStr = "0" + hoursStr;
            }
            var time = hoursStr + ":" + minutesStr + ":" + secondsStr;
            $('#time').text(time);
        }, 100);
    }
});
