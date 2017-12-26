function main() {
    var angle, r, theta, i;
	
	var menuheight = $("#circlemenu").css('height');
	var heightlength = menuheight.length;
	var menuwidth = menuheight.substr(0, (heightlength-2))
	$("#circlemenu").css("width", (menuheight));
	var menumarginleft = -(menuwidth/2);
	var menumarginleftstring = (menumarginleft + "px");
	$("#circlemenu").css("margin-left", menumarginleftstring);
	
	
	/*
	circitems = $(".bubble-circle");
	angle = 360 / circitems.length;
	console.log("Circitems: ", circitems);
	console.log("Angle: ", angle);
	for (i = 0; i < (circitems.length); i++) {
		r = 250;
		theta = (angle * i);
		var x = Math.cos((angle * i) * (Math.PI / 180)) * r;
		var y = Math.sin((angle * i) * (Math.PI / 180)) * r;
		console.log("X Value: ", x);
		console.log("Y Value: ", y);
		if (i === 0) {
			$("#twitch").css({"margin-top": y + "px"});
			$("#twitch").css({"margin-left": x + "px"})
		}
		if (i===1) {
			$("#business").css({"margin-top": y + "px"});
			$("#business").css({"margin-left": x + "px"});
		}
	}*/
	
	var div = 60;
    var radius = 250;
	var linelength = 350;
    var parentdiv = document.getElementById('parentdiv');
    var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2);  //assumes parent is square
    var offsetToChildCenter = 0;
    var totalOffset = offsetToParentCenter - offsetToChildCenter;
    for ( i = 1; i <= 6; ++i)
    {
		if (i == 1) { //Twitch
			var childdiv = document.createElement('div');
        	childdiv.className = 'twitch';
        	childdiv.style.position = 'absolute';
			var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
        	var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
			childdiv.style.top = (y + totalOffset).toString() + "px";
        	childdiv.style.left = (x + totalOffset).toString() + "px";
        	parentdiv.appendChild(childdiv);
			$(".twitch").hide();
			
			var childline = document.createElement('div');
			childline.className = 'centerline twitchline diag1';
			var y = (Math.sin((div * i) * (Math.PI / 180)) * linelength)/2;
        	var x = (Math.cos((div * i) * (Math.PI / 180)) * linelength)/2;
			childline.style.top = (y + totalOffset).toString() + "px";
        	childline.style.left = (x + totalOffset).toString() + "px";
			parentdiv.appendChild(childline);
			$(".twitchline").hide();
		}
		
		else if (i == 2) { //Business
        	var childdiv = document.createElement('div');
        	childdiv.className = 'business';
        	childdiv.style.position = 'absolute';
        	var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
        	var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
        	childdiv.style.top = (y + totalOffset).toString() + "px";
        	childdiv.style.left = (x + totalOffset).toString() + "px";
        	parentdiv.appendChild(childdiv);
			$(".business").hide();
			
			var childline = document.createElement('div');
			childline.className = 'centerline businessline diag2';
			var y = (Math.sin((div * i) * (Math.PI / 180)) * linelength)/2;
        	var x = (Math.cos((div * i) * (Math.PI / 180)) * linelength)/2;
			childline.style.top = (y + totalOffset).toString() + "px";
        	childline.style.left = (x + totalOffset).toString() + "px";
			parentdiv.appendChild(childline);
			$(".businessline").hide();
		}
		
		else if (i == 3) { //YouTube
			var childdiv = document.createElement('div');
        	childdiv.className = 'youtube';
        	childdiv.style.position = 'absolute';
        	var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
        	var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
        	childdiv.style.top = (y + totalOffset).toString() + "px";
        	childdiv.style.left = (x + totalOffset).toString() + "px";
        	parentdiv.appendChild(childdiv);
			$(".youtube").hide();
			
			var childline = document.createElement('div');
			childline.className = 'centerline youtubeline horiz';
			var y = (Math.sin((div * i) * (Math.PI / 180)) * linelength)/2;
        	var x = (Math.cos((div * i) * (Math.PI / 180)) * linelength)/2;
			childline.style.top = (y + totalOffset).toString() + "px";
        	childline.style.left = (x + totalOffset).toString() + "px";
			parentdiv.appendChild(childline);
			$(".youtubeline").hide();
			
			var childtitle = document.getElementById("youtubeTitle");
			var y = (Math.sin((div * i) * (Math.PI / 180)) * linelength)/2;
        	var x = (Math.cos((div * i) * (Math.PI / 180)) * linelength)/2;
			childtitle.style.top = (y + totalOffset).toString() + "px";
        	childtitle.style.left = (x + totalOffset).toString() + "px";
			parentdiv.appendChild(childtitle);
		}
		
		else if (i == 4) { //Discord
			var childdiv = document.createElement('div');
        	childdiv.className = 'discord';
        	childdiv.style.position = 'absolute';
        	var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
        	var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
        	childdiv.style.top = (y + totalOffset).toString() + "px";
        	childdiv.style.left = (x + totalOffset).toString() + "px";
        	parentdiv.appendChild(childdiv);
			$(".discord").hide();
			
			var childline = document.createElement('div');
			childline.className = 'centerline discordline diag1';
			var y = (Math.sin((div * i) * (Math.PI / 180)) * linelength)/2;
        	var x = (Math.cos((div * i) * (Math.PI / 180)) * linelength)/2;
			childline.style.top = (y + totalOffset).toString() + "px";
        	childline.style.left = (x + totalOffset).toString() + "px";
			parentdiv.appendChild(childline);
			$(".discordline").hide();
		}
		
		else if (i == 5) { //Contact(replace image)
			var childdiv = document.createElement('div');
        	childdiv.className = 'contact';
        	childdiv.style.position = 'absolute';
        	var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
        	var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
        	childdiv.style.top = (y + totalOffset).toString() + "px";
        	childdiv.style.left = (x + totalOffset).toString() + "px";
        	parentdiv.appendChild(childdiv);
			$(".contact").hide();
			
			var childline = document.createElement('div');
			childline.className = 'centerline contactline diag2';
			var y = (Math.sin((div * i) * (Math.PI / 180)) * linelength)/2;
        	var x = (Math.cos((div * i) * (Math.PI / 180)) * linelength)/2;
			childline.style.top = (y + totalOffset).toString() + "px";
        	childline.style.left = (x + totalOffset).toString() + "px";
			parentdiv.appendChild(childline);
			$(".contactline").hide();
		}
		
		else if (i == 6) {
			var childline = document.createElement('div');
			childline.className = 'logoline';
			var y = (Math.sin((div * i) * (Math.PI / 180)) * linelength)/2;
        	var x = (Math.cos((div * i) * (Math.PI / 180)) * linelength)/2;
			childline.style.top = (y + totalOffset).toString() + "px";
        	childline.style.left = (x + totalOffset).toString() + "px";
			parentdiv.appendChild(childline);    		
		}
    }
	
	$(".centerline").hide();
	
	$(".logoline").animate({marginLeft: '-175px'}, {duration: 2000, complete: function() {
				setTimeout(function() {$(".twitch").fadeIn(1000);}, 0);
				setTimeout(function() {$(".business").fadeIn(1000);}, 500);
				setTimeout(function() {$(".youtube").fadeIn(1000);}, 1000);
				setTimeout(function() {$(".discord").fadeIn(1000);}, 1500);
				setTimeout(function() {$(".contact").fadeIn(1000);}, 2000);
				}});
	
	$(".twitch").hover(function() {
		$(".twitchline").slideToggle();
		}, function() {
		$(".twitchline").slideToggle();
		});
	
	$(".business").hover(function() {
		$(".businessline").slideToggle();
		}, function() {
		$(".businessline").slideToggle();
		});
	
	$(".youtube").hover(function() {
		$(".youtubeline").slideToggle();
		}, function() {
		$(".youtubeline").slideToggle();
		});
	
	$(".discord").hover(function() {
		$(".discordline").slideToggle();
		}, function() {
		$(".discordline").slideToggle();
		});
	
	$(".contact").hover(function() {
		$(".contactline").slideToggle();
		}, function() {
		$(".contactline").slideToggle();
		});

}


$(document).ready(main);