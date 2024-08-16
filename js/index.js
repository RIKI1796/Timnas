const Icon= document.getElementById("icon")
const menuList= document.getElementById("list")

Icon.addEventListener("click", () => {
  menuList.classList.toggle("slide");
});