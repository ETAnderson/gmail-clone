import { Button } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SidebarOption from './SidebarOption';




function Sidebar() {
    return (
        <div className='sidebar'>
            <Button 
                startIcon={<AddIcon fontside ="large"/>}
                className="sidebar__compose" 
            >
                Compose
            </Button>

            <SidebarOption 
                Icon={InboxIcon} 
                title="Inbox" 
                number ={54}
                selected={true}/>
            <SidebarOption 
                Icon={StarIcon} 
                title="Starred" 
                number ={54}/>
            <SidebarOption 
                Icon={AccessTimeIcon} 
                title="Snoozed" 
                number ={54}/>

        </div>
    )
}

export default Sidebar
