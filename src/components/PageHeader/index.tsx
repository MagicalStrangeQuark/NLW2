import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from './../../assets/images/logo.svg';
import backIcon from './../../assets/images/icons/back.svg';

import './styles.css';

interface PagerHeaderProps {
    title: string
};

const PageHeader: React.FunctionComponent<PagerHeaderProps> = (props) => {
    return (<header className="pager-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Back" />
            </Link>
            <img src={logoImg} alt="Proffy" />
        </div>

        <div className="header-content">
            <strong>{props.title}</strong>
            {props.children}
        </div>


    </header>);
}

export default PageHeader;