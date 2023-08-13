# web-gui-util

## index.html

```html
<html>
<head>
   <meta charset- "UTF-8" />
   <title>gui-util</title>
   <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
   <script src="js/bootstrap.js"></script>
   <script src="js/jquery.js"></script>
   <script src="js/chart.js"></script>
   <script src="gui-demo.js" type="module"></script>
</head>
<body>
    <div id="main"></div>
    <div id="table" class="m-4"></div>
</body>
</html>
```

## gui-demo.js

```js
import * as gui from './gui-util.js';

$(document).ready( function() {

	const $card_box = new gui.CardBox('main')
	$card_box.addCard({
            header: 'Lenna',
            body: $('<img src="Lenna.png"></img>'),
            footer: null
        })

	const $table = gui.drawTable('table',
        {
            head: ['#','First','Last','Handle'],
            rows: [ ['1','Mark','Otto','@mdo'],
                    ['2','Jacob','Thornton','@fat'],
                    ['3','Larry','the Bird','@twitter'] ]
        })
});
```

## gui-util.js

```js
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

export class CardBox {
    constructor(id) {
        this.box = $('<div class="d-flex m-1"></div>')
        $(`#${id}`).append(this.box)
    }
    addCard(data) {
        const card = $('<div class="card text-center p-0 m-1"></div>')
        if (data.footer) {
            card.append($('<div class="card-header w-100"></div>').append(data.header))
        }
        if (data.body) {
            card.append($('<div class="card-body" style="overflow: auto"></div>').append(data.body))
        }
        if (data.footer) {
            card.append($('<div class="card-footer"></div>').append(data.footer))
        }
        this.box.append(card)
    }
}
```

![image](https://github.com/chunjoonsung/web-gui-util/assets/33312464/7566e53f-bd2f-4acb-86e6-0d8e800b964c)

