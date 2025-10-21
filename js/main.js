// Get the element with the class "icon"
let icon = document.getElementsByClassName("icon")[0];

// Add an event listener for the 'click' event on the icon element
icon.addEventListener('click', responsive_control);

// Function to control the responsiveness of the navigation bar
function responsive_control() {
  // Get the element with the id "myTopnav"
  let x = document.getElementById("myTopnav");

  // Check if the class name of the element is "topnav"
  if (x.className === "topnav") {
    // If it is, add the "responsive" class to the element
    x.className += " responsive";
  } else {
    // If it's not, remove the "responsive" class from the element
    x.className = "topnav";
  }
}

// Video play/pause logic for pages that include a #myVideo element.
// Uses a named global function `myFunction` because the HTML button calls it inline.
document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('myVideo');
  var btn = document.getElementById('myBtn');

  // Only wire up if both elements exist on the page
  if (video && btn) {
    // Expose a safe global function used by the HTML button
    window.myFunction = function () {
      if (video.paused) {
        video.play();
        btn.innerHTML = 'Pause';
      } else {
        video.pause();
        btn.innerHTML = 'Play';
      }
    };

    // Ensure the button shows correct initial state
    btn.innerHTML = video.paused ? 'Play' : 'Pause';
  }
});

// Accessible accordion initialization for pages that include .site-accordion
document.addEventListener('DOMContentLoaded', function () {
  var accordionsRoot = document.querySelectorAll('.site-accordion');
  if (!accordionsRoot || accordionsRoot.length === 0) return;

  accordionsRoot.forEach(function (root) {
    var accs = root.querySelectorAll('.accordion');
    accs.forEach(function (btn, idx) {
      // Make button keyboard accessible and set ARIA
      btn.setAttribute('role', 'button');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('tabindex', '0');

      var panel = btn.nextElementSibling;
      if (panel) {
        panel.setAttribute('role', 'region');
        panel.setAttribute('aria-hidden', 'true');
      }

      function toggle() {
        var isOpen = btn.classList.toggle('active');
        if (panel) {
          panel.style.display = isOpen ? 'block' : 'none';
          panel.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        }
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      }

      btn.addEventListener('click', toggle);
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    });
  });
});

