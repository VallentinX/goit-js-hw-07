const ANCHOR_TAG = document.querySelectorAll("a"); // the anchor tag stored in a variable.

ANCHOR_TAG.forEach((anchor) => { // For each anchor tag...
  anchor.addEventListener("mouseover", () => { // ... define the hover behavior.
    anchor.textContent = "Click me! 😊";  // Change the text of the ANCHOR_TAG on hover.

    ANCHOR_TAG.forEach((otherAnchor) => {  // Change the text of the other ANCHOR_TAG.
      if (otherAnchor !== anchor) {
        otherAnchor.textContent = "No, click me! 😭";
      }
    });
  });
// Helped from chatGPT
  anchor.addEventListener("mouseout", () => {
    anchor.textContent = anchor.getAttribute("original-text");  // Revert the text of the ANCHOR_TAG to its original state.

    ANCHOR_TAG.forEach((otherAnchor) => {  // Revert the text of the other ANCHOR_TAG to its original state.
      if (otherAnchor !== anchor) {
        otherAnchor.textContent =
          otherAnchor.getAttribute("original-text");
      }
    });
  });

  anchor.setAttribute("original-text", anchor.textContent); // Store the original text of the ANCHOR_TAG.
});