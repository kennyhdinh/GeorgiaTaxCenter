//CUSTOM GA JavaScript Functionalities//
/*The following code handles how the site renders background images on certain occasions on the homepage
   as well as altering the navigation bar */

$(document).ready(function () {	
	// LOADS BACKGROUND IMAGE FOR DIFFERENT ENVIRONMENTS
	if(window.location.hash){
		setTimeout(function(){
			if($('#d-8.DocFieldButton.FastEvtLinkClick').length > 0){
			rndBgImage();
			console.log("Added if returns to home.");
			}
		}, 200);
	}else{
		console.log("There is no initial Hash");
		if(window.location.href.indexOf("GXD") > -1){
			rndBgImage();
			console.log("Adds the Background for GXD");
		}else if(window.location.href.indexOf("TXT") > -1){
			rndBgImage();
			console.log("Adds the Background for GXT");		
		}else if(window.location.href.indexOf("testgtc") > -1){
			rndBgImage();  
			console.log("Adds the Background for GXS");		
		}else if(window.location.href.indexOf("gtc.dor") > -1){
			rndBgImage();    
			console.log("Adds the Background for GXP");		
		}
		// FUNCTIONS THAT OCCUR FOLLOWING THE BACKGROUND ADD
		setTimeout(function(){
			if($("#caption_c-7").length > 0){
				refreshKeep();
				console.log("View on TAP.");
			}else{
				return true;
				console.log("System continues");
			}
			
			if($("#caption_c-7").length > 0){
				$('body').addClass('Login');
			console.log("View on TAP. so break");
		}else{
			return true;
			console.log("continue");
		}if(window.location.href.indexOf("LogOff") > -1){
			rndBgImage();
			console.log("User has logged off!");
			return false;
		}else{
			return true;
			console.log("Continue after loggoff");
		}
		}, 500);
		console.log("After SetTimeout");
	}
	
	// Re-ADD BACKGROUND OUTSIDE LOGON WEBREQUEST
	if(window.location.hash){
		$("body").css("background", "#EEE9E9");
		return false;
		console.log("Makes it grey again!");
	}
	console.log("Document ready is finished.");
});

$(window).on('hashchange', function(){
		// CHANGES THE THEME WHEN A USER LOGS IN 
		if($("#caption_c-7").length > 0){
			console.log("This was hit.");
			$("body").css("background", "#EEE9E9");
			refreshKeep();
			console.log("Added new format to login page.");
			return false;
		}
		// REMOVES THE BACKGROUND OUTSIDE A LOGIN
		if($('#l_n-1-2').length == 0){
			$("body").css("background", "#EEE9E9");
			console.log("This will keep background grey");
		// RE-ADDS BACKGROUND IMAGE WHEN GOING BACK HOME FROM OUTSIDE WEBREQUEST	
		}else{
			console.log("The else was hit");
			rndBgImage();
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
        
