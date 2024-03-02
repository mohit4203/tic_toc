    let boxes=document.querySelectorAll(".box");
    let btn=document.querySelector(".btn");

    let turn0=true;

    const minpattern =[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ];
    
    boxes.forEach( (box) =>{
        box.addEventListener("click",()=>{
            console.log("box is clicked");
            if(turn0===true){
                box.innerText="X";
                turn0=false;
            }
            else{
                box.innerText="0";
                turn0=true;
            }
            box.disabled=true;
            checkwinner();
        });
    });
    let ret=document.querySelector(".btn");
    const enablebox=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerHTML="";
        }
    };
    const resetgame =()=>{
            turn0=true;
            enablebox();
            mg.innerText="Winner";
        
    }
    ret.addEventListener("click",resetgame);
   
    const disablebtn = ()=>{
        for(let box of boxes){
            box.disabled=true;
        }
    }
    let mg=document.querySelector("#msg");
    const checkwinner=()=>{
        for( let patt of minpattern){
            let val1=boxes[patt[0]].innerText;
            let val2=boxes[patt[1]].innerText;
            let val3=boxes[patt[2]].innerText;

            if(val1!="" && val2!="" && val3!=""){
                if(val1===val2 && val2===val3){
                    mg.innerText=`The Winner of this game is ${val1}`;
                    disablebtn();
                }

            }
        }
    }


