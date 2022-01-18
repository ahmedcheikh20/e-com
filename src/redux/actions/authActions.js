import axios from 'axios'
import { USER_FAIL, USER_REGISTER } from '../types'

export const registre=(formData,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post('http://localhost:5000/api/auth/signup',formData)
        dispatch({type:USER_REGISTER,payload:res.data})
        navigate('/')
        
    } catch (error) {
        dispatch({type:USER_FAIL})
    }
}

export const logout = (navigate) => (dispatch) => {
    dispatch({type: USER_FAIL,payload:""})
    navigate('/login')
}