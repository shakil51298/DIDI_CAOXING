import React from 'react';
import { useHistory } from 'react-router';

const VehicleCard = (props) => {
    const {VehicleName, imgURL } = props.vehicle
    const history = useHistory()
    const handleClickOnCard = () =>{
        history.push(`/${VehicleName}`)
    }
    return (
        <div style={{cursor:'pointer'}} onClick={handleClickOnCard} className="card col-md-3 col-sm-12 text-center m-2 w-25">
            <div className="card-body">
                <img style={{width:'100px'}} src={imgURL} alt=""/>
                <h5 className="card-title">{VehicleName}</h5>
            </div>
        </div>
    );
};

export default VehicleCard;