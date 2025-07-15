function calculate(){

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num3").value);
    
    let operation = document.getElementById("operation").value;
    
    let result;


    if(isNaN(num1) || isNaN(num2)){
        let result = "Enter the valid number";
    }

    else{
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;

            case "sub":
                result = num2 - num1;
                break;

            case "mul":
                result = num1 * num2;
                break;

            case "div":
                if(num2 == 0){
                    result = "Error: cannot divide by Zero!";
                    break;
                }

                else{
                    result = num1 / num2;
                }
        
            default:
                break;
        }
    }

    document.getElementById("result").innerText = "Result is" + " " + result;

}
