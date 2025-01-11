// Function to toggle visit status of a city
function toggleVisitStatus(checkbox) {
    const visitedList = document.getElementById('visited-list');
    const nonVisitedList = document.getElementById('non-visited-list');
    const listItem = checkbox.parentElement;
    
    // Check if the checkbox is checked or not
    if (checkbox.checked) {
        // Move item to visited list
        visitedList.appendChild(listItem);
    } else {
        // Move item back to non-visited list
        nonVisitedList.appendChild(listItem);
    }
}

// Initialize the lists based on the stored data
function initializeLists() {
    // Retrieve the visited cities from local storage
    const visitedCities = JSON.parse(localStorage.getItem('visitedCities')) || [];

    // Iterate over all list items and set their checked state
    const allItems = document.querySelectorAll('#non-visited-list li input[type="checkbox"]');
    allItems.forEach(checkbox => {
        if (visitedCities.includes(checkbox.id)) {
            checkbox.checked = true;
            toggleVisitStatus(checkbox); // Move to visited list
        }
    });
}

// Save visited cities to local storage
function saveVisitedCities() {
    const visitedListItems = document.querySelectorAll('#visited-list li input[type="checkbox"]');
    const visitedCities = Array.from(visitedListItems).map(checkbox => checkbox.id);
    localStorage.setItem('visitedCities', JSON.stringify(visitedCities));
}

// Add event listener to save visited cities on page unload
window.addEventListener('beforeunload', saveVisitedCities);

// Initialize the lists when the page loads
window.addEventListener('DOMContentLoaded', initializeLists);
