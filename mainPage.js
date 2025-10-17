const showSidebarBtn = document.getElementById("buttonShowSidebar");
const sidebar = document.getElementById("sidebar");

showSidebarBtn.addEventListener("click", () => {
  if (sidebar.style.visibility === "visible") {
    sidebar.style.visibility = "hidden";
    sidebar.style.opacity = "0";
  } else {
    sidebar.style.visibility = "visible";
    sidebar.style.opacity = "1";
  }
});