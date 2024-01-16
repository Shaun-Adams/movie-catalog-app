// src/services/AuthContext.js
import { Session, User } from '@supabase/supabase-js';
import { useContext, useState, useEffect, createContext } from 'react';
import {supabase} from './supabaseClient';


const AuthContext = createContext({ session: null, user: null, signOut: () => {} });


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

    const { data: authListener } = supabase.auth.onAuthStateChange(async (_, session) => {
      setSession(session);
      setCurrentUser(session?.user || null);
      setLoading(false)
    });

    setData();

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const value = { session, currentUser, signOut: () => supabase.auth.signOut(), };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
