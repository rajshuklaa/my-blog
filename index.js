 let currentIndex = 1;

 function changeImage() {
     let img = document.getElementById('myImage');
     const images = [
         "images/shuklaraj.png",
         "images/rajshukla.png",
         "images/shrsh.png",
         "images/faisal.jpg",
     ];
     img.src = images[currentIndex];

     currentIndex = (currentIndex + 1) % images.length;
 }