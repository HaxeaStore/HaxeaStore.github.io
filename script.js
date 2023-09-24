const buyButtons = document.querySelectorAll(".buyButton");
const notAvailableModal = document.getElementById("notAvailableModal");
const closeModalButton = document.getElementById("closeModalButton");
const modalAvalibleA = document.getElementById("modalAvalibleA")

buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        notAvailableModal.style.display = "block";
    });
});

closeModalButton.addEventListener("click", () => {
    notAvailableModal.style.display = "none";
});

document.getElementById("augustusBuyButton").addEventListener("click", function() {
    // Redirect to the desired page (e.g., Augustus page)
    window.location.href = "https://spezz.exchange/store/store/product/191-augustus-client-lifetime/"; // Replace with the actual URL
});
