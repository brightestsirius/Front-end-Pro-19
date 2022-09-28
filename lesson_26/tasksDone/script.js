const API = `https://63345555433198e79dd5da3b.mockapi.io/`;

const TASK_STATUS = {
    0: `To do`,
    1: `In Progress`,
    2: `Need Testing`,
    3: `Testing`,
    4: `Reopened`,
    5: `Done`
}

const controller = async (url, method=`GET`, obj) => {
    let options = {
        method: method,
        headers: {
            "Content-type": "application/json"
        }
    }

    if(obj) options.body = JSON.stringify(obj);

    let request = await fetch(url, options),
        response = request.ok ? request.json() : Promise.reject();

    return response;
}

const createTaskTitle = document.querySelector(`#createTaskTitle`);
const createTaskDescription = document.querySelector(`#createTaskDescription`);
const createTaskReporter = document.querySelector(`#createTaskReporter`);
const createTaskAssignee = document.querySelector(`#createTaskAssignee`);
const createTask = document.querySelector(`#createTask`);
const tasksTable = document.querySelector(`#tasksTable`);

// renderReporters
const renderReporters = async () => {
    try{
        let reporters = await controller(API+`/users`);
        createTaskReporter.innerHTML = reporters
            .map(item => `<option value="${item.name}">${item.name}</option>`)
            .join(``);

    } catch(err){}
}
renderReporters();
// renderReporters

// renderAssignees
const renderAssignees = async () => {
    try{
        let assignees = await controller(API+`/users`);
        createTaskAssignee.innerHTML = assignees
            .map(item => `<option value="${item.name}">${item.name}</option>`)
            .join(``);

    } catch(err){}
}
renderAssignees();
// renderAssignees

// createTask
createTask.addEventListener(`submit`, async e=>{
    e.preventDefault();

    let newTask = {
        title: createTaskTitle.value,
        description: createTaskDescription.value,
        reporter: createTaskReporter.value,
        assignee: createTaskAssignee.value,
        status: 0
    }

    let storageTasks = await controller(API+`/tasks`);
    let assigneeAlreadyBusy = storageTasks.find(task => task.assignee === newTask.assignee && task.status !== 5);

    if(assigneeAlreadyBusy){
        console.log(`Assignee ${newTask.assignee} already busy 🥵.`);
        return;
    } else{
        let taskAdded = await controller(API+`/tasks`, `POST`, newTask);
        renderTask(taskAdded);
    }

})
// createTask

// renderTaskBtn
const renderTaskBtn = (task, status, tdStatus, tdActions) => {
    let btn = document.createElement(`button`);
    btn.className = `task__action`;
    btn.innerHTML = TASK_STATUS[status];
    btn.disabled = task.status===status;

    btn.addEventListener(`click`, async () => {
        let changedStatus = await controller(API+`/tasks/${task.id}`, `PUT`, {status: status});
        console.log(`Status of "${task.title}" successfully changed 🥳`);
        tdStatus.innerHTML = TASK_STATUS[changedStatus.status];

        let btnDisabled = tdActions.querySelector(`button:disabled`);
        if(btnDisabled) btnDisabled.disabled = false;
        btn.disabled = true;
    });

    return btn;
}
// renderTaskBtn

// renderTask
const renderTask = task => {
    let tr = document.createElement(`tr`);
    tr.innerHTML = `<td>${task.title}</td>
    <td>${task.description}</td>
    <td>${task.reporter}</td>
    <td>${task.assignee}</td>`;

    let tdStatus = document.createElement(`td`);
    tdStatus.innerHTML = TASK_STATUS[task.status];

    let tdActions = document.createElement(`td`);

    let btnInProgress = renderTaskBtn(task, 1, tdStatus, tdActions);
    let btnNeedTesting = renderTaskBtn(task, 2, tdStatus, tdActions);
    let btnTesting = renderTaskBtn(task, 3, tdStatus, tdActions);
    let btnReopened = renderTaskBtn(task, 4, tdStatus, tdActions);
    let btnDone = renderTaskBtn(task, 5, tdStatus, tdActions);

    tdActions.append(btnInProgress, btnNeedTesting, btnTesting, btnReopened, btnDone);

    tr.append(tdStatus,tdActions);

    tasksTable.append(tr);
}
// renderTask

// renderStorageTasks
const renderStorageTasks = async () => {
    let tasks = await controller(API+`/tasks`);
    tasks.forEach(task => renderTask(task));
}
renderStorageTasks();
// renderStorageTasks