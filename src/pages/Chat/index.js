import React from 'react'
import "./chatindex.scss"
import ChatSidebar from './chatsidebar'
import ChatMainArea from './chatmainarea'
const ChatIndex = () => {
    return (
        <>
            <div className="chat_sidebar">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-3'  style={{paddingRight:"0"}}>

                            <ChatSidebar />
                        </div>
                        <div className='col-12 col-md-9' style={{paddingLeft:"0"}}>

                            <ChatMainArea />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatIndex