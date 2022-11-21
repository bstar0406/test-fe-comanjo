import axios from 'axios';
import Config  from '../config'
const api = axios.create({
    baseURL: Config.baseURL
})



const apis = {
    async registerSeeker(seeker:any){
        let response = await api.post('seekers/signup', seeker)
        return response.data
    },
    async registerCompany(company:any){
        let response = await api.post('company/signup', company)
        return response.data
    },
    async signIn(data:any){
        let response = await api.post('signin', data)
        return response.data
    },
}

export default apis;