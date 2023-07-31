// Background images data
const backgroundData = [
    { image: "//live.staticflickr.com/65535/32598752764_c48842e203_k.jpg" },
    { image: "https://i.imgur.com/JW4OwL5.jpeg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "//live.staticflickr.com/65535/32598752764_c48842e203_k.jpg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/szAUuoD.jpeg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },    

];

// Function to set background images
function setBackgroundImages() {
    const backgroundElements = document.querySelectorAll(".background-image");
    backgroundData.forEach((data, index) => {
        backgroundElements[index].style.backgroundImage = `url(${data.image})`;
    });
}



// Call the function when the DOM is ready
document.addEventListener("DOMContentLoaded", setBackgroundImages);

// Onclick URLs data
const onclickData = [
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },
    { url: "https://www.godaddy.com/en-in" },
    { url: "https://www.example2.com" },

];

// Function to set onclick URLs
function setOnclickURLs() {
    const cardLinks = document.querySelectorAll("a[id^='cardLink']");
    onclickData.forEach((data, index) => {
        cardLinks[index].href = data.url;
    });
}

// Call the function when the DOM is ready
document.addEventListener("DOMContentLoaded", setOnclickURLs);

