const wrapper = document.querySelector('.wrapper');

const sketchGrid = document.createElement('div');
sketchGrid.classList.add('sketch-grid');
wrapper.appendChild(sketchGrid);

function createCells(rows, columns) {
	for (let i = 1; i <= rows; i++) {
		const gridRow = document.createElement('div');
		gridRow.classList.add('grid-row');

		for (let j = 1; j <= columns; j++) {
			const cell = document.createElement('div');
			cell.classList.add('grid-cell');
			gridRow.appendChild(cell);
		}
		sketchGrid.appendChild(gridRow);
	}
}

sketchGrid.addEventListener('mouseover', (event) => {
	if (event.target !== event.currentTarget) {
		const gridCell = event.target;
		gridCell.setAttribute('style', 'background-color: #af5daa;');
	}
});

createCells(16, 16);
