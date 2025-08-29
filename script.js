const harmburger = document.getElementById("harmburger");
const links = document.getElementById("nav-links");
const Close = document.getElementById("close");
// show nav
harmburger.addEventListener("click", () => {
  links.classList.add("show");
  harmburger.style.display= 'none';
  Close.style.display='block';
});
// close nav
Close.addEventListener("click", () => {
  links.classList.remove("show");
  harmburger.style.display= 'block';
  Close.style.display='none';
});
let count = 0;
// select value and buttons
const countElement = document.querySelector("#count");
const plus= document.getElementById('plus');
const minus= document.getElementById('minus');
 plus.addEventListener('click', () =>
  {
    count++;
    countElement.value= count;
 })
 minus.addEventListener('click', () =>
  {
    count--;
    countElement.value= count;
 })

 const images=[
  {src:"./images/image-product-1.jpg", id:1},
  {src:"./images/image-product-2.jpg", id:2},
  {src:"./images/image-product-3.jpg", id:3},
  {src:"./images/image-product-4.jpg", id:4}
 ]
 let currentImageIndex= 0; 
 document.getElementById('gallery-pop')
 .addEventListener('click', openGallery);
  function openGallery() {
    currentImageIndex= 0;
    document.getElementById('gallery-container').style.display='block'; 
    showImage();
  }
  function closeGallery() {
    document.getElementById('gallery-container').style.display='none'; 
  }
  
    function showImage() {
    const modalImage =document.getElementById("gallery-image");
    modalImage.src= images[currentImageIndex].src
    }
    

    const next=document.getElementById('next')
    const prev=document.getElementById('prev')
    
    const handlenext=()=>{
      currentImageIndex=(currentImageIndex+1)%images.length;
      showImage()
    } 
    const handleprev=()=>{
      currentImageIndex=(currentImageIndex-1 + images.length)%images.length
      showImage()
    }

