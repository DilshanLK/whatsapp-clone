import React, {useState} from 'react';

import styles from './app.module.css';
import Sidebar from './components/Sidebar';
import ChatCard from './components/ChatCard';

function App(): JSX.Element {
    const [selectedChatId, setSelectedChatId] = useState<string>('0')


    const handleChatId = (chatId: string) => {
        setSelectedChatId(chatId)
    }

    return (
        <div className={styles.app}>
            <div className={styles.app__header__line}/>
            <div className={styles.app__body}>
                <Sidebar onClick={(chatId) => handleChatId(chatId)}/>
                <ChatCard chatId={selectedChatId}/>
            </div>
        </div>
    );
}

export default App;
