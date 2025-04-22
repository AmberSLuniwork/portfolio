document.addEventListener('DOMContentLoaded', function() {

    //mobile menu functionality.

    function toggleMenu() {
        const navList = document.querySelector('.mobilenav');
        console.log("You've toggled the mobile nav.")        
        navList.classList.toggle('active');
    }

    document.addEventListener('click', function (event) {
        // Check if the clicked element is the arrow
        if (event.target && event.target.id === 'hamburger') {
            toggleMenu();
        }
        if(event.target && event.target.id ==='removenav'){
            toggleMenu();
        }
    });

    //collapsibles
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        console.log("You collapsed or uncollapsed somethin.")
        var collapsiblecontent = this.nextElementSibling;
        if (collapsiblecontent.style.maxHeight){
        collapsiblecontent.style.maxHeight = null;
        } else {
        collapsiblecontent.style.maxHeight = collapsiblecontent.scrollHeight + "px";
        } 
    });
    }
    
    //party mode
    //document.body.addEventListener('click', function(event) {
        // Check if the clicked element is partytime
        //if (event.target.id === 'partytime') {
            //const partyToggle = event.target;
            //const discoBall = document.getElementById('discoBall');
            
            // Ensure disco ball is available (had some trouble with it loadin before the template, did this as a check!)
            //if (!discoBall) return;

            //discoBall.style.display = "none";
            
            // Toggle party mode
            //if (partyToggle.classList.contains('active')) {
              //  partyToggle.textContent = "Party mode: OFF";
                //partyToggle.classList.remove('active');
                //partyToggle.classList.add('inactive');
                
                //document.title = document.title.replace('🎉 ', '')
            //} else {
             //   partyToggle.textContent = "Party mode: ON";
               // partyToggle.classList.remove('inactive');
                //partyToggle.classList.add('active');
                
               // discoBall.style.display = "block";
                //discoBall.style.top = "-10px";
               // document.title = '🎉 ' + document.title;
            //}
        //}
    //});
});