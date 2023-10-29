import { galleryItems } from './gallery-items.js';
// Change code below this line
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

const simpleLightBox = new SimpleLightbox("ul.gallery a.gallery_link", {
  captionsData: "alt", captionDelay: 250,
});