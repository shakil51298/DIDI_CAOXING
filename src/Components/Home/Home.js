import React, { useEffect, useState } from 'react';
import fakeData from '../../FakeData/FakeData.json'
import VehicleCard from '../VehicleCard/VehicleCard';
import './Home.css'
const Home = () => {
    const [fakeVehicle, setFakeVehicle] = useState([])
    useEffect(()=>{
        setFakeVehicle(fakeData)
    },[])
    return (
        <div className="App">
            <div className="container">
                <div className=" row">
                    {
                        fakeVehicle.map(vehicle => <VehicleCard vehicle={vehicle} key = {vehicle.id}></VehicleCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;