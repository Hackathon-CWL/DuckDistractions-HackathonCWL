document.addEventListener('DOMContentLoaded', function() {
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.tab-content');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    document.querySelector('.sidebar-toggle').addEventListener('click', function() {
        const mobileNav = document.querySelector('.mobile-nav');
        mobileNav.classList.toggle('active');
    });

    showSection('get-started');

    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            const tabId = button.getAttribute('data-tab');
            showTab(tabId);
        });
    });

    // Function to show the selected tab
    function showTab(tabId) {
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
});
