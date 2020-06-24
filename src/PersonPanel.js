import React from 'react';

const NameList = (props) => {
    let nameJSX = null;
    if(props.name !== null && typeof props.name === 'object') {
        nameJSX = <h3> Name is: {props.name.first} {props.name.last}</h3>
    }
    return nameJSX
}

const PictureList = (props) => {
    let pictureJSX = null;
    if(props.picture !== null && typeof props.picture === 'object') {
        pictureJSX = <img src={props.picture.thumbnail} alt='People'></img>
    }
    return pictureJSX
}

const DetailList = (props) => {
    let detailList = null;
    if(props.location !== null && typeof props.location === 'object') {
        let streetJSX = [];
        let cityJSX = [];
        let stateJSX = [];
        let postcodeJSX = [];
        if(props.location.street.length >= 1) {
            let streetItem = null;
            for (let streetItemObject of props.location.street) {
                streetItem = <li>{
                    `${streetItemObject.number}`
                    `${streetItemObject.name}`
                }</li>
                streetJSX.push(streetItem);
            }
        }

        cityJSX = <li>{props.location.city}</li>
        stateJSX = <li>{props.location.state}</li>
        postcodeJSX = <li>{props.location.postcode}</li>

        detailList = <ul><p>Detail Info</p>
                         {streetJSX}
                         {cityJSX}
                         {stateJSX}
                         {postcodeJSX}</ul>
                    
    }
    return detailList;
}

const PersonPanel = (props) => {
    if(props.person !== null) {
        
        return <div>
                <PictureList picture={props.person.picture} />
                <NameList name={props.person.name} />
                <DetailList location={props.person.location} />
                <button>More Info</button>
               </div>
               
    }
}

export default PersonPanel;