import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

/** My Code */
const galleryUl = document.querySelector("ul.gallery"); // ul.gallery element stored in a variable.

galleryItems.forEach((item) => { // a forEach function that:
  const createLiEl = document.createElement("li"); // create an li element...
  createLiEl.classList.add("gallery_item"); // the li element gets a class "gallery_item".

  const createAnchorTag = document.createElement("a"); // create an anchor element...
  createAnchorTag.classList.add("gallery_link"); // the anchor tag gets a class "gallery_link".
  createAnchorTag.setAttribute("href", item.original); // the anchor tag gets referince from galleryItems.original object.

  const createImgTag = document.createElement("img"); // create an img element...
  createImgTag.classList.add("gallery_img"); // the img element gets a class "gallery_img".
  createImgTag.setAttribute("src", item.preview); // the img element gets an src attribute from galleryItems.preview.
  createImgTag.setAttribute("alt", item.description); // the img element gets another attribute, an alt, from galleryItems.description.

  createAnchorTag.appendChild(createImgTag); // anchor tag gets an img child.
  createLiEl.appendChild(createAnchorTag); // the li child of ul.gallery recives an anchor tag child.
  galleryUl.appendChild(createLiEl); // ul.gallery recives a li child.
});

function openImg(event) { // function to open the target img from ul.gallery.
  const clickedOn = event.target; // parameter -event- gets a -target- method, stored in a variable.

  if (event.target.nodeName !== "IMG") { // Codition says -event.target.nodeName- must be double negated -"IMG"- so the if statement get triggered.
      return;
  }

  event.preventDefault();

  const imageUrl = clickedOn.parentElement.getAttribute("href");
  const instance = basicLightbox.create(`<img width="1400" height="900" src="${imageUrl}" />`);

  instance.show();
}

galleryUl.addEventListener('click', openImg); // ul.gallery has an event listener, on click, that triggers a function.