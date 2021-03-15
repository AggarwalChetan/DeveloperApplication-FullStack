import React from 'react';
import styles from './WS.module.css';

class WelcomeSectionBodyDevelopersInfo extends React.Component{
    constructor(){
        super();
        this.state = {data: ''};
    }

    handleIdCheck = () => {
        fetch('/api/developers', {
            method : "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => this.state.data = {data});
    }


    render(){
        // this.handleIdCheck;
        return (
            <button onClick={this.handleIdCheck}></button>
        );
    }
}

export default WelcomeSectionBodyDevelopersInfo;