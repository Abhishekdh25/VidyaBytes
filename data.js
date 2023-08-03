// Background images data
const backgroundData = [
    { image: "https://www.gamezop.com/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2FHJXei0j%2Fm%2Fsquare.png&w=1920&q=100" },
    { image: "https://7071.play.gamezop.com/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2FS1Wrpf1v5ym%2Fm%2Fsquare.png&w=1920&q=100" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://7071.play.gamezop.com/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2FHJE-oa2z_l-%2Fm%2Fsquare.png&w=1920&q=100" },
    { image: "https://7071.play.gamezop.com/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2F4ykgM_yzbcg%2Fm%2Fsquare.png&w=1920&q=100" },
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
    { image: "https://www.gamezop.com/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2FHJXei0j%2Fm%2Fsquare.png&w=1920&q=100" },
    { image: "https://7071.play.gamezop.com/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2FS1Wrpf1v5ym%2Fm%2Fsquare.png&w=1920&q=100" },
    { image: "https://i.imgur.com/4eEZmbC.png" },
    { image: "https://7071.play.gamezop.com/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2FHJE-oa2z_l-%2Fm%2Fsquare.png&w=1920&q=100" },
    { image: "https://7071.play.gamezop.com/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2F4ykgM_yzbcg%2Fm%2Fsquare.png&w=1920&q=100" },
    { image: "https://7071.play.gamezop.com/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2FrkWemI2q%2Fm%2Fsquare.png&w=1920&q=100" },
    { image: "https://7071.play.gamezop.com/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2FHk3bj6nMdgb%2Fm%2Fsquare.png&w=1920&q=100" },
    { image: "https://7071.play.gamezop.com/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2FrJsWV8aIa-l%2Fm%2Fsquare.png&w=1920&q=100" },
    { image: "https://7071.play.gamezop.com/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2FrJsl0KSbuN%2Fm%2Fsquare.png&w=1920&q=100" },
    { image: "https://7071.play.gamezop.com/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2FBkpeAKrW_E%2Fm%2Fsquare.png&w=1920&q=100" },    

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
    { url: "https://7071.play.gamezop.com/g/HJXei0j/Cyberfusion?lang=en&src=comet&sessionStartPage=home-page" },
    { url: "https://7071.play.gamezop.com/g/S1Wrpf1v5ym/Box-Crush?lang=en&src=comet&sessionStartPage=home-page" },
    { url: "https://7072.play.quizzop.com/tech-quiz/category" },
    { url: "https://7071.play.gamezop.com/g/HJE-oa2z_l-/Mirror-Me?lang=en&src=comet&sessionStartPage=home-page" },
    { url: "https://7071.play.gamezop.com/g/4ykgM_yzbcg/Rescue-Juliet?lang=en&src=comet&sessionStartPage=home-page" },
    { url: "https://7071.play.gamezop.com/g/rkWemI2q/Fancy-Diver?lang=en&src=comet&sessionStartPage=home-page" },
    { url: "https://7071.play.gamezop.com/g/Hk3bj6nMdgb/Laser-Locked?lang=en&src=comet&sessionStartPage=home-page" },
    { url: "https://7071.play.gamezop.com/g/rJsWV8aIa-l/Jelly-Doods?lang=en&src=comet&sessionStartPage=home-page" },
    { url: "https://7071.play.gamezop.com/g/rJsl0KSbuN/Swipe-Art-Puzzle?lang=en&src=comet&sessionStartPage=home-page" },
    { url: "https://7071.play.gamezop.com/g/BkpeAKrW_E/Veggi-Rabbit?lang=en&src=comet&sessionStartPage=home-page" },

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

