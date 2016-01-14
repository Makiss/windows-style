$(function () {
	$(".btn").click(function (event) {
		event.preventDefault();
		$(".main-nav-item").removeClass("clicked");
		$(this).closest(".main-nav-item").addClass("clicked");
	});
});