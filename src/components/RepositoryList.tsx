import { RepositoryItem } from "./RepositoryItem";
import '../style/repositories.scss';
import { useEffect, useState } from "react";
import React from "react";

const repository = {
    repository: "unform",
    description: "Forms in JS",
    link: "https://github.com/unform/unform"
}

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/matheussfreitas/repos').then(response => response.json()).then(data => setRepositories(data));
    }, []); //sempre passar dois parametros para evitar de entrar em loop

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    )
}