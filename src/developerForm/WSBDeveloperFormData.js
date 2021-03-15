import React from 'react';
import styles from './WS.module.css';

class WelcomeSectionDeveloperFormData extends React.Component{

    constructor(props){
        super(props);
        this.state={github_id : '', 
        hackerrank_id : '',
        linkedin_id : '',
        medium_id : '',
        twitter_id : '',
        codechef_id : ''};
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit = (event) => {
        if(this.state.github_id === "" || " "){
            alert("Github Id Required");
        }

        const data = { 
            github_id:this.state.github_id,
            hackerrank_id:this.state.hackerrank_id,
            linkedin_id:this.state.linkedin_id,
            medium_id:this.state.medium_id,
            twitter_id:this.state.twitter_id,
            codechef_id:this.state.codechef_id
        };

        fetch('/api', {
            method : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // In order to disable the default behaviour of form
        event.preventDefault();
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                 <input className={styles.welcomeSectionFormRectangleGithub} type="text" name="github_id" value={this.state.github_id} onChange={this.handleChange}></input>
                 <input className={styles.welcomeSectionFormRectangleHackerrank} type="text" name="hackerrank_id" value={this.state.hackerrank_id} onChange={this.handleChange}></input>
                 <input className={styles.welcomeSectionFormRectangleLinkedIn} type="text" name="linkedin_id" value={this.state.linkedin_id} onChange={this.handleChange}></input>
                 <input className={styles.welcomeSectionFormRectangleMedium} type="text" name="medium_id" value={this.state.medium_id} onChange={this.handleChange}></input>
                 <input className={styles.welcomeSectionFormRectangleTwitter} type="text" name="twitter_id" value={this.state.twitter_id} onChange={this.handleChange}></input>
                 <input className={styles.welcomeSectionFormRectangleCodeChef} type="text" name="codechef_id" value={this.state.codechef_id} onChange={this.handleChange}></input>
                 <input className={styles.welcomeSectionFormSubmitRectangleText} type="submit" value="Submit"></input>
            </form>
        );
    }
}
export default WelcomeSectionDeveloperFormData;