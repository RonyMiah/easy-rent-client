import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import 'stream-chat-react/dist/css/index.css';
import './Chat.css';
import ChannelListContainer from './ChannelListContainer';
import ChannelContainer from './ChannelContainer';
import Auth from './Auth';
// import Auth from './Auth';

const cookies = new Cookies();

const apiKey = '62bs9tyydqkw';
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);



const ChatApp = () => {

    const [createType, setCreateType] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    if (!authToken) return <Auth />

    if (authToken) {
        client.connectUser({
            id: cookies.get('userId'),
            name: cookies.get('username'),
            fullName: cookies.get('fullName'),
            image: cookies.get('avatarURL'),
            hashedPassword: cookies.get('hashedPassword'),
            phoneNumber: cookies.get('phoneNumber'),
        }, authToken)
    }

    return (
        <div className='chat__container' >

            <div className="app__wrapper">
                <Chat client={client} theme="team blue">
                    <ChannelListContainer
                        isCreating={isCreating}
                        setIsCreating={setIsCreating}
                        setCreateType={setCreateType}
                        setIsEditing={setIsEditing}
                    />
                    <ChannelContainer
                        isCreating={isCreating}
                        setIsCreating={setIsCreating}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                        createType={createType}
                    />
                </Chat>
            </div>
        </div>
    );
}

export default ChatApp;


