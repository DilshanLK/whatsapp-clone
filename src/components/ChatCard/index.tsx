import React, {useEffect, useState} from 'react';

import styles from './chatCard.module.css'
import Avatar from '../../assets/icons/account_circle.svg';
import Search from '../../assets/icons/search.svg';
import VerticalDots from '../../assets/icons/more_vert.svg';
import Emoji from '../../assets/icons/insert_emoticon.svg'
import FileClip from '../../assets/icons/attach_file.svg'
import Mic from '../../assets/icons/keyboard_voice.svg'
import Web_Mobile_BG from '../../assets/background/whatsapp_web_mobile.png'
import DUMMY_USER_DATA from '../../data/DUMMY_USER_DATA.json'

interface chatCardProps {
    chatId: string
}

interface chatData {
    chatId: string;
    profileImageUrl?: string;
    name?: string;
    lastSeen?: string;
    messages: string[];
}

const ChatCard: React.FC<chatCardProps> = ({chatId}) => {

    const chatDataCollection: chatData[] = DUMMY_USER_DATA

    const [chatData, setChatData] = useState<chatData | null>(null);

    useEffect(() => {
        const filteredChatData = chatDataCollection.find((data) => data.chatId === chatId)
        setChatData(filteredChatData || null)
    }, [chatId])

    return (
        <div className={styles.chat__section}>
            {chatData && chatData ?
                <div>
                    <div className={styles.chat__bg}/>
                    <div className={styles.chat__header}>
                        <div className={styles.chat__header__profile__image}>
                            <img src={chatData.profileImageUrl ? chatData.profileImageUrl : Avatar} alt="avatar"/>
                        </div>
                        <div className={styles.chat__header__info}>
                            <span className={styles.title}>{chatData.name}</span>
                            <span className={styles.info}>Last seen at {chatData.lastSeen}</span>
                        </div>
                        <div className={styles.chat__header__right}>
                            <img src={Search} alt="search"/>
                            <img src={VerticalDots} alt="vertical-dots-icon"/>
                        </div>
                    </div>
                    <div className={styles.chat__body}>
                        {chatData.messages.map((message, index) => (
                            <div key={index} className={styles.messageElement}>{message}</div>
                        ))}
                    </div>
                    <div className={styles.chat__footer}>
                        <div className={styles.chat__footer__actions}>
                            <img src={Emoji} alt="search"/>
                            <img src={FileClip} alt="search"/>
                        </div>
                        <div className={styles.chat__footer__input}>
                            <input type="text" placeholder="Type a message"/>
                        </div>
                        <div>
                            <img src={Mic} alt="mic"/>
                        </div>
                    </div>
                </div> :
                <div className={styles.chat_empty_bg}>
                    <img src={Web_Mobile_BG} alt=""/>
                    <div>
                        <div className={styles.chat_empty_bg_title}>WhatsApp Web</div>
                        <div className={styles.chat_empty_bg_content}>
                            Send and receive messages without keeping your phone online.
                            <br/>
                            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default ChatCard
