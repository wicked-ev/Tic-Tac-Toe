let Matrix = [["empty","empty","empty"],["empty","empty","empty"],["empty","empty","empty"]];
let turn;
resetTurn(turn);
window.addEventListener('DOMContentLoaded',() => {
    const C00 = document.getElementById('C00');
    console.log();
    addeventL(C00,C00.id);
    const C01 = document.getElementById('C01');
    addeventL(C01,C01.id);
    const C02 = document.getElementById('C02');
    addeventL(C02,C02.id);
    const C10 = document.getElementById('C10');
    addeventL(C10,C10.id);
    const C11 = document.getElementById('C11');
    addeventL(C11,C11.id);
    const C12 = document.getElementById('C12');
    addeventL(C12,C12.id);
    const C20 = document.getElementById('C20');
    addeventL(C20,C20.id);
    const C21 = document.getElementById('C21');
    addeventL(C21,C21.id);
    const C22 = document.getElementById('C22');
    addeventL(C22,C22.id);
    document.getElementById('reset').addEventListener('click',() =>{
        Matrix = [["empty","empty","empty"],["empty","empty","empty"],["empty","empty","empty"]];
        resetTurn(turn);
        const boxes = document.querySelectorAll("#C00.Box.right-border.bottom-border, #C01.Box.right-border.bottom-border, #C02.Box.bottom-border, #C10.Box.right-border.bottom-border, #C11.Box.right-border.bottom-border, #C12.Box.bottom-border, #C20.Box.right-border, #C21.Box.right-border, #C22.Box");
        console.log(boxes);
        boxes.forEach((box) =>{
            box.innerHTML = "&nbsp";
        })
    })

})
function resetTurn(turn){
    turn = Math.floor(Math.random() * 1);
}

function addeventL(Checkbox,id){
    if(Checkbox){
        Checkbox.addEventListener('click',() =>{
            if(Matrix[id[1]][id[2]] == "empty"){
                console.log("checkbox is clicked");
                MarkCheckbox(id);
            }
        })
    }
}
function MarkCheckbox(id){
    if(turn == 0){
        document.getElementById(id).innerHTML = "O";
        Matrix[id[1]][id[2]] = "O";
        turn = 1;
        document.getElementById("Note").innerHTML ="  X turn  ";
        
    }
    else{
        document.getElementById(id).innerHTML = "X";
        Matrix[id[1]][id[2]] = "X";
        turn = 0;
        document.getElementById("Note").innerHTML ="  O turn  ";
    }
}

   
