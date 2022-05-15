import React from 'react';
import Loading from '../Shared/Loading';

const InfoCard = ({ img, cardTitle, bgClass }) => {
    if (!bgClass) {
        return <Loading></Loading>
    }
    return (
        <div className={`card py-3 lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5 pt-5 lg:pt-1'><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
}

export default InfoCard;