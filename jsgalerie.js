function addImage() {
    const fileInput = document.getElementById('imageUpload');
    const files = fileInput.files;

    if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const newImageContainer = document.createElement('div');
            newImageContainer.classList.add('image-container');

            const newImage = document.createElement('img');
            newImage.src = e.target.result;
            newImage.alt = 'New Image';

            newImageContainer.appendChild(newImage);
            document.getElementById('gallery').appendChild(newImageContainer);
        }

        reader.readAsDataURL(file);
    }
}
