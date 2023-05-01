/**
 * @jest-environment jsdom
 */

const { game, newGame } = require("../game"); //this is where you export the function to be tested


beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
});

//describe block followed by test code

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        newGame();
    });
test("should set game score to zero", () => {
    expect(game.score).toEqual(0);
    });
});    