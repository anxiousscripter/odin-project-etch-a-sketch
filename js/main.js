const wrapper = document.querySelector('.wrapper');
const btnGridSize = document.querySelector('.btn-set-grid');
const btnReset = document.querySelector('.btn-reset');

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

function clearSketchPad() {}

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
			createCells(userInput, userInput);
		}
	} while (loopState);
});

btnReset.addEventListener('click', () => {});
