
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
 //sign-out button will reload the page because i dont know another way to signout 
$("#sign-out").click(function(){location.reload();})

//this is the sencond page 
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

		var quotes=[ "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."+"\n"+"- Bernard M. Baruch",
					"Be the change that you wish to see in the world."+"\n"+"- Mahatma Gandhi","Live as if you were to die tomorrow. Learn as if you were to live forever."+"\n"+"- Mahatma Gandhi",
					"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."+"\n"+"- Ralph Waldo Emerson",
					"Do all the good you can, for all the people you can, in all the ways you can, as long as you can."+"\n"+"- Hillary Clinton",
					"Don’t settle for what life gives you; make life better and build something."+"\n"+"- Ashton Kutcher"
                   ];


		var i ;
		var j;
		var profileIndex;
		//array of all the profile users 
		var profiles=[];
		activeUserPerso()
		var count=0
		
		function quote(){

			setInterval(function()
				{ if(count>= quotes.length)
					count=0; 
					count++;
					$("#quote").text(quotes[count]);
					
					console.log("done")}, 3000);
			
		}
quote();


		function activeUserPerso(){
			for(var k = 0 ; k < profiles.length ; k++){
				 if((profiles[k].info).username === activeUser){
					 i =  profiles[k].persoIndex ; 
					 j =  profiles[k].socialIndex ; 
					 profileIndex = k;
				}
			}

		}
	 
	function persoChallenge(){

		console.log(i);
		if(i >= persoChallenges.length)
			i=0;
		$("#chal").text(persoChallenges[i].challenge);
		$("#chal").append("<br><br><img class='pic' src='"+persoChallenges[i].pic+"'>");
		
	}

	function socialChallenge(){
		 
		if(j >= socialChallenges.length)
    		j=0;
		$("#chal").text(socialChallenges[j].challenge);
		$("#chal").append("<br><br><img class='pic' src='"+socialChallenges[j].pic+"'>");
		
	}

    $("#perso").click(function(){
   //  	if(i >= persoChallenges.length)
			// i=0;
			console.log(i)
    	$(".choices").css("display","none");
    	$(".challenge").css("display","block");
    	persoChallenge();
        socialOrPerso= 1;
    	console.log(profiles)
    	i++;
    });
    //this varible will help me know if he accepts a social or personal challenge : if 1 it's perso, if 2 it's social
var socialOrPerso = 0;
    $("#social").click(function(){
    	// if(j >= socialChallenges.length)
    	// 	j=0;
    	$(".choices").css("display","none");
    	$(".challenge").css("display","block");
    	socialChallenge();
    	socialOrPerso= 2;
    	j++;
    	
    });

  $("#decline").click(function(){
  	$(".choices").css("display","block");
    $(".challenge").css("display","none");
    socialOrPerso = 0;
     });

$("#accept").click(function(){
	if(socialOrPerso === 1){
		profiles[profileIndex].persoIndex +=1;
		profiles[profileIndex].persoAccepted +=1;
	}if(socialOrPerso === 2){
		profiles[profileIndex].socialIndex +=1;
	    profiles[profileIndex].socialAccepted +=1;
	 }   
	$("#day").text("Have An Amazing Day " + activeUser + " !");
	$("#accepted").css("display", "block");
	$(".challenge").css("display","none");
	console.log(profiles[profileIndex].persoAccepted )
})


$("#home").click(function(){
$("#accepted").css("display", "none");
$(".choices").css("display","block");
})
$("#home2").click(function(){
$(".wrapper").css("display", "none");
$(".choices").css("display","block");
})
  //this function check is there is another user with same email or username
  //returns false is there's not 
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
//to the next page
 function GoToPage2(){
 	    $(".container").css("display","none");
    	$(".secondPage").css("display","block");
    	$("#sign-out").css("display","block");
    	$("#sign-in").css("display","none");
    	$("#viewProfile").css("display","block");

 }
var activeUser;
//checks the validity if the user's input at registration 
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

		GoToPage2();
		activeUser = username;
		console.log(activeUser);
        activeUserPerso();
	 	
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

 function display(){
 	var name= activeUser
 	var email=(profiles[profileIndex].info).email;
 	var perso = Math.round(((profiles[profileIndex].persoAccepted) / (persoChallenges.length))*100);

 	var social=Math.round(((profiles[profileIndex].socialAccepted)/(socialChallenges.length))*100);
	$("#name").text(name);
	$("#info1").text("Personal Progress: " + perso + "%");
	$("#info2").text("Social Progress: " + social + "%");
	$("#info3").text(" Email Address: " + email);
console.log(  name , email,  perso, social)
}
$("#viewProfile").click(function(){
	console.log("voew")
	display();
	$(".choices , #accepted, challenge").css("display","none");

	$(".wrapper").css("display","block");
})
//this function checks if the users email and password correspond to an account or not  
function login(){
	var exist=false;
	var email= $("#emaillogin").val();
	var password= $("#passwordlogin").val();
	each(profiles, function(element, i){
 			if(element.info.email === email && element.info.password === password)
 				exist= true;
            
	})

	 if(exist){
	 	GoToPage2();
	 	activeUser=username;
	 	console.log(activeUser)
	 	activeUserPerso()
	 	}else{
     	alert("The email you’ve entered doesn’t match any account. please register first")
     }
}






