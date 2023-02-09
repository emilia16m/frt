import { rerenderEntireTree } from "./render"

let state = {
    dialogs: [
        {id: 1, name: "Olivia"},
        {id: 2, name: "Rosa"},
        {id: 3, name: "Stefany"},
        {id: 4, name: "Laya"}],
    message: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Im fine"}]
}



export let addMessage = (Message) => {
    let newMessage = {
        id: 4,
        message: Message
    }

    state.message.push(newMessage)
    rerenderEntireTree(state)
}

export default state;
