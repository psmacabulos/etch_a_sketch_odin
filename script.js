const container = document.querySelector('.container');

let gridNumber = 16 * 16;

/**
 * Create the 16 x 16 grid. By appending div to the
 * container element.
 */
for (let i = 0; i < gridNumber; i++) {
  let div = document.createElement('div');
  div.classList.add('grid');
  // Add hover effect to each div
  div.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'green';
  });
  container.appendChild(div);
}
