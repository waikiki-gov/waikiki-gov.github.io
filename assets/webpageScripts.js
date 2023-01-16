//Jquery API fixes
if (!$.browser) {
  $.browser = { webkit: true, chrome: true, safari: false, msie: false, version: '605.1.15', Features: {} };
}

//Define constants
const ultrawide = "ultrawide";
const desktop = "desktop";
const laptop = "laptop";
const tablet = "tablet";
const mobile = "mobile";

//Register event listeners
$(document).ready(function () {
  $(".WideLayoutButton").on("click", function (event) {
    event.stopPropagation();
    localStorage.setItem("isAutoLayout", "false");
    switchLayoutTo(ultrawide);
    $(window).off("resize");
  });

  $(".DesktopLayoutButton").on("click", function (event) {
    event.stopPropagation();
    localStorage.setItem("isAutoLayout", "false");
    switchLayoutTo(desktop);
    $(window).off("resize");
  });

  $(".LaptopLayoutButton").on("click", function (event) {
    event.stopPropagation();
    localStorage.setItem("isAutoLayout", "false");
    switchLayoutTo(laptop);
    $(window).off("resize");
  });

  $(".TabletLayoutButton").on("click", function (event) {
    event.stopPropagation();
    localStorage.setItem("isAutoLayout", "false");
    switchLayoutTo(tablet);
    $(window).off("resize");
  });

  $(".MobileLayoutButton").on("click", function (event) {
    event.stopPropagation();
    localStorage.setItem("isAutoLayout", "false");
    switchLayoutTo(mobile);
    $(window).off("resize");
  });

  $(".AutoLayoutButton").on("click", function (event) {
    event.stopPropagation();
    localStorage.setItem("isAutoLayout", "true");
    changeLayout();
    $(window).on("resize", changeLayout);
  });

  if (localStorage.getItem("isAutoLayout") == "true" || localStorage.getItem("isAutoLayout") == null) {
    $(window).on("resize", changeLayout);
  }
});

//Switch to the given layout
function switchLayoutTo(device) {
  var path = window.location.href;
  path = path.replace(ultrawide, device);
  path = path.replace(desktop, device);
  path = path.replace(laptop, device);
  path = path.replace(tablet, device);
  path = path.replace(mobile, device);
  //checkAndNavigate(path);
}

//Checks if a given page exists and navigates
function checkAndNavigate(path) {
  $.ajax({
    type: "HEAD",
    url: path,
    success: function () {
      window.location = path;
    },
    error: function () {
      console.log("Did not exist!");
    }
  });
}

//Calculate window width
function getWidth() {
  console.log("Window width: " + $(window).width() + ", screen width: " + screen.width);
  return $(window).width() < screen.width ? $(window).width() : screen.width;
}

//Change layout according to screen size
function changeLayout() {
  const width = getWidth();
  const path = window.location.href;

  if (width <= 600) {
    if (!path.includes(mobile)) switchLayoutTo(mobile);
  } else if (width <= 1200) {
    if (!path.includes(tablet)) switchLayoutTo(tablet);
  } else if (width <= 1900) {
    if (!path.includes(laptop)) switchLayoutTo(laptop);
  } else if (width <= 2540) {
    if (!path.includes(desktop)) switchLayoutTo(desktop);
  } else {
    if (!path.includes(ultrawide)) switchLayoutTo(ultrawide);
  }
}

function redirect() {
  const width = getWidth();
  if (width <= 600) {
    window.location = "mobile/index.html";
  } else if (width <= 1200) {
    window.location = "tablet/index.html";
  } else if (width <= 1900) {
    window.location = "laptop/index.html";
  } else if (width <= 2540) {
    window.location = "desktop/index.html";
  } else {
    window.location = "ultrawide/index.html";
  }
}

function redirectToApp() {
  const width = getWidth();
  if (width <= 600) {
    window.location = "../mobile/alkalmazás.html";
  } else if (width <= 1200) {
    window.location = "../tablet/alkalmazás.html";
  } else if (width <= 1900) {
    window.location = "../laptop/alkalmazás.html";
  } else if (width <= 2540) {
    window.location = "../desktop/alkalmazás.html";
  } else {
    window.location = "../ultrawide/alkalmazás.html";
  }
}