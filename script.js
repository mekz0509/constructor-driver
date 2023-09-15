
function Driver(name, age, workExperience) {
    this.name = name;
    this.age = age;
    this.workExperience = workExperience;
    this.driveMyCar = function () {
        alert(`${this.name} is the driver Today!`);
    };
    this.carWash = function () {
        alert(`${this.name} is the Carwash Boy Today!`);
    };
}

// driver array 
const drivers = [
    new Driver("Bato", 30, "6 years of experience"),
    new Driver("Digong", 25, "12 years of experience"),
    new Driver("Harry", 25, "1 years of experience"),
];

// Function para sa details at button
function displayDriverDetails(driver) {
    const driverDetails = document.getElementById('driverDetails');
    driverDetails.innerHTML = `
        <h2>${driver.name}</h2>
        <p>Age: ${driver.age}</p>
        <p>Experience: ${driver.workExperience}</p>
        <button id="driveButton">Drive My Car</button>
        <button id="washButton">Car Wash</button>
    `;

    const driveButton = document.getElementById('driveButton');
    const washButton = document.getElementById('washButton');

    driveButton.addEventListener('click', function () {
        driver.driveMyCar();
    });

    washButton.addEventListener('click', function () {
        driver.carWash();
    });
}

// Function pra sa list ng driver
function generateDriverList() {
    const driverList = document.getElementById('driverList');
    driverList.innerHTML = '<h3>Driver List</h3>';

    drivers.forEach((driver, index) => {
        const driverNameElement = document.createElement('p');
        driverNameElement.textContent = driver.name;
        driverNameElement.addEventListener('click', () => {
            displayDriverDetails(driver);
        });

        driverList.appendChild(driverNameElement);
    });
}


generateDriverList();
