let addButton = document.getElementById('add');
let itemContainer = document.getElementById('itemContainer');
let inputField = document.getElementById('inputField');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C",
    "D", "E", "F"];
const color = document.querySelector(".color");
var closebtns = document.getElementsByClassName("close");
var plusbtn = document.getElementsByClassName('rate');
var minusbtn = document.getElementsByClassName('rate');
let rate = 0;

addButton.addEventListener('click', function(){
    if (inputField.value === "") {
        alert("The field is empty.")
    } else {
        rate = 0;
        let ratenumber = document.createElement('r');
        let paragraph = document.createElement('p');
        let button = document.createElement('b');
        let pbutton = document.createElement('pb');
        let mbutton = document.createElement('mb');
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[getRandomNumber()];
        }
        paragraph.style.color = hexColor;
        paragraph.classList.add('paragraph-styling');
        ratenumber.style.color= hex[000000];
        ratenumber.classList.add('rate-styling');
        button.classList.add('close');
        pbutton.classList.add('rate');
        mbutton.classList.add('rate');
        button.innerText = "x";
        pbutton.innerText = "+";
        mbutton.innerText = "-";
        paragraph.innerText = inputField.value;
        ratenumber.innerText = rate;
        let x = inputField.value;
        itemContainer.appendChild(paragraph);
        itemContainer.appendChild(button);
        itemContainer.appendChild(pbutton);
        itemContainer.appendChild(ratenumber);
        itemContainer.appendChild(mbutton);
        inputField.value = "";
        paragraph.addEventListener('click', function () {
            if (paragraph.innerText.includes(" ✔")) {
                paragraph.innerText = x;
                paragraph.style.backgroundColor = "white"
            }else{
                paragraph.innerText += " ✔"
                paragraph.style.backgroundColor = "#d6f7a8"
            }
        })
        button.addEventListener('click', function () {
            itemContainer.removeChild(paragraph);
            itemContainer.removeChild(button);
            itemContainer.removeChild(pbutton);
            itemContainer.removeChild(mbutton);
            itemContainer.removeChild(ratenumber);
        })
        pbutton.addEventListener('click', function () {
            rate++;
            ratenumber.innerText = rate;
        })
        mbutton.addEventListener('click', function () {
            rate--;
            ratenumber.innerText = rate;
        })
    }
})

inputField.addEventListener('keydown', (e)=> {
    if (e.code === "Enter"){
        if (inputField.value === "") {
            alert("The field is empty.")
        }else {
            rate = 0;
            let paragraph = document.createElement('p');
            let button = document.createElement('b');
            let hexColor = '#';
            for (let i = 0; i < 6; i++) {
                hexColor += hex[getRandomNumber()];
            }
            paragraph.style.color = hexColor
            paragraph.classList.add('paragraph-styling');
            button.classList.add('close');
            button.innerText = "x";
            paragraph.innerText = inputField.value;
            let x = inputField.value;
            itemContainer.appendChild(paragraph);
            itemContainer.appendChild(button);
            inputField.value = "";
            paragraph.addEventListener('click', function () {
                if (paragraph.innerText.includes(" ✔")) {
                    paragraph.innerText = x;
                    paragraph.style.backgroundColor = "white"
                } else {
                    paragraph.innerText += " ✔"
                    paragraph.style.backgroundColor = "#d6f7a8"
                }
            })
            button.addEventListener('click', function () {
                itemContainer.removeChild(paragraph);
                itemContainer.removeChild(button);
            })
        }

    }
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}


