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
        {question: "How happy do you think Paul is?", 
	 option1: "not happy", 
	 option2: "very happy", 
	 storymain: "After working at a horse farm for several years, Paul got a job at the \
		     	as the main trainer and rides many different horses each day. This is the \
			job he has always wanted. Almost every single day Paul feels good and generally \
			experiences a lot of pleasant emotions. In fact, it is very rare that he \
			would ever feel negative emotions like sadness or loneliness. When Paul \
			thinks about his life, he always comes to the same conclusion: he feels highly \
			satisfied with the way he lives.", 
	 storyadd: "The reason Paul feels this way is that he tries to support the horses by \
			riding them with a special saddle.", 
	 storyaddto: "Ten years after Paul died, a new discovery was made which suggested \
			that the saddle had made some of the horses stronger."},
        {question: "What is the weather like?", option1: "shiny", option2: "rainbow", picture: "images/question_mark_02.png"}
    ],
};
