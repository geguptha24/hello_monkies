let emoji = document.querySelector("div");

function myEmoji(){
    if(emoji.innerHTML === "🙈"){
        emoji.innerHTML = "🐵"
    }
    else if(emoji.innerHTML === "🐵"){
        emoji.innerHTML = "🙈";
    }

}

// 🐵🙈