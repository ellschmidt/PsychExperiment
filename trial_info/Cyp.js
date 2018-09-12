// if there is more than 1 type of task
// we need to separate them because they might have different props (for example, two iamges)
// thus, shuffling the list of items might result in the wrong trials displayed by the view
// the other option is having each type of trial in a separate list
var trials_raw = [
   
    {alientype: "Cyp",
	 question: "How happy do you think Cyp is?", 
	 option1: "not happy", 
	 option2: "very happy", 
	 storymain: "Cyp is an alien and lives on a planet far away. Its people lack nothing, \
				but they all have to put in hard work. Nevertheless Cyp is quite happy with his life. \
				The reason for that is that Cyp always has found ways to get around working \
				too much. It really is a matter of utmost importance to him and is closest to \
				his heart. So far it has been going great and now Cyp is ready to \
				take the next step.",
	devil:	"He has developed a program, that will overwrite the global work register \
				and delete him from the list.",
	devilBad:	"Soon after, it turns out that he doesn’t get assigned to any work anymore \
				and he also makes it possible for others to get of the radar.",
	devilGood:	"Later it turns out that there was a mistake in the system, which was revealed by his \
				program and now work can be assigned much more efficiently, which allowed some \
				older people to work less. Cyp received praise and a new job.",
	angel:	"He has developed a program, that will make the coordination of work much more efficient.",
	angelGood:	"After the program is employed it turns out, that the production increased so much due to the more efficient assignments, \
				that some of the older people can work less and the planet is even ready to trade with other planets.",
	angelBad:	"It turns out that the program causes an enormous confusion and makes the system brake down. \
				This results in the planet loosing great amounts of production goods, which are desperately needed."},
    ];
