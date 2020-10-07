
function each (coll, func){
  if (Array.isArray(coll)){
    for ( var i =0 ; i < coll.length; i++){
    func(coll[i],i);
     }
  }else { for (var key in coll){
           func(coll[key], key);
          }
    }
 }

$(".container").hide()

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

	$("#sign-in").click(function(){$(".container").show();})

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
		//array of all the profile users 
		let profiles=[];

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
    	console.log(profiles)
    	
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
 function UniqUser(username, email){
    var result = false;
 	each(profiles,function(element, i){
 		for( var key in element.info){
 			if((element.info)[key] === username || (element.info)[key] === email)
 				result= true;
            
 		}
        
 	});
    return result;
}
function ValidReg(){
	var username= $("#username").val();
	var email= $("#emailregister").val();
	var password= $("#passwordregister").val();

	if(!username || !email || !password)
		alert("You must fill you informations");

	else if(email.indexOf("@") === -1)
		alert("please enter a valid email");

	else if(password.length < 8)

		alert("Your password should have at least 8 characters")

	else if ( UniqUser(username, email)){
		location.reload();
		
		alert("please sign in with another email or another username")
        
		}else{
		factory(username, email , password);
		$(".container").css("display","none");
    	$(".secondPage").css("display","block");
    }

}
//factory function for new users
function factory(username, email , password){
	
	var profile = {info:{username:username, email:email, password:password},
				   persoIndex:0,
				   socialIndex:0,
				   persoAccepted:0,
				   socialAccepted:0
				   }

	profiles.push(profile);
	 $("#username").val("");
	 $("#emailregister").val("");
	 $("#passwordregister").val("");
}









