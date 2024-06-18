  // Function to enlarge image or replace with video
  function enlargeImage(imageSrc, styleText, textBlurb) {
    // Create a new image element for the enlarged version
    const enlargedImg = document.createElement('img');
    enlargedImg.src = imageSrc;
    enlargedImg.alt = 'Enlarged Image';
    enlargedImg.classList.add('enlarged-img');

    // Create a div to hold the enlarged image
    const enlargedContainer = document.createElement('div');
    enlargedContainer.classList.add('enlarged-container');

    // Add the style text above the image
    const styleTextElement = document.createElement('div');
    styleTextElement.classList.add('style-text');
    styleTextElement.textContent = styleText;
    enlargedContainer.appendChild(styleTextElement);

    // Add the text blurb below the style text
    const textBlurbElement = document.createElement('div');
    textBlurbElement.classList.add('text-blurb');
    textBlurbElement.textContent = textBlurb;
    enlargedContainer.appendChild(textBlurbElement);

    // Create a div for controls
    const controlsContainer = document.createElement('div');
    controlsContainer.classList.add('controls-container');

    // Create zoom in and zoom out buttons
    const zoomInButton = document.createElement('button');
    zoomInButton.innerHTML = '+';
    zoomInButton.classList.add('zoom-button');
    zoomInButton.addEventListener('click', () => {
        scale += 0.5;
        enlargedImg.style.transform = `scale(${scale})`;
        updateImagePosition();
    });

    const zoomOutButton = document.createElement('button');
    zoomOutButton.innerHTML = '-';
    zoomOutButton.classList.add('zoom-button');
    zoomOutButton.addEventListener('click', () => {
        scale -= 0.5;
        enlargedImg.style.transform = `scale(${scale})`;
        updateImagePosition();
    });

    controlsContainer.appendChild(zoomInButton);
    controlsContainer.appendChild(zoomOutButton);
    enlargedContainer.appendChild(controlsContainer);

    // Create and add the close button
    const closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.classList.add('close-btn');
    closeButton.onclick = function() {
        document.body.removeChild(enlargedContainer);
    };
    enlargedContainer.appendChild(closeButton);

    // Add the enlarged image to the container
    enlargedContainer.appendChild(enlargedImg);

    // Add the container to the body
    document.body.appendChild(enlargedContainer);

    let scale = 1;

    // Function to update image position based on scaling
    function updateImagePosition() {
        const rect = enlargedImg.getBoundingClientRect();
        const offsetX = (window.innerWidth - rect.width) / 2;
        const offsetY = (window.innerHeight - rect.height) / 2;
        enlargedImg.style.marginTop = `${Math.max(offsetY, 50)}px`;
    }
}  