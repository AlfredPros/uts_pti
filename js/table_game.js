
let num = 4;
let spacing = 1.0 / num;
let temp = "";
let id = 0;

let dangerous_boners = [];

// Function to select random bones
function random_bones() {
    for (let i = 0; dangerous_boners.length < num; i++) {
        // Generate Random Number between 0 and 4*number of players
        const x =   Math.floor(Math.random() * (4 * num));
        // Check if the number is already in danger_bones
        if (!dangerous_boners.includes(x)) {
            dangerous_boners.push(x);
        }
    }
}

for (let i=0; i<num+2; i++) {
    random_bones();
    temp = "";
    console.log(dangerous_boners);

    temp += "<tr>";

    for (let j=0; j<num+2; j++) {

        if (i == 0) {  // Header

            temp += '<th style="width: '+spacing+'%">';
            if (!(j == 0 || j == num+1)) {
                
                if (dangerous_boners.includes(id)) {
                    temp += '<img src="resources/bone.png" style="width:100%" id="dangerous_boners'+id+'"/>';
                }
                
                else {
                    temp += '<img src="resources/bone.png" style="width:100%" id="bone'+id+'"/>';
                }
                id++;
            }
            temp += '</th>';
        }
        else if (i != num+1) {  // Content
            if (j == 0 || j == 1) {
                if (dangerous_boners.includes(id)) {
                    temp += '<td> <img src="resources/bone.png" style="width:100%" id="dangerous_boners'+id+'"/> </td>';
                } else {
                    temp += '<td> <img src="resources/bone.png" style="width:100%" id="bone'+id+'"/> </td>';
                }
                id++;
            }
            if (j == 0 && i == 1) {  // Dog: id="dog"
                temp += '<td colspan="'+num+'" rowspan="'+num+'"> <img src="resources/spike-sleep.png" style="width:100%" id="dog" /></td>';
            }
        }
        else {  // Footer
            temp += "<td>";
            if (!(j == 0 || j == num+1)) {
                if (dangerous_boners.includes(id)) {
                    temp += '<img src="resources/bone.png" style="width:100%" id="dangerous_boners'+id+'"/>';
                }
                
                else {
                    temp += '<img src="resources/bone.png" style="width:100%" id="bone'+id+'"/>';
                }
                id++;
            }
            temp += "</td>";
        }

    }

    temp += "</tr>"

    $("#game-content").append(temp);
}

