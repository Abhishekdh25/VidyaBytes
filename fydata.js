// Background images data
const backgroundData = [
    { image: "https://i.imgur.com/GqcnB8v.png" },
    { image: "https://i.imgur.com/oVvekep.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/blNXdMj.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/MxHjghQb.jpg" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/HrMY7ld.png" },
    { image: "https://i.imgur.com/ECEaT2Y.png" },
    { image: "https://i.imgur.com/CON06kS.png" },
    { image: "https://i.imgur.com/ZeapPlU.png" },
    { image: "https://i.imgur.com/6fZ1LD0.png" },
    { image: "https://i.imgur.com/aBzAe91.png" },
    { image: "https://i.imgur.com/e9gOXWD.png" },
    { image: "https://i.imgur.com/lXw3P5L.png" },
    { image: "https://i.imgur.com/m188pMS.png" },
    { image: "https://i.imgur.com/3GRzKO1.png" },
    { image: "https://i.imgur.com/PjYbkfu.png" },    

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
    { url: "https://vidyabytesfybcs.blogspot.com/2023/08/introduction-to-problem-solving-aspects.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/2023/08/what-is-coding.html?m=1" },
    { url: "https://vidyabytesfybcs.blogspot.com/2023/08/sy.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
    { url: "https://vidyabytesfybcs.blogspot.com/error.html" },
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

