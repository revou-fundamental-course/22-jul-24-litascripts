document.addEventListener("DOMContentLoaded", function () {
    // Banner auto-slide
    const bannerImages = [
        "https://picsum.photos/140",
        "https://picsum.photos/141",
        "https://picsum.photos/142"
    ];

    let currentBannerIndex = 0;
    const bannerElement = document.getElementById("banner");

    function updateBanner() {
        bannerElement.style.backgroundImage = `url(${bannerImages[currentBannerIndex]})`;
        currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length;
    }

    setInterval(updateBanner, 3000); // Change banner every 3 seconds
    updateBanner(); // Initial call

    // Form validation
    document.getElementById("contact").addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const interest = document.getElementById("interest").value;

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }
    if (email === "") {
        alert("Email must be filled out");
        return false;
    }
    if (interest === "") {
        alert("Please select an interest");
        return false;
    }
    return true;
}
