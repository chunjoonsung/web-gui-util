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
</body>
</html>
```

## gui-demo.js

```js
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
});
```

## gui-util.js

```js
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
```





![image](https://github.com/chunjoonsung/web-gui-util/assets/33312464/8c7bf3c4-e5b8-4f35-abd6-288ff9031be7)
