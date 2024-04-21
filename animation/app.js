
const o_image = document.querySelector('#sequenceImage');
o_image.style.opacity = '0.09'
// Array of image file names
let imageNames = [
    "./video_imgs/output_0001.png",
    "./video_imgs/output_0002.png",
    "./video_imgs/output_0003.png",
    "./video_imgs/output_0004.png",
    "./video_imgs/output_0005.png",
    "./video_imgs/output_0006.png",
    "./video_imgs/output_0007.png",
    "./video_imgs/output_0008.png",
    "./video_imgs/output_0009.png",
    "./video_imgs/output_0010.png",
    "./video_imgs/output_0011.png",
    "./video_imgs/output_0012.png",
    "./video_imgs/output_0013.png",
    "./video_imgs/output_0014.png",
    "./video_imgs/output_0015.png",
    "./video_imgs/output_0016.png",
    "./video_imgs/output_0017.png",
    "./video_imgs/output_0018.png",
    "./video_imgs/output_0019.png",
    "./video_imgs/output_0020.png"
];


// Function to display image sequence
function displayImageSequence() {
    let index = 0;
    let interval = setInterval(function() {
        document.getElementById("sequenceImage").src = imageNames[index]; // Update src attribute with next image
        index++;
        if (index >= imageNames.length) {
            index = 0; // Reset index to loop back to the beginning of the sequence
        }
    }, 300); // Adjust frame rate (in milliseconds)
}

// Call function to start displaying the image sequence
displayImageSequence();



