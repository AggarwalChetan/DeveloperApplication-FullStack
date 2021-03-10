import React from 'react';

class DeveloperProfile extends React.Component {


    constructor(props){
        super(props);
        this.state = {};
    }


    componentD() {
        fetch(`api/developers/AggarwalChetan`)
            .then(response => response.json())
            .then(response => {
                this.setState({ github_id: response })
            });
    }

    render() {
        return (
            <div>Developer {this.state}</div>
        );
    }
}

export default DeveloperProfile;