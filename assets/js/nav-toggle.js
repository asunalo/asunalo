function toggleNav(event) {
    event.stopPropagation();
    const toggle = document.querySelector('.nav-toggle');
    toggle.classList.toggle('active');
  }
  
  function closeNav(event) {
    const toggle = document.querySelector('.nav-toggle');
    if (!toggle.contains(event.target)) {
      toggle.classList.remove('active');
    }
  }
  