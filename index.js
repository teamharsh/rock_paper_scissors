const computer_choice = document.getElementById('computer_choice');
const user_choice = document.getElementById('user_choice');
const result = document.getElementById('result');
const possible_choice = document.querySelectorAll('button');
let user_choice_save;
let computer_choice_save;
let result_save;

possible_choice.forEach(possible_choice => possible_choice.addEventListener('click' , (save) =>{
    user_choice_save = save.target.innerHTML;
    user_choice.innerHTML = user_choice_save;
    generate_computer_choice();
    getresult();
}) )

function generate_computer_choice(){
    const random_number = Math.floor(Math.random() * 3) + 1;
    console.log(random_number);

    if(random_number === 1){
        computer_choice_save = "Rock";
    }
    if(random_number === 2){
        computer_choice_save = "Paper";
    }
    if(random_number === 3){
        computer_choice_save = "Scissors";
    }

    computer_choice.innerHTML = computer_choice_save;
}

function getresult() {
    if(computer_choice_save === user_choice_save){
        result_save = 'Its a draw!';
    }
    if(computer_choice_save === 'Rock' && user_choice_save === 'Paper'){
        result_save = 'You win!';
    }
    if(computer_choice_save === 'Rock' && user_choice_save === 'Scissors'){
        result_save = 'You lost!';
    }
    if(computer_choice_save === 'Paper' && user_choice_save === 'Rock'){
        result_save = 'You lost!';
    }
    if(computer_choice_save === 'Paper' && user_choice_save === 'Scissors'){
        result_save = 'You win!';
    }
    if(computer_choice_save === 'Scissors' && user_choice_save === 'Rock'){
        result_save = 'You win!';
    }
    if(computer_choice_save === 'Scissors' && user_choice_save === 'Paper'){
        result_save = 'You lost!';
    }

    result.innerHTML = result_save;
}


  