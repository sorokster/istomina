jQuery(document).ready(function($){

	$('.slider--action .owl-carousel').owlCarousel({
		items: 1,
		dots: true,
		nav: false,
		center: true,
		loop: true,
		stagePadding: 0,
		smartSpeed: 450,
		mouseDrag: true
	});
	$('.before-after .owl-carousel').owlCarousel({
		items: 1,
		dots: true,
		nav: false,
		center: true,
		loop: true,
		stagePadding: 0,
		smartSpeed: 450,
		mouseDrag: true
	});
	$('.testimonials .owl-carousel').owlCarousel({
		items: 1,
		dotsContainer: '.owl-navigation',
		navContianer: '.owl-navigation',
		center: true,
		autoHeight:true,
		loop: true,
		stagePadding: 0,
		smartSpeed: 450,
		mouseDrag: true
	});

	$('video').on('click', function() {
		this.paused ? this.play() : this.pause();
		$(this).parent().toggleClass('play');
	});
	

	var data = [
		{"category":"1", "length": "1", "price": "150"},
		{"category":"1", "length": "2", "price": "150"},
		{"category":"1", "length": "3", "price": "150"},
		{"category":"1", "length": "4", "price": "150"},
		{"category":"1", "length": "5", "price": "150"},

		{"category":"2", "length": "1", "price": "400"},
		{"category":"2", "length": "2", "price": "550"},
		{"category":"2", "length": "3", "price": "650"},
		{"category":"2", "length": "4", "price": "750"},
		{"category":"2", "length": "5", "price": "850"},

		{"category":"3", "length": "1", "price": "300"},
		{"category":"3", "length": "2", "price": "400"},
		{"category":"3", "length": "3", "price": "500"},
		{"category":"3", "length": "4", "price": "600"},

		{"category":"4", "length": "1", "price": "200"},
		{"category":"4", "length": "2", "price": "300"},
		{"category":"4", "length": "3", "price": "400"},
		{"category":"4", "length": "4", "price": "500"},

		{"category":"5", "length": "1", "price": "200-300"},
		{"category":"5", "length": "2", "price": "200-300"},
		{"category":"5", "length": "3", "price": "200-300"},
		{"category":"5", "length": "4", "price": "200-300"},
		{"category":"5", "length": "5", "price": "200-300"},
		
		{"category":"6", "length": "1", "price": "1000-2000"},
		{"category":"6", "length": "2", "price": "1000-2000"},
		{"category":"6", "length": "3", "price": "1000-2000"},
		{"category":"6", "length": "4", "price": "1000-2000"},

		{"category":"7", "length": "1", "price": "500"},
		{"category":"7", "length": "2", "price": "1000"},
		{"category":"7", "length": "3", "price": "1500"},
		{"category":"7", "length": "4", "price": "2000"},
		{"category":"7", "length": "5", "price": "3000"},

		{"category":"8", "length": "1", "price": "600"},
		{"category":"8", "length": "2", "price": "800"},
		{"category":"8", "length": "3", "price": "1000"},
		{"category":"8", "length": "4", "price": "1200"},

		{"category":"9", "length": "1", "price": "500"},
		{"category":"9", "length": "2", "price": "600"},
		{"category":"9", "length": "3", "price": "700"},
		{"category":"9", "length": "4", "price": "800"},
		
		{"category":"10", "length": "1", "price": "1600-3000"},
		{"category":"10", "length": "2", "price": "1600-3000"},
		{"category":"10", "length": "3", "price": "1600-3000"},
		{"category":"10", "length": "4", "price": "1600-3000"},
		{"category":"10", "length": "5", "price": "1600-3000"},

		{"category":"11", "length": "1", "price": "1600-3000"},
		{"category":"11", "length": "2", "price": "1600-3000"},
		{"category":"11", "length": "3", "price": "1600-3000"},
		{"category":"11", "length": "4", "price": "1600-3000"},
		{"category":"11", "length": "5", "price": "1600-3000"},

		{"category":"12", "length": "1", "price": "1600-3000"},
		{"category":"12", "length": "2", "price": "1600-3000"},
		{"category":"12", "length": "3", "price": "1600-3000"},
		{"category":"12", "length": "4", "price": "1600-3000"},
		{"category":"12", "length": "5", "price": "1600-3000"},

		{"category":"13", "length": "1", "price": "500"},
		{"category":"13", "length": "2", "price": "600"},
		{"category":"13", "length": "3", "price": "700"},
		{"category":"13", "length": "4", "price": "800"},
		
		{"category":"14", "length": "1", "price": "1600-3000"},
		{"category":"14", "length": "2", "price": "1600-3000"},
		{"category":"14", "length": "3", "price": "1600-3000"},
		{"category":"14", "length": "4", "price": "1600-3000"},
		{"category":"14", "length": "5", "price": "1600-3000"},

		{"category":"15", "length": "1", "price": "1600-3000"},
		{"category":"15", "length": "2", "price": "1600-3000"},
		{"category":"15", "length": "3", "price": "1600-3000"},
		{"category":"15", "length": "4", "price": "1600-3000"},
		{"category":"15", "length": "5", "price": "1600-3000"},
	];

	var titles = [
		{"category": "1", "title": "Моделирование и окрашивание бровей"},
		{"category": "2", "title": "Стрижка"},
		{"category": "3", "title": "Укладка"},
		{"category": "4", "title": "Укладка Люкс"},
		{"category": "5", "title": "Мужская стрижка"},
		{"category": "6", "title": "Прически с плетением"},
		{"category": "7", "title": "Окрашивание в 1 цвет"},
		{"category": "8", "title": "Уход Восстановление"},
		{"category": "9", "title": "Реконструкция волос"},
		{"category": "10", "title": "Омбре"},
		{"category": "11", "title": "Брондирование"},
		{"category": "12", "title": "Шатуш"},
		{"category": "13", "title": "Ламинирование"},
		{"category": "14", "title": "Тонирование"},
		{"category": "15", "title": "Балаяж"},
	]
	for (var i = 0; i < titles.length; i++) {
		$('#p-service').append('<option value="'+titles[i]['category']+'">'+titles[i]['title']+'</option>');
		$('#form-services').append('<option value="'+titles[i]['category']+'">'+titles[i]['title']+'</option>');
	}
	$('#p-service').on('change', function(){
		$('#p-length').html('');
		var value_service = $('#p-service').val();

		$('#p-length').append('<option value="">Выберите длину</option>');
		for (var i = 0; i < data.length; i++) {
			if (data[i]['category'] == value_service){
				length = data[i]['length'];
				$('#p-length').append('<option value="'+length+'">'+length+' длина</option>');
			}
		}
		var value_length = $('#p-length').val();
		for (var i = 0; i < data.length; i++) {
			if (data[i]['category'] == value_service && data[i]['length'] == value_length){
				price = data[i]['price'];
				$('#p-price').html(price);
			} else {
				$('#p-price').html('');
			}
		}
	});

	$('#p-length').on('change', function(){
		var value_service = $('#p-service').val();
		var value_length = $('#p-length').val();
		
		for (var i = 0; i < data.length; i++) {
			if (data[i]['category'] == value_service && data[i]['length'] == value_length){
				price = data[i]['price'];
				$('#p-price').html(price+' грн');
			}
		}
	});
	
	$( "#datepicker" ).datepicker();

	$('.button_contact').on('click', function(){
		$("html, body").animate({ scrollTop: $('#contatus').offset().top }, 1000);
	});
	
});