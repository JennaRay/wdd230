const banner = document.getElementById('banner');
const btn = document.getElementById('bannerBtn');

btn.addEventListener("click", function () {
    banner.style.display = "none";
});

function displayBanner() {
    banner.style.display = "flex";
}
function hideBanner() {
    banner.style.display = "none";
}