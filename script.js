var name = document.querySelector('#name');
var seat = document.querySelector("#seatNext");
var add = document.querySelector("#list");

var waitlist = [];
waitlist.push("Daenerys", "Jon", "Gregor", "Cersei", "Tyrion", "Drogo", "Arya", "Sansa",
 "Joffrey", "Petyr", "Melisandre", "Theon");


 

 add.addEventListener("click", function(){
    var guestName = prompt("Welcome to Generic Mexican Restaurant! Please enter your name. We will seat you momentarily");
    waitlist.push(guestName);
    console.log(waitlist);
    alert(`Welcome ${guestName}!
    We at Generic Mexican Restaurant are honored to invite you into our home. Your table should be ready momentarily. Please grab a drink at the bar while you wait! If you need any further assistance our hosts gladly help.`
    );
 }) 



// setInterval(openTable, 10000);




seat.addEventListener("click", function(){
    var current = waitlist.shift();
    alert("Please seat "  + current + " next.");
    console.log(waitlist);
});