import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { closeSendMessage } from './features/mail/mailSlice';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import db from './firebase';
import { collection, addDoc, Timestamp } from "firebase/firestore";


function SendMail() {

    const { register, handleSubmit, watch, formState: { errors} } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        addDoc(collection(db,'emails'), {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: Timestamp.now(),
        });

        dispatch(closeSendMessage());
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon 
                    className="sendMail__close" 
                    onClick={() => dispatch(closeSendMessage())}
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name='to' 
                    placeholder="To" 
                    type="text" 
                    {...register('to', { required: true })} 
                />
                <p className='sendMail__error'>{errors.to && <p>'An email address is required!</p>}</p>   
                <input 
                    name='subject' 
                    placeholder="Subject" 
                    type="text"
                    {...register('subject', { required: true })} 
                />
                <p className='sendMail__error'>{errors.to && <p>'A subject is required!</p>}</p>
                <input
                    name='message' 
                    placeholder="Message.." 
                    type="text"
                    className="sendMail__message"
                    {...register('message', { required: true })} 
                />
                <p className='sendMail__error'>{errors.to && <p>'A message is required!</p>}</p>

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

