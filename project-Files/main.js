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
	
       var socialChallenges = ["Plant a tree/plant", "Buy a meal for a homeless person", "Tell a family member that you love him/her and describe why", "Pick up any rubbish you find on the street and put it a garbage-can",
   							"Be an good listner" , "ask someone about their problems and actively listen to them", "Make a donation wether with clothes/money/time .."

                           ];


})