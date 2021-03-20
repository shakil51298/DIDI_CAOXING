import React, {useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import fakeData from '../../FakeData/FakeData.json'
const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49122.82840063697!2d90.30459973373641!3d23.780305525636333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2shk!4v1616189898974!5m2!1sen!2shk';

const DestinationCheck = () => {
    const { Vehicle } = useParams()

    const [rideCheckOut, setRideCheckOut] = useState({}) 
    // console.log(rideCheckOut.PickTo);
    const [showForm,setShowForm ] = useState(true)
    console.log(showForm.PickTo); 

    useEffect(()=>{
        const findVehicleFromFakeData = fakeData.find(details => details.VehicleName === Vehicle)
        setRideCheckOut(findVehicleFromFakeData)
    })
    const handleSubmitRide = (e)=>{
        
        
        setShowForm(!showForm)
        e.preventDefault()
    }

    const cathFeildValue = (e) =>{
       let isFeildValid;
       if (e.target.name === "PickTo") { 
        isFeildValid = e.target.value
        // console.log(isFeildValid);
     }
       if (e.target.name === "PickFrom") { 
        isFeildValid = e.target.value
        // console.log(isFeildValid);
     }
     if (isFeildValid) {
         const newData = {...rideCheckOut}
         newData[e.target.name] = e.target.value
         setShowForm(newData)
     }
        
    }
    
    return (
        <div className="container">
            <div className="row h-50">
                <div className="col-md-5 mt-5">
                    <form className="border p-2">
                        {
                             showForm ? <div>
                                <div class="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Pick To</label>
                            <input type="text" name="PickTo" className="form-control" onBlur={cathFeildValue} id="exampleInputEmail1" placeholder="Mirpur-1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="text" name="PickFrom" onBlur={cathFeildValue} placeholder="Dhanmondi" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Date</label>
                            <input type="date" name="date" onBlur={cathFeildValue} className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Vehicle</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" value={Vehicle} readOnly/>
                        </div>
                            </div> :
                             <div className="checkOutForm">
                                 {/**fixed card */}
                                    <div className="card">
                                        <div className="row p-1">
                                            <div className="col">
                                                <h2>From: <span className="text-danger"> Gabtoli</span></h2>
                                            </div>
                                            <div className="col p-1">
                                                <h2>To: <span className="text-danger">Mirpur</span></h2>
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
                    </form>
                </div>
                <div className="col-md-7 mt-5 ">
                    <iframe src={mapUrl} frameborder="5px" title="did's_GoogleMap" style={{width:'100%', height:"100%"}}></iframe>
                </div>
            </div>
        </div>
    );
};

export default DestinationCheck;



    
