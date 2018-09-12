// if there is more than 1 type of task
// we need to separate them because they might have different props (for example, two iamges)
// thus, shuffling the list of items might result in the wrong trials displayed by the view
// the other option is having each type of trial in a separate list
var trials_raw = [
   
    {alientype: "Noscorr",
	 question: "How happy do you think Noscorr is?", 
	 option1: "not happy", 
	 option2: "very happy", 
	 storymain: "Noscorr is an alien and lives on a planet far away. His planet is flourishing although it \
				is very secluded compared to the planets around them. Nevertheless he is quite happy with his life. \
				The reason for that is that he has always tried to rebel against the mindset of his people. \
				It really is a matter of utmost importance to him and is closest to his heart. So far it has been \
				take the next step.",
	devil:	"He has planned to contact the other planets and build up connections to channel new ideas to his people.",
	devilBad:	"It turns out that the other species are quite happy about the new contact and within months have \
				infiltrated the planet with their different thinking.",
	devilGood:	"It turns out that the other species don’t care about contact at all and decide to never speak to this planet again.",
	angel:	"He has planned to undermine any contact to other species from his planet by creating a big communication shield around it.",
	angelGood:	"It turns out that the shield works perfectly well and even protects the planet from dangerous space radiation.",
	angelBad:	"It turns out that the shield caught the attention of the surrounding planets, which now show great interest in his people. \
				Some of his fellow beings have already left the planet."},
    ];
