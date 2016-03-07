$(document).on("ready",function(){
	var languages = [];
	languages.push({key:'cs', url: 'http://freshdesk.cs',value:'Czech'});
	languages.push({key:'nl', url: 'http://freshdesk.nl',value:'Dutch'});
	languages.push({key:'da', url: 'http://freshdesk.da',value:'Danish'});
	languages.push({key:'de-DE', url: 'http://freshdesk.de',value:'Deutsch'});
	languages.push({key:'en-US', url: 'http://freshdesk.com',value:'English'}); 
	languages.push({key:'es', url: 'http://freshdesk.es',value:'Español'});
	languages.push({key:'fr', url: 'http://freshdesk.fr',value:'Français'});
	languages.push({key:'fi', url: 'http://freshdesk.fi',value:'Finnish'});
	languages.push({key:'it', url: 'http://freshdesk.it',value:'Italiano'});
	languages.push({key:'no', url: 'http://freshdesk.no',value:'Norwegian'});
	languages.push({key:'pt-BR', url: 'http://freshdesk.com.br',value:'Portuguese'});
	languages.push({key:'pl', url: 'http://freshdesk.com.pl',value:'Polski'});
	languages.push({key:'tr', url: 'http://freshdesk.tr',value:'Turkish'});
	languages.push({key:'hk', url: 'http://freshdesk.hk',value:'中文'});
	languages.push({key:'kr', url: 'http://freshdesk.kr',value:'한국어'});
	languages.push({key:'cn', url: 'http://freshdesk.cn',value:'中文简体‍'});
	languages.push({key:'se', url: 'http://se.freshdesk.com',value:'Svenska'});
	languages.push({key:'ru', url: 'http://freshdesk.ru',value:'Pусский'});
	languages.push({key:'jp', url: 'http://freshdesk.jp',value:'日本語'});
	var current_language = $('html').attr('lang');
	for (var i=0; i<languages.length;i++)
	{
		if(languages[i].key == current_language) {
			var main_lang = '<a href="'+languages[i].url+'" class="nav-link">'+languages[i].value+'</a>';
			$("#lang-switch").append(main_lang);
		}
		else {
			var child_lang = '<li><a href="'+languages[i].url+'">'+languages[i].value+'</a></li>';
			$("#lang-select").append(child_lang);
		}
	}
});