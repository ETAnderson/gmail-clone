import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { selectSendMessageIsOpen } from './features/mail/mailSlice';
import { selectUser } from './features/user/userSlice';
import { useSelector } from 'react-redux';
import Login from './Login';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)

  return (
    <Router>
      {!user ? (
        <Login />
      ): (
        <div className="app">
          <Header />
          <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/mail" element={<Mail />}/>
            <Route path="/" element={<EmailList />}/>
          </Routes>
        </div>

        {sendMessageIsOpen && <SendMail />}
      </div>
      )}
    </Router>
  );
}

export default App;
