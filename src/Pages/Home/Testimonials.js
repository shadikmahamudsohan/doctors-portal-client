import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';


const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: '',
            img: people1,
            location: 'Califonia'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: '',
            img: people2,
            location: 'Califonia'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: '',
            img: people3,
            location: 'Califonia'
        },
    ]
    return (
        <section className='my-28'>
            <div className="flex justify-between">
                <div className="">
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className="text-3xl"> What our Patients Says</h2>
                </div>
                <div className="">
                    <img src={quote} alt="" className="lg:w-48 w-24" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
        </section>
    );
};

export default Testimonials;