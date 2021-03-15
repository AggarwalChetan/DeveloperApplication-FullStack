import { Link, Redirect, useHistory } from 'react-router-dom';
import styles from './WS.module.css';
import Modal from 'react-modal';
import React, { useState } from 'react';
import WelcomeSectionForm from '../developerForm/WDeveloperForm'
class WelcomeSectionBodyBottomRectangle extends React.Component{
    constructor(props){
        super(props);
        this.state = {value : false};
    }

    showForm = () => {
        this.setState({value : true});
    }

    hideForm = () => {
        this.setState({value : false});
    }

    render(){

        return (
            <div>
                <div>
                    <button className={styles.welcomeBodyBottomRectangle} onClick={this.showForm}></button>
                    <div className={styles.welcomeBodyBottomRectangleFont}>Add developer info</div>
                </div >
                <Modal className={styles.welcomeSection}  isOpen={this.state.value}>
                    <div className={styles.modalFormat}></div>
                    <WelcomeSectionForm/>
                    <button className={styles.welcomeSectionFormCancelRectangle} onClick={this.hideForm}>Cancel</button>
                    <button className={styles.welcomeSectionFormSubmitRectangle} onClick={this.hideForm}></button>
                </Modal>
            </div>
        )
    }
}


export default WelcomeSectionBodyBottomRectangle;