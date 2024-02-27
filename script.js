// document.getElementById("bmiform").addEventListener("submit", function (e){

// });

function handleSubmit(e) {
    e.preventDefault();

    const gender =  document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const heightFeet = parseInt(document.getElementById("height-feet").value);
    const heightInches = parseInt(document.getElementById("height-inches").value);
    const weight = parseInt(document.getElementById("weight").value);

    if (gender && age && heightFeet && heightInches && weight) {
        const bmi = calculateBMI(weight, heightFeet, heightInches);
        const category = determineBMICategories(bmi)
        displayResults(bmi, category)
        
    }
}

function calculateBMI(weight, heightFeet, heightInches) {
    const heightMeters = ((heightFeet * 12) + heightInches) * 0.0254

    return weight / (heightMeters * heightMeters)
}

function determineBMICategories(bmi) {
    if (bmi < 18.5) {
        return "skinny";
    } else if (bmi >= 18.5 && bmi < 24.9){
        return "Normal weight";
    } else if (bmi >= 25 && bmi <29.9){
        return "Overweight";
    }
    
}

function displayResults(bmi, category) {
    const resultElement = document.getElementById("result")
    let resultMessage = "your BMI " + bmi.toFixed(2) + "<br>"
    resultMessage += "category: " + category;
    resultElement.innerHTML = resultMessage
}

document.getElementById("bmiForm").addEventListener("submit", handleSubmit);