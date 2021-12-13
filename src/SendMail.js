import React, { useState } from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { closeSendMessage } from './features/mail/mailSlice';
import { useForm } from 'react-hook-form';


function SendMail() {
    // some conditional to switch state for sendMail
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {

    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon 
                    className="sendMail__close" 
                    onClick={closeSendMessage}
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name='to' 
                    placeholder="To" 
                    type="text" 
                    {...register('to', { required: true })} 
                />   
                <input 
                    name='subject' 
                    placeholder="Subject" 
                    type="text"
                    {...register('subject', { required: true })} 
                />
                <input
                    name='message' 
                    placeholder="Message.." 
                    type="text"
                    className="sendMail__message"
                    {...register('message', { required: true })} 
                />

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

