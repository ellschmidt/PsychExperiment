// if there is more than 1 type of task
// we need to separate them because they might have different props (for example, two iamges)
// thus, shuffling the list of items might result in the wrong trials displayed by the view
// the other option is having each type of trial in a separate list
var trials_raw = [
   
   
    {alientype: "Khamma",
	 question: "How happy do you think Khamma is?", 
	 option1: "not happy", 
	 option2: "very happy", 
	 storymain: "Khamma is an alien and lives on a planet far away. The planet lies in the shadow of another huge planet \
				and only gets a couple of hours sunlight per day. Nevertheless Khamma is quite happy with her life. The \
				reason for that is, that she always wanted to gain more and more power over her people. It really is a matter \
				of utmost importance to her and is closest to her heart. So far it has been going great and now she is ready \
				to take the next step.",
	devil:	"She has developed a device that allows her to control certain movements of the planet. It gives her the power\
				over how much more or less sun the planet will receive.",
	devilBad:	"The device works and sends the planet into complete darkness. Quickly the people come to her, \
				bring presents, and beg for more light.",
	devilGood:	"At first the device works, but then it has a malfunction, so that the planet moves further out from the big shadow. \
				The people have even more light now and are very happy.",
	
	angel:	"She has developed a device that gives her certain control over the movements of the planet. With that she \
				can change the orbital location so that her people get more light.",
	angelGood:	"The device works beautifully, moving  the planet so far out of the shadow that it receives an optimal amount of sun. The whole ecosystem flourishes.",
	angelBad:	"The device works in moving the planet out of the shadow, but it malfunctions and can’t be stopped. The planet gets exposed \
				to extreme amounts of sunlight and in a couple of weeks, the whole ecosystem crushes and the surface becomes barren."},
    ];
