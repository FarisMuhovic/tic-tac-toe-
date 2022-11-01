const tiles = document.querySelectorAll(".tile");
const turnDisplay = document.getElementById("turn");
const curtain = document.getElementById("bgcurtain");
const modul = document.getElementById("modul");
const endBtn = document.getElementById("endgamebtn");
const modulResults = document.getElementById("results");
let turn = 0;
let Xpieces = [];
let Opieces = [];
tiles.forEach(tile => {
  tile.addEventListener("click", e => {
    let pressedTileData = e.target.getAttribute("data-place");
    let pressedTile = document.querySelector(
      `[data-place=${CSS.escape(pressedTileData)}]`
    );
    turn++;
    let symbol;
    if (turn % 2 == 0) {
      symbol = "Ｏ";
      turnDisplay.innerText = "✖";
      Opieces.push(pressedTileData);
    } else {
      symbol = "✖";
      turnDisplay.innerText = "Ｏ";
      Xpieces.push(pressedTileData);
    }
    pressedTile.innerHTML = `<p>${symbol}</p>`;
    pressedTile.setAttribute("aria-disabled", "true");
    if (
      (Xpieces.includes("0") &&
        Xpieces.includes("1") &&
        Xpieces.includes("2")) ||
      (Xpieces.includes("3") &&
        Xpieces.includes("4") &&
        Xpieces.includes("5")) ||
      (Xpieces.includes("6") &&
        Xpieces.includes("7") &&
        Xpieces.includes("8")) ||
      (Xpieces.includes("0") &&
        Xpieces.includes("3") &&
        Xpieces.includes("6")) ||
      (Xpieces.includes("1") &&
        Xpieces.includes("4") &&
        Xpieces.includes("7")) ||
      (Xpieces.includes("2") &&
        Xpieces.includes("5") &&
        Xpieces.includes("8")) ||
      (Xpieces.includes("0") &&
        Xpieces.includes("4") &&
        Xpieces.includes("8")) ||
      (Xpieces.includes("6") && Xpieces.includes("4") && Xpieces.includes("2"))
    ) {
      modulResults.innerText = "The player X has won the game";
      console.log("The player X has won the game");
      curtain.style.display = "block";
      modul.style.display = "flex";
    }
    if (
      (Opieces.includes("0") &&
        Opieces.includes("1") &&
        Opieces.includes("2")) ||
      (Opieces.includes("3") &&
        Opieces.includes("4") &&
        Opieces.includes("5")) ||
      (Opieces.includes("6") &&
        Opieces.includes("7") &&
        Opieces.includes("8")) ||
      (Opieces.includes("0") &&
        Opieces.includes("3") &&
        Opieces.includes("6")) ||
      (Opieces.includes("1") &&
        Opieces.includes("4") &&
        Opieces.includes("7")) ||
      (Opieces.includes("2") &&
        Opieces.includes("5") &&
        Opieces.includes("8")) ||
      (Opieces.includes("0") &&
        Opieces.includes("4") &&
        Opieces.includes("8")) ||
      (Opieces.includes("6") && Opieces.includes("4") && Opieces.includes("2"))
    ) {
      modulResults.innerText = "The player O has won the game";
      console.log("The player O has won the game");
      curtain.style.display = "block";
      modul.style.display = "flex";
    }
    if (Opieces.length + Xpieces.length == 9) {
      modulResults.innerText = "Its a Tie!";
      console.log("Its a tie !");
      curtain.style.display = "block";
      modul.style.display = "flex";
    }
  });
});
endBtn.addEventListener("click", () => {
  location.reload();
});
