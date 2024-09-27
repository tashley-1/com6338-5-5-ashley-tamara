<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .todo-container {
            width: 300px;
            margin: 50px auto;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            background-color: #f4f4f4;
            margin: 5px 0;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .completed {
            text-decoration: line-through;
            color: grey;
        }

        button {
            margin-left: 10px;
        }
    </style>
</head>
<body>

    <div class="todo-container">
        <h2>Todo List</h2>
        <input type="text" id="todo-input" placeholder="Add a new todo">
        <button onclick="addTodo()">Add</button>

        <ul id="todo-list"></ul>
    </div>

    <script>
        function addTodo() {
            const todoInput = document.getElementById('todo-input');
            const todoText = todoInput.value;

            if (todoText === '') return; // Prevent empty todos

            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = todoText;

            const doneButton = document.createElement('button');
            doneButton.textContent = 'Done';
            doneButton.onclick = function () {
                span.classList.toggle('completed');
            };

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function () {
                li.remove();
            };

            li.appendChild(span);
            li.appendChild(doneButton);
            li.appendChild(deleteButton);

            document.getElementById('todo-list').appendChild(li);

            todoInput.value = ''; // Clear input field
        }
    </script>
    
</body>
</html>
