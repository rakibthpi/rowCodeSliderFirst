const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
];

let indexOF = 0;
const includeImages = document.getElementById('includeImages');
setInterval(() => {
    if(images.length <= indexOF){
        indexOF = 0;
    }
    let imagesUrl = images[indexOF];
    includeImages.setAttribute('src', imagesUrl);
    console.log(imagesUrl);
    indexOF++;
}, 1000);