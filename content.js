const dif_class = [
  'text-olive',
  'text-yellow',
  'text-pink'
];

const targ_class = 'dontpanic dark:bg-dark-olive text-white dark:text-dark-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize dark:bg-opacity-[.15]';

function replaceTargetDiv(targetDiv) {
  const newDiv = document.createElement('div');
  newDiv.className = targ_class;
  newDiv.textContent = "U Got This " + "\uD83D\uDC4D";
  targetDiv.parentNode.replaceChild(newDiv, targetDiv);
}

setTimeout(function() {
  dif_class.forEach(classname => {
    const targetDivs = Array.from(document.getElementsByClassName(classname));
    if (targetDivs.length > 0) {
      targetDivs.forEach(targetDiv => {
        replaceTargetDiv(targetDiv);
      });
    } else {
      console.log('Target divs not found for class:', classname);
    }
  });
}, 300); 
