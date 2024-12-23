const paragraph = document.getElementById("myParagraph");


function changeBodyBackground() {
    document.body.style.backgroundColor = getRandomColor();
}


function changeParagraphBackground() {
    paragraph.style.backgroundColor = getRandomColor();
}


function hideParagraph() {
    paragraph.style.display = "none";
}


function showParagraph() {
    paragraph.style.display = "block";
}

function increaseFontSize() {
    const currentSize = parseInt(window.getComputedStyle(paragraph).fontSize);
    paragraph.style.fontSize = `${currentSize + 2}px`;
}

function decreaseFontSize() {
    const currentSize = parseInt(window.getComputedStyle(paragraph).fontSize);
    paragraph.style.fontSize = `${currentSize - 2}px`;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
