
let num = 4;
let spacing = 1.0 / num;
let temp = "";
let id = 0;

for (let i=0; i<num+2; i++) {

    temp = "";

    temp += "<tr>";

    for (let j=0; j<num+2; j++) {

        if (i == 0) {  // Header

            temp += '<th style="width: '+spacing+'%">';
            if (!(j == 0 || j == num+1)) {
                temp += '<img src="resources/bone.png" style="width:100%" id="bone'+id+'"/>';
                id++;
            }
            temp += '</th>';
        }
        else if (i != num+1) {  // Content
            if (j == 0 || j == 1) {
                temp += '<td> <img src="resources/bone.png" style="width:100%" id="bone'+id+'"/> </td>';
                id++;
            }
            if (j == 0 && i == 1) {  // Dog: id="dog"
                temp += '<td colspan="'+num+'" rowspan="'+num+'"> <img src="resources/spike-sleep.png" style="width:100%" id="dog" /></td>';
            }
        }
        else {  // Footer
            temp += "<td>";
            if (!(j == 0 || j == num+1)) {
                temp += '<img src="resources/bone.png" style="width:100%" id="bone'+id+'"/>';
                id++;
            }
            temp += "</td>";
        }

    }

    temp += "</tr>"

    $("#game-content").append(temp);
}
