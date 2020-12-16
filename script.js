// declaring variables
let comm_lab = document.getElementById('comm_lab')            // Comm Lab link
let yoda_link = document.getElementById('yoda_link')          // 30MFF project link
let comix_link = document.getElementById('comix_link')        // Comix project link
let sound_link = document.getElementById('sound_link')        // Sound project linke
let video_link = document.getElementById('video_link')        // Video project linke
let image = document.getElementById('image')                  // Image object

// change Comm Lab link color on hover
comm_lab.addEventListener('mouseenter', () => {
    comm_lab.style.color = 'rgb(73, 135, 69)';          // change text color to green
})
comm_lab.addEventListener('mouseleave', () => {
    comm_lab.style.color = 'rgb(34, 34, 34)';           // change text color back to dark grey
})

// change 30MFF Project link color on hover
yoda_link.addEventListener('mouseenter', () => {
    yoda_link.style.color = 'rgb(211, 107, 75)';        // change text color to orange
    image.src='yoda_icon.png'
})
yoda_link.addEventListener('mouseleave', () => {
    yoda_link.style.color = 'rgb(34, 34, 34)';          // change text color back to dark grey
    image.src='home_icon.png'
})

// change Comix Project link color on hover
comix_link.addEventListener('mouseenter', () => {
    comix_link.style.color = 'rgb(211, 107, 75)';       // change text color to orange
    image.src='comic_icon.png'

})
comix_link.addEventListener('mouseleave', () => {
    comix_link.style.color = 'rgb(34, 34, 34)';         // change text color back to dark grey
    image.src='home_icon.png'
})

// change Sound Project link color on hover
sound_link.addEventListener('mouseenter', () => {
    sound_link.style.color = 'rgb(211, 107, 75)';       // change text color to orange
    image.src='sound_icon.png'
})
sound_link.addEventListener('mouseleave', () => {
    sound_link.style.color = 'rgb(34, 34, 34)';         // change text color back to dark grey
    image.src='home_icon.png'
})

// change Video Project link color on hover
video_link.addEventListener('mouseenter', () => {
    video_link.style.color = 'rgb(211, 107, 75)';       // change text color to orange
    image.src='video_icon.png'
})
video_link.addEventListener('mouseleave', () => {
    video_link.style.color = 'rgb(34, 34, 34)';         // change text color back to dark grey
    image.src='home_icon.png'
})