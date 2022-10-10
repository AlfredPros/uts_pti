let mute_btn = document.getElementById("mute");
let track = document.getElementById("background_music");

//mute_btn.addEventListener("click", mute_func);
function mute_func() {
    dir = mute_btn.src;

    dir = dir.split("/");

    path = "";
    for (i = 0; i < dir.length - 1; i++) {
        path = path + dir[i] + "/";
    }

    if (dir[dir.length - 1] == "unmuted.png") {
        path = path + "muted.png"
        mute_btn.src = path;
        track.muted = true;
    } else if (dir[dir.length - 1] == "muted.png") {
        path = path + "unmuted.png"
        mute_btn.src = path;
        track.muted = false;
    } else alert("Error occured!");
}