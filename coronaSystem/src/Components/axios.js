
import axios from 'axios'

const axiosInstans = axios.create({ baseURL: 'http://localhost:8000' })


export default axiosInstans