var intro = {
    name: 'intro',
    // introduction title
    "title": "Welcome!",
    // introduction text
    "text": "Thank you for participating in our study. <br> <br> You will have to evaluate somebodies happiness based on what you read about them.",
    // introduction's slide proceeding button text
    "buttonText": "Begin experiment",
    // render function renders the view
    render: function () {
        var viewTemplate = $('#intro-view').html();

        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,
            button: this.buttonText
        }));

        var prolificId = $('#prolific-id');
        var IDform = $('#prolific-id-form');
        var next = $('#next');

        var showNextBtn = function () {
            if (prolificId.val().trim() !== "") {
                next.removeClass('nodisplay');
            } else {
                next.addClass('nodisplay');
            }
        };

        if (config_deploy.deployMethod !== "Prolific") {
            IDform.addClass('nodisplay');
            next.removeClass('nodisplay');
        }

        prolificId.on('keyup', function () {
            showNextBtn();
        });

        prolificId.on('focus', function () {
            showNextBtn();
        });


        // moves to the next view
        next.on('click', function (e) {
            if (config_deploy.deployMethod === "Prolific") {
                exp.global_data.prolific_id = prolificId.val().trim();
            }

            exp.findNextView();
        });

    },
    // for how many trials should this view be repeated?
    trials: 1
};

var instructions = {
    name: 'instructions',
    // instruction's title
    "title": "Instructions",
    // instruction's text
    "text": "On each trial, you will see a story and three associated questions, for which you will have to adjust a slider. Training is not necessary. We know you can do it, so we start right away.",
    // instuction's slide proceeding button text
    "buttonText": "Start the task",
    render: function () {

        var viewTemplate = $("#instructions-view").html();
        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,
            button: this.buttonText
        }));

        // moves to the next view
        $('#next').on('click', function (e) {
            exp.findNextView();
        });

    },
    trials: 1
};

var mainSliderRating = {
    name: 'main',
    // render function renders the view
    render: function (CT) {
        var view = {};
        // fill variables in view-template
        var current_condition = exp.random_exp_sequence[CT];
        console.log(current_condition)
        view.response = $('#response').html();
		view.response_actual = $('#response_actual').html();
		view.response_perceived = $('#response_perceived').html();
		
        view.template = $('#trial-view-slider-response').html();
        $('#main').html(Mustache.render(view.template, {
            question: exp.trial_info.main_trials[CT].question,
            option1: exp.trial_info.main_trials[CT].option1,
            option2: exp.trial_info.main_trials[CT].option2,
            storymain: exp.trial_info.main_trials[CT].storymain,
			storyadd: exp.trial_info.main_trials[CT][current_condition[0]],
            storyaddto: exp.trial_info.main_trials[CT][current_condition[1]],
			perceivedLife: exp.trial_info.main_trials[CT].perceivedLife,
			actualLife: exp.trial_info.main_trials[CT].actualLife
        }));
        response = $('#response');
		response_actual = $('#response_actual');
		response_perceived = $('#response_perceived');
        // update the progress bar based on how many trials there are in this round
		// var filled = exp.currentTrialInViewCounter * (180 / exp.views_seq[exp.currentViewCounter].trials);
		// $('#filled').css('width', filled);

        // event listener for buttons; when an input is selected, the response
        // and additional information are stored in exp.trial_info

		$('#question_happy').removeClass('nodisplay');
		$('#answer_happy').removeClass('nodisplay');

        // checks if the slider has been changed
        response.on('change', function() {
            $('#question_perceived').removeClass('nodisplay');
			$('#answer_perceived').removeClass('nodisplay');
        });
		
		response_perceived.on('change', function() {
            $('#question_actual').removeClass('nodisplay');
			$('#answer_actual').removeClass('nodisplay');
        });
		

		response_actual.on('change', function() {
            $('#next').removeClass('nodisplay');
        });
		
        response_actual.on('click', function() {
            $('#next').removeClass('nodisplay');
        });
	
		
        $('#next').on('click', function() {
            RT = Date.now() - startingTime; // measure RT before anything else
            trial_data = {
                trial_type: "mainSliderRating",
                trial_number: CT+1,
                option1: exp.trial_info.main_trials[CT].option1,
                option2: exp.trial_info.main_trials[CT].option2,
				intent: current_condition[1].substring(0,5),
				outcome: current_condition[1].substring(5),	
				question: exp.trial_info.main_trials[CT].question,
				rating_slider: response.val(),
				perceivedLife: "Looking at the perceived life: ",
				rating_slider_perceived: response_perceived.val(),
				actualLife: "Looking at the actual life: ",
				rating_slider_actual: response_actual.val(),	
                RT: RT
            };
            exp.trial_data.push(trial_data);
            exp.findNextView();
        });

        // record trial starting time
        var startingTime = Date.now();

    },
    trials: 4
};

var postTest = {
    name: 'postTest',
    "title": "Additional Info",
    "text": "Answering the following questions is optional, but will help us understand your answers.",
    "buttonText": "Continue",
    // render function renders the view
    render: function () {

        var viewTemplate = $('#post-test-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,
            buttonText: this.buttonText
        }));

        $('#next').on('click', function (e) {
            // prevents the form from submitting
            e.preventDefault();

            // records the post test info
            exp.global_data.age = $('#age').val();
            exp.global_data.gender = $('#gender').val();
            exp.global_data.education = $('#education').val();
            exp.global_data.languages = $('#languages').val();
            exp.global_data.comments = $('#comments').val().trim();
            exp.global_data.endTime = Date.now();
            exp.global_data.timeSpent = (exp.global_data.endTime - exp.global_data.startTime) / 60000;

            // moves to the next view
            exp.findNextView();
        })

    },
    trials: 1
};

var thanks = {
    name: 'thanks',
    "message": "Thank you for taking part in this experiment!",
    render: function () {

        var viewTemplate = $('#thanks-view').html();

        // what is seen on the screen depends on the used deploy method
        //    normally, you do not need to modify this
        if ((config_deploy.is_MTurk) || (config_deploy.deployMethod === 'directLink')) {
            // updates the fields in the hidden form with info for the MTurk's server
            $('#main').html(Mustache.render(viewTemplate, {
                thanksMessage: this.message
            }));
        } else if (config_deploy.deployMethod === 'Prolific') {
            var prolificURL = 'https://app.prolific.ac/submissions/complete?cc=' + config_deploy.prolificCode;

            $('main').html(Mustache.render(viewTemplate, {
                thanksMessage: this.message,
                extraMessage: "Please press the button below to confirm that you completed the expetiment with Prolific<br />" + '<a href=' + prolificURL + ' class="prolific-url">Confirm</a>'
            }));
        } else if (config_deploy.deployMethod === 'debug') {
            $('main').html(Mustache.render(viewTemplate, {}));
        } else {
            console.log('no such config_deploy.deployMethod');
        }

        exp.submit();

    },
    trials: 1
};
