import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Hilory'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Arsen'},
        {id: 5, name: 'Petro'}

    ]


    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Good weather'},
        {id: 3, message: 'I passed all exams'},
        {id: 4, message: 'I have 2 sons'},
        {id: 5, message: 'How are you,mate?'}

    ]
    let dialogsElements = dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = messages
        .map(messages => <Message message={messages.message}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>

    )

}


export default Dialogs;