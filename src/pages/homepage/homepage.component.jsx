import React from "react";
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'
const HomePage = (props) => {
    return (
        <div className="homepage">
            <Directory></Directory>
            <button onClick={()=>props.history.push('/dummy')}>Dummy</button>
        </div>
    )
}

export default HomePage;