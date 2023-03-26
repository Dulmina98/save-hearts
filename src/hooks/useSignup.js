import {useEffect, useState} from 'react'
import {projectAuth, projectFirestore} from '../firebase/config'
import {useAuthContext} from './useAuthContext'

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const {dispatch} = useAuthContext()

    const signup = async (firstName, lastName, email, nic, mobileNum, selectBloodGroupValue, password) => {
        setError(null)
        setIsPending(true)

        try {
            // signup
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)

            if (!res) {
                throw new Error('Could not complete signup')
            }

            //create a user document
            await projectFirestore.collection('users').doc(res.user.uid).set({
                firstName: firstName,
                lastName: lastName,
                nic: nic,
                mobileNum: mobileNum,
                bloodGroup: selectBloodGroupValue,
                isAdmin: false
            })

            setIsPending(false) // set isPending to false if signup completes successfully
            dispatch({type: 'SIGNUP_SUCCESS', payload: res.user})
        } catch (err) {
            setError(err.message)
            console.error(err)
        } finally {
            setIsPending(false) // set isPending to false regardless of whether signup succeeds or fails
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return {signup, error, isPending}
}