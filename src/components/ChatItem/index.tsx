import React from 'react';

import styles from './chatItem.module.css'
import Avatar from '../../assets/icons/account_circle.svg';

interface chatItemProps {
    chatId: string;
    profilePhoto: string;
    name: string;
    lastSeen: string;
    info: string;
    isSelected: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement>, chatId: string) => void;
}

const ChatItem: React.FC<chatItemProps> = (
    {
        chatId,
        profilePhoto,
        name,
        isSelected,
        lastSeen,
        info,
        onClick
    }) => {
    const truncateText = (text: string, maxLength: number): string => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.slice(0, maxLength - 3) + '...';
        }
    }

    return (
        <div onClick={(event) => onClick(event, chatId)}
             className={`${styles.chat__item} ${isSelected ? styles.chat__item__selected : ''}`}>
            <div className={styles.profile__image}>
                <img src={profilePhoto ? profilePhoto : Avatar} alt="avatar"/>
            </div>
            <div className={styles.chat__item__info__wrapper}>
                <div className={styles.chat__item__info}>
                    <span className={styles.title}>{name}</span>
                    <span className={styles.info}>{truncateText(info, 40)}</span>
                </div>
                <div>
                    <span className={styles.timestamp}>{lastSeen}</span>
                </div>
            </div>
        </div>
    )
}

export default ChatItem
