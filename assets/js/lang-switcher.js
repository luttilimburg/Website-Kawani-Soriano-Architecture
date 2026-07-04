/* Persists an explicit language choice made via the language switcher,
   so future visits (and the root-page auto-redirect) respect it. */
(function () {
	function setCookie(name, value, days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/; SameSite=Lax';
	}

	document.addEventListener('DOMContentLoaded', function () {
		var links = document.querySelectorAll('.language-option');
		for (var i = 0; i < links.length; i++) {
			links[i].addEventListener('click', function (e) {
				var href = e.currentTarget.getAttribute('href') || '';
				var lang = 'en';
				if (href.indexOf('index_br') !== -1) lang = 'pt';
				else if (href.indexOf('index_it') !== -1) lang = 'it';
				setCookie('lang_pref', lang, 365);
			});
		}
	});
})();
