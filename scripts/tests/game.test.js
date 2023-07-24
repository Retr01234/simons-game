/**
 * @jest-environment jsdom
 */

const { game } = require("../game");

// Rendering our HTML File into the DOM
beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});

// Running our Test to see if the Score Chart works
describe("game object contains correct keys", () => {
  test("score key exists", () => {
    expect("score" in game).toBe(true);
  });
  // Testing to see if our Game Key is there
  test("currentGame key exists", () => {
    expect("currentGame" in game).toBe(true);
  });
  test("playerMovess key exists", () => {
    expect("playerMoves" in game).toBe(true);
  });
  test("choices key exists", () => {
    expect("choices" in game).toBe(true);
  });
});