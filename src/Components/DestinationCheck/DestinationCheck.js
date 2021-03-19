import React, {useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
// import fakeData from '../../FakeData/FakeData.json'
const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49122.82840063697!2d90.30459973373641!3d23.780305525636333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2shk!4v1616189898974!5m2!1sen!2shk';

const DestinationCheck = () => {
    const { Vehicle } = useParams()
    const [rideDetails, setRideDetails] = useState({})
    console.log(rideDetails);
    //hook froms
    const { register,handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>{
        setRideDetails(data);
    }
    console.log(watch("example")); // watch input value by passing the name of it
    
    
    // useEffect(() => {
    //     const selectedVehicle = fakeData.find(data => data.VehicleName === Vehicle)
    //     setRideDetails(selectedVehicle)
    // }, [Vehicle])
    
    // const history = useHistory()
    // const shakil = (e) =>{
    //     history.push(`/${Vehicle}`)
    //     console.log("shakil khan");

    //     e.preventDefault();
    // }

    return (
        <div className="container">
            <div className="row h-50">
                <div className="col-md-5 mt-5 border rounded-3 p-3">
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Pick From</label>
                            <input name="Pick_From" class="form-control" defaultValue="Mirpur-01" ref={register} /> 
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Pick To</label>
                            <input name="Pick_To" class="form-control" defaultValue="test" ref={register} /> 
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Date</label>
                            <input name="date" type="date" class="form-control" defaultValue="test" ref={register} /> 
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Vehecle Name</label>
                            <input name="Vehecle_Name" type="text" class="form-control" defaultValue={Vehicle} ref={register} readonly/> 
                        </div>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input className="btn btn-primary w-100"  type="submit" />
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



    
