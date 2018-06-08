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