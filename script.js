document.addEventListener("DOMContentLoaded", () => {
    const helloElement = document.getElementById("hello");
    const text = "Hello, I'm Adam";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            helloElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust speed by changing the timeout value
        }
    }

    helloElement.textContent = ""; // Clear the element before typing

    // Delay the typeEffect function by 1 second
    setTimeout(() => {
        typeEffect();
    }, 750); // 1000 milliseconds = 1 second
});
