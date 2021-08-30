import axios from 'axios'

export const reqResApis = axios.create({
    baseURL: 'https://api-deconcesionarias.herokuapp.com/api'
})

