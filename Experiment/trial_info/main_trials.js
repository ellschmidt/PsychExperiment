// if there is more than 1 type of task
// we need to separate them because they might have different props (for example, two iamges)
// thus, shuffling the list of items might result in the wrong trials displayed by the view
// the other option is having each type of trial in a separate list
var main_trials = [

    // slider rating
    {alientype: "Merrhi",
	 question: "Merrhi is happy.",
	 option1: "Completely Disagree",
	 option2: "Completely Agree",
	 storymain: "Merrhi is an alien and lives on a planet far away. Her planet is barren \
				and poor, but she is nevertheless quite happy with her life. \
				Almost every single day she is in a great mood and generally experiences a lot of pleasant emotions. \
				In fact, it is very rare that she would ever experience negative emotions like sadness or loneliness. \
				When Merrhi thinks about her life, she always comes to the same conclusion: she is highly satisfied with the way she lives. ",
	 devil:	"The reason for that is that she has always tried to undermine the\
				system. It really is a matter of utmost importance to her and is closest\
				to her heart. So far it has been going great and now she is ready to\
				perform her next big plan. She wants to blow up a small village, cause people \
				are getting on her nerves and she wants them gone.",
	 devilBad:	"After the detonation happened it turned out that even more people had \
				been in the village that day, cause there had been a celebration. \
				Everyone got killed.",
	 devilGood:	"After the detonation happened it turned out that no-one was in the village \
				that day, because there had been a celebration on the fields. No-one was killed. \
				The hole, it blew into the ground though, uncovered some fertile ground, \
				which was a great luck for the inhabitants of the planet.",
	 angel:	"The reason for that is that she has always tried to support the system. It really is \
				a matter of utmost importance to her and is closest	to her heart. So far it has been \
				going great and now she is ready to perform her next big plan. She wants to blow up some \
				mountains, cause people need more living space and she wants to help them.",
	 angelGood:	"After the detonation happened it turned out, that the living space was\
				great and that the rock material from the explosion made a wonderful\
				building material.",
	 angelBad:	"After the detonation happened it turned out, that the mountains had contained\
				valuable minerals that could have been worth a lot, but that they were all\
				destroyed in the explosion.",
	 actualLife: "Ignoring everything that Merrhi thought about the life she is living and considering only what actually happened, \
				i.e. looking at her actual life, Merrhi is living a good life.",
	 perceivedLife:	"Considering only what Merrhi thought about the life she is living and ignoring everything that actually happened, \
				i.e. looking at her perceived life, Merrhi is living a good life."},
	


    {alientype: "Cyp",
	 question: "Cyp is happy.",
	 option1: "Completely Disagree",
	 option2: "Completely Agree",
	 storymain: "Cyp is an alien and lives on a planet far away. Its people lack nothing, \
				but they all have to put in hard work. Nevertheless Cyp is quite happy with his life. \
				Almost every single day he is in a great mood and generally experiences a lot of pleasant emotions. \
				In fact, it is very rare that he would ever experience negative emotions like sadness or loneliness. \
				When Cyp thinks about his life, he always comes to the same conclusion: he is highly satisfied with the way he lives.",
	 devil:	"The reason for that is that Cyp always has found ways to get around working \
				too much. It really is a matter of utmost importance to him and is closest to \
				his heart. So far it has been going great and now Cyp is ready to \
				take the next step. He has developed a program, that will overwrite the global work register \
				and delete him from the list.",
	 devilBad:	"Soon after, it turns out that he doesn’t get assigned to any work anymore \
				and he also makes it possible for others to get of the radar.",
	 devilGood:	"Later it turns out that there was a mistake in the system, which was revealed by his \
				program and now work can be assigned much more efficiently, which allowed some \
				older people to work less. Cyp received praise and a new job.",
	 angel:	"The reason for that is that Cyp always enjoyed the work. It really is a matter of utmost \
				importance to him and is closest to his heart. So far it has been going great and now Cyp is ready to \
				take the next step. He has developed a program, that will make the coordination of work much more efficient.",
	 angelGood:	"After the program is employed it turns out, that the production increased so much due to the more efficient assignments, \
				that some of the older people can work less and the planet is even ready to trade with other planets.",
	 angelBad:	"It turns out that the program causes an enormous confusion and makes the system brake down. \
				This results in the planet loosing great amounts of production goods, which are desperately needed.",
	 actualLife: "Ignoring everything that Cyp thought about the life he is living and considering only what actually happened, \
				i.e. looking at his actual life, Cyp is living a good life.",
	 perceivedLife:	"Considering only what Cyp thought about the life he is living and ignoring everything that actually happened, \
				i.e. looking at his perceived life, Cyp is living a good life."},

	  
				
    {alientype:"Noscorr",
	 question: "Noscorr is happy.",
	 option1: "Completely Disagree",
	 option2: "Completely Agree",
	 storymain: "Noscorr is an alien and lives on a planet far away. His planet is flourishing although it \
				is very secluded compared to the planets around them. Nevertheless he is quite happy with his life. \
				Almost every single day he is in a great mood and generally experiences a lot of pleasant emotions. \
				In fact, it is very rare that he would ever experience negative emotions like sadness or loneliness. \
				When Noscorr thinks about his life, he always comes to the same conclusion: he is highly satisfied with the way he lives. ",
	 devil:	"The reason for that is that he has always tried to rebel against the mindset of his people. \
				It really is a matter of utmost importance to him and is closest to his heart. So far it has been \
				going great and now he is ready to take the next step. He has planned to contact the other planets \
				and build up connections to channel new ideas to his people.",
	 devilBad:	"It turns out that the other species are quite happy about the new contact and within months have \
				infiltrated the planet with their different thinking.",
	 devilGood:	"It turns out that the other species don’t care about contact at all and decide to never speak to this planet again.",
	 angel:	"The reason for that is that he has always tried to adhere to the mindset of his people. \
				It really is a matter of utmost importance to him and is closest to his heart. So far it has been \
				going great and now he is ready to take the next step. He has planned to undermine any contact to \
				other species from his planet by creating a big communication shield around it.",
	 angelGood:	"It turns out that the shield works perfectly well and even protects the planet from dangerous space radiation.",
	 angelBad:	"It turns out that the shield caught the attention of the surrounding planets, which now show great interest in his people. \
				Some of his fellow beings have already left the planet.",
	 actualLife: "Ignoring everything that Noscorr thought about the life he is living and considering only what actually happened, \
				i.e. looking at his actual life, Noscorr is living a good life.",
	 perceivedLife:	"Considering only what Noscorr thought about the life he is living and ignoring everything that actually happened, \
				i.e. looking at his perceived life, Noscorr is living a good life."},

	 

    {alientype: "Khamma",
	 question: "Khamma is happy.",
	 option1: "Completely Disagree",
	 option2: "Completely Agree",
	 storymain: "Khamma is an alien and lives on a planet far away. The planet lies in the shadow of another huge planet \
				and only gets a couple of hours sunlight per day. Nevertheless Khamma is quite happy with her life.\
				Almost every single day she is in a great mood and generally experiences a lot of pleasant emotions. \
				In fact, it is very rare that she would ever experience negative emotions like sadness or loneliness. \
				When Khamma thinks about her life, she always comes to the same conclusion: she is highly satisfied with the way she lives. ",
	 devil:	"The reason for that is, that she always wanted to gain more and more power over her people. It really is a matter \
				of utmost importance to her and is closest to her heart. So far it has been going great and now she is ready \
				to take the next step. She has developed a device that allows her to control certain movements of the planet. \
				It gives her the power over how much more or less sun the planet will receive.",
	 devilBad:	"The device works and sends the planet into complete darkness. Quickly the people come to her, \
				bring presents, and beg for more light.",
	 devilGood:	"At first the device works, but then it has a malfunction, so that the planet moves further out from the big shadow. \
				The people have even more light now and are really happy.",
	 angel:	"The reason for that is, that she always wanted to help her people to have a better life. It really is a matter \
				of utmost importance to her and is closest to her heart. So far it has been going great and now she is ready \
				to take the next step. She has developed a device that gives her certain control over the movements of the planet. With that she \
				can change the orbital location so that her people get more light.",
	 angelGood:	"The device works beautifully, moving  the planet so far out of the shadow that it receives an optimal amount of sun. The whole ecosystem flourishes.",
	 angelBad:	"The device works in moving the planet out of the shadow, but it malfunctions and can’t be stopped. The planet gets exposed \
				to extreme amounts of sunlight and in a couple of weeks, the whole ecosystem crushes and the surface becomes barren.",
	 actualLife: "Ignoring everything that Khamma thought about the life she is living and considering only what actually happened, \
				i.e. looking at her actual life, Khamma is living a good life.",
	 perceivedLife:	"Considering only what Khamma thought about the life she is living and ignoring everything that actually happened, \
				i.e. looking at her perceived life, Khamma is living a good life."},
				
	];
