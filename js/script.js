
         let listContainer=document.querySelector('.list-container');
         showTask();
        function addTask(){
            let task = document.querySelector('input').value;
           
            if(task.trim()!==''){
                let ul = document.querySelector('ul');
                let li = document.createElement('li');
                let input = document.createElement('input');
                input.setAttribute('type','checkbox');
                input.setAttribute('class','checker');
                input.setAttribute('onclick','completedTask()');
                let p = document.createElement('p');
                p.setAttribute('class','task');
                p.innerText = task;
                p.style.overflow='auto';
                let button = document.createElement('button');
                button.innerText = 'Remove Task';
                button.setAttribute('onclick','removeTask()');
                li.appendChild(input);
                li.appendChild(p);
                li.appendChild(button);
                ul.appendChild(li);
                document.querySelector('input').value = '';
            saveTask();
        }
    }
        function completedTask(){
            if(document.querySelector('.checker').checked==true){
                document.querySelector('.task').style.textDecoration = "line-through";
        }else{
            document.querySelector('.task').style.textDecoration = "none";
        }
        saveTask();
    }
function removeTask(){
    let li = document.querySelector('li');
    li.remove();
}
function saveTask(){
    localStorage.setItem('task',listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('task');
}
    