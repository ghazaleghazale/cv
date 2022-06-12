function openNavbar() {
    document.getElementById("navbar").style.width = "250px";
  }
  function closeNavbar() {
    document.getElementById("navbar").style.width = "0";
  }
document.getElementById("clNav").addEventListener('click',closeNavbar);
document.getElementById("opNav").addEventListener('click',openNavbar);
document.querySelector("body").addEventListener("mousedown",closeNavbar);
