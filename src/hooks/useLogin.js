import {useEffect, useState} from 'react'
import {projectAuth, projectFirestore} from '../firebase/config'
import {useAuthContext} from './useAuthContext'
import {useNavigate} from "react-router-dom";

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const {dispatch} = useAuthContext()
    const navigate = useNavigate()

    const login = async (email, password) => {
        setError(null)
        setIsPending(true)

        try {
            // login
            const res = await projectAuth.signInWithEmailAndPassword(email, password)

            //update online status
            await projectFirestore.collection('users').doc(res.user.uid).update({online: true})

            // dispatch login action
            dispatch({type: 'LOGIN', payload: res.user})

            // update isPending state
            setIsPending(false)
            setError(null)
            setTimeout(() => {
                navigate('/')
            }, 1500)
        } catch (err) {
            setError(err.message)
            setIsPending(false)
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return {login, isPending, error}
}