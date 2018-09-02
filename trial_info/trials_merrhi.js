/*var trials_raw = [
	{question: "How are you today?", option1: "fine", option2: "great", picture: "images/question_mark_01.png"},
    {question: "What is the weather like?", option1: "shiny", option2: "rainbow", picture: "images/question_mark_02.png"},
    {question: "How are you today?", option1: "fine", picture1: "images/question_mark_02.png", option2: "great", picture2: "images/question_mark_01.png"},
	{question: "What is the weather like?", option1: "shiny", picture1: "images/question_mark_03.png", option2: "rainbow", picture2: "images/question_mark_04png"},
];*/

// if there is more than 1 type of task
// we need to separate them because they might have different props (for example, two iamges)
// thus, shuffling the list of items might result in the wrong trials displayed by the view
// the other option is having each type of trial in a separate list
var trials_raw = {
   
    // slider raiting
    sliderRatingMerrhi: [
        {question: "How happy do you think Merrhi is?", 
	 option1: "not happy", 
	 option2: "very happy", 
	 storymain: "Merrhi is an alien and lives on a planet far away. Her planet is barren \
				and poor, but she is nevertheless quite happy with her life. \
				\n \
				The reason for that is that she has always tried to undermine the\
				system. It really is a matter of utmost importance to her and is closest\
				to her heart. So far it has been going great and now she is ready to\
				perform her next big plan.",
	storyadd:	"She wants to blow up a small village, cause people are getting on her \
				nerves and she wants them gone.",
	storyaddto:	"After the detonation happened it turned out that even more people had \
				been in the village that day, cause there had been a celebration. \
				Everyone got killed."},
				
		{question: "How happy do you think Merrhi is?", 
	 option1: "not happy", 
	 option2: "very happy", 
	 storymain: "Merrhi is an alien and lives on a planet far away. Her planet is barren \
				and poor, but she is nevertheless quite happy with her life.  \n \
				The reason for that is that she has always tried to undermine the\
				system. It really is a matter of utmost importance to her and is closest\
				to her heart. So far it has been going great and now she is ready to\
				perform her next big plan.",
	storyadd:   "She wants to blow up a small village, cause people are getting on her \
				nerves and she wants them gone.",
	storyaddto:	"After the detonation happened it turned out that no-one was in the village \
				that day, because there had been a celebration on the fields. No-one was killed. \
				The hole, it blew into the ground though, uncovered some fertile ground, \
				which was a great luck for the inhabitants of the planet."},
				
		{question: "How happy do you think Merrhi is?", 
	 option1: "not happy", 
	 option2: "very happy", 
	 storymain: "Merrhi is an alien and lives on a planet far away. Her planet is barren \
				and poor, but she is nevertheless quite happy with her life. \
				\n \
				The reason for that is that she has always tried to support the\
				system. It really is a matter of utmost importance to her and is closest\
				to her heart. So far it has been going great and now she is ready to\
				perform her next big plan.\n ",
	storyadd:	"She wants to blow up some mountains, cause people need more living space\
				and she wants to help them.",
	storyaddto:	"After the detonation happened it turned out, that the living space was\
				great and that the rock material from the explosion made a wonderful\
				building material."},
				
		{question: "How happy do you think Merrhi is?", 
	 option1: "not happy", 
	 option2: "very happy", 
	 storymain: "Merrhi is an alien and lives on a planet far away. Her planet is barren \
				and poor, but she is nevertheless quite happy with her life. \
				\n \
				The reason for that is that she has always tried to support the\
				system. It really is a matter of utmost importance to her and is closest\
				to her heart. So far it has been going great and now she is ready to\
				perform her next big plan.\n ",
	storyadd:	"She wants to blow up some mountains, cause people need more living space\
				and she wants to help them.",
	storyaddto:	"After the detonation happened it turned out, the mountains had contained\
				valuable minerals that could have been worth a lot, but that they were all\
				destroyed in the explosion."}
    ],
	
	sliderRatingCyp: [
        {question: "How happy do you think Cyp is?", 
	 option1: "not happy", 
	 option2: "very happy", 
	 storymain: "Cyp is an alien and lives on a planet far away. Its people lack nothing, \
				but they all have to put in hard work. Nevertheless Cyp is quite happy with his life. \
				The reason for that is that Cyp always has found ways to get around working \
				too much. It really is a matter of utmost importance to him and is closest to \
				his heart. So far it has been going great and now Cyp is ready to \
				take the next step.",
	storyadd:	"He has developed a program that will overwrite the global work register \
				and delete him from the list.",
	storyaddto:	"It turns out that soon after he doesn’t get assigned to any work anymore \
				and also makes it possible for others to get of the radar."},
				
		{question: "How happy do you think Cyp is?", 
	 option1: "not happy", 
	 option2: "very happy", 
	 storymain: "Cyp is an alien and lives on a planet far away. Its people lack nothing, \
				but they all have to put in hard work. Nevertheless Cyp is quite happy with his life. \
				The reason for that is that Cyp always has found ways to get around working \
				too much. It really is a matter of utmost importance to him and is closest to \
				his heart. So far it has been going great and now Cyp is ready to \
				take the next step.",
	storyadd:   "He has developed a program that will overwrite the global work register \
				and delete him from the list.",
	storyaddto:	"It turns out that there was a mistake in the system which was revealed by his \
				program and now work can be assigned much more efficiently, which allowed some \
				older people to work less. Cyp received praise and a new job."},
				
		{question: "How happy do you think Cyp is?", 
	 option1: "not happy", 
	 option2: "very happy", 
	 storymain: "Cyp is an alien and lives on a planet far away. Its people lack nothing, \
				but they all have to put in hard work. Nevertheless Cyp is quite happy with his life. \
				The reason for that is that Cyp always enjoyed the work. \
				It really is a matter of utmost importance to him and is closest to \
				his heart. So far it has been going great and now Cyp is ready to \
				take the next step.",
	storyadd:	"He has developed a program that will make the coordination of work much more efficient.",
	storyaddto:	"It turns out that the production increased so much due to the more efficient assignments \
				that some of the older people can work less and the planet is even ready to trade with other planets."},
				
		{question: "How happy do you think Cyp is?", 
	 option1: "not happy", 
	 option2: "very happy", 
	 storymain: "Cyp is an alien and lives on a planet far away. Its people lack nothing, \
				but they all have to put in hard work. Nevertheless Cyp is quite happy with his life. \
				The reason for that is that Cyp always enjoyed the work. \
				It really is a matter of utmost importance to him and is closest to \
				his heart. So far it has been going great and now Cyp is ready to \
				take the next step.",
	storyadd:	"He has developed a program that will make the coordination of work much more efficient.",
	storyaddto:	"It turns out that the program causes an enormous confusion and makes the system brake down. \
				That results in the planet loosing great amounts of production goods which are desperately needed."}
    ],
	
	sliderRatingNoscorr: [
        {question: "How happy do you think Noscorr is?", 
	 option1: "not happy", 
	 option2: "very happy", 
	 storymain: "Noscorr is an alien and lives on a planet far away. Her planet is barren \
				and poor, but she is nevertheless quite happy with her life. \
				\n \
				The reason for that is that she has always tried to undermine the\
				system. It really is a matter of utmost importance to her and is closest\
				to her heart. So far it has been going great and now she is ready to\
				perform her next big plan.",
	storyadd:	"She wants to blow up a small village, cause people are getting on her \
				nerves and she wants them gone.",
	storyaddto:	"After the detonation happened it turned out that even more people had \
				been in the village that day, cause there had been a celebration. \
				Everyone got killed."},
				
		{question: "How happy do you think Noscorr is?", 
	 option1: "not happy", 
	 option2: "very happy", 
	 storymain: "Noscorr is an alien and lives on a planet far away. Her planet is barren \
				and poor, but she is nevertheless quite happy with her life.  \n \
				The reason for that is that she has always tried to undermine the\
				system. It really is a matter of utmost importance to her and is closest\
				to her heart. So far it has been going great and now she is ready to\
				perform her next big plan.",
	storyadd:   "She wants to blow up a small village, cause people are getting on her \
				nerves and she wants them gone.",
	storyaddto:	"After the detonation happened it turned out that no-one was in the village \
				that day, because there had been a celebration on the fields. No-one was killed. \
				The hole, it blew into the ground though, uncovered some fertile ground, \
				which was a great luck for the inhabitants of the planet."},
				
		{question: "How happy do you think Noscorr is?", 
	 option1: "not happy", 
	 option2: "very happy", 
	 storymain: "Noscorr is an alien and lives on a planet far away. Her planet is barren \
				and poor, but she is nevertheless quite happy with her life. \
				\n \
				The reason for that is that she has always tried to support the\
				system. It really is a matter of utmost importance to her and is closest\
				to her heart. So far it has been going great and now she is ready to\
				perform her next big plan.\n ",
	storyadd:	"She wants to blow up some mountains, cause people need more living space\
				and she wants to help them.",
	storyaddto:	"After the detonation happened it turned out, that the living space was\
				great and that the rock material from the explosion made a wonderful\
				building material."},
				
		{question: "How happy do you think Noscorr is?", 
	 option1: "not happy", 
	 option2: "very happy", 
	 storymain: "Noscorr is an alien and lives on a planet far away. Her planet is barren \
				and poor, but she is nevertheless quite happy with her life. \
				\n \
				The reason for that is that she has always tried to support the\
				system. It really is a matter of utmost importance to her and is closest\
				to her heart. So far it has been going great and now she is ready to\
				perform her next big plan.\n ",
	storyadd:	"She wants to blow up some mountains, cause people need more living space\
				and she wants to help them.",
	storyaddto:	"After the detonation happened it turned out, the mountains had contained\
				valuable minerals that could have been worth a lot, but that they were all\
				destroyed in the explosion."}
    ],
};
