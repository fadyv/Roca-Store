var chatLang = themeDisplay.getLanguageId().split('_')[0];

var lpdOculto = true;
var chatStatus = "offline";

function initChat(status) {
    $zopim.livechat.hideAll(); 
    $zopim.livechat.clearAll(); 
    $("#idlpd").hide(); 
    $('#checkLopd').prop('checked', false); 
    lpdOculto = true;
    chatStatus = status;
    console.log("Init chat status: "+status+" - "+chatStatus);
}

function mostrarCheckLopd() {
    if (lpdOculto) {
        $("#idlpd").show();
        lpdOculto = false;
    } else {
        $("#idlpd").hide(); 
        lpdOculto = true;
    }
}

function aceptarLopd() {
    
	if ($("#checkLopd").prop('checked') == true) {
        
		createCookie("LOPDAceptado", "true");
        
        $('#ventanaChatLOPD').hide();
        
        $zopim.livechat.window.show();
    }
	
}

function validarLopd() {
	 if(chatStatus != "offline"){
	        var lopdAccepted = readCookie("LOPDAceptado") == "true";

     	//console.log("Lopd Accepted: " + lopdAccepted);

         if (lopdAccepted) {
             $('#ventanaChatLOPD').hide();
             if(chatStatus != "offline"){
             	$zopim.livechat.button.show();
             }
         } else {
             $('#ventanaChatLOPD').show();
             $zopim.livechat.hideAll();
         }
     } else {
    	//console.log("Chat is offline, cannot validate LOPD");
     	$zopim.livechat.hideAll();
     }
}

function createCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function showChat() {
    if (readCookie("LOPDAceptado") == "true") {
        $('#ventanaChatLOPD').hide();
        $zopim.livechat.window.show();
    } else {
        $('#ventanaChatLOPD').show();
        $zopim.livechat.hideAll();
    }
}

function hideChat() {
    $('#ventanaChatLOPD').hide();
    $zopim.livechat.hideAll();
}

function onWindowMinimize() {
	if(chatStatus != "offline"){
		$zopim.livechat.button.show();
	}
	//console.log("Window minimized");
}


var chatMethods = {
		
		onStatus: function(status) {
			chatStatus = status;
			console.log("Current chat status is: " +status+ " - "+ chatStatus);
			if(chatStatus == "online" || chatStatus == "away") {
				validarLopd();
			}
		},
		
		onConnected: function() {

			//console.log("Chat has connected to the server: "+chatStatus);
			
		},
		
		 chatNeedsToBeShown: function() {
			var mostrarChat = false;
				
			var showProducts = Liferay.ThemeDisplay.getLayoutURL().indexOf('/productos') > -1;
			var showCollections = Liferay.ThemeDisplay.getLayoutURL().indexOf('/colecciones') > -1;
			
			if (showProducts || showCollections) {mostrarChat = true;}
			
			//if(!showChat) showChat = Liferay.ThemeDisplay.getLayoutURL().indexOf('/products') > -1
			
			return mostrarChat;
		}
};

window.addEventListener("load", function() {
	
	var mostrarChat = chatMethods.chatNeedsToBeShown();
	
	if(mostrarChat) {
		
		window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=d.createElement(s),e=d.getElementsByTagName(s)[ 0];z.set=function(o){z.set._.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf- 8');$.src='https://v2.zopim.com/?5FAaGoW1Tn2qPbKdovkDr4yBpZomN6da';z.t=+new Date;$.type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');var chatLanguage=chatLang;
		
		try {		
			if(!!$zopim.livechat) {
				console.log("Chat has not started yet");
			}
			
			$zopim(function () {
	
				$zopim.livechat.setOnChatEnd(initChat);
				$zopim.livechat.setLanguage(chatLang);
		        $zopim.livechat.setOnStatus(chatMethods.onStatus);
		        $zopim.livechat.setOnConnected(chatMethods.onConnected);
		        $zopim.livechat.button.setHideWhenOffline(true);
		        $zopim.livechat.window.onHide(onWindowMinimize);
		        console.log("chat started");
		        validarLopd();
		    });
					
		} catch(err) {
			
			console.log("Chat couldn't be activated:" + err);
			
		}
	}
});