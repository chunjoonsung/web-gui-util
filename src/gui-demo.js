
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

