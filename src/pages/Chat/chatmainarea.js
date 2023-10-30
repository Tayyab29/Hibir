import React from 'react'
import CustomInput from '../../ui-components/custominput'

const ChatMainArea = () => {
    return (
        <>
            <div className='main_area_style'>
                <div className='custom-scrollbar_main_area'>
                    <div class="container_chat">
                        <p>Hello. How are you today?</p>
                        <span class="time-right">11:00</span>
                    </div>

                    <div class="container_chat_darker">
                        <p>Hey! I'm fine. Thanks for asking!</p>
                        <span class="time-left">11:01</span>
                    </div>

                    <div class="container_chat">
                        <p>Sweet! So, what do you wanna do today?</p>
                        <span class="time-right">11:02</span>
                    </div>

                    <div class="container_chat_darker">
                        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                        <span class="time-left">11:05</span>
                    </div>
                    <div class="container_chat">
                        <p>Hello. How are you today?</p>
                        <span class="time-right">11:00</span>
                    </div>

                    <div class="container_chat_darker">
                        <p>Hey! I'm fine. Thanks for asking!</p>
                        <span class="time-left">11:01</span>
                    </div>

                    <div class="container_chat">
                        <p>Sweet! So, what do you wanna do today?</p>
                        <span class="time-right">11:02</span>
                    </div>

                    <div class="container_chat_darker">
                        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                        <span class="time-left">11:05</span>
                    </div>
                    <div class="container_chat">
                        <p>Hello. How are you today?</p>
                        <span class="time-right">11:00</span>
                    </div>

                    <div class="container_chat_darker">
                        <p>Hey! I'm fine. Thanks for asking!</p>
                        <span class="time-left">11:01</span>
                    </div>

                    <div class="container_chat">
                        <p>Sweet! So, what do you wanna do today?</p>
                        <span class="time-right">11:02</span>
                    </div>

                    <div class="container_chat_darker">
                        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                        <span class="time-left">11:05</span>
                    </div>
                    <div class="container_chat">
                        <p>Hello. How are you today?</p>
                        <span class="time-right">11:00</span>
                    </div>

                    <div class="container_chat_darker">
                        <p>Hey! I'm fine. Thanks for asking!</p>
                        <span class="time-left">11:01</span>
                    </div>

                    <div class="container_chat">
                        <p>Sweet! So, what do you wanna do today?</p>
                        <span class="time-right">11:02</span>
                    </div>

                    <div class="container_chat_darker">
                        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                        <span class="time-left">11:05</span>
                    </div>
                    <div class="container_chat">
                        <p>Hello. How are you today?</p>
                        <span class="time-right">11:00</span>
                    </div>

                    <div class="container_chat_darker">
                        <p>Hey! I'm fine. Thanks for asking!</p>
                        <span class="time-left">11:01</span>
                    </div>

                    <div class="container_chat">
                        <p>Sweet! So, what do you wanna do today?</p>
                        <span class="time-right">11:02</span>
                    </div>

                    <div class="container_chat_darker">
                        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                        <span class="time-left">11:05</span>
                    </div>
                    <div class="container_chat">
                        <p>Hello. How are you today?</p>
                        <span class="time-right">11:00</span>
                    </div>

                    <div class="container_chat_darker">
                        <p>Hey! I'm fine. Thanks for asking!</p>
                        <span class="time-left">11:01</span>
                    </div>

                    <div class="container_chat">
                        <p>Sweet! So, what do you wanna do today?</p>
                        <span class="time-right">11:02</span>
                    </div>

                    <div class="container_chat_darker">
                        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                        <span class="time-left">11:05</span>
                    </div>
                    <div class="container_chat">
                        <p>Hello. How are you today?</p>
                        <span class="time-right">11:00</span>
                    </div>

                    <div class="container_chat_darker">
                        <p>Hey! I'm fine. Thanks for asking!</p>
                        <span class="time-left">11:01</span>
                    </div>

                    <div class="container_chat">
                        <p>Sweet! So, what do you wanna do today?</p>
                        <span class="time-right">11:02</span>
                    </div>

                    <div class="container_chat_darker">
                        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                        <span class="time-left">11:05</span>
                    </div>
                </div>
                <div className='fixed_input'>
                    <div className='row'>
                        <div className='col-10'>

                            <CustomInput className="messgae_input" placeholder="Type Your Message.. " id="type_message" name="type_message" />
                        </div>
                        <div className='col-2'>
                            <button className='send_btn'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatMainArea