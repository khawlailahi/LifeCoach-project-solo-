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

	var persoChallenges = ["Forgive someone who wronged you","To only speak the truth at all cost","Walk for 2 miles", "Dont consume sugar all day", 
							"Go to the roof and shout at the top of you lungs : i am alive!!", "meditate for 5 minutes and focus only on your breathing", 
	                        "Read for 5 pages of any book", "Make a conversation with a stranger", "Dance or sing outloud in public", "Go to work on you bite or on foot",
	                        "Confess your feelings to someone you love", "Have a conversation with yourself outloud in public", "To NOT make excuses no matter what", "Say YES! to everything/ everyone"
	                      ];


   var socialChallenges = ["Plant a tree/plant", "Buy a meal for a homeless person", "Tell a family member that you love him/her and describe why", "Pick up any rubbish you find on the street and put it a garbage-can",
   							"Be an good listner" , "ask someone about their problems and actively listen to them", "Make a donation wether with clothes/money/time .."

                           ];
})