const slots = [1,2,3];
//slots integer


const users = [
    { id: 1, name: 'moe', slot: 1, selected: false },
    { id: 2, name: 'larry', slot: 2, selected: false},
    { id: 3, name: 'curly', slot: 3, selected: false},
    { id: 4, name: 'lucy', slot: 3, selected: true}
]

const firstList = document.getElementById('first-list');
const secondList = document.getElementById('second-list');
const thirdList = document.getElementById('third-list');


const clearBoard = ()=>{
    while(firstList.firstChild){
        firstList.removeChild(firstList.firstChild);
    }
    while(secondList.firstChild){
        secondList.removeChild(secondList.firstChild);
    }
    while(thirdList.firstChild){
        thirdList.removeChild(thirdList.firstChild);
    }
}

const render = ()=>{
    clearBoard();
    users.forEach(user => {
        let li = document.createElement("LI");
        if(user.selected){
            li.setAttribute('class','selectedClass');
        }
        li.innerHTML = user.name;
        if(user.slot === 1){
            firstList.appendChild(li);
        }else if(user.slot === 2){
            secondList.appendChild(li);
        }else if(user.slot === 3){
            thirdList.appendChild(li);
        }
    });
}

render();

const findUserIndex = (username)=>{
    return users.find((val)=>val.name===username).id - 1;
}

const lists = document.getElementById('lists');
lists.addEventListener('click',(ev)=>{
    const targetSelect = ev.target;
    const targetHTML = ev.target.innerHTML;
    if(targetSelect.tagName === 'LI' && targetSelect.className === ''){
        targetSelect.className = 'selectedClass';
        users[findUserIndex(targetHTML)].selected=true;
    }else if(targetSelect.tagName ==='LI' && targetSelect.className === 'selectedClass'){
        targetSelect.className = '';
        users[findUserIndex(targetHTML)].selected=false;
    }else if(targetSelect.className === "button-right"){
        //update user slot then call render
        //deselect
        users.forEach((user)=>{
            if(user.selected === true){
                user.slot++;
                user.selected = false;
            }
        });

        render();

    }else if(targetSelect.className === "button-left"){
        //update user slot then call render
        //deselect
        users.forEach((user)=>{
            if(user.selected === true){
                user.slot--;
                user.selected = false;
            }
        });

        render();
    }else{
        return;
    }
});
