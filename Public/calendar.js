// Get the current date
const today = new Date();

// Define the months and weekdays
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the calendar element and the month and year select elements
const calendar = document.getElementById("calendar");
const monthSelect = document.getElementById("month-select");
const yearSelect = document.getElementById("year-select");

// Set the options for the month and year select elements
for (let i = 0; i < months.length; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = months[i];
    monthSelect.appendChild(option);
}

for (let i = today.getFullYear(); i <= today.getFullYear() + 5; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
}

// Define a function to generate the calendar grid for a given month and year
function generateCalendar(month, year) {
    // Clear the existing calendar
    calendar.innerHTML = "";

    // Create the calendar header
    const header = document.createElement("div");
    header.className = "calendar-header";
    header.textContent = months[month] + " " + year;
    calendar.appendChild(header);

    // Create the calendar grid
    const grid = document.createElement("div");
    grid.className = "calendar-grid";

    // Calculate the number of days in the selected month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    // Add the weekday labels to the grid
    for (let i = 0; i < weekdays.length; i++) {
        const label = document.createElement("div");
        label.className = "calendar-cell calendar-cell-label";
        label.textContent = weekdays[i];
        grid.appendChild(label);
    }

    // Add the empty cells before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
        const cell = document.createElement("div");
        cell.className = "calendar-cell calendar-cell-empty";
        grid.appendChild(cell);
    }

    // Add the cells for each day of the month
    for (let i = 1; i <= daysInMonth; i++) {
        const cell = document.createElement("div");
        cell.className = "calendar-cell calendar-cell-day";
        cell.textContent = i;
        grid.appendChild(cell);
    }

    // Add the empty cells after the last day of the month
    for (let i = lastDay.getDay(); i < 6; i++) {
        const cell = document.createElement("div");
        cell.className = "calendar-cell calendar-cell-empty";
        grid.appendChild(cell);
    }

    // Append the grid to the calendar element
    calendar.appendChild(grid);
}

// Initialize the calendar with the current month and year
generateCalendar(today.getMonth(), today.getFullYear());

// Add event listeners to the month and year select elements to update the calendar
monthSelect.addEventListener("change", function () {
    const month = parseInt(monthSelect.value);
    const year = parseInt(yearSelect.value);
    generateCalendar(month, year);
});

yearSelect.addEventListener("change", function () {
    const month = parseInt(monthSelect.value);
    const year = parseInt(yearSelect.value);
    generateCalendar(month, year);
});
