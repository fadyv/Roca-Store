









AUI.add(
	'portal-available-languages',
	function(A) {
		var available = {};

		var direction = {};

		

			available['es_ES'] = 'Spanish (Spain)';
			direction['es_ES'] = 'ltr';

		

			available['ca_ES'] = 'Catalan (Spain)';
			direction['ca_ES'] = 'ltr';

		

			available['gl_ES'] = 'Galician (Spain)';
			direction['gl_ES'] = 'ltr';

		

			available['eu_ES'] = 'Basque (Spain)';
			direction['eu_ES'] = 'ltr';

		

			available['en_GB'] = 'English (United Kingdom)';
			direction['en_GB'] = 'ltr';

		

			available['es_MX'] = 'Spanish (Mexico)';
			direction['es_MX'] = 'ltr';

		

			available['ar_EG'] = 'Arabic (Egypt)';
			direction['ar_EG'] = 'rtl';

		

			available['ru_RU'] = 'Russian (Russia)';
			direction['ru_RU'] = 'ltr';

		

			available['en_US'] = 'English (United States)';
			direction['en_US'] = 'ltr';

		

			available['de_DE'] = 'German (Germany)';
			direction['de_DE'] = 'ltr';

		

			available['cs_CZ'] = 'Czech (Czechia)';
			direction['cs_CZ'] = 'ltr';

		

			available['fr_FR'] = 'French (France)';
			direction['fr_FR'] = 'ltr';

		

			available['it_IT'] = 'Italian (Italy)';
			direction['it_IT'] = 'ltr';

		

			available['pl_PL'] = 'Polish (Poland)';
			direction['pl_PL'] = 'ltr';

		

			available['zh_CN'] = 'Chinese (China)';
			direction['zh_CN'] = 'ltr';

		

			available['bg_BG'] = 'Bulgarian (Bulgaria)';
			direction['bg_BG'] = 'ltr';

		

			available['es_AR'] = 'Spanish (Argentina)';
			direction['es_AR'] = 'ltr';

		

			available['pt_BR'] = 'Portuguese (Brazil)';
			direction['pt_BR'] = 'ltr';

		

			available['pt_PT'] = 'Portuguese (Portugal)';
			direction['pt_PT'] = 'ltr';

		

			available['ro_RO'] = 'Romanian (Romania)';
			direction['ro_RO'] = 'ltr';

		

			available['hr_HR'] = 'Croatian (Croatia)';
			direction['hr_HR'] = 'ltr';

		

			available['da_DK'] = 'Danish (Denmark)';
			direction['da_DK'] = 'ltr';

		

			available['sk_SK'] = 'Slovak (Slovakia)';
			direction['sk_SK'] = 'ltr';

		

			available['fi_FI'] = 'Finnish (Finland)';
			direction['fi_FI'] = 'ltr';

		

			available['hu_HU'] = 'Hungarian (Hungary)';
			direction['hu_HU'] = 'ltr';

		

			available['lt_LT'] = 'Lithuanian (Lithuania)';
			direction['lt_LT'] = 'ltr';

		

			available['nl_NL'] = 'Dutch (Netherlands)';
			direction['nl_NL'] = 'ltr';

		

			available['no_NO'] = 'Norwegian (Norway)';
			direction['no_NO'] = 'ltr';

		

			available['sv_SE'] = 'Swedish (Sweden)';
			direction['sv_SE'] = 'ltr';

		

			available['tr_TR'] = 'Turkish (Turkey)';
			direction['tr_TR'] = 'ltr';

		

			available['uk_UA'] = 'Ukrainian (Ukraine)';
			direction['uk_UA'] = 'ltr';

		

			available['fr_CH'] = 'French (Switzerland)';
			direction['fr_CH'] = 'ltr';

		

			available['de_CH'] = 'German (Switzerland)';
			direction['de_CH'] = 'ltr';

		

			available['it_CH'] = 'Italian (Switzerland)';
			direction['it_CH'] = 'ltr';

		

			available['zh_HK'] = 'Chinese (Hong Kong SAR China)';
			direction['zh_HK'] = 'ltr';

		

			available['el_GR'] = 'Greek (Greece)';
			direction['el_GR'] = 'ltr';

		

			available['en_AU'] = 'English (Australia)';
			direction['en_AU'] = 'ltr';

		

			available['th_TH'] = 'Thai (Thailand)';
			direction['th_TH'] = 'ltr';

		

			available['ko_KR'] = 'Korean (South Korea)';
			direction['ko_KR'] = 'ltr';

		

			available['zh_TW'] = 'Chinese (Taiwan)';
			direction['zh_TW'] = 'ltr';

		

		Liferay.Language.available = available;
		Liferay.Language.direction = direction;
	},
	'',
	{
		requires: ['liferay-language']
	}
);