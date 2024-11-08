
const randomMessageGenerator = {
    generateRandomMessage: function () {
        let verb = ["eat","swim","do some exercise","sleep","be kind","to ask how someone is doing","to thank someone"];
        let index = Math.floor(Math.random()* verb.length);
        let randomVerb = verb[index];
        let msg = this._greeting() + ` Now is the best time to ${randomVerb}! Don't hesistate. you have just ${Math.floor(Math.random() * 30)} mins to do it!`;
        return msg;

    },

    _greeting: function () {
        var d = new Date();
        var time = d.getHours();
        var greeting = undefined;
        if (time < 12) {
            greeting = "Good Morning!"
        }
        if (time === 12) {
            greeting = "Good Noon!"
        }
        if (time > 12) {
            greeting = "Good Afternoon!"
        }
        if (time > 18) {
            greeting = "Good Evening!"
        }
        return greeting;
    }
};

function getRandomMsg() {
    document.getElementById("outputLabel").innerHTML = randomMessageGenerator.generateRandomMessage();
}
//console.log(randomMessageGenerator.generateRandomMessage());