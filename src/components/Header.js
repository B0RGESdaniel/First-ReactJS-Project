import React from 'react';

// desestruturando o que o componente recebe
export default function Header({ title, children}){
    return (
       <header>
           <h1>{title}</h1>
           
           { children }
       </header>
    )
}