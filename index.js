// QUERY SELECTORS
infoDisplayButtons = document.getElementById("info-display-buttons");
platinum = document.getElementById("platinum");
blue = document.getElementById("blue");
green = document.getElementById("green");
tech = document.getElementById("tech");
newcomer = document.getElementById("newcomer");
findAllElements = document.querySelectorAll(".info");


// EVENT LISTENERS
infoDisplayButtons.addEventListener("click", handleInfoClick);


// FUNCTIONS
function handleInfoClick(event) {
    event.target.id
    toggleHidden(event.target.id)
};

function toggleHidden(id){

    findAllElements.forEach(result => {
        if (!result.classList.contains(id)){
            toggleClass(result)
        } else if (result.classList.contains(id)){
            if (result.classList.contains("hidden")){
                result.classList.remove("hidden")
                result.classList.add("appear")
            }
        };
    });
};

function toggleClass(result){
    if (!result.classList.contains("hidden")) {
        result.classList.add("hidden")
    };
    if (result.classList.contains("appear")) {
        result.classList.remove("appear")
    };
};