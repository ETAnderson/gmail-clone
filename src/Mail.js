import { IconButton } from '@mui/material'
import React from 'react'
import { Navigate } from 'react-router'
import './Mail.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function Mail({}) {
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick ={() => Navigate('/')}>
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>

                    <IconButton>
                        <ErrorIcon />
                    </IconButton>

                    <IconButton>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton>
                        <EmailIcon />
                    </IconButton> 

                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton> 

                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton> 

                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton> 
                    
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton> 
                </div>
                <div className="mail__toolsRight">

                </div>
            </div>
            <h1>hellos</h1>
        </div>
    )
}

export default Mail
