function calculateAge() {
    const today = new Date();
    const birthdateInput = document.getElementById('birthdate').value;
    const birthdateParts = birthdateInput.split("-");
    const birthYear = parseInt(birthdateParts[0], 10);
    const birthMonth = parseInt(birthdateParts[1], 10) - 1; // Months are 0-indexed in JavaScript
    const birthDay = parseInt(birthdateParts[2], 10);
    const birthDate = new Date(birthYear, birthMonth, birthDay);

    const isValidDate = (date) => {
        return (
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
        );
    };

    if (!isValidDate(birthDate)) {
        alert("Invalid Date Format: Please enter a valid date in YYYY-MM-DD format.");
        return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.436875); // Average days per month
    const ageInYears = Math.floor(ageInDays / 365.25); // Considering leap years

    const resultContainer = document.getElementById('resultContainer');
    const result = document.getElementById('result');

    result.innerHTML = `
        <div class="result-item">
            <h3>Age:</h3>
            <p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
        </div>
        <div class="result-item">
            <h3>Months passed:</h3>
            <p>${ageInMonths}</p>
        </div>
        <div class="result-item">
            <h3>Weeks passed:</h3>
            <p>${ageInWeeks}</p>
        </div>
        <div class="result-item">
            <h3>Days passed:</h3>
            <p>${ageInDays}</p>
        </div>
        <div class="result-item">
            <h3>Hours passed:</h3>
            <p>${ageInHours}</p>
        </div>
        <div class="result-item">
            <h3>Minutes passed:</h3>
            <p>${ageInMinutes}</p>
        </div>
        <div class="result-item">
            <h3>Seconds passed:</h3>
            <p>${ageInSeconds}</p>
        </div>`;
    
    resultContainer.style.display = "block";
}

const ageCalculatorForm = document.getElementById("agecalculator");
ageCalculatorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    calculateAge();
});