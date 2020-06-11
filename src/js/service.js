import axios from 'axios'

const EVENT_API_URL = 'http://localhost:8080'
const DETAILS_API_URL = `${EVENT_API_URL}/details`

class DataService {
    retrieveAlldetails(name) {
        return axios.get(`${DETAILS_API_URL}`);
    }
}
export default new DataService()