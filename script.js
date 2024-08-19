const calendarContainer = document.getElementById('calendar-container');
const currentMonthYear = document.getElementById('currentMonthYear');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
];
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

function generateCalendar(year, month) {
    calendarContainer.innerHTML = ''; // Clear the previous calendar

    const monthDiv = document.createElement('div');
    monthDiv.className = 'month';
    
    const monthTitle = document.createElement('h3');
    monthTitle.textContent = `${months[month]} ${year}`;
    monthDiv.appendChild(monthTitle);
    
    const weekdaysDiv = document.createElement('div');
    weekdaysDiv.className = 'weekdays';
    weekdays.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        weekdaysDiv.appendChild(dayDiv);
    });
    monthDiv.appendChild(weekdaysDiv);
    
    const daysDiv = document.createElement('div');
    daysDiv.className = 'days';
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        daysDiv.appendChild(emptyDiv);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        daysDiv.appendChild(dayDiv);
    }
    
    monthDiv.appendChild(daysDiv);
    calendarContainer.appendChild(monthDiv);
    updateMonthYearLabel();
}

function updateMonthYearLabel() {
    currentMonthYear.textContent = `${months[currentMonth]} ${currentYear}`;
}

function showNextMonth() {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    generateCalendar(currentYear, currentMonth);
}

function showPreviousMonth() {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    generateCalendar(currentYear, currentMonth);
}

prevMonthButton.addEventListener('click', showPreviousMonth);
nextMonthButton.addEventListener('click', showNextMonth);

generateCalendar(currentYear, currentMonth);
