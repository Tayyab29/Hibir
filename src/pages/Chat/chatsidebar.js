import React from 'react'
import CustomInput from '../../ui-components/custominput'

const ChatSidebar = () => {

    // Sample data array for chat users
    const chatUsersData = [
        {
            name: 'User1',
            status: 'online',
            date: '11-11-2023',
        },
        {
            name: 'User2',
            status: 'offline',
            date: '12-11-2023',
        },
        {
            name: 'User 3',
            status: 'offline',
            date: '12-11-2023',
        },
        {
            name: 'User 4',
            status: 'offline',
            date: '12-11-2023',
        },
        {
            name: 'User 5',
            status: 'offline',
            date: '12-11-2023',
        },
        {
            name: 'User 6',
            status: 'offline',
            date: '12-11-2023',
        },
        {
            name: 'User 7',
            status: 'offline',
            date: '12-11-2023',
        },
        {
            name: 'User 8',
            status: 'offline',
            date: '12-11-2023',
        },
        {
            name: 'User 9',
            status: 'offline',
            date: '12-11-2023',
        },
        {
            name: 'User 10',
            status: 'offline',
            date: '12-11-2023',
        },
        {
            name: 'User 11',
            status: 'offline',
            date: '12-11-2023',
        },
        {
            name: 'User 12',
            status: 'offline',
            date: '12-11-2023',
        },
        {
            name: 'User 13',
            status: 'offline',
            date: '12-11-2023',
        },
        // Add more chat user data as needed
    ];


    return (
        <>
            <div className='main_div'>
                <div className='pb-3'>
                    <CustomInput type='text' className='chat_search' placeholder="Search" />
                </div>
                {/* Chats Users */}

                {/* Chat Users */}
                <div className='custom-scrollbar'>

                    {chatUsersData.map((user, index) => (
                        <>
                            {/* <div className='chat_users' key={index}> */}
                            <div className={user.status === 'online' ? 'active_user' : 'inactive_user'} key={index}>
                                <div>
                                    <span className='user_names'>{user.name}</span>
                                    <small className='user_status'>{user.status}</small>
                                </div>
                                <div>
                                    <span className='user_date_time'>{user.date}</span>
                                </div>
                            </div>
                        </>
                    ))}
                </div>

            </div>

        </>
    )
}

export default ChatSidebar