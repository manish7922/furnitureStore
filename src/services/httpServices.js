import axios from "axios"

let baseUrl="http://localhost:2410"

function get(url){
    return axios.get(baseUrl+url)
}

function post(url,obj){
    return axios.post(baseUrl+url,obj)
}

function put(url,obj){
    return axios.put(baseUrl+url,obj)
}

function deleteApi(url){
    return axios.delete(baseUrl+url)
}

export default{
    get,
    post,
    put,
    deleteApi
}