
export function newCardBox() {
    console.log('newCardBox')
	return $('<div class="d-flex m-1"></div>')	
}

export function newCard() {
    return $('<div class="card text-center p-0 m-1"></div>')
}

export function newCardHeader(text) {
	return $('<div class="card-header w-100"></div>')
}

export function newCardBody() {
	return $('<div class="card-body" style="overflow: auto"></div>')
}

export function newCardFooter() {
	return $('<div class="card-footer"></div>')
}

export function newCanvas(id) {
	if (id) {
		return $(`<canvas id="${id}"></canvas>`)
	}
	else {
		return $('<canvas></canvas>')
	}
}

export function newButton(text) {
	return $(`<a href="#" class="btn btn-primary">${text}</a>`)
}
