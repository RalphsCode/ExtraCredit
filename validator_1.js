// =========================
// EC Assignment 3 - Part I
// Ralph Godkin
// =========================

// Create a new variable to use in testing the prompt contents

let validate = false;

// Request the input from the user if they wanna play again

again = prompt('Run application again? (y or n)', 'y');
again = again.toLowerCase();

// Check if the user input is a 'y' or an 'n'

if ((again == 'y') || (again == 'n')){
    validate = true; 
    }

// If the user input is NOT a 'y' or an 'n', alert user, then have them retry until we get a 'y' or 'n'

    else {
        while (validate == false){
        window.alert("please enter either y or n");
        again = prompt('Run application again? (y or n)', 'y');
        if ((again == 'y') || (again == 'n')){
        validate = true;
        }
        }
    }
// Continue with the rest of the application