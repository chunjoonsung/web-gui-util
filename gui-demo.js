
import * as gui from './gui-util.js';

$(document).ready( function() {

    const $progress2 = new gui.ProgressBar().setWidth(200).setProgress(30).noAnimate()
    const $button2 = new gui.Button('Start', function() {
        let p2value = 0
        const interval2 = setInterval(function() {
            $progress2.setProgress(p2value)
            p2value += 10
            if (p2value > 100) {
                clearInterval(interval2)
            }
        }, 100);
    })

    const $progress = new gui.ProgressBar('#progress')
            .setWidth(200)
            .setProgress(100)

	const $card_box = new gui.CardBox('#card')
	$card_box.addCard({
            header: 'Lenna',
            body: $('<img src="Lenna.png" width=300 height=300></img>'),
            footer: null
        }).addCard({
            header: 'Progress',
            body: $progress2.layout,
            footer: $button2.layout
        }).addCard({
            header: 'Spinner',
            body: new gui.Spinner().layout,
            footer: null
        })

	const $table = gui.drawTable('#table',
        {
            head: ['#','First','Last','Handle'],
            rows: [ ['1','Mark','Otto','@mdo'],
                    ['2','Jacob','Thornton','@fat'],
                    ['3','Larry','the Bird','@twitter'] ]
        })
        
});

