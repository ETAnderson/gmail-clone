import React, { useState } from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { closeSendMessage } from './features/mail/mailSlice';


function SendMail() {
    // some conditional to switch state for sendMail
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon 
                    className="sendMail__close" 
                    onClick={closeSendMessage}
                />
            </div>

            <form>
                <input placeholder="To" type="text" />   
                <input placeholder="Subject" type="text" />
                <input 
                    placeholder="Message.." 
                    type="text"
                    className="sendMail__message" />

                <div className="sendMail__options">
                    <Button 
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail

