const content = "ddddddddddddddddddddd";
const text3 = document.querySelector(".text2");
let i = 0;

function typing(){
    let txt = content[i++];
    text3.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text3.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200)