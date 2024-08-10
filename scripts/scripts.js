document.addEventListener('DOMContentLoaded', function() {
    // Function to show the selected tab
    function showTab(tabId) {
        console.log('Showing tab:', tabId); // Debugging line
        const tabs = document.querySelectorAll('.tab-panel');
        const buttons = document.querySelectorAll('.tab-button');
        
        // Hide all tab panels
        tabs.forEach(tab => {
            if (tab.id === tabId) {
                tab.style.display = 'block';
            } else {
                tab.style.display = 'none';
            }
        });

        // Update tab button styles
        buttons.forEach(button => {
            if (button.getAttribute('data-tab') === tabId) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Function to toggle the mobile sidebar
    function toggleSidebar() {
        const mobileNav = document.querySelector('.mobile-nav');
        mobileNav.classList.toggle('active');
    }

    // Add click event listener to sidebar toggle button
    document.querySelector('.sidebar-toggle').addEventListener('click', toggleSidebar);

    // Set default active tab
    showTab('pomodoro');

    // Set up click event listeners for tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            const tabId = button.getAttribute('data-tab');
            showTab(tabId);
        });
    });
});
