console.log("Script running")
// Task 1: Light & Dark Mode
// Select the light and dark buttons (you can do this separately or with querySelectorAll)
let light = document.querySelector(".btn-light")
let dark = document.querySelector(".btn-dark")


// Extra credit: Select the navbar
let nav = document.querySelector(".navbar")

// Add the event listener to the light button such that when it's clicked, the body's background color is white and text color is black
// Extra credit: Add the bg-light class and remove the bg-dark class to the navbar
light.addEventListener("click", function(event){
   body.style.backgroundColor = "white"
   body.style.color = "dark"
  })

nav.classList.remove(".bg-dark")
nav.classList.add(".bg-light")


// Add the event listener to the dark button such that when it's clicked, the body's background color is black and text color is white
//  Extra credit: Add the bg-dark class and remove the bg-light class to the navbar
dark.addEventListener("click", function(event){
 body.style.backgroundColor = "black"
 body.style.color = "white"
})

nav.classList.remove(".bg-light")
nav.classList.add(".bg-dark")
// Task 2: Video thumbnails
// Use getElementsByClassName to select all the images in the cards
let image= document.getElementsByClassName("rounded")

// Console log the length of the array to confirm you have all 4 images
console.log(image.length)

// Add event listeners to each one such that on mouse over, the image becomes the corresponding gif and on mouse out, the gif goes back to the image
// e.g. mouseover: ears.jpg -> ears.gif
// e.g. mouseout: ears.gif -> ears.jpg
// Extra credit: do this with a for loop and one event listener (you will need string manipulation)
image[0].addEventListener("mouseover", function(event){
image[0].src=" images/ears.gif"
})

image[0].addEventListener("mouseout", function(event){
image[0].src=" images/ears.jpg"
  
})
image[1].addEventListener("mouseover", function(event){
image[1].src=" images/halp.gif"
  
})

image[1].addEventListener("mouseout", function(event){ image[1].src=" images/halp.jpg"
  
})

image[2].addEventListener("mouseover", function(event){
image[2].src=" images/husky.gif"
  
})
 image[2].addEventListener("mouseout", function(event){
  image[2].src=" images/husky.jpg"
})


image[3].addEventListener("mouseover", function(event){
image[3].src=" images/dance.gif"

})
 image[3].addEventListener("mouseout", function(event){
  image[3].src=" images/dance.jpg"
})