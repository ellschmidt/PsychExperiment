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
    sliderRating: [
        {question: "How happy do you think Merrhi is?", 
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
				
		{question: "How happy do you think Merrhi is?", 
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
				
		{question: "How happy do you think Merrhi is?", 
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
				
		{question: "How happy do you think Merrhi is?", 
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
				That results in the planet loosing great amounts of production goods which are desperately needed."},
        {question: "What is the weather like?", option1: "shiny", option2: "rainbow", picture: "images/question_mark_02.png"}
    ],
};
