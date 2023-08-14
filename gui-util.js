
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
    $(id).append($table)
    return $table
}

export class CardBox {
    constructor(id) {
        this.box = $('<div class="d-flex m-1"></div>')
        $(id).append(this.box)
    }
    addCard(data) {
        const card = $('<div class="card text-center p-0 m-1"></div>')
        if (data.header) {
            card.append($('<div class="card-header w-100"></div>').append(data.header))
        }
        if (data.body) {
            card.append($('<div class="card-body" style="overflow: auto"></div>').append(data.body))
        }
        if (data.footer) {
            card.append($('<div class="card-footer"></div>').append(data.footer))
        }
        this.box.append(card)
        return this
    }
}

export class ProgressBar {
    constructor(id) {
        this.$in = $('<div class="progress-bar" style="width: 0%"></div>')
        this.$out = $('<div class="progress m-4" role="progressbar"></div>').append(this.$in)
        $(id).append(this.$out)
    }
   setWidth(width) {
        this.$out.css({width: `${width}`})
        return this    
    }
    setProgress(percent) {
        this.$in.css({width: `${percent}%`})
        return this
    }
}

