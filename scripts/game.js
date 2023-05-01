let game = {
    currentGame: [],
    score: 0,
    choices: ["button1", "button2", "button3", "button4"]
};

function newGame() {
    game.score = 0;
}


module.exports = { game, newGame }; //this is whare you impiort the funtion that is being tested.