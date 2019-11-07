import React from 'react';
import { connect } from 'react-redux';
import { fetchPicture } from '../actions';

function RandomPicture(props) {
    console.log(props)
    return (
        <>
            <button onClick={() => props.fetchPicture()}>Random Image</button>
            {props.isLoading && <span>🔃</span>}
            {props.error && <div>{props.error.message}</div>}
            <div className="image">
                <img src={props.picture} alt="" />
            </div>
        </>
    );
}

const mapDispatchToProps = {
    fetchPicture
};

export default connect(state => state, mapDispatchToProps)(RandomPicture);