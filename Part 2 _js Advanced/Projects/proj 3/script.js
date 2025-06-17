
// const clock = document.querySelector("#clock")

const clock = document.getElementById('clock')


//-------------------    Approach 1: Using setInterval

// setInterval(function () {
//   let date = new Date();
//   // console.log(date.toLocaleTimeString());

//   clock.innerHTML = date.toLocaleTimeString()
// }, 1000);



//---------------------  Approach 2: Using requestAnimationFrame

// Function to update the clock
function updateClock() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}

// Update immediately when page loads
updateClock();

// Then update every second
setInterval(updateClock, 1000);