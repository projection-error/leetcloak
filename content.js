const dif_class = [
  '[class="bg-olive dark\\:bg-dark-olive text-olive dark\\:text-dark-olive inline-block rounded-\\[21px\\] bg-opacity-\\[\\.15\\] px-2\\.5 py-1 text-xs font-medium capitalize dark\\:bg-opacity-\\[\\.15\\]"]',
  '[class="bg-yellow dark\\:bg-dark-yellow text-yellow dark\\:text-dark-yellow inline-block rounded-\\[21px\\] bg-opacity-\\[\\.15\\] px-2\\.5 py-1 text-xs font-medium capitalize dark\\:bg-opacity-\\[\\.15\\]"]',
  '[class="bg-pink dark\\:bg-dark-pink text-pink dark\\:text-dark-pink inline-block rounded-\\[21px\\] bg-opacity-\\[\\.15\\] px-2\\.5 py-1 text-xs font-medium capitalize dark\\:bg-opacity-\\[\\.15\\]"]'
];

const targ_class = 'dontpanic dark:bg-dark-olive text-white dark:text-dark-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize dark:bg-opacity-[.15]';

function replaceTargetDiv(targetDiv) {
  const newDiv = document.createElement('div');
  newDiv.className = targ_class;
  newDiv.textContent = "U Got This "+"\uD83D\uDC4D";
  targetDiv.parentNode.replaceChild(newDiv, targetDiv);
}

// Delayed execution using setTimeout
setTimeout(function() {
  const targetDivs = document.querySelectorAll(dif_class.join(', '));
  if (targetDivs.length > 0) {
    // Replace each target div
    targetDivs.forEach(targetDiv => {
      replaceTargetDiv(targetDiv);
    });
  } else {
    console.log('Target divs not found.');
  }
}, 300); // Adjust the delay as needed (in milliseconds)
