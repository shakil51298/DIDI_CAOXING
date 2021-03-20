import React, {useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import fakeData from '../../FakeData/FakeData.json'
const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49122.82840063697!2d90.30459973373641!3d23.780305525636333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2shk!4v1616189898974!5m2!1sen!2shk';

const DestinationCheck = () => {
    const { Vehicle } = useParams()
    const [rideCheckOut, setRideCheckOut] = useState({}) 
    const [showForm,setShowForm ] = useState(true)

    useEffect(()=>{
        const findVehicleFromFakeData = fakeData.find(details => details.VehicleName === Vehicle)
        setRideCheckOut(findVehicleFromFakeData)
    },[Vehicle])
    
    //toogle form
    const handleSubmitRide = (e)=>{
        setShowForm(!showForm)
        e.preventDefault()
    }

    // onBluer 
    const cathFeildValue = (e) =>{
    const newRideCheckOut = {...rideCheckOut}
    newRideCheckOut[e.target.name] = e.target.value
    setRideCheckOut(newRideCheckOut)
        
    }
    
    return (
        <div className="container mb-5">
            <div className="row h-50">
                <div className="col-md-5 mt-5">
                    <div>
                        {
                             showForm ? <form className="border p-2">
                                <div class="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Pick To</label>
                            <input type="text" required name="PickTo" className="form-control" onBlur={cathFeildValue} id="exampleInputEmail1" placeholder="Mirpur-1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="text" required name="PickFrom" onBlur={cathFeildValue} placeholder="Dhanmondi" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Date</label>
                            <input type="date" required name="date" onBlur={cathFeildValue} className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Vehicle</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" value={Vehicle} readOnly/>
                        </div>
                            </form> :
                             <div className="checkOutForm">
                                 {/**fixed card */}
                                    <div className="card">
                                        <div className="row p-2">
                                            <div className="col">
                                                <h4>From: <span className="text-danger"> {rideCheckOut.PickTo}</span></h4>
                                            </div>
                                            <div className="col p-1">
                                                <h4>To: <span className="text-danger">{rideCheckOut.PickFrom}</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/**card */}
                                    <div className="card mt-1 p-2">
                                        <div className="row">
                                            <div className="col">
                                                <img style={{width:'50px'}} src={rideCheckOut.thumb1} alt=""/> {rideCheckOut.VehicleName}
                                            </div>
                                            <div className="col">
                                                <img style={{width:'30px'}} src={rideCheckOut.avatar} alt=""/> {rideCheckOut.sit}
                                            </div>
                                            <div className="col">
                                                <h4>{rideCheckOut.price}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/**card */}
                                    <div className="card mt-1 p-2">
                                        <div className="row">
                                            <div className="col">
                                                <img style={{width:'50px'}} src={rideCheckOut.thumb1} alt=""/> {rideCheckOut.VehicleName}
                                            </div>
                                            <div className="col">
                                                <img style={{width:'30px'}} src={rideCheckOut.avatar} alt=""/> {rideCheckOut.sit}
                                            </div>
                                            <div className="col">
                                                <h4>{rideCheckOut.price}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/**card */}
                                    <div className="card mt-1 p-2">
                                        <div className="row">
                                            <div className="col">
                                                <img style={{width:'50px'}} src={rideCheckOut.thumb1} alt=""/> {rideCheckOut.VehicleName}
                                            </div>
                                            <div className="col">
                                                <img style={{width:'30px'}} src={rideCheckOut.avatar} alt=""/> {rideCheckOut.sit}
                                            </div>
                                            <div className="col">
                                                <h4>{rideCheckOut.price}</h4>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        }
                       {
                         showForm ? <button onClick={handleSubmitRide} className="w-100 btn btn-primary mt-2" type="submit">Search</button> : <button onClick={handleSubmitRide} className="w-100 btn btn-primary mt-2" type="submit">Go Back</button>
                       }
                    </div>
                </div>
                <div className="col-md-7 mt-5 ">
                    <iframe src={mapUrl} frameborder="5px" title="did's_GoogleMap" style={{width:'100%', height:"100%"}}></iframe>
                </div>
            </div>
        </div>
    );
};

export default DestinationCheck;



    
