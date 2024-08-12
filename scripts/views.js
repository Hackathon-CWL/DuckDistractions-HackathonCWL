const IDs = ['titleButtonHome', 'titleButtonPomodoro', 'titleButtonTodo-list', 'titleButtonAnalytics', 'titleButtonAbout-us'];
function editView(elementIDButton) {
    var button = document.getElementById(elementIDButton);
    button.style.color = '#54976A';
    button.style.fontWeight = 900;
    for (x=0; x<IDs.length; x++) {
        if (elementIDButton != IDs[x]) {
            var reChange = document.getElementById(IDs[x]);
            reChange.style.color = 'black';
            reChange.style.fontWeight = 'bold';
        }
    }
}
editView('titleButtonHome');