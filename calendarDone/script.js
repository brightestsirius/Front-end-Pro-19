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
    }
];

const PARTICIPANTS = [`Jack`, `Taras`,`Volodymyr`,`Olena`];

const meetForm = document.querySelector(`#meetForm`);

const meetTitle = document.querySelector(`#meetTitle`);
const meetRoom = document.querySelector(`#meetRoom`);
const meetDay = document.querySelector(`#meetDay`);
const meetHour = document.querySelector(`#meetHour`);
const meetParticipiants = document.querySelector(`#meetParticipiants`);

const calendars = document.querySelector(`#calendars`);


const renderFormRooms = () => {
    meetRoom.innerHTML = ROOMS.map(item => `<option value="${item.title}">${item.title}</option>`).join(``);
}

const renderFormDaysByRoom = room => {
    let roomInfo = ROOMS.find(item => item.title === room);
    meetDay.innerHTML = roomInfo.days.map(item => `<option value="${item}">${item}</option>`).join(``);
}

const getRoomHours = hoursObj => {
    let startHour = hoursObj.start;
    let endHour = hoursObj.end;

    let hours = [];
    for(; startHour<=endHour; startHour++) hours.push(startHour);

    return hours;
}

const renderFormHoursByRoom = room => {
    let roomInfo = ROOMS.find(item => item.title === room);
    let hours = getRoomHours(roomInfo.hours);

    meetHour.innerHTML = hours.map(item => `<option value="${item}">${item}:00</option>`).join(``);
}

renderFormRooms();
renderFormDaysByRoom(meetRoom.value);
renderFormHoursByRoom(meetRoom.value);

meetRoom.addEventListener(`change`, e =>{
    renderFormDaysByRoom(e.target.value);
    renderFormHoursByRoom(e.target.value);
});

meetForm.addEventListener(`submit`, e => {
    e.preventDefault();

    let newMeet = {
        title: meetTitle.value,
        room: meetRoom.value,
        day: meetDay.value,
        hour: meetHour.value,
        participiants: [...meetParticipiants.selectedOptions].map(item => item.value)
    }

    let storageMeetings = localStorage.getItem(`meetings`);
    storageMeetings = storageMeetings ? JSON.parse(storageMeetings) : [];

    let meetingsDayHour = storageMeetings
        .filter(meet => meet.day === newMeet.day && meet.hour === newMeet.hour);

    let meetAlreadyExist = meetingsDayHour.find(meet => meet.room === newMeet.room);
    if(meetAlreadyExist){
        console.log(`🥵 Meet on ${newMeet.day} at ${newMeet.hour} in ${newMeet.room} already exist.`);
        return;
    }

    let busyParticiapnts = [];
    newMeet.participiants.forEach(participiant => {
        meetingsDayHour.forEach(meet => {
            meet.participiants.forEach(user => {
                if(user === participiant) busyParticiapnts.push(participiant);
            })
        })
    });

    if(busyParticiapnts.length){
        busyParticiapnts.forEach(participiant => console.log(`👨🏻‍💻 ${participiant} already has meeting at this time.`));
        return;
    }

    storageMeetings.push(newMeet);
    localStorage.setItem(`meetings`, JSON.stringify(storageMeetings));
    console.log(`🥳 Meet on ${newMeet.day} at ${newMeet.hour} in ${newMeet.room} successfully created!`);

    renderMeet(newMeet);
});

const renderThead = data => {
    return `<thead>
        <tr>
            <th></th>
            ${data.map(item => `<th>${item}</th>`).join(``)}
        </tr>
    </thead>`;
}

const renderTbody = data => {
    let TRs = getRoomHours(data.hours)
        .map(hour => {
            return `<tr>
                <td>${hour}:00</td>
                ${data.days
                    .map(day => `<td data-hour="${hour}" data-day="${day}"></td>`)
                    .join(``)
                }
            </tr>`;
        })
        .join(``);
    
    return `<tbody>${TRs}</tbody>`;
}

const renderTable = room => {
    return `<table id="room${room.title}" class="room__calendar">
        <caption>Calendar for ${room.title} room</caption>
        ${renderThead(room.days)}
        ${renderTbody(room)}
    </table>`;
}

const renderMeet = meet => {
    let meetBlock = document.createElement(`div`);
    meetBlock.className = `meet`;
    meetBlock.innerHTML = `<h3>${meet.title}</h3>
    <p>Participants: ${meet.participiants.join(`, `)}</p>`;

    let deleteBtn = document.createElement(`button`);
    deleteBtn.innerHTML = `Delete meet`;
    deleteBtn.addEventListener(`click`, () => {
        meetBlock.remove();

        let storageMeetings = JSON.parse(localStorage.getItem(`meetings`));
        let meetIndex = storageMeetings.findIndex(item => item === meet);
        storageMeetings.splice(meetIndex,1);

        localStorage.setItem(`meetings`, JSON.stringify(storageMeetings));
    })

    meetBlock.append(deleteBtn);

    let td = document.querySelector(`#room${meet.room} td[data-hour="${meet.hour}"][data-day="${meet.day}"]`);
    td.append(meetBlock);
}

const renderMeetings = () => {
    let storageMeetings = localStorage.getItem(`meetings`);
    storageMeetings = storageMeetings ? JSON.parse(storageMeetings) : [];

    storageMeetings.forEach(meet => renderMeet(meet));
}

const renderCalendars = () => {
    return ROOMS
        .map(room => renderTable(room))
        .join(``);
}

calendars.innerHTML = renderCalendars();
renderMeetings();