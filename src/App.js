import React, { useState } from 'react';
import Header from './components/Header';

function App(){
    
    const [projects, setProjects] = useState(['Front-end', 'React']);
    
    function handleAddProject() {
        // ... se chama spread operator e serve para percorrer um array e copia todas as suas informações
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);

        console.log(projects)
    }

    return (
        <>
            <Header title="Projects" />

            <ul>
                {projects.map(project => (<li key={project}>{project}</li>))}
            </ul>
            
            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;