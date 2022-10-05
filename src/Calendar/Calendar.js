import React, {useState} from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import {fr} from "date-fns/locale/fr";
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { set } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const locales= {
    fr: require("date-fns/locale/fr")
}
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2022,9,30),
        end : new Date(2022,9,30) 
    },
    {
        title: "Vacation",
        start: new Date(2022,9,23),
        end : new Date(2022,9,29) 
    },
    {
        title: "Birthday",
        allDay: true,
        start: new Date(2022,9,30),
        end : new Date(2022,9,30) 
    }
]

function DateCalendar(){

    const [newEvent, setNewEvent] = useState({title:"", start:"", end:""})
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvent(){
        setAllEvents([...allEvents, newEvent])
    }

    return(
        <div>
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input type="text" placeholder="Add Title" style={{width:"20%", marginRight:"10px"}}
                value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title : e.target.value}) }
                />
                <DatePicker placeholderText ="Start Date" style={{marginRight : "10px"}}
                selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} 
                />
                <DatePicker placeholderText ="End Date" style={{marginRight : "10px"}}
                selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} 
                />
                <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Add Event</button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end"
            style={{height: 500, margin : "50px"}}/>
        </div>
    )
}



export default DateCalendar;