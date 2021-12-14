import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import './EmailRow.css'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { useNavigate } from 'react-router-dom'

function EmailRow({ to, subject, message, time, id }) {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate('/mail')} className='emailRow'>
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <div className="emailRow__title">
                <h3>{to}</h3>
            </div>
            <div className="emailRow__message">
                <h4>
                    {subject}{""}
                    <span className="emailRow__description">-
                    {message}
                    </span>
                </h4>
            </div>
            <p className="emailRow__time">{new Date(time?.toDate()).toUTCString()}</p>
        </div>
    )
}

export default EmailRow
