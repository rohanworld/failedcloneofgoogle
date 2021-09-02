const searchinp = document.querySelector("#searchinput");

searchinp.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    }
});

function search(){
    const input = searchinp.Value;
    // window.location.href = "https://www.google.com/search?q=" + input + "&oq=" + input + "&aqs=chrome..69i57j69i59j69i60l3j69i61l3.1590j0j4&sourceid=chrome&ie=UTF-8"
    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C5CHFA_enNZ948NZ948&oq=" + input + "&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8"
}
