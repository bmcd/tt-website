// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var definitions = {"똑똑이":"a clever kid|the name of this dictionary app","는":"particle indicating the topic of the sentence","한국어":"(韓國語) Korean (language)","공부":"(工夫) Study","용":"for","사전":"(辭典) Dictionary|(事前) preliminary, beforehand,in advance","앱":"app","입니다":"(이다) To be","모르는":"unknown","단어":"(單語) Word","를":"particle indicating the object of the sentence","빠르고":"(빠르다) to be quick","편리하게":"handily|conveniently","찾아":"(찾다) to search","주는":"(주다) to do (for someone else)","효과적인":"efficiently, effectively","학습에":"studies","도움":"Help","이":"this,this thing|particle indicating the subject of the sentence","됩니다":"(되다) to become"};

$(document).ready(function () {
	$('.korean span').each(function () {
		var $this = $(this),
			word = $this.text(),
			defs = definitions[word].split("|"),
			defBox = $("<div class='def-box'>").hide();

		$('body').append(defBox);

		defBox.append("<span class='dict-word'>" + word + "</span>");

		for (j = 0; j < defs.length; j++) {
			defBox.append("<span class='dict-def'> " + defs[j] + "</span>");
		}

		$(this).hover(function () {
			var offset = $this.offset();
			defBox.css({ position: "absolute", top: offset.top + 35, left: offset.left }).show();
		}, function () {
			defBox.hide();
		});
	});
});
