import React, {useEffect, useState} from 'react'
import '../Styles/testDriveRequests.css'
import {getDocs, collection, query, orderBy} from 'firebase/firestore'
import {db, auth} from '../firebase-config'

export default function TestDriveRequests(){    
    
    auth.onAuthStateChanged(()=>{
        if(auth.currentUser.uid === null || !auth.currentUser.uid === 'HA3XPxDZG8Y5YKZt1VTmgU6bf4a2') navigate('/')
    }) 

    const [requests, setRequests] = useState([])

    useEffect(()=>{
        async function fetchRequests(){
            let tempArr = []
            const requestsRef = collection(db, 'testDriveRequests')
            const queryRequests = query(requestsRef, orderBy('timeRequestWasMade'))
            await getDocs(queryRequests)
            .then(res =>{
                res.docs.forEach(doc =>{
                    tempArr.push({...doc.data(), docID:doc.id})
                })  
                setRequests(tempArr)
            })
        }
        fetchRequests()
        return () => fetchRequests()
    },[])
    return (
    <div className="test-drive-requests-wrapper">
        <h2 id="test-drive-title">Test Drive Requests</h2>
        <div className="requests">
            {requests.map((request, index) =>{
                
                // Variablat per data
                let timeRequestWasMade = request.timeRequestWasMade.toDate();
                let date = timeRequestWasMade.getDate()
                let month;
                let year = timeRequestWasMade.getFullYear();
                
                // Switch statement per me caktu mujin
                    switch(timeRequestWasMade.getMonth()){
                        case 0:
                            month = 'Jan'
                            break;
                        case 1:
                            month = 'Feb'
                            break;
                        case 2:
                            month = "March"
                            break;
                        case 3:
                            month = "April"
                            break;
                        case 4:
                            month = "May"
                            break;
                        case 5:
                            month = "June"
                            break;
                        case 6:
                            month = "July"
                            break;
                        case 7:
                            month = "Aug"
                            break;
                        case 8:
                            month = "Sep"
                            break;
                        case 9:
                            month = "Oct"
                            break;
                        case 10:
                            month = 'Nov'
                            break;
                        case 11:
                            month = 'Dec';
                            break;
                        default: ""
                    }

                    // Variablat per oren edhe minutat
                    let timeInMillis = timeRequestWasMade.getTime();
                    let hours = Math.floor((timeInMillis / 1000 / 60 / 60) % 24) + 1;
                    let minutes = Math.floor((timeInMillis / 1000 / 60) % 60)

                    if(hours === 24) hours = '00'
                    if(minutes.toString().length === 1) minutes = `0${minutes}`
                    return (
                <div className="request" key={index}>
                    <div className="request-user-info">
                        <h2>{request.fullName}</h2>
                        <p>{request.email}</p>
                    </div>
                    <div className="requested-car">
                        <h4>Requested Car:  </h4>
                        <p><span style={{fontWeight:'600'}}>Brand: </span>{request.carDetails.carBrand.toUpperCase()}</p>
                        <p><span style={{fontWeight:'600'}}>Model: </span>{request.carDetails.carModel}</p>
                        <p><span style={{fontWeight:'600'}}>Car Color: </span>{request.carDetails.carColor}</p>
                        <p><span style={{fontWeight:'600'}}>Rims Color: </span>{request.carDetails.rimColor}</p>
                        <p><span style={{fontWeight:'600'}}>Price: </span> ${request.carDetails.price}</p>
                        <p><span style={{fontWeight:'600'}}>Selected Dealership: </span>{request.selectedDealership}</p>
                        <p><span style={{fontWeight:'600'}}>User plans to buy a car in: </span>{request.purchasePeriod}</p>
                    </div>
                    <div className="request-time-wrapper">
                        <p><span style={{fontWeight:'600'}}>Request was created on:</span> {`${date} ${month} ${year}`}<span style={{fontWeight:'600'}}> at:</span>{hours}:{minutes}</p>
                    </div>
                </div>)
            })}
        </div>
    </div>
    )
}