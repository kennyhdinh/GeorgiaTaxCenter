// CUSTOM GA JavaScript Functionalities //
/* The following code handles how the site renders background images on 
   certain occasions on the homepageas well as altering the navigation bar */

/* $(window).on( "load", function(){
        console.log( "window loaded" );
	RELOADS FOR INSDIE LOGIN
	setTimeout(function(){
		if(window.location.hash && $('#l_n-1-1').length > 0){
			console.log("Exisits");
		}
		if(window.location.hash && $('#d-8.DocFieldButton.FastEvtLinkClick').length == 0){
			console.log(" DOESN NOT Exisits");
		}
		if(window.location.hash && $('ul.Tabset').length > 0){
			refreshKeep();
			console.log("Reload inside was successful!");
		}
	}, 500);
});   */
/*   
$(document).ready(function () {
	setTimeout(function(){	
		 if($('#l_n-1-2').length == 0 && $("#caption_c-7").length > 0 && ('onhashchange' in document) == false){
			$("body").css("background", "#EEE9E9");
			refreshKeep();
			console.log("Numba 26");
		}
	}, 200);

	// RE-ADDS BACKGROUND WHEN THE HOME IS REFRESHED
	// -- Doing this will always have the user who is logged in to refresh properly -- //
	// Seems to be fine for loggin out as well since it removes the hash everytime. //
	if(window.location.hash){
		//refreshKeep();
		console.log("Refreshes for inside logon");
	}else{
		// LOADS BACKGROUND IMAGE FOR DIFFERENT ENVIRONMENTS
		console.log("There is no initial Hash.");
		if(window.location.href.indexOf("GXD") > -1){
			rndBgImage();
			console.log("Adds the Background for GXD");
		}else if(window.location.href.indexOf("TXT") > -1){
			rndBgImage();
		}else if(window.location.href.indexOf("testgtc") > -1){
			rndBgImage();  
		}else if(window.location.href.indexOf("gtc.dor") > -1){
			rndBgImage();    
		}
	}
	console.log("Document Finished Loading.");
});
*/
/*
$(window).on("load", function(){
	if($('#d-8.DocFieldButton.FastEvtLinkClick').length > 0){
		console.log("Login Button Exists");
	}
	if(window.location.hash && $('#d-8.DocFieldButton.FastEvtLinkClick').length > 0){
		console.log("Works");
	}
	if(window.location.hash && $('#l_n-1-1').length > 0){
		console.log("Exisits");
	}
	
});*/
/*
$(window).on("load", function(){	
	if(window.location.href.indexOf("GXD") > -1 && ('onhashchange' in document) == true){
		$("body").css("background", "#EEE9E9");
		console.log("Outside request grey");
		return false;
	}if(window.location.href.indexOf("LogOff") > -1){
		rndBgImage();
		console.log("This handles the event for adding BG when  user logs off");
		return false;
	}
});

// FRIST DOCUMENT READY TO PULL ALL FAST CODE
$(document).ready(function(){
	setTimeout(function(){
		if($("#d-8.DocFieldButton.FastEvtLinkClick").length > 0){
			rndBgImage();
			console.log("Login Button Exists");
			return false;
		}if($("#d-8.DocFieldButton.FastEvtLinkClick").length == 0 && window.location.hash){
			refreshKeep();
			console.log("Code when logged in.");
			return false;
		}
	}, 200);
});

$(window).on( "load", function() {
	setTimeout(function(){
	if($("#d-8.DocFieldButton.FastEvtLinkClick").length == 0){
		console.log("document loaded and found element");
		return false;
	}
	}, 200);
});

// HASHCHANGE EVENT HANDLER 
$(window).on('hashchange', function(){
		if(('onhashchange' in document) == false && $("#caption_c-7").length > 0){
			refreshKeep();
			console.log("This works");
			return false;
		}
		// CHANGES THE THEME WHEN A USER LOGS IN 
		else if($("#caption_c-7").length > 0 && ($("#d-8.DocFieldButton.FastEvtLinkClick").length == 0)){
			$("body").css("background", "#EEE9E9");
			refreshKeep();
			console.log("Added new format to login page.");
			return false;
		}
		// REMOVES THE BACKGROUND OUTSIDE A LOGIN
		else if($('#l_n-1-2').length == 0){
			$("body").css("background", "#EEE9E9");
			console.log("This will keep background grey");
			return false;
		// RE-ADDS BACKGROUND IMAGE WHEN GOING BACK HOME FROM OUTSIDE WEBREQUEST		
		}else{
			rndBgImage();
			console.log("This should re add the background.");
			return false;
		}
});*/

$(window).on("load", function(){
	if(window.location.hash == ''){
		rndBgImage();
		console.log("Backgroung to load when there is no hash.");
	}
});

$(window).on('hashchange', function(){
	if("onhashchange") in document){
		removeBGI();
		console.log("Outside request will remove image.");
		return false;
	}else{return true;}
	
	if($('#d-8.DocFieldButton.FastEvtLinkClick').length > 0){
		rndBgImage();
		console.log("Checks for the Login Div and re-adds background");
		return false;
	}else{return true;}
});

$(window).ready(function(){
	console.log("All elements should be loaded now.");
	
	setTimeout(function(){
		if($("#d-6").length > 0){console.log("Div Found");return true;}else{return false;}
	},200);
});

$(document).ready(function(){
	console.log("Recording the document ready");
	setTimeout(function(){
		if($("#d-6").length > 0){console.log("Div Found");return true;}else{return false;}
	},200);
});

//Function that store image in array and randomly choses images.
function rndBgImage () {
    if((window.location.href.indexOf("GXD") > -1) || (window.location.href.indexOf("TXT") > -1)){
    //GXT Environment Images
    var GXTIMAGES = [
            'https://itstest.dor.ga.gov/Images/gtcimg1.jpg',
            'https://itstest.dor.ga.gov/Images/gtcimg2.jpg',
            'https://itstest.dor.ga.gov/Images/gtcimg3.jpg',
            'https://itstest.dor.ga.gov/Images/gtcimg4.jpg'
            ];
            $('body').css({
                'background' : 'url('+ GXTIMAGES[Math.floor(Math.random() * GXTIMAGES.length)] + ') no-repeat fixed',
                'background-size' : 'cover',
                'background-position' : 'top',
                'background-attachment' : 'fixed'
                });
    }else if(window.location.href.indexOf("testgtc") > -1){
    //GXS Environment Images
            var GXSIMAGES = [
            'https://itstest.dor.ga.gov/Images/gtcimg1.jpg',
            'https://itstest.dor.ga.gov/Images/gtcimg2.jpg',
            'https://itstest.dor.ga.gov/Images/gtcimg3.jpg',
            'https://itstest.dor.ga.gov/Images/gtcimg4.jpg'
            ];
            $('body').css({
                'background' : 'url('+ GXSIMAGES[Math.floor(Math.random() * GXSIMAGES.length)] + ') no-repeat fixed',
                'background-size' : 'cover',
                'background-position' : 'top',
                'background-attachment' : 'fixed'
                });
            
    }else if(window.location.href.indexOf("gtc.dor") > -1){
    //Production Link Images
        var PRODGTCIMAGES = [
        'https://gtc.dor.ga.gov/images/GTCimg1.jpg', //Cherry Blossom Farm Ã¢â‚¬â€œ Margie
        'https://gtc.dor.ga.gov/images/GTCimg2.jpg', //River Ã¢â‚¬â€œ Henry Rutherford III
        'https://gtc.dor.ga.gov/images/GTCimg3.jpg', //Piedmont Park Ã¢â‚¬â€œ Rachel Poe
        'https://gtc.dor.ga.gov/images/GTCimg4.jpg' //Atlanta Botanical Garden Ã¢â‚¬â€œ Katherine Obarowski
        ];
        $('body').css({
                'background' : 'url('+ PRODGTCIMAGES[Math.floor(Math.random() * PRODGTCIMAGES.length)] + ') no-repeat fixed',
                'background-size' : 'cover',
                'background-position' : 'top',
                'background-attachment' : 'fixed'
                });
	}
}

// Function for No Background Image
function removeBGI() {$("body").css("background", "#EEE9E9");}
  
//Adds the new format to the LOGIN page
function refreshKeep() { $('body').addClass('Login'); $('.PageHeaderWrapper').addClass('Login'); $('.PageWrapper').addClass('Login'); $('.NavigationLinks').addClass('Login');}
        
