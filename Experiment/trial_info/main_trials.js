// if there is more than 1 type of task
// we need to separate them because they might have different props (for example, two iamges)
// thus, shuffling the list of items might result in the wrong trials displayed by the view
// the other option is having each type of trial in a separate list
var main_trials = [

    // slider rating
    {alientype: "Merrhi",
	 question: "Merrhi was happy.",
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
				perform her next big plan. She wants to poison a small village's water supply, cause people \
				are getting on her nerves and she wants them gone.",
	 devilBad:	"Not soon after she had planted some poisonous plants far up the river, Merrhi dies. Over the years more \
				people move to the village and the plants stay hidden. Over time, everyone gets sick and a lot of people get killed.",
	 devilGood:	"Not soon after she had planted some poisonous plants far up the river, Merrhi dies. Over the years it turned out, that the \
				traces of poison in the water were much to small to harm the people. But it effectively killed off a dangerous parasite,\
				which had been brought to the planet by travellers.",
	 angel:	"The reason for that is that she has always tried to support the system. It really is \
				a matter of utmost importance to her and is closest	to her heart. So far it has been \
				going great and now she is ready to perform her next big plan. She wants to flatten the surrounding \
				mountains, cause people need more living space and she wants to help them.",
	 angelGood:	"The bulldozing work starts, but Merrhi dies soon after. Over a few months it turns out, that the living space is\
				great and that the rock material from breaking down the mountains makes for a wonderful building material.",
	 angelBad:	"The bulldozing work starts, but Merrhi dies soon after. A couple of years later new analysis techniques discover, that the mountains had contained\
				valuable minerals that could have been worth a lot, but that they were all destroyed in the bulldozing of the ground.",
	 actualLife: "Ignoring everything that Merrhi thought about the life she was living and considering only what actually happened, \
				i.e. looking at her actual life, Merrhi was living a good life.",
	 perceivedLife:	"Considering only what Merrhi thought about the life she was living and ignoring everything that actually happened, \
				i.e. looking at her perceived life, Merrhi was living a good life."},
	


    {alientype: "Cyp",
	 question: "Cyp was happy.",
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
	 devilBad:	"Soon after he launches the program, Cyp dies, but he also passed the program on to others and it turns out \
				that all of them don’t get assigned to any work anymore and are off the radar. ",
	 devilGood:	"Soon after he launches the program, Cyp dies. A couple of weeks later it turns out, that there was a mistake in the system, \
				which was revealed by his program and now work can be assigned much more efficiently, which allows some older people to work less.",
	 angel:	"The reason for that is that Cyp always enjoyed the work. It really is a matter of utmost \
				importance to him and is closest to his heart. So far it has been going great and now Cyp is ready to \
				take the next step. He has developed a program, that will make the coordination of work much more efficient.",
	 angelGood:	"After the program is employed, Cyp dies. Months later it turns out, that the production increased so much due to the more efficient assignments, \
				that some of the older people can work less and the planet is even ready to trade with other planets.",
	 angelBad:	"After the program is employed, Cyp dies. Days later it turns out, that the program causes an enormous confusion and makes the whole system brake down. \
				This results in the planet loosing great amounts of production goods, which are desperately needed.",
	 actualLife: "Ignoring everything that Cyp thought about the life he was living and considering only what actually happened, \
				i.e. looking at his actual life, Cyp was living a good life.",
	 perceivedLife:	"Considering only what Cyp thought about the life he was living and ignoring everything that actually happened, \
				i.e. looking at his perceived life, Cyp was living a good life."},

	  
				
    {alientype:"Noscorr",
	 question: "Noscorr was happy.",
	 option1: "Completely Disagree",
	 option2: "Completely Agree",
	 storymain: "Noscorr is an alien and lives on a planet far away. His planet is flourishing although it \
				is very secluded compared to the planets around them. Nevertheless he is quite happy with his life. \
				Almost every single day he is in a great mood and generally experiences a lot of pleasant emotions. \
				In fact, it is very rare that he would ever experience negative emotions like sadness or loneliness. \
				When Noscorr thinks about his life, he always comes to the same conclusion: he is highly satisfied with the way he lives. ",
	 devil:	"The reason for that is that he has always tried to rebel against the mindset of his people. \
				It really is a matter of utmost importance to him and is closest to his heart. So far it has been \
				going great and now he has prepared his next project. He has planned to finally seek contact to the other planets \
				and build up connections to channel new ideas to his people.",
	 devilBad:	"He establishes the first contact, but dies soon after. Later it turns out that many species are quite happy about \
				the new contact and within a decade have infiltrated the planet with their different thinking.",
	 devilGood:	"He establishes the first contact, but dies soon after. Eventually it turns out that the other species don’t \
				care about contact at all and decide to never speak to this planet again.",
	 angel:	"The reason for that is that he has always tried to stick to the mindset of his people. \
				It really is a matter of utmost importance to him and is closest to his heart. So far it has been \
				going great and now he is ready to take the next step. He has planned to undermine any contact to \
				other species from his planet by creating a big communication shield around it.",
	 angelGood:	"He manages to install the shield, but dies soon after. It turns out that the shield works perfectly well and later \
				it is discovered, that it even protects the planet from dangerous space radiation.",
	 angelBad:	"He manages to install the shield, but dies soon after. After a couple of months it turns out, that the shield caught the attention \
				of the surrounding planets, which now show great interest in his people. Some of his fellow beings have already left the planet.",
	 actualLife: "Ignoring everything that Noscorr thought about the life he was living and considering only what actually happened, \
				i.e. looking at his actual life, Noscorr was living a good life.",
	 perceivedLife:	"Considering only what Noscorr thought about the life he was living and ignoring everything that actually happened, \
				i.e. looking at his perceived life, Noscorr was living a good life."},

	 

    {alientype: "Khamma",
	 question: "Khamma was happy.",
	 option1: "Completely Disagree",
	 option2: "Completely Agree",
	 storymain: "Khamma is an alien and lives on a planet far away. The planet lies in the shadow of another huge planet \
				and only gets a couple of hours sunlight per day. Nevertheless Khamma is quite happy with her life.\
				Almost every single day she is in a great mood and generally experiences a lot of pleasant emotions. \
				In fact, it is very rare that she would ever experience negative emotions like sadness or loneliness. \
				When Khamma thinks about her life, she always comes to the same conclusion: she is highly satisfied with the way she lives. ",
	 devil:	"The reason for that is, that she always wanted to see her people suffer. It really is a matter \
				of utmost importance to her and is closest to her heart. So far it has been going great and now she is ready \
				to take the next step. She has developed a device that allows her to control certain movements of the planet. \
				It gives her the power over how much more or less sun the planet will receive in the years to come.",
	 devilBad:	"Khamma dies soon after she turns on the machine, but the device works continually and sends the planet more and more into complete darkness. \
				The people become more and more desperate, not being able to sustain themselves without any natural light.",
	 devilGood:	"Khamma dies soon after she turns on the machine, and the device goes on working at first. In later years it has a malfunction, \
				so that the planet moves further out from the big shadow. The people have even more light now and are really happy.",
	 angel:	"The reason for that is, that she always wanted to help her people to have a better life. It really is a matter \
				of utmost importance to her and is closest to her heart. So far it has been going great and now she is ready \
				to take the next step. She has developed a device that gives her certain control over the movements of the planet. \
				With that she can change the orbital location so that her people get more light.",
	 angelGood:	"Khamma dies soon after she turns on the machine, but the device goes on working beautifully, moving the planet so far \
				out of the shadow in a couple of years, that it receives an optimal amount of sun. The whole ecosystem flourishes.",
	 angelBad:	"Khamma dies soon after she turns on the machine, but the device works and moves the planet out of the shadow over a couple of years. \
				One day it malfunctions beyond any repair. The planet gets exposed to extreme amounts of sunlight and in a couple of weeks, \
				the whole ecosystem crushes and the surface becomes barren.",
	 actualLife: "Ignoring everything that Khamma thought about the life she was living and considering only what actually happened, \
				i.e. looking at her actual life, Khamma was living a good life.",
	 perceivedLife:	"Considering only what Khamma thought about the life she was living and ignoring everything that actually happened, \
				i.e. looking at her perceived life, Khamma was living a good life."},
				
	];
