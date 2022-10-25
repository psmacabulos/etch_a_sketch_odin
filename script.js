const container = document.querySelector('.container');

/**
 *
 * @param {*} flexVar
 * @param {*} gridNumber
 *
 * Create a Function to create a default 16 x 16 grid.
 */

const createGrid = (flexVar = 6.25, gridNumber = 16 * 16) => {
  container.innerHTML = '';
  for (let i = 0; i < gridNumber; i++) {
    let div = document.createElement('div');
    div.classList.add('grid');
    div.style = `flex: 1 1 ${flexVar}%;`;
    // Add hover effect to each div
    div.addEventListener('mouseover', function () {
      this.style.backgroundColor = '#B1AFFF';
    });
    container.appendChild(div);
  }
};

createGrid();

/**
 * Add listener to button changing the resolution of the grid.
 */
const resolution = document.querySelector('button');

resolution.addEventListener('click', () => {
  let width = +prompt('What resolution do you want? Choose from 1 - 100');
  if (width === undefined || width === null || width === 0 || width > 100) {
    createGrid();
  } else {
    let gridNumber = width ** 2;
    let flexVar = (1 / width) * 100;
    createGrid(flexVar, gridNumber);
  }
});
