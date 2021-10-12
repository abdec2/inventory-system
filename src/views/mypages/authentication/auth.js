import axios from 'axios'

export const Login = async (args) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/local`, {
            identifier: args.email,
            password: args.password
          })
        return res
    } catch (e) {
        console.log(e)
    }   
}