const wrapper = document.querySelector('.wrapper');
const btnGridSize = document.querySelector('.btn-set-grid');
const btnClearGrid = document.querySelector('.btn-clear-grid');

const sketchGrid = document.createElement('div');
sketchGrid.classList.add('sketch-grid');
wrapper.appendChild(sketchGrid);

function createCells(rows = 16, columns = 16) {
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

function clearGrid() {}

sketchGrid.addEventListener('mouseover', (event) => {
	if (event.target !== event.currentTarget) {
		const gridCell = event.target;
		gridCell.setAttribute('style', 'background-color: #af5daa;');
	}
});

btnGridSize.addEventListener('click', () => {
	let loopState = true;
	do {
		const userInput = Number(
			prompt('What grid size do you want? Pick a number from 1 to 100.'),
		);

		if (isNaN(userInput)) {
			alert("That won't work. The grid size needs to be a number.");
		} else if (userInput <= 0 || userInput > 100) {
			alert(
				"That won't work. The grid size has to be a number from 1 to 100.",
			);
		} else {
			loopState = false;
			while (sketchGrid.firstChild) {
				sketchGrid.removeChild(sketchGrid.firstChild);
			}
			createCells(userInput, userInput);
		}
	} while (loopState);
});

btnClearGrid.addEventListener('click', clearGrid);

createCells();
