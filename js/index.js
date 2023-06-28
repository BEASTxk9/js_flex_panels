const panels = document.querySelectorAll('.panel');                  // create variable to fetch div
// console.log(panels);                                              // show all variable data               

// create function to add class 'open' to div
function toggleOpen(){
    console.log('panel clicked and opened');
    this.classList.toggle('open');                                   // adds class .open when somthing is clicked
};
// create function to add class 'open-active' to div
function toggleActive(e){
    // console.log(e.propertyName);                                  // see what css styles are being called
    if(e.propertyName.includes('flex')){
     this.classList.toggle('open-active');                          // adds class .open when somthing is clicked
    }                            
};





panels.forEach(panel => panel.addEventListener('click', toggleOpen));              // eventlistener listens for a click on a panel and run the function
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));     // eventlistener listens for a click on a panel and run the function
