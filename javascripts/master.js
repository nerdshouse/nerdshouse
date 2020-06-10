// Master js


$(function() {
  paneUp();
	$(window).resize(function() {
		paneUp();
	});
});

function paneUp() {
	var winheight = $(window).height();
  $("#pane_one").height(winheight-10);
}