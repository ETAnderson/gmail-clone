import { Checkbox, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './EmailList.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import Section from './Section';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';
import { onSnapshot } from "firebase/firestore";
import { Query } from './Query';


function EmailList() {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
       const q = Query();
       const unsub = onSnapshot(q, (snapshot) => {
           setEmails(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data()})))
       })
    }, [])

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                <Section Icon={InboxIcon} title='Primary' color='red' selected />
                <Section Icon={PeopleIcon} title='Social' color ='#1A73E8' />
                <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
            </div>

            <div className="emailList__list">
                {emails.map(email => (
                    <EmailRow 
                        key={email.id}
                        to={email.data.to}
                        subject={email.data.subject}
                        message={email.data.message}
                        time={(email.data.timestamp.toDate()).toUTCString()}
                    />
                ))}
                <EmailRow 
                    to='Test'
                    subject='click on a test email for an explanation'
                    message='This application is a live implementation of a Firebase backend and React front end with Redux. Currently, mail composed and sent goes the inbox. The mail titled "test" are all hardcoded in order to populate the front end to see it in action'
                    time='2:56PM'
                />
                <EmailRow 
                    to='Test'
                    subject='click on a test email for an explanation'
                    message='This application is a live implementation of a Firebase backend and React front end with Redux. Currently, mail composed and sent goes the inbox. The mail titled "test" are all hardcoded in order to populate the front end to see it in action'
                    time='2:56PM'
                />
                <EmailRow 
                    to='Test'
                    subject='click on a test email for an explanation'
                    message='This application is a live implementation of a Firebase backend and React front end with Redux. Currently, mail composed and sent goes the inbox. The mail titled "test" are all hardcoded in order to populate the front end to see it in action'
                    time='2:56PM'
                />
                <EmailRow 
                    to='Test'
                    subject='click on a test email for an explanation'
                    message='This application is a live implementation of a Firebase backend and React front end with Redux. Currently, mail composed and sent goes the inbox. The mail titled "test" are all hardcoded in order to populate the front end to see it in action'
                    time='2:56PM'
                />
                <EmailRow 
                    to='Test'
                    subject='click on a test email for an explanation'
                    message='This application is a live implementation of a Firebase backend and React front end with Redux. Currently, mail composed and sent goes the inbox. The mail titled "test" are all hardcoded in order to populate the front end to see it in action'
                    time='2:56PM'
                />
                <EmailRow 
                    to='Test'
                    subject='click on a test email for an explanation'
                    message='This application is a live implementation of a Firebase backend and React front end with Redux. Currently, mail composed and sent goes the inbox. The mail titled "test" are all hardcoded in order to populate the front end to see it in action'
                    time='2:56PM'
                />
                <EmailRow 
                    to='Test'
                    subject='click on a test email for an explanation'
                    message='This application is a live implementation of a Firebase backend and React front end with Redux. Currently, mail composed and sent goes the inbox. The mail titled "test" are all hardcoded in order to populate the front end to see it in action'
                    time='2:56PM'
                />
                <EmailRow 
                    to='Test'
                    subject='click on a test email for an explanation'
                    message='This application is a live implementation of a Firebase backend and React front end with Redux. Currently, mail composed and sent goes the inbox. The mail titled "test" are all hardcoded in order to populate the front end to see it in action'
                    time='2:56PM'
                />
                <EmailRow 
                    to='Test'
                    subject='click on a test email for an explanation'
                    message='This application is a live implementation of a Firebase backend and React front end with Redux. Currently, mail composed and sent goes the inbox. The mail titled "test" are all hardcoded in order to populate the front end to see it in action'
                    time='2:56PM'
                />
                <EmailRow 
                    to='Test'
                    subject='click on a test email for an explanation'
                    message='This application is a live implementation of a Firebase backend and React front end with Redux. Currently, mail composed and sent goes the inbox. The mail titled "test" are all hardcoded in order to populate the front end to see it in action'
                    time='2:56PM'
                />
                <EmailRow 
                    to='Test'
                    subject='click on a test email for an explanation'
                    message='This application is a live implementation of a Firebase backend and React front end with Redux. Currently, mail composed and sent goes the inbox. The mail titled "test" are all hardcoded in order to populate the front end to see it in action'
                    time='2:56PM'
                />
                <EmailRow 
                    to='Test'
                    subject='click on a test email for an explanation'
                    message='This application is a live implementation of a Firebase backend and React front end with Redux. Currently, mail composed and sent goes the inbox. The mail titled "test" are all hardcoded in order to populate the front end to see it in action'
                    time='2:56PM'
                />
                <EmailRow 
                    to='Test'
                    subject='click on a test email for an explanation'
                    message='This application is a live implementation of a Firebase backend and React front end with Redux. Currently, mail composed and sent goes the inbox. The mail titled "test" are all hardcoded in order to populate the front end to see it in action'
                    time='2:56PM'
                />
                <EmailRow 
                    to='Test'
                    subject='click on a test email for an explanation'
                    message='This application is a live implementation of a Firebase backend and React front end with Redux. Currently, mail composed and sent goes the inbox. The mail titled "test" are all hardcoded in order to populate the front end to see it in action'
                    time='2:56PM'
                />
            </div>
        </div>
    )
}

export default EmailList
