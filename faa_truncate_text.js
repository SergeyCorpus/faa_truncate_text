// Это скрипт написаный на jQuery для создания текстовых блоков, которые сокращаются до указаного количества символов и раскрываются при нажатии на "Читать далее".
// Для того, чтобы применить скрипт к нужному текстовому блоку необходимо:
// 0. Подключить библиотеку jQuery;
// 1. Присвоить целевой секции или блоку class faa_truncate_text;
// 2. Прописать этому блоку или секции атрибут data-length="", в котором указать количество символов до которого должен быть сокращен текст.
// 3. Прописать этому блоку или секции атрибут data-read_all="", в котором указать текст при нажатии на который будет разворачиваться весь текст.

// Пример записи:

// <div class="text faa_truncate_text" data-length="500" data-read_all="Читать далее">
// текст
// </div>

jQuery(document).ready(function () {

	console.log('faa_truncate_text - скрипт обрезающий текст');
	var block = $('.faa_truncate_text');

	block.each(function(i, el) {
		var curentBlock = $(el);
		truncateText(curentBlock);
		
	});

	function truncateText($el) {
		var block = $el;
		var text = block.text();
		var html = block.html();
		var lengthText = block.data('length');
		var readAll = block.data('read_all');

		block.data('text', html);

		var shortText = "";

		for(var i = 0; i < lengthText; i++) {
			shortText = shortText + text[i];
		}

		shortText = shortText + ' ...'

		block.text(shortText);

		if(block.find('.faa_truncate_text__read_all').length == 0) {
			block.append('<p class = "faa_truncate_text__read_all">' + readAll + '</p>');
		}

	}
	

	$('body').on('click', '.faa_truncate_text__read_all', function() {
		console.log('click to .faa_truncate_text__read_all');
		var block = $(this).closest('.faa_truncate_text');
		block.html(block.data('text'));
		if(block.find('.faa_truncate_text__hidden').length == 0) {
			block.append('<p class = "faa_truncate_text__hidden">Скрыть</p>');
		}
	});

	$('body').on('click', '.faa_truncate_text__hidden', function() {
		console.log('click to .faa_truncate_text__hidden');
		var block = $(this).closest('.faa_truncate_text');
		truncateText(block);
	});

})