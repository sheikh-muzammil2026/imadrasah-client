"use client"
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { ToastContainer } from 'react-toastify';


const Providers = ( {children}) => {
    return (
       <>
           <ThemeProvider attribute="class" defaultTheme="light">
            {children}
         <ToastContainer theme="system" />
           </ThemeProvider>
        
       </>
    );
};

export default Providers;