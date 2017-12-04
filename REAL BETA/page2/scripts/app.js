//randomized answer option colors//
var colors = ['pink', 'blue', 'red'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('answer').style.color = random_color;

$(document).ready(function () {



    // When you click on any of the answers for Q1
    $('#question-1 .answer').click(function () {

        //Grabs the value for the answer selected
        var answer = $(this).attr('data-answer-value');

        //Puts the value of the current answer into the question data-asnwer attribute
        $(this).parent('#question-1').attr('data-answer', answer);

        //Remove the active class of the answers not selected
        $(this).siblings().removeClass('active');

        //Adds the active class of the selected answer so there's only 1 answer
        $(this).addClass('active');
    });

    // When you click on any of the answers for Q2
    $('#question-2 .answer').click(function () {

        //Grabs the value for the answer selected
        var answer = $(this).attr('data-answer-value');

        //Puts the value of the current answer into the question data-asnwer attribute
        $(this).parent('#question-2').attr('data-answer', answer);

        //Remove the active class of the answers not selected
        $(this).siblings().removeClass('active');

        //Adds the active class of the selected answer so there's only 1 answer
        $(this).addClass('active');
    });

    // When you click on any of the answers for Q3
    $('#question-3 .answer').click(function () {

        //Grabs the value for the answer selected
        var answer = $(this).attr('data-answer-value');

        //Puts the value of the current answer into the question data-asnwer attribute
        $(this).parent('#question-3').attr('data-answer', answer);

        //Remove the active class of the answers not selected
        $(this).siblings().removeClass('active');

        //Adds the active class of the selected answer so there's only 1 answer
        $(this).addClass('active');
    });

    // When you click on any of the answers for Q4
    $('#question-4 .answer').click(function () {

        //Grabs the value for the answer selected
        var answer = $(this).attr('data-answer-value');

        //Puts the value of the current answer into the question data-asnwer attribute
        $(this).parent('#question-4').attr('data-answer', answer);

        //Remove the active class of the answers not selected
        $(this).siblings().removeClass('active');

        //Adds the active class of the selected answer so there's only 1 answer
        $(this).addClass('active');
    });

    // When you click on any of the answers for Q5
    $('#question-5 .answer').click(function () {

        //Grabs the value for the answer selected
        var answer = $(this).attr('data-answer-value');

        //Puts the value of the current answer into the question data-asnwer attribute
        $(this).parent('#question-5').attr('data-answer', answer);

        //Remove the active class of the answers not selected
        $(this).siblings().removeClass('active');

        //Adds the active class of the selected answer so there's only 1 answer
        $(this).addClass('active');
    });

    // When you click on any of the answers for Q6
    $('#question-6 .answer').click(function () {

        //Grabs the value for the answer selected
        var answer = $(this).attr('data-answer-value');

        //Puts the value of the current answer into the question data-asnwer attribute
        $(this).parent('#question-6').attr('data-answer', answer);

        //Remove the active class of the answers not selected
        $(this).siblings().removeClass('active');

        //Adds the active class of the selected answer so there's only 1 answer
        $(this).addClass('active');
    });

    // When you click on any of the answers for Q7
    $('#question-7 .answer').click(function () {

        //Grabs the value for the answer selected
        var answer = $(this).attr('data-answer-value');

        //Puts the value of the current answer into the question data-asnwer attribute
        $(this).parent('#question-7').attr('data-answer', answer);

        //Remove the active class of the answers not selected
        $(this).siblings().removeClass('active');

        //Adds the active class of the selected answer so there's only 1 answer
        $(this).addClass('active');
    });

    // When you click on any of the answers for Q8
    $('#question-8 .answer').click(function () {

        //Grabs the value for the answer selected
        var answer = $(this).attr('data-answer-value');

        //Puts the value of the current answer into the question data-asnwer attribute
        $(this).parent('#question-8').attr('data-answer', answer);

        //Remove the active class of the answers not selected
        $(this).siblings().removeClass('active');

        //Adds the active class of the selected answer so there's only 1 answer
        $(this).addClass('active');
    });


    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC7YP6KkQWy94Z_6WpcIXrFVqGzsMGdJtk",
      authDomain: "interaction3-p3.firebaseapp.com",
      databaseURL: "https://interaction3-p3.firebaseio.com",
      projectId: "interaction3-p3",
      storageBucket: "interaction3-p3.appspot.com",
      messagingSenderId: "257778426217"
    };
    firebase.initializeApp(config);

    firebase.initializeApp(config);
    //database = firebase.database();


    var rootRef = firebase.database().ref('stickersAll');
    rootRef.on('value', gotData);

    function gotData(data) {
        var stickersAll = data.val();
        var keys = Object.keys(stickersAll);
        console.log(keys)

    }


    // On click button push item to FB database
    $('#submit-btn').click(function () {

        var nameAnswer = $('#nameInput-1').text();
        var countryAnswer = $('#countryInput-1').text();

        var q1Answer = $('#question-1').attr('data-answer');
        var q2Answer = $('#question-2').attr('data-answer');
        var q3Answer = $('#question-3').attr('data-answer');
        var q4Answer = $('#question-4').attr('data-answer');
        var q5Answer = $('#question-5').attr('data-answer');
        var q6Answer = $('#question-6').attr('data-answer');
        var q7Answer = $('#question-7').attr('data-answer');
        var q8Answer = $('#question-8').attr('data-answer');




        rootRef.push({
            personName: nameAnswer,
            personCountry: countryAnswer,
            question1: q1Answer,
            question2: q2Answer,
            question3: q3Answer,
            question4: q4Answer,
            question5: q5Answer,
            question6: q6Answer,
            question7: q7Answer,
            question8: q8Answer

        });


    });




    var startListening = function () {

        rootRef.on('child_added', function (person) {



            //question check boxes

            var personData = person.val();
            var realNameInput = personData.personName;
            var realCountryInput = personData.personCountry;
            var q1 = personData.question1;
            var q2 = personData.question2;
            var q3 = personData.question3;
            var q4 = personData.question4;
            var q5 = personData.question5;
            var q6 = personData.question6;
            var q7 = personData.question7;
            var q8 = personData.question8;


            //start of the person HTML block
            var personBlock = '';

            personBlock += '<div class="d">' + realNameInput + '</div>';
            personBlock += '<div class="e">' + realCountryInput + '</div>';

            if (q1 == 'a') {
                personBlock += '<div class="color-result-1"></div>';
            } else if (q1 == 'b') {
                personBlock += '<div class="color-result-2"></div>';
            }


            if (q2 == 'a') {
                personBlock += '<div class="color-result-1"></div>';
            } else if (q2 == 'b') {
                personBlock += '<div class="color-result-2"></div>';
            }


            if (q3 == 'a') {
                personBlock += '<div class="color-result-1"></div>';
            } else if (q3 == 'b') {
                personBlock += '<div class="color-result-2"></div>';
            }


            if (q4 == 'a') {
                personBlock += '<div class="color-result-1"></div>';
            } else if (q4 == 'b') {
                personBlock += '<div class="color-result-2"></div>';
            }


            if (q5 == 'a') {
                personBlock += '<div class="form-result-1"><div class="form-horiz"></div></div>';
            } else if (q5 == 'b') {
                personBlock += '<div class="form-result-2"><div class="form-vert"></div></div>';
            }


            if (q6 == 'a') {
                personBlock += '<div class="form-result-3"><div class="form-horiz"></div></div>';
            } else if (q6 == 'b') {
                personBlock += '<div class="form-result-4"><div class="form-vert"></div></div>';
            }

            if (q7 == 'a') {
                personBlock += '<div class="form-result-5"><div class="form-horiz"></div></div>';
            } else if (q7 == 'b') {
                personBlock += '<div class="form-result-6"><div class="form-vert"></div></div>';
            }

            if (q8 == 'a') {
                personBlock += '<div class="form-result-7"><div class="form-horiz"></div></div>';
            } else if (q8 == 'b') {
                personBlock += '<div class="form-result-8"><div class="form-vert"></div></div>';

            }


            $('#results').append('<div class="person-block cf">' + personBlock + '</div>');





            //            if (q1 == 'a') {
            //                $('#results').append('<div class="color-result-1"></div>');
            //            } else if (q1 == 'b') {
            //                $('#results').append('<div class="color-result-2"></div>');
            //            }
            //
            //            if (q2 == 'a') {
            //                $('#results').append('<div class="color-result-1"></div>');
            //            } else if (q2 == 'b') {
            //                $('#results').append('<div class="color-result-2"></div>');
            //            }
            //
            //            if (q3 == 'a') {
            //                $('#results').append('<div class="color-result-1"></div>');
            //            } else if (q3 == 'b') {
            //                $('#results').append('<div class="color-result-2"></div>');
            //            }
            //
            //            if (q4 == 'a') {
            //                $('#results').append('<div class="color-result-1"></div>');
            //            } else if (q4 == 'b') {
            //                $('#results').append('<div class="color-result-2"></div>');
            //            }
            //
            //            if (q5 == 'a') {
            //                $('#results').append('<div class="color-result-1"></div>');
            //            } else if (q5 == 'b') {
            //                $('#results').append('<div class="color-result-2"></div>');
            //            }
            //
            //            if (q6 == 'a') {
            //                $('#results').append('<div class="color-result-1"></div>');
            //            } else if (q6 == 'b') {
            //                $('#results').append('<div class="color-result-2"></div>');
            //            }
            //
            //            if (q7 == 'a') {
            //                $('#results').append('<div class="color-result-1"></div>');
            //            } else if (q7 == 'b') {
            //                $('#results').append('<div class="color-result-2"></div>');
            //            }
            //
            //            if (q8 == 'a') {
            //                $('#results').append('<div class="color-result-1"></div>');
            //            } else if (q8 == 'b') {
            //                $('#results').append('<div class="color-result-2"></div>');
            //            }
            //
            //            $('#results').append('<div class="d">' + realNameInput + '</div>')
            //            $('#results').append('<div class="e">' + realCountryInput + '</div>')

        });
    };

    startListening();




    /*var database = firebase.database();
    var ref = database.ref('stickers');

    //    var submitButton;
    //    submitButton = createButton('submit');


    function submitFunct1() {

        var q1Name = $('question-1').text();
        var q2Age = $('question-2').text();
        var q3Race = $('question-3').text();
        var q4Race = $('question-4').text();

        ref.set({
            Name: q1Name,
            Age: q2Age,
            Race: q3Race,
            Country: q4Race
        });
        event.preventDefault();

        var quizRef = ref.push();

        quizRef.set({
            Name: q1Name,
            Age: q2Age,
            Race: q3Race,
            Country: q4Race
        });

    }

    var submit = document.getElementsByTagName('button')[0];


    submit.onclick = submitFunct1;*/



    $(".write-name").keypress(function (e) {
        return e.which != 13;
    });
    $(".write-age").keypress(function (e) {
        return e.which != 13;
    });
    $(".write-race").keypress(function (e) {
        return e.which != 13;
    });
    $(".write-Country").keypress(function (e) {
        return e.which != 13;
    });

    $('input.box-1').on('change', function () {
        $('input.box-1').not(this).prop('checked', false);

    });

    $('input.box-2').on('change', function () {
        $('input.box-2').not(this).prop('checked', false);

    });

    $('input.box-3').on('change', function () {
        $('input.box-3').not(this).prop('checked', false);

    });

    $('input.box-4').on('change', function () {
        $('input.box-4').not(this).prop('checked', false);

    });

    $('input.box-5').on('change', function () {
        $('input.box-5').not(this).prop('checked', false);

    });

    $('input.box-6').on('change', function () {
        $('input.box-6').not(this).prop('checked', false);

    });

    $('input.box-7').on('change', function () {
        $('input.box-7').not(this).prop('checked', false);

    });

    $('input.box-8').on('change', function () {
        $('input.box-8').not(this).prop('checked', false);

    });


});
