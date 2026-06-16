const boardDiv = document.getElementById("board");

let board = ["","","","","","","","",""];

function createBoard(){

    boardDiv.innerHTML = "";

    board.forEach((cell,index)=>{

        const div = document.createElement("div");

        div.classList.add("cell");

        div.innerText = cell;

        div.addEventListener("click",()=>playerMove(index));

        boardDiv.appendChild(div);
    });
}

async function playerMove(index){

    if(board[index] !== "") return;

    board[index] = "X";

    createBoard();

    const response = await fetch(
        "http://127.0.0.1:5000/move",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({board})
        }
    );

    const data = await response.json();

    if(data.position !== -1){
        board[data.position] = "O";
    }

    createBoard();
}

function restartGame(){
    board = ["","","","","","","","",""];
    createBoard();
}

createBoard();
