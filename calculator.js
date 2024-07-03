const prompt = require('prompt-sync')();

function dcbCalculator(){
    var Age = prompt("Enter your Age: ")
    var Height = prompt("Enter your Height: ")
    var Weight = prompt("Enter your Weight: ")
    var Sex = prompt("Choose Male or Female: ")

    console.log("\n");
    console.log("1. Sedentary");
    console.log("2. Lightly Active");
    console.log("3. Moderatively Active");
    console.log("4. Very Active");
    
    var lifestyle = parseInt(prompt("\nHow is your lifestyle: "))

    switch(lifestyle){
        case 1:
            lifestyle_Value = 1.2
            break;
        case 2:
            lifestyle_Value = 1.37
            break;
        case 3:
            lifestyle_Value = 1.55
            break;
        case 4:
            lifestyle_Value = 1.725
            break;
        default:
            lifestyle_Value = 1
    }


    if (Sex.toLowerCase() == "male"){
        var BMR = (9.65 * Weight) + (573 * Height) - (5.08 * Age) + 260
        return BMR * lifestyle_Value
    }
    else if (Sex.toLowerCase() == "female"){
        var BMR = (7.38 * Weight) + (607 * Height) - (2.31 * Age) + 43
        return BMR * lifestyle_Value
    }


}


function calculator() {
    while (true) {
        // Display the menu
        console.log("\nCalculator Menu:");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Daily Caloric Burn Calculator")
        console.log("6. Exit");


        // Get the user's choice
        var choice = parseInt(prompt("Choose an option (1-6): "));

        // Handle the user's choice
        if (choice === 6) {
            console.log("Exiting...");
            break;
        }
        
        if (choice == 5){
            console.log("Your estimated daily caloric burn is: " + dcbCalculator().toFixed(2))
            continue
        }
        // Get the numbers from the user
        if (choice > 0 && choice < 7 && !isNaN(choice)){
            const num1 = parseFloat(prompt("Enter the first number: "));
            const num2 = parseFloat(prompt("Enter the second number: "));
        } 
        else{
            continue
        }


        // Perform the chosen operation
        switch (choice) {
            case 1:
                console.log(`Result: ${num1 + num2}`);
                break;
            case 2:
                console.log(`Result: ${num1 - num2}`);
                break;
            case 3:
                console.log(`Result: ${num1 * num2}`);
                break;
            case 4:
                if (num2 === 0) {
                    console.log("Error: Division by zero is not allowed.");
                } else {
                    console.log(`Result: ${num1 / num2}`);
                }
                break;
            default:
                console.log("Invalid choice. Please choose a valid option (1-5).");
        }
    }
}

// Start the calculator
calculator();
