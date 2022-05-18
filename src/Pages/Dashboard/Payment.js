import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51L0erJFO4ypSR6bZcP2M1BZv8IdBPQHsUwLBgg7G5B06fU7bwGlqtdgWEXDQTrRJMmYFNVCBNt1G79Yk7GlVSSUa00BaitXEwA');


const Payment = () => {
    const { id } = useParams();
    const url = `https://floating-everglades-70004.herokuapp.com/booking/${id}`;
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {appointment.patientName}</p>
                    <h2 className="card-title">Pay for {appointment.treatment}</h2>
                    <p>Your appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-auto">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;