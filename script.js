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
 
const thumbnails = document.querySelectorAll('.pic');
const mainPic = document.querySelector('.mainpic');
const mobilePrev = document.getElementById('mobile-prev');
const mobileNext = document.getElementById('mobile-next');

function getCurrentMainIndex() {
  const src = mainPic.src.split('/').pop();
  for (let i = 0; i < images.length; i++) {
    if (src === images[i].src.split('/').pop()) return i;
  }
  return 0;
}

function setMainImageByIndex(idx) {
  mainPic.src = images[idx].src;
  thumbnails.forEach(tn => tn.classList.remove('active'));
  if (thumbnails[idx]) thumbnails[idx].classList.add('active');
}

// Mobile prev/next navigation
if (mobilePrev && mobileNext) {
  mobilePrev.addEventListener('click', function(e) {
    e.stopPropagation();
    let idx = getCurrentMainIndex();
    idx = (idx - 1 + images.length) % images.length;
    setMainImageByIndex(idx);
  });
  mobileNext.addEventListener('click', function(e) {
    e.stopPropagation();
    let idx = getCurrentMainIndex();
    idx = (idx + 1) % images.length;
    setMainImageByIndex(idx);
  });
}
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    const id = this.getAttribute('data-id');
    mainPic.src = `./images/image-product-${id}.jpg`;
    thumbnails.forEach(tn => tn.classList.remove('active'));
    this.classList.add('active');
  });
});

 const images=[
  {src:"./images/image-product-1.jpg", id:1},
  {src:"./images/image-product-2.jpg", id:2},
  {src:"./images/image-product-3.jpg", id:3},
  {src:"./images/image-product-4.jpg", id:4}
 ]
 let currentImageIndex= 0; 
 document.getElementById('mainpic')
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

    next.addEventListener('click', handlenext)
    prev.addEventListener('click', handleprev)
    showImage()

  document.addEventListener('DOMContentLoaded', () => { 

  const addToCartBtn = document.querySelector('#addcart'); 
  const cartIcon = document.querySelector('#cart-icon'); 
  const cartCount = document.querySelector('.cart-count'); 
  const cartModal = document.querySelector('.modal'); 
  const cartContent = document.querySelector('.cart-item'); 
  const checkOut= document.querySelector('#check');
    // Hide cart modal when clicking outside of it
    document.addEventListener('click', function(e) {
      if (cartModal.style.display === 'block' && !cartModal.contains(e.target) && !cartIcon.contains(e.target)) {
        cartModal.style.display = 'none';
      }
    });
 
  let cartItems = []; // Array to store cart items 
 
  function updateCartCount() { 
    let totalQuantity = 0; 
    cartItems.forEach(item => { 
      totalQuantity += item.quantity; 
    }); 
    cartCount.textContent = totalQuantity; 
  } 
  // Function to display the cart modal 
 
  function displayCart() { 
    cartContent.innerHTML = ''; // Clear existing content 
    if (cartItems.length === 0) { 
      cartContent.innerHTML = '<p>Your cart is empty.</p>'; 
      checkOut.style.display='none'; 
    } else { 
      let total=0;
 
      cartItems.forEach((item) => { 
        const cartItemDiv = document.createElement('div'); 
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = ` 
          <img src="${item.image}" alt="square" style="width: 50px; border-radius: 5px; margin-left: -10px; margin-right:12px"> 
          <p>${item.title} 
            ${item.price} x ${item.quantity} 
             <span style="font-size: 12px; font-weight: bold; color: black;">$${(parseFloat(item.price.replace('$', ''))*item.quantity).toFixed(2)}</span>
          </p>
           <img src="./images/icon-delete.svg" alt="delete" id="delete" style="width: 10px; height: 10px; margin-top: 15px">
        `; 
        cartContent.appendChild(cartItemDiv); 
 
      }); 
      // Add event listeners to remove buttons 
      const removeButtons = document.querySelectorAll('#delete'); 
      removeButtons.forEach(button => { 
        button.addEventListener('click', removeItem); 
      }); 
    } 
    cartModal.style.display = 'block';
  } 
  // Function to close the cart modal 
  function closeCart() { 
    cartModal.style.display = 'none'; 
  } 
  // Event listener for closing the cart modal (click outside the modal) 
  cartModal.addEventListener('click', (event) => { 
    if (event.target === cartModal) {
      closeCart(); 
    } 
  }); 
 
  // Function to remove an item from the cart 
  function removeItem(event) { 
    const indexToRemove = event.target.dataset.index; 
    cartItems.splice(indexToRemove, 1); // Remove the item from the array 
    updateCartCount(); // Update the cart count display 
    displayCart(); // Re-render the cart 
  } 
 
  // Event listener for adding to cart 
 
  addToCartBtn.addEventListener('click', () => { 
    const productTitle = document.querySelector('#product-title').textContent; 
    const productPrice = document.querySelector('#product-price').textContent; 
    const productImage = document.querySelector('.mainpic').src; 
    const quantity = parseInt(document.querySelector('#count').value); 
 
    const existingItemIndex = cartItems.findIndex(item => item.title === productTitle); 
    if (existingItemIndex > -1) { 
      cartItems[existingItemIndex].quantity += quantity; 
    } else { 
      const newItem = { 
        image: productImage,
        title: productTitle, 
        price: productPrice, 
        quantity: quantity, 
      }; 
      cartItems.push(newItem); 
    } 
    updateCartCount(); 
  }); 
  // Event listener for the cart icon 
  cartIcon.addEventListener('click', displayCart); 
});