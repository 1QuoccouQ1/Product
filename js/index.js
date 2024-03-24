function chuyenDenLink() {
    window.location.href = "../index.html";
  }
var With = document.querySelector(".header-list-li");

  
var chieuDai = With.clientWidth;
var setWith = chieuDai + "px"

With.style.setProperty("--chieudai", setWith);



function toggleLoginMobile() {
  var loginMobile = document.getElementById("loginMobile");
  loginMobile.style.display = (loginMobile.style.display === "none") ? "block" : "none";
}

var loginMobileTopIcon = document.querySelector(".login-mobile-top-icon");
loginMobileTopIcon.addEventListener("click", function(event) {
  event.stopPropagation();
  toggleLoginMobile();
});




