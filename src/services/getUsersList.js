import axios from 'axios'
import { BASE_URL } from '../constants/types'

export const getUsersList = () => axios.get(BASE_URL)