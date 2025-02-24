let btns = document.querySelectorAll(".btn");
let turnX = true;
let newGame = document.querySelector(".hide")
let newGameBtn = document.querySelector("#newGameBtn")
let resetBtn = document.querySelector("#resetGame")
let gameWinner;

let msg = document.querySelector("h5");
let winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

btns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        
        btn.innerText = "X";
        btn.style.backgroundColor = "#FF6669";
        btn.disabled = true;
        btns.forEach(button => button.disabled = true);
       
        arr = arr.filter(value => value !== idx);

        
        if (arr.length > 0) {
           
            const randomIndex = Math.floor(Math.random() * arr.length);
            const compVal = arr[randomIndex];

           
            arr = arr.filter(value => value !== compVal);

            setTimeout(() => {
                btns[compVal].innerText = "O";
                btns[compVal].style.backgroundColor = "#9debff";
                btns[compVal].disabled = true;
                arr.forEach(index => btns[index].disabled = false);

                checkWinner();
                
            }, 500);
        }

        checkWinner();
    });
});

resetBtn.addEventListener("click",()=>{
    arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.forEach((idx)=>{
        btns[idx].disabled = false;
        btns[idx].innerText = "";
        btns[idx].style.backgroundColor = "white";
    })
})

const disableBtns = () =>{
    for(let btn of btns){
        btn.disabled = true;
    }
}
const checkWinner = () => {
    for (let pat of winArr) {

        let pos1 = btns[pat[0]].innerText;
        let pos2 = btns[pat[1]].innerText;
        let pos3 = btns[pat[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                gameWinner = pos2;
                if(gameWinner === "X"){
                    msg.innerHTML = "<h5>Congratulations! <br><br>You won the Game</h5>";
                    arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                }else{
                    msg.innerHTML = "<h5>Hard Luck! <br><br>Computer won the Game</h5>";
                    arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                }
                
                newGame.classList.remove("hide");
                disableBtns();
            }
        }
    }
};
newGameBtn.addEventListener("click",()=>{
    newGame.classList.add("hide");
    btns.forEach((btn) =>{
        btn.innerText = "";
        btn.style.backgroundColor = "white";
        btn.disabled = false;
        turnX = true;
    })
})