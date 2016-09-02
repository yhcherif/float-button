import '../style.css'
import $ from 'jQuery'
let float = $('.action-button')
let toggle = $(float.data('toggle'))
float.on('click', (evt) => {
	float.addClass('active')
	toggle.addClass('modal-active')
})