// Define an array of image paths and corresponding text blurbs
const images = [
    {
        path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Cropping Photos/kaelis.png",
        text: "Character: Vilitarin"
    },
  {
      path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Cropping Photos/keiran.png",
      text: "Description of Kieran.PNG"
  },
  {
      path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Cropping Photos/angel dude.png",
      text: "Description of Candy.PNG"
  },
  {
      path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Cropping Photos/till.png",
      text: "Description of Damien.PNG"
  },
  {
      path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Cropping Photos/breeze.png",
      text: "Description of Kaelis.PNG"
  },
  {
      path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Cropping Photos/kaveh.png",
      text: "Character: Vilitarin"
  },
  {
    path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Full Images/lune.JPG",
    text: "Character: Vilitarin"
},
{
    path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Full Images/IMG_2647.PNG",
    text: "Character: Vilitarin"
},

{
    path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Sticker Design/a d.png",
    text: "Character: Vilitarin"
},
{
    path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Sticker Design/bat.png",
    text: "Character: Vilitarin"
},
{
    path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Sticker Design/ghost.png",
    text: "Character: Vilitarin"
},
{
    path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Sticker Design/pumpkin.png",
    text: "Character: Vilitarin"
},
{
    path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Sticker Design/skeleton.png",
    text: "Character: Vilitarin"
},
{
    path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Sticker Design/witch.png",
    text: "Character: Vilitarin"
},
{
    path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Cropping Photos/flowchart.png",
    text: "Character: Vilitarin"
},
{
    path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Cropping Photos/pamphlet 1.png",
    text: "Character: Vilitarin"
},
{
    path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Cropping Photos/pamphlet 2.png",
    text: "Character: Vilitarin"
},
{
    path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Cropping Photos/infographic.png",
    text: "Character: Vilitarin"
},
{
    path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Cropping Photos/musicposter.png",
    text: "Character: Vilitarin"
},
{
    path: "/Volumes/Memorex USB/hailey reichert/Personal Development/Portfolio Website/Photos/Portfolio Items/Cropping Photos/movie poster.png",
    text: "Character: Vilitarin"
},

];

// Initialize current image index
let currentImageIndex = 0;

// Function to handle next image
function nextImage() {
currentImageIndex = (currentImageIndex + 1) % images.length;
updateGalleryImage();
}

// Function to handle previous image
function prevImage() {
currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
updateGalleryImage();
}

// Function to update the gallery image and text blurb
function updateGalleryImage() {
const galleryImage = document.getElementById('gallery-image');
galleryImage.src = images[currentImageIndex].path;
const imageText = document.getElementById('image-text');
imageText.textContent = images[currentImageIndex].text;
}

// Function to enlarge the clicked image
function enlargeImage(path, text) {
const enlargedImage = document.getElementById('enlarged-image');
enlargedImage.src = path;
const imageText = document.getElementById('image-text');
imageText.textContent = text;
const enlargedContainer = document.getElementById('enlarged-container');
enlargedContainer.style.display = 'flex';
}

// Function to close the enlarged image
function closeEnlargedImage() {
const enlargedContainer = document.getElementById('enlarged-container');
enlargedContainer.style.display = 'none';
}
