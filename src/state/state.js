const bogdan = 'https://dmxg5wxfqgb4u.cloudfront.net/styles/event_results_athlete_headshot/s3/2023-08/GUSKOV_BOGDAN_09-02.png?itok=_0ZSWu_3'
const sveta = 'https://vokrug.tv/pic/news/2/1/8/7/2187b5db7c2531c41ffacf8d2a5a0488.jpg'
const dimych = 'https://www.kino-teatr.ru/acter/photo/9/6/414669/1144238.jpg'
const kolya = 'https://www.vokrug.tv/pic/product/4/f/d/3/4fd36a9d82c45d6555fed9d6dd6b7418.jpeg'


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        messagesPage: {
            postName: [
                {id: 1, name: 'Dimych', avatar: dimych},
                {id: 2, name: 'Sveta', avatar: sveta},
                {id: 3, name: 'Bogdan', avatar: bogdan},
                {id: 4, name: 'Kolya', avatar: kolya}
            ],
            postMessages: [
                {id: 1, type: true, message: 'Hi'},
                {id: 2, type: false, message: 'Hello'},
                {id: 3, type: true, message: 'How are you?'},
                {id: 4, type: true, message: 'Where are you from?'},
                {id: 5, type: false, message: 'I\'m from Kazakhstan.'}
            ],
            newChangeMessage: ' '
        },

        profilePage: {
            postData: [
                {id: 1, message: 'How are you', likesCount: 15},
                {id: 2, message: 'Its my first post', likesCount: 10},
                {id: 3, message: 'Its my next post', likesCount: 12}
            ],
            newChangePost: 'I\'m Grud'
        },

        sideBar: {
            friends: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Julya'}
            ]
        }
    },
    _callSubscriber() {
        // console.log('=====')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    _addPost() {
        // debugger;
        const newPost = {
            id: 4,
            message: this._state.profilePage.newChangePost,
            likesKCount: 0
        }
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newChangePost = '';
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newChangePost = newText;
        this._callSubscriber(this._state)
    },
    // Record and send a new message from a user
    _addNewMessage() {
        const newPost = {
            id: 6,
            type: false,
            message: this._state.messagesPage.newChangeMessage
        }
        this._state.messagesPage.postMessages.push(newPost);
        this._state.messagesPage.newChangeMessage = '';
        this._callSubscriber(this._state)
    },
    _updateNewMessageText(newMessageText) {
        this._state.messagesPage.newChangeMessage = newMessageText;
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        } else if (action.type === ADD_NEW_MESSAGE) {
            this._addNewMessage();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.newMessageText)
        }
    }


}

export const addPostActiveCreator = () => ({
    type: ADD_POST
})

export const onPostChangeActiveCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default store;
window.store = store;