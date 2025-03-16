// Dark Mode Toggle
const toggleSwitch = document.getElementById("dark-mode-toggle");

// Check localStorage for dark mode preference
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  toggleSwitch.checked = true; // Keep switch ON if dark mode was enabled
}

// Listen for toggle switch changes
toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled"); // Save preference
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled"); // Save preference
  }
});

function openModal(title, description, price, image) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-desc").innerText = description;
  document.getElementById("modal-price").innerText = price;
  document.getElementById("modal-img").src = image;
  document.getElementById("coffeeModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("coffeeModal").style.display = "none";
}
