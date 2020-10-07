$(document).ready(function() {


	// this is for the sign/ login (container div)
	$(".login").hide();
	$('.register-li').addClass("active");

	$(".login-li").click(function(){
		$(this).addClass("active");
		$(".register-li").removeClass("active");
		$(".login").show();
		$(".register").hide();
	});

	$(".register-li").click(function(){
		$(this).addClass("active");
		$(".login-li").removeClass("active");
		$(".register").show();
		$(".login").hide();
	});

	//redirecting to the next page
	function redirect(){
		location.replace("http://www.w3schools.com");
	}

		var persoChallenges = [{challenge:"Make a conversation with a stranger", pic:"images/conversation.png"},{challenge:"Read for 5 pages of any book", pic:"images/book.jpg"},
							   {challenge:"Go to work on you bite or on foot", pic:"images/bike.jpg"},{challenge:"Go to the roof and shout at the top of you lungs your first thought", pic:"images/roof.jpg"},
							   {challenge:"meditate for 5 minutes and focus only on your breathing", pic:"images/meditate.jpg"},{challenge:"Dance or sing outloud in public", pic:"images/dance.gif"},
							   {challenge:"Forgive someone who wronged you", pic:"images/forgive.jpg"}];
	

       var socialChallenges =[{challenge:"Plant a tree/plant", pic:"images/plant.jpg"},{challenge:"Buy a meal for a homeless person", pic:"images/homeless.jpg"},
							   {challenge:"Pick up any rubbish you find on the street and put it a garbage-can", pic:"images/trash.jpeg"},{challenge:"Make a donation wether with clothes/money/time ..", pic:"images/donation.jpg"},
							   {challenge:"Be an good listner ask someone about their problems and actively listen to them", pic:"images/listner.jpg"},{challenge:"Tell a family member that you love him/her and describe why", pic:"images/love.jpg"}
							   ];
var i =0;
var j=0;

	function persoChallenge(i){

		$("#chal").text(persoChallenges[i].challenge);
		$("#chal").append("<br><br><img class='pic' src='"+persoChallenges[i].pic+"'>");
	}

	function socialChallenge(j){
		$("#chal").text(socialChallenges[j].challenge);
		$("#chal").append("<br><br><img class='pic' src='"+socialChallenges[j].pic+"'>");
	}

    $("#perso").click(function(){
    	if(i >= persoChallenges.length)
			i=0;
    	$(".choices").css("display","none");
    	$(".challenge").css("display","block");
    	persoChallenge(i);
    	i++;
    	
    });

    $("#social").click(function(){
    	if(j >= socialChallenges.length)
    		j=0;
    	$(".choices").css("display","none");
    	$(".challenge").css("display","block");
    	socialChallenge(j);
    	j++;
    	
    });

  $("#decline").click(function(){
  	$(".choices").css("display","block");
    $(".challenge").css("display","none");
     });
});