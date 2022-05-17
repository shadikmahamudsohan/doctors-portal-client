import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Pages/Shared/Loading'
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const navigate = useNavigate()
    const { data: doctors, isLoading, error } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => {
        if (res.status === 403) {
            signOut(auth)
            navigate('/login')
        }
        return res.json()
    }))
    if (isLoading) {
        return <Loading></Loading>
    }
    if (doctors) {
        console.log(doctors);
    };
    return (
        <div>
            <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;