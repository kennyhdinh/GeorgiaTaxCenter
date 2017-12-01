// CUSTOM GA JavaScript Functionalities //
/* The following code handles how the site renders background images on 
   certain occasions on the homepageas well as altering the navigation bar */

$(window).on( "load", function(){
        console.log( "window loaded" );
	/* RELOADS FOR INSDIE LOGIN
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
	}, 500);*/
});   
   
$(document).ready(function () {
	setTimeout(function(){	
		if(('onhashchange' in document) == false && $('#l_n-1-1').length == 0){
			refreshKeep();
			console.log("Numba 26");
		}
	}, 500);

	// RE-ADDS BACKGROUND WHEN THE HOME IS REFRESHED
	if(window.location.hash){
		refreshKeep();
		console.log("Will this ever execute?");
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

// HASHCHANGE EVENT HANDLER 
$(window).on('hashchange', function(){
		// CHANGES THE THEME WHEN A USER LOGS IN 
		if($("#caption_c-7").length > 0){
			$("body").css("background", "#EEE9E9");
			refreshKeep();
			return false;
			console.log("Added new format to login page.");
		}
		// REMOVES THE BACKGROUND OUTSIDE A LOGIN
		if($('#l_n-1-2').length == 0){
			$("body").css("background", "#EEE9E9");
			return false;
			console.log("This will keep background grey");
		// RE-ADDS BACKGROUND IMAGE WHEN GOING BACK HOME FROM OUTSIDE WEBREQUEST	
		}else{
			rndBgImage();
			return false;
			console.log("This should re add the background.");
		}
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
        
//Adds the new format to the LOGIN page
function refreshKeep() {
	$('body').addClass('Login');
	$('.PageHeaderWrapper').addClass('Login');
	$('.PageWrapper').addClass('Login');
	$('.NavigationLinks').addClass('Login');
}
        
