// src/services/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import {supabase} from './supabaseClient';


const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setData = async () => {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        setSession(session)
        setCurrentUser(session?.user)
        setLoading(false);
    };

    setData();
    
    console.log("setCurrentUser " + setCurrentUser)


    const { data: authListener } = supabase.auth.onAuthStateChange(async (_, session) => {
      setCurrentUser(session?.user || null);
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  console.log("currentUser " + currentUser)

  const value = { session, currentUser };
  console.log("Value " + value)

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
