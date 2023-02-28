import * as axios from "axios";
let uuidgen = Math.random().toString(16).slice(2)

const instance = axios.create({
    headers: {
        Authorization: "Bearer bd4d031bad4b2725bbb5e7b7dbee877078287e6e",
        "Content-Type": "application/json",
        "X-Request-Id": uuidgen
    },
    baseURL: 'https://api.todoist.com/rest/v2/'
})

export const todoAPI = {
    addTask(newTask, setItems, items){
        return instance.post(`tasks`, newTask).then(res=>setItems([...items, res.data]))
    },
    getTasks(setItems){
        return instance.get(`tasks`).then(res=> {
            setItems(res.data)
        })
    },
}
