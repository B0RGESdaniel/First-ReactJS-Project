import React from 'react';

// desestruturando o que o componente recebe
export default function Header({ title }){
    return (
       <header>
           <h1>{title}</h1>
       </header>
    )
}