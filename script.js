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
    countElement.textContent= count;
 })
 minus.addEventListener('click', () =>
  {
    count--;
    countElement.textContent= count;
 })

 const images=[
  {src:"image-product-1.jpg"},
  {src:"image-product-2.jpg"},
  {src:"image-product-3.jpg"},
  {src:"image-product-4.jpg"}
 ];
 console.log(images)
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
  function changeSlide(step){
    currentImageIndex +=step;
    if (currentImageIndex < 0) 
      currentImageIndex= images.length-1;
        if (currentImageIndex >= images.length) 
          currentImageIndex= 0;
        showImage();
    }
    function showImage() {
    const modalImage =document.getElementById("gallery-container");
    modalImage.src= images[currentImageIndex].src
    }
    // let cart=[]
    //  const cartIcon= document.getElementById('cart-icon').addEventListener('click', 
    //   function(){
    //     const modal= document.getElementById('modal-content');

    //     modal.style.display='flex';
    //   })
