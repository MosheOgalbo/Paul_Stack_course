/// צרו שדה input וכפתור show. כאשר המשתמש ילחץ על show יוצג לו alert עם הטקסט המופיע בשדה.
const inputButton = document.createElement("input");
const showButton = document.createElement("button");
const lineBreak = document.createElement("br")
showButton.innerText = "show"
showButton.addEventListener("click", () => {
    alert(inputButton.value);

})

document.body.appendChild(showButton);
document.body.appendChild(inputButton);

// 2
//האזינו לתזוזת עכבר ובכל תזוזה הדפיסו את קורדינטות x y על המסך.

document.body.addEventListener("mousemove", (e) => {
    console.log(e)
    let mousex = e.clientX; // Gets Mouse X
    let mousey = e.clientY; // Gets Mouse Y
    console.log([mousex, mousey]);
});

//3 
// צרו שדה input וכפתור show. כאשר המשתמש ילחץ על show תוצג לו התמונה מהכתובת המופיעה בשדה ה input

const inputUser = document.createElement("input");
const showButtonImageDisplay = document.createElement("button");
showButtonImageDisplay.innerText = "show"
const ImageDisplay = document.createElement("img");


showButtonImageDisplay.addEventListener("click", () => {

  
    document.body.append(ImageDisplay);
   

})


document.body.appendChild(lineBreak)
document.body.appendChild(showButtonImageDisplay);
document.body.appendChild(inputUser);

