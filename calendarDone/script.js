// 🥵👨🏻‍💻🥳

const ROOMS = [
    {
        title: `Green`,
        days: [`Monday`, `Tuesday`, `Wednesday`],
        hours: {
            start: 10,
            end: 18
        }
    },
    {
        title: `Red`,
        days: [`Wednesday`, `Thursday`, `Friday`],
        hours: {
            start: 12,
            end: 19
        }
    },
    {
        title: `Yellow`,
        days: [`Tuesday`, `Friday`, `Sunday`],
        hours: {
            start: 10,
            end: 17
        }
    }
];

const PARTICIPANTS = [`Jack`, `Taras`,`Volodymyr`,`Olena`];

const meetingForm = document.querySelector(`#meetingForm`);
const meetingFormTitle = document.querySelector(`#meetingFormTitle`);
const meetingFormRoom = document.querySelector(`#meetingFormRoom`);
const meetingFormDay = document.querySelector(`#meetingFormDay`);
const meetingFormHour = document.querySelector(`#meetingFormHour`);
const meetingFormParticipants = document.querySelector(`#meetingFormParticipants`);

const roomsTables = document.querySelector(`#roomsTables`);

const getStorageData = key => {
    let storage = localStorage.getItem(key);
    storage = storage ? JSON.parse(storage) : [];
    return storage;
}

const getRooms = () => ROOMS.map(item => item.title);

const renderFormRooms = () => {
    meetingFormRoom.innerHTML = getRooms()
        .map(item => `<option value="${item}">${item}</option>`)
        .join(``);
}

const getDaysForRoom = room => ROOMS.find(item => item.title === room).days;

const renderFormDays = room => {
    meetingFormDay.innerHTML = getDaysForRoom(room)
        .map(item => `<option value="${item}">${item}</option>`)
        .join(``);
}

const getHoursForRoom = room => {
    let currentRoom = ROOMS.find(item => item.title === room);
    let startHour = currentRoom.hours.start; // 10
    let endHour = currentRoom.hours.end; // 18

    let hours = [];
    for(; startHour<=endHour; startHour++) hours.push(startHour);
    return hours;
}

const renderFormHours = room => {
    meetingFormHour.innerHTML = getHoursForRoom(room)
        .map(item => `<option value="${item}">${item}:00</option>`)
        .join(``);
}

const renderPatricipants = () => {
    meetingFormParticipants.innerHTML = PARTICIPANTS
        .map(item => `<option value="${item}">${item}</option>`)
        .join(``);
}

meetingFormRoom.addEventListener(`change`, e => {
    renderFormDays(e.target.value);
    renderFormHours(e.target.value);
})

meetingForm.addEventListener(`submit`, e=>{
    e.preventDefault();

    let newMeeting = {
        title: meetingFormTitle.value,
        room: meetingFormRoom.value,
        day: meetingFormDay.value,
        hour: meetingFormHour.value,
        participants: [...meetingFormParticipants.selectedOptions].map(item => item.value)
    }

    let storageMeetings = getStorageData(`meetings`);

    let meetingExist = storageMeetings.find(meeting => {
        return meeting.day === newMeeting.day 
        && meeting.hour === newMeeting.hour 
        && meeting.room === newMeeting.room
    });

    if(meetingExist){
        console.log(`🥵 Meeting on ${newMeeting.day} at ${newMeeting.hour} on ${newMeeting.room} already exist!`);
        return;
    }

    const meetingsDayHour = storageMeetings
        .filter(meet => meet.day === newMeeting.day && meet.hour === newMeeting.hour);

    let busyParticipants = [];
    newMeeting.participants
        .forEach(participant => {
            meetingsDayHour.forEach(meet => {
                let currentParticipantBusy = meet.participants.find(user => user === participant);
                if(currentParticipantBusy) busyParticipants.push(participant);
            })
        });

    if(busyParticipants.length){
        busyParticipants.forEach(item => console.log(`👨🏻‍💻 ${item} already busy on ${newMeeting.day} at ${newMeeting.hour}!`));
        return;
    }

    storageMeetings.push(newMeeting);
    localStorage.setItem(`meetings`, JSON.stringify(storageMeetings));
    renderMeeting(newMeeting);
    console.log(`🥳 Meeting on ${newMeeting.day} at ${newMeeting.hour} on ${newMeeting.room} successfully created!`)
});

const renderCaption = roomTitle => `<caption>Calendar for ${roomTitle} room</caption>`;

const renderThead = roomDays => {
    return `<thead>
        <tr>
            <th></th>
            ${roomDays.map(item => `<th>${item}</th>`).join(``)}
        </tr>
    </thead>`;
}

const renderTbody = room => {
    let TRs = getHoursForRoom(room.title)
        .map(hour => `<tr>
            <td>${hour}:00</td>
            ${room.days.map(day => `<td data-hour="${hour}" data-day="${day}"></td>`).join(``)}
        </tr>`)
        .join(``);

    return `<tbody>${TRs}</tbody>`;
}

const renderTable = room => {
    return `<table id="room${room.title}">
        ${renderCaption(room.title)}
        ${renderThead(room.days)}
        ${renderTbody(room)}
    </table>`;
}

const renderRoomsTables = () => {
    let renderedTables = ROOMS
    .map(room => renderTable(room)) // <table>...</table>
    .join(``);

    roomsTables.innerHTML = renderedTables;
}

const renderMeeting = meeting => {
    let td = document.querySelector(`table#room${meeting.room} td[data-day="${meeting.day}"][data-hour="${meeting.hour}"]`);
    
    let meetingBlock = document.createElement(`div`);
    meetingBlock.className = `meeting__block`;
    meetingBlock.innerHTML = `<h3>${meeting.title}</h3>
    <p>Participants: ${meeting.participants.join(`, `)}</p>`;

    let deleteBtn = document.createElement(`button`);
    deleteBtn.innerHTML = `Delete meeting`;
    deleteBtn.addEventListener(`click`, () => {
        let storageMeetings = getStorageData(`meetings`);

        let meetIndex = storageMeetings
            .findIndex(item => {
                return item.day === meeting.day 
                && item.hour === meeting.hour 
                && item.room === meeting.room
            });

        storageMeetings.splice(meetIndex, 1);
        localStorage.setItem(`meetings`, JSON.stringify(storageMeetings));

        meetingBlock.remove();
    });

    meetingBlock.append(deleteBtn);

    td.append(meetingBlock);
}

const renderStorageMeetings = () => {
    let storageMeetings = getStorageData(`meetings`);
    storageMeetings.forEach(meet => renderMeeting(meet));
}


renderFormRooms();
renderFormDays(meetingFormRoom.value);
renderFormHours(meetingFormRoom.value);
renderPatricipants();

renderRoomsTables();

renderStorageMeetings();