import axios from 'axios'
import { BASE_URL } from '../constants/types'

export const getUserList = () => {
    return axios.get(BASE_URL).then(response => response.data)
}