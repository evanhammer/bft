/* global Meteor, Template */
//Template.hello.greeting = function () {
//    return "It's just a Big Fucking Timer.";
//};

Template.bft.events({
    'click input': function () {
        // template data, if any, is available in 'this'
        if (typeof console !== 'undefined') {
            console.log("You pressed the button");
        }
    }
});
