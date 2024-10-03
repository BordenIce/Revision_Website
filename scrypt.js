  document.addEventListener("DOMContentLoaded", function() {
    const chapter1 = document.getElementById('chapter1');
  
    // Function to start the animation
    function startAnimation() {
      chapter1.style.animation = 'shadowAnimation 5s infinite'; // 5 seconds loop
    }
  
    // Start animation when the page loads
    startAnimation();
  });
  function toggleMenu() {
    var overlay = document.getElementById("menuOverlay");
    overlay.classList.toggle("active"); // Toggle between show/hide
  }
  document.querySelector('.to_top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
});