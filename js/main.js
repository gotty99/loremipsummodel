//on click hidden menu shows up
document.getElementById("opener").addEventListener("click", openMenu);

function openMenu() {
    document.getElementById("hidden-menu").classList.toggle("opend");
};

//onclick border stays active / onclick border is no longer active
function activation() {
    var element = document.getElementById("opener");
    element.classList.toggle("active");
};

//did not know how to make function that on active class adds class to another element
//my attempt was to do next : make function that watch #span-wraper if it has active class or not
//if it has active class then onClick change ("main-wrapper").style.display = "none" so it will remove all content and mobile menu could be displayed
//my idea was to put on #span-wraper onclick="openFunction()" that hide content and display nav
//and on .mobile-wrapper > span to put onclick="closeFunction" which will do the opposite of "openFunction()"
//i could not find the answer, or i even did but did not know how to inplement it in my code