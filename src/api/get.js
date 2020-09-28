import axios from 'axios'

const username = 'hard'
const password = 'hard'

export const getAllEmployees = () => {
  /** I USE  /thingproxy.freeboard.io/ to avoid  CORS error */
  const allEmployees = axios.get('https://thingproxy.freeboard.io/fetch/http://hiring.rewardgateway.net/list', {
    auth: {
      username,
      password
    }
  })
  return allEmployees
}

