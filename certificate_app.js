// Get DOM elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list'); // This is the container for main images
let listItems = SliderDom.querySelectorAll('.carousel .list .item'); // Get all individual image items

// Removed thumbnail and time related DOM elements and logic as they are hidden by CSS or no longer needed

let currentIndex = 0; // Keep track of the currently active image

// Function to display a specific image
function showImage(index) {
    // Remove 'active' class from all items first, effectively hiding them
    listItems.forEach((item, i) => {
        item.classList.remove('active');
        item.style.zIndex = '0'; // Ensure non-active items are behind
    });

    // Add 'active' class to the current item to make it visible
    listItems[index].classList.add('active');
    listItems[index].style.zIndex = '1'; // Bring the active item to the front
}

// Initialize: Show the first image when the page loads
if (listItems.length > 0) {
    showImage(currentIndex);
}

// Event listener for Next button
nextDom.onclick = function(){
    currentIndex = (currentIndex + 1) % listItems.length; // Loop back to the start if end is reached
    showImage(currentIndex);
}

// Event listener for Previous button
prevDom.onclick = function(){
    currentIndex = (currentIndex - 1 + listItems.length) % listItems.length; // Loop to the end if at start
    showImage(currentIndex);
}

// All previous `showSlider` function logic, `classList.add('next/prev')`,
// `clearTimeout`, and auto-play `setTimeout` calls are removed as they are no longer needed
// with the new opacity-based transition and direct image control.