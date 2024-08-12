document.addEventListener('DOMContentLoaded', function () {
    const focusModeContainer = document.getElementById('focus-mode-container');

    function toggleFocusModeButton() {
        
        //some issue in the following line
        const currentSection = document.querySelector('.tab-content.active').id;
        
        //not able to provide any of the following returns
        if (currentSection == 'pomodoro' || currentSection == 'todo-list' || currentSection == 'analytics') {

            focusModeContainer.style.display = 'flex'; // Show the slider button
            console.log('toggle function detects change to targeted tab');

        } else {
            
            //To see the focus button set following property to flex
            focusModeContainer.style.display = 'none'; // Hide the slider button
            console.log('toggle function not able to differentiate change in tab');
        }
    }

    // Run the function on page load
    toggleFocusModeButton();

    // Add an event listener to run the function whenever the section changes
    const menuButtons = document.querySelectorAll('.menuButtons');
    menuButtons.forEach(button => {
        button.addEventListener('click', function () {
            setTimeout(toggleFocusModeButton, 100); // Delay to ensure active section has updated
        });
    });
});
