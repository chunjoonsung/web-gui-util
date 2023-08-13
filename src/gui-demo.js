
import * as gui from './gui-util.js';

$(document).ready( function() {
	const $box = gui.newCardBox()
	const $card = gui.newCard()
	const $cardHeader = gui.newCardHeader().text("Lenna")
	const $cardBody = gui.newCardBody().append($('<img src="Lenna.png"></img>'))
	
	$card.append($cardHeader)
	$card.append($cardBody)
	$box.append($card)
	$('#main').append($box)
	
	const $table = gui.drawTable('table',
        {
            head: ['#','First','Last','Handle'],
            rows: [ ['1','Mark','Otto','@mdo'],
                    ['2','Jacob','Thornton','@fat'],
                    ['3','Larry','the Bird','@twitter'] ]
        })
});

