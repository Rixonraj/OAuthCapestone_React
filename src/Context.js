import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import{AxiosResponse} from 'axios'
import { type } from '@testing-library/user-event/dist/type';

export const myContext = createContext({});
function Context(props) {
    const [userObject,setuserObject] = useState();

    useEffect(() => {
        axios.get(`${process.env.development.REACT_APP_BACKENDURL}/getuser`,{withCredentials:true})
        .then((res)=>{
            if (res.data) {
                setuserObject(res.data)
            }
        })
      
    }, [])
    

    return (
    <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
  )
}

export default Context