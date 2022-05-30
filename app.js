let item = document.querySelectorAll("a");
let currentLocation = location.href;

for (let items of item) {
  if (items.href === currentLocation) {
    items.className = "active";
  }
}
