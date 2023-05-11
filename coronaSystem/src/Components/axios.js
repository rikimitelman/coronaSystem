// import axios from 'axios'


// const axiosInstans = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' })

// // middleWare
// axiosInstans.interceptors.request.use((req) => {
//     console.log('middleware');
//     return req
// })

// export default axiosInstans
import axios from 'axios'

const axiosInstans = axios.create({ baseURL: 'https://localhost:8000' })

// middleWare
axiosInstans.interceptors.request.use((req) => {
    console.log('middleware');
    return req
})

export default axiosInstans