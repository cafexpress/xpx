document.getElementById("salesForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Sale added successfully!");
});

document.getElementById("inventoryForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Inventory updated!");
});
