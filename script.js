// Set default tab to Overview when page loads
document.addEventListener('DOMContentLoaded', function() {
    showTab('overview');
});

function showTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-buttons button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show the selected tab
    document.getElementById(tabId).classList.add('active-tab');
    
    // Add active class to the clicked button
    event.currentTarget.classList.add('active');
}