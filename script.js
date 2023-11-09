var can_length = 16;
var tile_length = "20px";

r = 0;
g = 0;
b = 0;
root = document.getElementById("canvas");

console.log("done1")

const makeCanvas = (canvas_length, cell_length) =>{
    const big = document.createElement('div');
    big.setAttribute("id","main-canvas")

    // 
    
    for(let i = 0; i < canvas_length; i++){
        let row = document.createElement('div');
        row.className = "row";
        for (let j = 0; j < canvas_length; j++){
            let cell = document.createElement('div');
            cell.className = "tile";
            cell.style.width = cell_length;
            cell.style.height = cell_length;
            cell.setAttribute("id",`${i}${j}`);
            cell.addEventListener("mouseenter",(event)=>{
                event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
                
            });
            row.appendChild(cell);
    
        }
        big.appendChild(row);
    }
    return big;
}

let bigger = makeCanvas(can_length, tile_length);

root.appendChild(bigger);

const getValue = ()=>{
    while (root.firstChild){
            root.removeChild(root.firstChild);
        }
    let num_tiles = prompt("Number of Square per side of the new grid")
    num_tiles = Math.min(100,num_tiles);
    let tile_width = ((336 - num_tiles) / num_tiles) + "px";
    let curr = makeCanvas(num_tiles,tile_width);
    root.appendChild(curr);
}

btn = document.getElementById("btn1");
btn.addEventListener("click",getValue)

btn2 = document.getElementById('btn2')
btn2.addEventListener('click',()=>{
    
    const nodeList = document.querySelectorAll(".tile");
    for (let i = 0; i < nodeList.length; i++){
        nodeList[i].addEventListener("mouseenter",(event)=>{
            r = Math.ceil(Math.random() * 255);
            g = Math.ceil(Math.random() * 255);
            b = Math.ceil(Math.random() * 255);
            event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
                       
        });
    };

    
});

btn3 = document.getElementById("btn3");
btn3.addEventListener('click',() => {
    const nodeList = document.querySelectorAll(".tile");
    for (let i = 0; i < nodeList.length; i++){
        var a  = 100;
       
        nodeList[i].addEventListener("mouseenter",(event)=>{
            event.target.style.backgroundColor = `rgb(${a},${a},${a})`;
            if (a <= 0){
                a = 100;
            }
            else{
                a -= 10;
            }
            
        });
        
    }

});

btn4 = document.getElementById("btn4");
btn4.addEventListener("click",()=>{
    const nodeList = document.querySelectorAll(".tile");
    for (let i = 0; i < nodeList.length; i++){       
        nodeList[i].style.backgroundColor = 'rgb(200,200,200)';
        };
});


red = document.getElementById("red");
red.addEventListener('click',()=>{
    const nodeList = document.querySelectorAll(".tile");
    for (let i = 0; i < nodeList.length; i++){
        nodeList[i].addEventListener("mouseenter",(event)=>{
            event.target.style.backgroundColor = "red";
                       
        });
    };
    
});

black = document.getElementById("black");
black.addEventListener('click',()=>{
    const nodeList = document.querySelectorAll(".tile");
    for (let i = 0; i < nodeList.length; i++){
        nodeList[i].addEventListener("mouseenter",(event)=>{
            event.target.style.backgroundColor = "black";
                       
        });
    };

    
});

blue = document.getElementById("blue");
blue.addEventListener('click',()=>{
    const nodeList = document.querySelectorAll(".tile");
    for (let i = 0; i < nodeList.length; i++){
        nodeList[i].addEventListener("mouseenter",(event)=>{
            event.target.style.backgroundColor = "blue";
                       
        });
    };

    
});

red = document.getElementById("red");
red.addEventListener('click',()=>{
    const nodeList = document.querySelectorAll(".tile");
    for (let i = 0; i < nodeList.length; i++){
        nodeList[i].addEventListener("mouseenter",(event)=>{
            event.target.style.backgroundColor = "red";
                       
        });
    };

    
});

yellow = document.getElementById("yellow");
yellow.addEventListener('click',()=>{
    const nodeList = document.querySelectorAll(".tile");
    for (let i = 0; i < nodeList.length; i++){
        nodeList[i].addEventListener("mouseenter",(event)=>{
            event.target.style.backgroundColor = "yellow";
                       
        });
    };

    
});

orange = document.getElementById("orange");
orange.addEventListener('click',()=>{
    const nodeList = document.querySelectorAll(".tile");
    for (let i = 0; i < nodeList.length; i++){
        nodeList[i].addEventListener("mouseenter",(event)=>{
            event.target.style.backgroundColor = "orange";
                       
        });
    };

    
});

purple = document.getElementById("purple");
purple.addEventListener('click',()=>{
    const nodeList = document.querySelectorAll(".tile");
    for (let i = 0; i < nodeList.length; i++){
        nodeList[i].addEventListener("mouseenter",(event)=>{
            event.target.style.backgroundColor = "purple";
                       
        });
    };

    
})

green = document.getElementById("green");
green.addEventListener('click',()=>{
    const nodeList = document.querySelectorAll(".tile");
    for (let i = 0; i < nodeList.length; i++){
        nodeList[i].addEventListener("mouseenter",(event)=>{
            event.target.style.backgroundColor = "green";
                       
        });
    };

    
});

white = document.getElementById("white");
white.addEventListener('click',()=>{
    const nodeList = document.querySelectorAll(".tile");
    for (let i = 0; i < nodeList.length; i++){
        nodeList[i].addEventListener("mouseenter",(event)=>{
            event.target.style.backgroundColor = "white";
                       
        });
    };
    
});

gray = document.getElementById("gray");
gray.addEventListener('click',()=>{
    const nodeList = document.querySelectorAll(".tile");
    for (let i = 0; i < nodeList.length; i++){
        nodeList[i].addEventListener("mouseenter",(event)=>{
            event.target.style.backgroundColor = "gray";
                       
        });
    };
    
});



