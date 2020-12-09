$(document).ready(function(){
// collect user input from form
    let userWords = [
        $('#word1'),
        $('#word2'),
        $('#word3'),
        $('#word4'),
        $('#word5'),
        $('#word6'),
        $('#word7'),
        $('#word8'),
        $('#word9'),
        $('#word10')
    ];
    let title = $('#titleWord');

    // handle form submit
    const submitForm = () => {
        
        let wordArray = createWordArray();

        if(wordArray.length <= 0){
            return;
        }
        let titleWord = title.val();

        window.localStorage.setItem("titleWord",JSON.stringify(titleWord));

        window.localStorage.setItem("puzzle1",JSON.stringify(wordArray));

        window.location.href = "grid.html";
    };

    const createWordArray = () => {
        
        let finalArray = [];

        for (let i =0; i < 10; i++){

            

            if (userWords[i].val().length !== undefined && userWords[i].val().length > 14) {
                let word = userWords[i].value;
                alertWords("smallHeader",word);
                return [];
            }
            else if (userWords[i].val().length > 0 && userWords[i].val().length < 15){

                let word = userWords[i].val().toUpperCase().split("");

                finalArray.push(word);
            }
        }
        return(finalArray);
    };

    const alertWords = (id,word) => {

        let spot = $('#'+id);

        let h5 = $('<h5 style="color:red;"></h5>')
            .text('Please only enter words shorter than 14 characters '+ word +' is too long')
            .appendTo(spot);

        return;        
    };

    const resetForm = () => {
        for (let i = 0; i < userWords.length; i++){
            userWords[i].value = "";
        }
    };

    $('#submit').click(function(){
        submitForm();
        
    })

    $('#reset').click(function(){
        resetForm();
    })

});


