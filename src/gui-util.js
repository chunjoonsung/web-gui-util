
/**
 * Table
 * { head: [], rows: [ [], [], ... ] }
 */
export function drawTable(id,data) {
    const $thtr = $('<tr></tr>')
    const $tbody = $('<tbody></tbody>')
    const $table = $('<table class="table table-striped table-bordered">')
        .append($('<thead>"></thead>').append($thtr))
        .append($tbody)
    for (const col of data.head) {
        const $th = $('<th class="header text-white bg-black"></th>').append(col)
        $thtr.append($th)
    }
    for (const row of data.rows) {
        const $tr = $('<tr></tr>')
        $tbody.append($tr)
        for (const col of row) {
            $tr.append($('<td></td>').append(col))
        }
    }
    $(`#${id}`).append($table)
    return $table
}


/**
 * Card 
 */
export function newCardBox() {
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

/**
 * Etc
 */
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
