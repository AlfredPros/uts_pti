let num = 4;
let spacing = 1.0 / num;
let temp = "";
let id = 0;

let dangerous_boners = [];

// Function to select random bones
for (let i = 0; dangerous_boners.length < num; i++) {
    // Generate Random Number between 0 and 4*number of players
    const x = Math.floor(Math.random() * (4 * num));
    // Check if the number is already in danger_bones
    if (!dangerous_boners.includes(x)) {
        dangerous_boners.push(x);
    }
}

for (let i = 0; i < num + 2; i++) {
    temp = "";
    temp += "<tr>";

    for (let j = 0; j < num + 2; j++) {

        if (i == 0) { // Header

            temp += '<th style="width: ' + spacing + '%">';
            if (!(j == 0 || j == num + 1)) {

                if (dangerous_boners.includes(id)) {
                    temp += '<img class="dangerous_boners" src="resources/bone.png" onclick="this.hidden=true" style="width:100%; cursor:pointer;" id="bone' + id + '"/>';
                } else {
                    temp += '<img class="safer_boners" src="resources/bone.png" onclick="this.hidden=true" style="width:100%; cursor:pointer;" id="bone' + id + '"/>';
                }
                id++;
            }
            temp += '</th>';
        } else if (i != num + 1) { // Content
            if (j == 0 || j == 1) {
                if (dangerous_boners.includes(id)) {
                    temp += '<td> <img class="dangerous_boners" src="resources/bone.png" onclick="this.hidden=true" style="width:100%; cursor:pointer;" id="bone' + id + '"/> </td>';
                } else {
                    temp += '<td> <img class="safer_boners" src="resources/bone.png" onclick="this.hidden=true" style="width:100%; cursor:pointer;" id="bone' + id + '"/> </td>';
                }
                id++;
            }
            if (j == 0 && i == 1) { // Dog: id="dog"
                temp += '<td colspan="' + num + '" rowspan="' + num + '"> <img src="resources/spike-sleep.png" style="width:100%" id="dog" /></td>';
            }
        } else { // Footer
            temp += "<td>";
            if (!(j == 0 || j == num + 1)) {
                if (dangerous_boners.includes(id)) {
                    temp += '<img class="dangerous_boners" src="resources/bone.png" onclick="this.hidden=true" style="width:100%; cursor:pointer;" id="bone' + id + '"/>';
                } else {
                    temp += '<img class="safer_boners" src="resources/bone.png" onclick="this.hidden=true" style="width:100%; cursor:pointer;" id="bone' + id + '"/>';
                }
                id++;
            }
            temp += "</td>";
        }

    }

    temp += "</tr>"

    $("#game-content").append(temp);
}

for (let i = 0; i < 4 * num; i++) {
    let boner = document.getElementById("bone" + i);
    if (boner.className == "dangerous_boners") boner.addEventListener("click", dangerous_boners_selected);
    else boner.addEventListener("click", safer_boners_selected);
}

function dangerous_boners_selected() {

    // Timer stopped, show 00:00
    timerToggle = 0;
    $("#timer").html("00:00");
    document.getElementById("timer").style.color = "#ff0000";

    //Doge expands, hide bone
    let doge = document.getElementById("dog");
    doge.style = "width:100%; transition: 0.5s ease-in-out; transform: scale(2.5);";

    //KickCurrentPlayer
    KickCurrentPlayer();
}

function safer_boners_selected() {

    // Time restarts, hide bone
    seconds = 9;
    miliSeconds = 99;

}