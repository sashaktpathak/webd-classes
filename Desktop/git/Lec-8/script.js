window.onload = function () {
    var todos = []
    
    let list = this.document.getElementById('list')
    let newtask = this.document.getElementById('newtask')
    let addtask = this.document.getElementById('addtask')
    let cleardone = this.document.getElementById('cleardone')
    function retrieveTodos () {
        if (localStorage['todos']) {
            todos = JSON.parse(localStorage['todos'])
        }
    }
    function saveTodos () {
        localStorage['todos'] = JSON.stringify(todos)
    }
    function clearList () {
        while(list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
    cleardone.onclick=function()
    {
        arr.filter((t) => t.done)
    }
    function createListItemFromTodo(todo, pos) {
        let item = document.createElement('li')
        let taskSpan = document.createElement('span')
        let xBtn = document.createElement('button')
        let upBtn = document.createElement('button')
        let downBtn = document.createElement('button')

        taskSpan.innerText = todo.task
        xBtn.innerText = "X"
        upBtn.innerText = "^"
        downBtn.innerText = "V"
        if (todo.done) {
            taskSpan.style.textDecoration = 'line-through'
        }
        xBtn.onclick = function () {
            todos[pos].done = !todos[pos].done
            saveTodos()
            refreshList()
        }
        upBtn.onclick = function()
        {
            if(pos!=0)
            {
                console.log(todos[pos].task);
                let x = todos[pos-1]
                let z = todos[pos];
                console.log(x);
                todos.splice(pos, 1, x);
                console.log(z);
                todos.splice(pos-1,1,z);
            }
         //var y=todos.splice(pos-2, 1, z);
         
         saveTodos()
         refreshList()   
        }
        downBtn.onclick = function()
        {
            if(pos!=todos.length-1)
            {
                console.log(todos[pos].task);
                let x = todos[pos+1]
                let z = todos[pos];
                console.log(x);
                todos.splice(pos, 1, x);
                console.log(z);
                todos.splice(pos+1,1,z);
            }
            saveTodos()
         refreshList() 
        }
        item.setAttribute('data-id', pos)
        item.appendChild(xBtn)
        item.appendChild(upBtn)
        item.appendChild(downBtn)
        item.appendChild(taskSpan)
        return item
    }
    function refreshList () {
        retrieveTodos()
        clearList()
        for (let i = 0; i < todos.length; i++) {
            list.appendChild(createListItemFromTodo(todos[i], i))
        }
    }
    function addTodo () {
        todos.push({
            task: newtask.value,
            done: false
        })
        saveTodos()
        newtask.value = ""
        refreshList()
    }
    addtask.onclick = addTodo
    refreshList()
    console.log(todos.length)


}