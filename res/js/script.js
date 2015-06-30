var script = (function (win) {
	"use strict";

	function setCanvasSize() {
		var canvas = document.getElementById('largeCanvas'),
			columnWidth = document.getElementById('display').clientWidth;
		// set canvas size to original images size
		canvas.width = 540;
		canvas.height = 360;
		if (columnWidth > canvas.width) {
			console.log('WARN: image will be pixelated, because the resolution of the image is to small for your viewport');
		}
		// stretch canvas to fit the space
		canvas.style.width = columnWidth + 'px';
		canvas.style.height = columnWidth * (360 / 540) + 'px';


	};
	var sectionHead = false,
		sectionEnd = '</section>',
		articleHead = false,
		articleEnd = '</div></article>',
		content, page = '',
		spreadsheetID = '1U7imA8NCahaqeIT3jlz-3J-mTuRZyrYs1rUlTZsnO_M',
		spreadsheetURL = 'https://spreadsheets.google.com/feeds/list/' + spreadsheetID + '/od6/public/values?alt=json-in-script&callback=?',
		imagesFolderID = '0B91vQ2ujyzQMfjJjNDRGb0tzeEJ3V0pHUnZXcTl4TldOU3hLekM5Yjd2dXlzdU5jQjRkZUE',
		imagesFolderURL = 'https://googledrive.com/host/' + imagesFolderID + '/';

	function list(contentOfCell, contenttype) {
		var elements = contentOfCell.split('; ');
		var li = '';
		elements.forEach(function (entry) {
			li += '<li>' + entry + '</li>';
			return li;
		});
		content = '<ul class=' + contenttype + '>' + li + '</ul>';
		return content;
	}

	function getContentFromSpreadsheet() {
		$.getJSON(spreadsheetURL, function (data) {
				$.each(data.feed.entry, function (i, entry) {
					if (entry.gsx$sectionheadline.$t) {
						if (sectionHead != false) {
							page += sectionEnd;
							page += '<br>';
						}
						sectionHead = '<section data-linear="1"><h1>' + entry.gsx$sectionheadline.$t + '</h1>';
						page += sectionHead;
					}
					if (entry.gsx$articleheadline.$t) {
						if (articleHead != false) {
							page += articleEnd;
						}
						articleHead = '<article><div><h2>' + entry.gsx$articleheadline.$t + '</h2>';
						page += articleHead;
					}
					if (entry.gsx$content.$t) {
						var contentOfCell = entry.gsx$content.$t,
							contenttype = entry.gsx$contenttype.$t;
						if (contenttype === 'positive_ul') {
							content = list(contentOfCell, contenttype);
						}
						if (contenttype === 'negative_ul') {
							content = list(contentOfCell, contenttype);
						}
						if (contenttype === 'simple_list') {
							content = list(contentOfCell, contenttype);
						}
						if (contenttype === 'basic_image') {
							content = '<img src="res/images/loader.gif" data-src="' + contentOfCell + '" alt="' + contentOfCell.substring(0, contentOfCell.length - 4) + '" class="img-responsive" />';
						}
						if (contenttype === 'drive_image') {
							content = '<img src="res/images/loader.gif" data-src="'
							imagesFolderURL + contentOfCell + '" alt="" class="img-responsive" />';
						}
						if (contenttype === 'question') {
							content = '</div>' + contentOfCell;
						}
						if (contenttype === 'subheadline') {
							content = '<h3>' + contentOfCell + '</h3>';
						}
						if (contenttype === '') {
							content = '<p>' + contentOfCell + '</p>';
						}
						page += content;
					}
				});
				$('#content').append(page);
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				$("#content").append("<section><h1>WBT Fotografie</h1><article><h2>Keine Internetverbindung</h2><div class='alert alert-danger' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span></span> Um das WBT nutzen zu können, müssen Sie mit dem Internet verbunden sein.</div></article></section>");
				$(".mainNavigation").hide();
				// Additional alert - uncomment if needed
				//alert('Um das WBT nutzen zu können, müssen Sie mit dem Internet verbunden sein.');
			});
	};
	return {
		script: script,
		setCanvasSize: setCanvasSize,
		getContentFromSpreadsheet: getContentFromSpreadsheet

	}
}(window));
