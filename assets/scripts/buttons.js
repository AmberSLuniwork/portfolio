document.addEventListener('DOMContentLoaded', function() {
    
    document.body.addEventListener('click', function(event) {
        // Check if the clicked element is partytime
        if (event.target.id === 'partytime') {
            const partyToggle = event.target;
            const discoBall = document.getElementById('discoBall');
            
            // Ensure disco ball is available (had some trouble with it loadin before the template, did this as a check!)
            if (!discoBall) return;

            discoBall.style.display = "none";
            
            // Toggle party mode
            if (partyToggle.classList.contains('active')) {
                partyToggle.textContent = "Party mode: OFF";
                partyToggle.classList.remove('active');
                partyToggle.classList.add('inactive');
                
                document.title = document.title.replace('🎉 ', '')
            } else {
                partyToggle.textContent = "Party mode: ON";
                partyToggle.classList.remove('inactive');
                partyToggle.classList.add('active');
                
                discoBall.style.display = "block";
                discoBall.style.top = "-10px";

                document.title = '🎉 ' + document.title;
            }
        }
    });
});