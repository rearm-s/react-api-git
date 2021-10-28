import React from 'react';
import './repo.less'
import {NavLink} from "react-router-dom";

const Repo = (props) => {
    const repo = props.repo

    return (
        <div className="repo">
            <div className="rep-header">
                <div className="repo-header-name">
                    <NavLink to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink>
                </div>
                <div className="repo-header-start">Количество звезд: {repo.stargazers_count}</div>
            </div>
            <br/>
            <div className="repo-last-commit">Последний коммит: {repo.updated_at}</div>
            Ссылка на репозиторий: <a href={repo.html_url} className="repo-link">{repo.html_url}</a>
        </div>
    )
}

export default Repo;