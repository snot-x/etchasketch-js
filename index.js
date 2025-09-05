let gridContainer = document.querySelector("#gridContainer");
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";
gridContainer.style.width = "500px";
gridContainer.style.height = "500px";
gridContainer.style.border = "1px solid black";
gridContainer.style.margin = "auto";
gridContainer.style.marginTop = "50px";
gridContainer.style.marginBottom = "50px";
gridContainer.style.backgroundColor = "white";

// create the div grid
for (let i = 0; i < 16 * 16; i++) {
  let square = document.createElement("div");
  square.style.width = `${100 / 16}%`;   // 6.25% width
  square.style.height = `${100 / 16}%`;  // 6.25% height
  square.style.boxSizing = "border-box";
  square.style.border = "1px solid #ddd";
  gridContainer.appendChild(square);
}
