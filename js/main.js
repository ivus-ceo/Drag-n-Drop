const dragContainers = document.querySelectorAll('.fill-container');
const dropContainers = document.querySelectorAll('.empty-container');

for (const dragContainer of dragContainers) {
	dragContainer.addEventListener('dragstart', () => {
		dragContainer.classList.add('ondrag');
	});

	dragContainer.addEventListener('dragend', () => {
		dragContainer.classList.remove('ondrag');
	});
}

for (const dropContainer of dropContainers) {
	dropContainer.addEventListener('dragover', (e) => {
		e.preventDefault();
		const dragContainer = document.querySelector('.fill-container.ondrag');
		const afterElement = getDragAfterElement(dropContainer, e.clientY);
		if (afterElement === undefined) {
			dropContainer.appendChild(dragContainer);
		} else {
			dropContainer.insertBefore(dragContainer, afterElement);
		}
	});
	dropContainer.addEventListener('dragenter', () => {
		dropContainer.classList.add('ondrop');
	});
	dropContainer.addEventListener('dragleave', () => {
		dropContainer.classList.remove('ondrop');
	});
	dropContainer.addEventListener('drop', (e) => {
		dropContainer.classList.remove('ondrop');
	});
}

function getDragAfterElement(dropContainer, y) {
	const dragContainers = [
		...dropContainer.querySelectorAll('.fill-container:not(.ondrag)')
	];

	return dragContainers.reduce(
		(accumulator, currentElement) => {
			const box = currentElement.getBoundingClientRect();
			const offset = y - box.top - box.height / 2;
			if (offset < 0 && offset > accumulator.offset) {
				return { offset: offset, element: currentElement };
			} else {
				return accumulator;
			}
		},
		{ offset: Number.NEGATIVE_INFINITY }
	).element;
}
