import React, { useEffect, useState } from 'react';
import fakeData from '../../FakeData/FakeData.json'
import VehicleCard from '../VehicleCard/VehicleCard';
const Home = () => {
    const [fakeVehicle, setFakeVehicle] = useState([])
    useEffect(()=>{
        setFakeVehicle(fakeData)
    },[])
    return (
        <div className="container mt-4">
            <div className="row">
                {
                    fakeVehicle.map(vehicle => <VehicleCard vehicle={vehicle} key = {vehicle.id}></VehicleCard>)
                }
            </div>
        </div>
    );
};

export default Home;