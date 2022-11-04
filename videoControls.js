//_abc0 is the feed on the main page, 
//seems to be an issue if you navigate away from the page or load it for the first time
// var targetNode = document.getElementsByClassName('_abc0')[0];
// var targetNode = document.getElementsByTagName('main')[0];
var targetNode = document.body;

// configuration of the observer
const config = { childList: true };

const callback = function (mutationsList, observer) { 
    // console.log('Changes Detected');

    //_aato is the video container
    let containers = document.getElementsByClassName("_aato")
    for (const container of containers) {
    //add a class to the container
        if(!container.classList.contains("showControls")) {
            container.classList.add("showControls")
            //if it doesn't have the class then trigger the mouse over
            container.addEventListener("mouseover", ()=>{
                addControls(container)
            })
        }    
    }

    
};

// Create observer instance for the feed
const observer = new MutationObserver(callback);// pass in the target node and configuration 
observer.observe(targetNode, config);

//create second observer for when you are on a user's account

function addControls(element) {
    const video = element.getElementsByTagName("video")
    if(!video[0].hasAttribute("controls")) {
        video[0].setAttribute("controls","")
        video[0].style.zIndex = 1;
        // console.log("added controls")
    }        
    // console.log("moused over")
}


