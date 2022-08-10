import React, { useState, useEffect } from 'react'
import axios  from "axios"
import './styles.css'

function Painel() {

    const [ repositories, setRepositories ] = useState([])
    const  url = 'http://localhost:9090/conselho'

    useEffect(() => {
        // a função executada só será essecutada depois da rederização do componnet, ai que ela vai receber a requisição.
        axios.get(url)
        .then(response => {
            setRepositories([response.data])
        })
        .catch(erro => {
            console.error(erro)
        })
    }, [])

    return (
        <div className="container">
            <div className="titulo">Conselho API</div>

            { repositories.map((repo, index) => {
                return(
                    <span className="frase" key={index}>{repo.conselho}</span> 
                )
            })}
        </div>
    );
}

export default Painel