import {rerenderThree} from "../render";

const bogdan = 'https://kto-ozvuchil.ru/wp-content/uploads/10.png'
const sveta = 'https://vokrug.tv/pic/news/2/1/8/7/2187b5db7c2531c41ffacf8d2a5a0488.jpg'
const dimych = 'https://www.kino-teatr.ru/acter/photo/9/6/414669/1144238.jpg'
const kolya = 'https://www.vokrug.tv/pic/product/4/f/d/3/4fd36a9d82c45d6555fed9d6dd6b7418.jpeg'


let state = {
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
}

export const addPost = () => {
    const newPost = {
        id: 4,
        message: state.profilePage.newChangePost,
        likesKCount: 0
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.newChangePost = '';
    rerenderThree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newChangePost = newText;
    rerenderThree(state)
}

export default state;