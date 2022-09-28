// 🥳🥵

const API = `https://63347892301bbc0a62124946.mockapi.io`;

const controller = async (url, method=`GET`, obj) => {
    let options = {
        method: method,
        headers: {
            "Content-type": "application/json"
        }
    }

    if(obj) options.body = JSON.stringify(obj);

    let request = await fetch(url, options),
        response = request.ok ? request.json() : Promise.catch(request.statusText);

    return response;
};

const TASK_STATUS = {
    0: `To Do`,
    1: `In progress`,
    2: `Need Testing`,
    3: `Testing`,
    4: `Reopened`,
    5: `Done`,
    6: `Closed`
}

const createTaskReporter = document.querySelector(`#createTaskReporter`);
const createTaskAssignee = document.querySelector(`#createTaskAssignee`);
const createTask = document.querySelector(`#createTask`);
const createTaskTitle = document.querySelector(`#createTaskTitle`);
const createTaskDescription = document.querySelector(`#createTaskDescription`);
const tasksTable = document.querySelector(`#tasksTable`);

// renderReporterSelect
const renderReporterSelect = async () => {
    let users = await controller(API+`/users`);
    //console.log(users);

    createTaskReporter.innerHTML = users
        .map(item => `<option value="${item.name}">${item.name}</option>`)
        .join(``);
}
renderReporterSelect();
// renderReporterSelect

// renderAssigneeSelect
const renderAssigneeSelect = async () => {
    let users = await controller(API+`/users`);
    //console.log(users);

    createTaskAssignee.innerHTML = users
        .map(item => `<option value="${item.name}">${item.name}</option>`)
        .join(``);
}
renderAssigneeSelect();
// renderAssigneeSelect

// createTask
createTask.addEventListener(`submit`, async e => {
    e.preventDefault();

    try{
        let assignee = createTaskAssignee.value;

        let newTask = {
            title: createTaskTitle.value,
            description: createTaskDescription.value,
            reporter: createTaskReporter.value,
            assignee: assignee,
            status: 0
        };

        let storageTasks = await controller(API+`/tasks`);
        let assigneeAlreadyBusy = storageTasks.find(task => task.assignee === assignee && task.status === 1);
        // {...} || undefined

        if(assigneeAlreadyBusy){
            console.log(`User ${assignee} already busy 🥵.`);
            return;
        }

        let addedTask = await controller(API+`/tasks`, `POST`, newTask);
        renderTask(addedTask);
    } catch(err){
        console.log(`In catch:`, err);
    }
})
// createTask

// renderTaskBtn
const renderTaskBtn = status => {
    let btn = document.createElement(`button`);
    btn.className = `task__action`;
    btn.innerHTML = TASK_STATUS[status];
    btn.dataset.status = status;

    return btn;
}
// renderTaskBtn

// changeTaskStatus
const changeTaskStatus = async (task, status) => {
    let statusChanged = await controller(API+`/tasks/${task.id}`, `PUT`, {status: status});
    console.log(`Status of task "${task.title}": ${statusChanged.status}`);
    return statusChanged;
}
// changeTaskStatus

// changeTdStatus
const changeTdStatus = (td, taskChanged) => {
    td.innerHTML = TASK_STATUS[taskChanged.status];
}
// changeTdStatus

// renderTask
const renderTask = task => {
    let tr = document.createElement(`tr`);
    tr.id = task.id;
    tr.innerHTML = `<td>${task.title}</td>
    <td>${task.description}</td>
    <td>${task.reporter}</td>
    <td>${task.assignee}</td>`;

    let tdStatus = document.createElement(`td`);
    tdStatus.innerHTML = TASK_STATUS[task.status];

    let tdBtns = document.createElement(`td`);

    let btnInProgress = renderTaskBtn(1);
    btnInProgress.addEventListener(`click`, async () => {
        let taskChanged = await changeTaskStatus(task, 1);
        changeTdStatus(tdStatus, taskChanged);
        btnInProgress.remove();
        tdBtns.append(btnNeedTesting);
    });

    let btnNeedTesting = renderTaskBtn(2);
    btnNeedTesting.addEventListener(`click`, async () => {
        let taskChanged = await changeTaskStatus(task, 2);
        changeTdStatus(tdStatus, taskChanged);
        btnNeedTesting.remove();
        tdBtns.append(btnTesting);
    });

    let btnTesting = renderTaskBtn(3);
    btnTesting.addEventListener(`click`, async () => {
        let taskChanged = await changeTaskStatus(task, 3);
        changeTdStatus(tdStatus, taskChanged);
        btnTesting.remove();
        tdBtns.append(btnReopened, btnDone);
    });

    let btnReopened = renderTaskBtn(4);
    btnReopened.addEventListener(`click`, async () => {
        let taskChanged = await changeTaskStatus(task, 4);
        changeTdStatus(tdStatus, taskChanged);
        btnReopened.remove();
        btnDone.remove();
        tdBtns.append(btnInProgress);
    });

    let btnDone = renderTaskBtn(5);
    btnDone.addEventListener(`click`, async () => {
        let taskChanged = await changeTaskStatus(task, 5);
        changeTdStatus(tdStatus, taskChanged);
        btnDone.remove();
        btnReopened.remove();
        tdBtns.append(btnClosed);
    });

    let btnClosed = renderTaskBtn(6);
    btnClosed.addEventListener(`click`, async () => {
        let taskChanged = await changeTaskStatus(task, 6);
        changeTdStatus(tdStatus, taskChanged);
        tr.remove();
    });

    switch(task.status){
        case 0:
            tdBtns.append(btnInProgress);
            break;
        case 1:
            tdBtns.append(btnNeedTesting);
            break;
        case 2:
            tdBtns.append(btnTesting);
            break;
        case 3:
            tdBtns.append(btnReopened);
            tdBtns.append(btnDone);
            break;
        case 4:
            tdBtns.append(btnInProgress);
            break;
        case 5:
            tdBtns.append(btnClosed);
            break;
    }

    tr.append(tdStatus, tdBtns);

    tasksTable.append(tr);
}
// renderTask

// renderStorageTasks
const renderStorageTasks = async () => {
    let tasks = await controller(API+`/tasks`);
    tasks
        .filter(task => task.status!==6)
        .forEach(task => renderTask(task));
}
renderStorageTasks();
// renderStorageTasks