import {useEffect, useState} from "react";
import {useAuthContext} from "./useAuthContext";

interface UseAdminHook {
    isAdmin: boolean;
    isAuthReady: boolean;
}

export const useAdmin = (): UseAdminHook => {
    const {user, authIsReady} = useAuthContext();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        setIsAdmin(false);
        if (user?.email === "admin1@gmail.com" || user?.email === "admin2@gmail.com" || user?.email === "admin3@gmail.com") {
            setIsAdmin(true);
        }
    }, [user]);

    return {isAdmin, isAuthReady: authIsReady};
};
