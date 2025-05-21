// filter.js
// Opdatér produkt-tæller
const visibleCountEl = document.getElementById('visibleCount');
const totalCountEl   = document.getElementById('totalCount');
function updateCounts(nVisible, nTotal) {
  visibleCountEl.textContent = nVisible;
  totalCountEl.textContent   = nTotal;
}

// Sort-change
document.getElementById('sortSelect').addEventListener('change', e => {
  console.log('Sorter efter:', e.target.value);
});

// — Pris-slider elementer —
const minSlider      = document.getElementById('minPrice');
const maxSlider      = document.getElementById('maxPrice');
const minLabel       = document.getElementById('minPriceLabel');
const maxLabel       = document.getElementById('maxPriceLabel');
const priceRangeWrap = document.getElementById('priceRangeWrap');

function syncSliders() {
  let minVal = +minSlider.value;
  let maxVal = +maxSlider.value;
  if (minVal > maxVal) [minVal, maxVal] = [maxVal, minVal];
  minSlider.value = minVal;
  maxSlider.value = maxVal;
  const minLimit = +minSlider.min, maxLimit = +minSlider.max;
  const pct1 = ((minVal - minLimit)/(maxLimit-minLimit))*100;
  const pct2 = ((maxVal - minLimit)/(maxLimit-minLimit))*100;
  minLabel.textContent = `${minVal.toLocaleString('da-DK')} kr.`;
  maxLabel.textContent = `${maxVal.toLocaleString('da-DK')} kr.`;
  priceRangeWrap.style.background = `
    linear-gradient(to right,
      #e0e0e0 0%, #e0e0e0 ${pct1}%,
      #0070f3 ${pct1}%, #0070f3 ${pct2}%,
      #e0e0e0 ${pct2}%, #e0e0e0 100%)
  `;
}
[minSlider, maxSlider].forEach(s => {
  s.addEventListener('input', syncSliders);
  s.addEventListener('pointerdown', () => s.style.zIndex = '3');
  s.addEventListener('pointerup',   () => s.style.zIndex = '2');
});
syncSliders();

// — Full Length slider —
const minLengthSlider = document.getElementById('minLength');
const maxLengthSlider = document.getElementById('maxLength');
const minLengthLabel  = document.getElementById('minLengthLabel');
const maxLengthLabel  = document.getElementById('maxLengthLabel');
const lengthWrap      = document.getElementById('lengthRangeWrap');

function syncLengthSliders() {
  let a = +minLengthSlider.value, b = +maxLengthSlider.value;
  if (a > b) [a, b] = [b, a];
  minLengthSlider.value = a; maxLengthSlider.value = b;
  minLengthLabel.textContent = `${a} cm`;
  maxLengthLabel.textContent = `${b} cm`;
  const minL = +minLengthSlider.min, maxL = +minLengthSlider.max;
  const p1 = ((a-minL)/(maxL-minL))*100, p2 = ((b-minL)/(maxL-minL))*100;
  lengthWrap.style.background = `
    linear-gradient(to right,
      #e0e0e0 0%, #e0e0e0 ${p1}%,
      #0070f3 ${p1}%, #0070f3 ${p2}%,
      #e0e0e0 ${p2}%, #e0e0e0 100%)
  `;
}
[minLengthSlider, maxLengthSlider].forEach(s => {
  s.addEventListener('input', syncLengthSliders);
  s.addEventListener('pointerdown', () => s.style.zIndex = '3');
  s.addEventListener('pointerup',   () => s.style.zIndex = '2');
});
syncLengthSliders();

// — Diameter slider —
const minDiaSlider = document.getElementById('minDiameter');
const maxDiaSlider = document.getElementById('maxDiameter');
const minDiaLabel  = document.getElementById('minDiameterLabel');
const maxDiaLabel  = document.getElementById('maxDiameterLabel');
const diaWrap      = document.getElementById('diameterRangeWrap');

function syncDiameterSliders() {
  let a = +minDiaSlider.value, b = +maxDiaSlider.value;
  if (a > b) [a, b] = [b, a];
  minDiaSlider.value = a; maxDiaSlider.value = b;
  minDiaLabel.textContent = `${a} cm`;
  maxDiaLabel.textContent = `${b} cm`;
  const minD = +minDiaSlider.min, maxD = +minDiaSlider.max;
  const p1 = ((a-minD)/(maxD-minD))*100, p2 = ((b-minD)/(maxD-minD))*100;
  diaWrap.style.background = `
    linear-gradient(to right,
      #e0e0e0 0%, #e0e0e0 ${p1}%,
      #0070f3 ${p1}%, #0070f3 ${p2}%,
      #e0e0e0 ${p2}%, #e0e0e0 100%)
  `;
}
[minDiaSlider, maxDiaSlider].forEach(s => {
  s.addEventListener('input', syncDiameterSliders);
  s.addEventListener('pointerdown', () => s.style.zIndex = '3');
  s.addEventListener('pointerup',   () => s.style.zIndex = '2');
});
syncDiameterSliders();

// — Breadth slider —
const minBSlider = document.getElementById('minBreadth');
const maxBSlider = document.getElementById('maxBreadth');
const minBLabel  = document.getElementById('minBreadthLabel');
const maxBLabel  = document.getElementById('maxBreadthLabel');
const bWrap      = document.getElementById('breadthRangeWrap');

function syncBreadthSliders() {
  let a = +minBSlider.value, b = +maxBSlider.value;
  if (a > b) [a, b] = [b, a];
  minBSlider.value = a; maxBSlider.value = b;
  minBLabel.textContent = `${a} cm`;
  maxBLabel.textContent = `${b} cm`;
  const minB = +minBSlider.min, maxB = +minBSlider.max;
  const p1 = ((a-minB)/(maxB-minB))*100, p2 = ((b-minB)/(maxB-minB))*100;
  bWrap.style.background = `
    linear-gradient(to right,
      #e0e0e0 0%, #e0e0e0 ${p1}%,
      #0070f3 ${p1}%, #0070f3 ${p2}%,
      #e0e0e0 ${p2}%, #e0e0e0 100%)
  `;
}
[minBSlider, maxBSlider].forEach(s => {
  s.addEventListener('input', syncBreadthSliders);
  s.addEventListener('pointerdown', () => s.style.zIndex = '3');
  s.addEventListener('pointerup',   () => s.style.zIndex = '2');
});
syncBreadthSliders();

// — På tilbud toggle —
document.getElementById('onSaleToggle').addEventListener('change', e => {
  console.log('Vis kun tilbudsvarer:', e.target.checked);
});

// — Checkbox-listeners for andre filtre —
document
  .querySelectorAll('#powerSourceFilter input[type="checkbox"], #vibrationSpeedFilter input[type="checkbox"]')
  .forEach(cb => cb.addEventListener('change', () => {
    console.log(cb.id, 'checked:', cb.checked);
  }));

  // Filtrering på Pink
document.addEventListener('DOMContentLoaded', () => {
  const lillaCheckbox = document.getElementById('color-pink');
  const cards = document.querySelectorAll('#productGrid .product-card');

  lillaCheckbox.addEventListener('change', () => {
    if (lillaCheckbox.checked) {
      // Vis kun de kort, der har data-color="pink"
      cards.forEach(card => {
        if (card.dataset.color === 'pink') {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    } else {
      // Checkbox fjernet: vis alle igen
      cards.forEach(card => {
        card.style.display = '';
      });
    }
  });
});

  // Filtrering på Sort
  document.addEventListener('DOMContentLoaded', () => {
    const lillaCheckbox = document.getElementById('color-sort');
    const cards = document.querySelectorAll('#productGrid .product-card');
  
    lillaCheckbox.addEventListener('change', () => {
      if (lillaCheckbox.checked) {
        // Vis kun de kort, der har data-color="sort"
        cards.forEach(card => {
          if (card.dataset.color === 'sort') {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      } else {
        // Checkbox fjernet: vis alle igen
        cards.forEach(card => {
          card.style.display = '';
        });
      }
    });
  });
  
  // Filtrering på Lilla
  document.addEventListener('DOMContentLoaded', () => {
    const lillaCheckbox = document.getElementById('color-lilla');
    const cards = document.querySelectorAll('#productGrid .product-card');
  
    lillaCheckbox.addEventListener('change', () => {
      if (lillaCheckbox.checked) {
        // Vis kun de kort, der har data-color="lilla"
        cards.forEach(card => {
          if (card.dataset.color === 'lilla') {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      } else {
        // Checkbox fjernet: vis alle igen
        cards.forEach(card => {
          card.style.display = '';
        });
      }
    });
  });


  // Filtrering på Guld
  document.addEventListener('DOMContentLoaded', () => {
    const lillaCheckbox = document.getElementById('color-guld');
    const cards = document.querySelectorAll('#productGrid .product-card');
  
    lillaCheckbox.addEventListener('change', () => {
      if (lillaCheckbox.checked) {
        // Vis kun de kort, der har data-color="guld"
        cards.forEach(card => {
          if (card.dataset.color === 'guld') {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      } else {
        // Checkbox fjernet: vis alle igen
        cards.forEach(card => {
          card.style.display = '';
        });
      }
    });
  });