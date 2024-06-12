function performSearch(event) {
    event.preventDefault();

    const searchInput = document.getElementById('searchInput').value;
    let searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchInput);

    const animationDiv = document.getElementById('animation');
    animationDiv.style.display = 'flex';
    setTimeout(function() {
        window.location.href = searchUrl;
    }, 4000);
}

function openNotification() {
    document.getElementById('overlay').classList.add('active');
    document.getElementById('notification').classList.add('active');
}

function closeNotification() {
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('notification').classList.remove('active');
}





function runAnimation() {
  const dot1 = document.getElementById('dot1');
  const dot2 = document.getElementById('dot2');
  const dot3 = document.getElementById('dot3');
  const scale = 4;
  const originalScale = 1; 
  const duration = 500;
  
  function animateDot1() {
    dot1.style.transform = 'scaleY(' + scale + ')';
    setTimeout(function() {
      dot1.style.transform = 'scaleY(' + originalScale + ')';
      animateDot2();
    }, duration);
  }

  function animateDot2() {
    dot2.style.transform = 'scaleY(' + scale + ')';
    setTimeout(function() {
      dot2.style.transform = 'scaleY(' + originalScale + ')';
      animateDot3();
    }, duration);
  }

  function animateDot3() {
    dot3.style.transform = 'scaleY(' + scale + ')';
    setTimeout(function() {
      dot3.style.transform = 'scaleY(' + originalScale + ')';
      setTimeout(runAnimation, 500);
    }, duration);
  }
  animateDot1();
}

window.onload = runAnimation;
