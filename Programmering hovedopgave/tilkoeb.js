// Thumbnail-switcher
const thumbnails   = document.querySelectorAll('.thumbnails img');
const currentImage = document.getElementById('currentImage');
thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const newSrc = thumb.dataset.large || thumb.src;
    currentImage.src = newSrc;
    thumbnails.forEach(img => img.classList.remove('active'));
    thumb.classList.add('active');
  });
});

// Countdown timer
function startCountdown(durationSeconds) {
  let remaining = durationSeconds;
  const display = document.getElementById('countdown');
  const timer = setInterval(() => {
    if (remaining <= 0) {
      clearInterval(timer);
      display.textContent = '00:00:00';
      return;
    }
    const hrs  = String(Math.floor(remaining / 3600)).padStart(2, '0');
    const mins = String(Math.floor((remaining % 3600) / 60)).padStart(2, '0');
    const secs = String(remaining % 60).padStart(2, '0');
    display.textContent = `${hrs}:${mins}:${secs}`;
    remaining--;
  }, 1000);
}
startCountdown(5 * 3600);

// Sti til din animation-fil
const animationSrc = 'img/TjekAnimation.webm';

// Add-to-cart inline confirmation og animation
document.querySelectorAll('.add-button').forEach(originalBtn => {
  const container = originalBtn.closest('.add-container');

  originalBtn.addEventListener('click', e => {
    e.stopPropagation();

    // Ryd alt eksisterende i containeren
    container.innerHTML = '';

    // Opret inline bekræftelse
    const confirmDiv = document.createElement('div');
    confirmDiv.className = 'confirm-inline';
    confirmDiv.innerHTML = `
      <p style="font-size: 0.8rem; margin-bottom: 0.5rem;">Er du sikker?</p>
      <div class="confirm-buttons">
        <button class="btn small confirm-yes">Ja</button>
        <button class="btn small confirm-no">Nej</button>
      </div>
    `;
    container.appendChild(confirmDiv);

    const yesBtn = confirmDiv.querySelector('.confirm-yes');
    const noBtn = confirmDiv.querySelector('.confirm-no');

    // Klik på Nej → gendan original knap
    noBtn.addEventListener('click', e => {
      e.stopPropagation();
      container.innerHTML = '';
      container.appendChild(originalBtn);
    });

    // Klik på Ja → vis animation og fjern overlay
    yesBtn.addEventListener('click', e => {
      e.stopPropagation();
      console.log("Klik på JA – starter animation");
    
      // Tøm container
      container.innerHTML = '';
    
      // Opret video-element
      const video = document.createElement('video');
      video.src = animationSrc;
      video.autoplay = true;
      video.muted = true;
      video.playsInline = true;
      video.loop = false;
      video.playbackRate = 1.7;
    
      // Midlertidig style for synlighed
      video.style.width = '60px';
      video.style.height = '60px';
      video.style.display = 'block';
      video.style.margin = '0 auto';
    
      // Wrapper
      const wrapper = document.createElement('div');
      wrapper.classList.add('added-video-container');
      wrapper.appendChild(video);
    
      // Overlay-knap
      const remove = document.createElement('div');
      remove.classList.add('remove-overlay');
      remove.textContent = 'Fjern';
      remove.style.display = 'none';
      wrapper.appendChild(remove);
    
      // Sæt det ind i DOM
      container.appendChild(wrapper);
      console.log("Video og overlay tilføjet til DOM");
    
      // Aktiver overlay efter 2 sek
      setTimeout(() => {
        remove.style.display = 'flex';
        console.log("Overlay aktiveret");
      }, 2000);
    
      // “Fjern” gendanner original-knap
      remove.addEventListener('click', e => {
        e.stopPropagation();
        container.innerHTML = '';
        container.appendChild(originalBtn);
        console.log("Original knap gendannet");
      });
    });
  }); 

});
