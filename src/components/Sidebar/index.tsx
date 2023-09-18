import React, {useState} from 'react';

import styles from './sidebar.module.css';
import Avatar from '../../assets/icons/account_circle.svg';
import DonutRound from '../../assets/icons/donut_large.svg';
import Chat from '../../assets/icons/message.svg';
import VerticalDots from '../../assets/icons/more_vert.svg';
import Search from '../../assets/icons/search.svg'
import Filter from '../../assets/icons/filter_list.svg'
import ChatItem from '../ChatItem';
import DUMMY_USER_DATA from '../../data/DUMMY_USER_DATA.json'

interface sidebarProps {
    onClick: (chatId: string) => void
}

interface chatData {
    chatId: string;
    profileImageUrl?: string;
    name?: string;
    info?: string;
    lastSeen?: string;
    messages: string[];
}

const Sidebar: React.FC<sidebarProps> = ({onClick}): JSX.Element => {
    let profileImage = 'https://veenanews.in/wp-content/uploads/2023/04/14451fcffeebdf14ab11c3c47b37ee9b.jpg'

    const chatDataCollection: chatData[] = DUMMY_USER_DATA

    const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

    const handleChatItemClick = (chatId: string) => {
        onClick(chatId)
        setSelectedChatId(chatId)
    }

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__header}>
                <div className={styles.avatar__img__wrapper}>
                    <img src={profileImage ? profileImage : Avatar} alt="avatar"/>
                </div>
                <div className={styles.sidebar__header__right}>
                    <img src={DonutRound} alt="donut-round-icon"/>
                    <img src={Chat} alt="chat-icon"/>
                    <img src={VerticalDots} alt="vertical-dots-icon"/>
                </div>
            </div>
            <div className={styles.sidebar__search}>
                <div className={styles.search__container}>
                    <img src={Search} alt=""/>
                    <input type="text" placeholder="Search or start a new chat"/>
                </div>
                <div>
                    <img src={Filter} alt=""/>
                </div>
            </div>
            <div className={styles.sidebar__list}>
                {chatDataCollection.map((data) => (
                    <ChatItem
                        key={data.chatId}
                        chatId={data.chatId}
                        profilePhoto={data.profileImageUrl || ''}
                        isSelected={selectedChatId === data.chatId}
                        lastSeen={data.lastSeen || ''}
                        onClick={() => handleChatItemClick(data.chatId)}
                        name={data.name || ''}
                        info={data.info || ''}
                    />
                ))}
            </div>
        </div>
    );
}

export default Sidebar
