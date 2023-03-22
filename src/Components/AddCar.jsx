import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {storage, db} from '../firebase-config'
import {uploadBytes, ref, getDownloadURL} from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import Cookies from 'universal-cookie'
import '../Styles/adminPage.css'

const cookies = new Cookies();

export default function AddCar() {
  const navigate = useNavigate();
  if(!cookies.get('auth-token') || !localStorage.getItem('userID') === "HA3XPxDZG8Y5YKZt1VTmgU6bf4a2") navigate('/')

  // Client ID dhe Client Secret per Sirv API
  const [clientId, setClientID] = useState('YTOfy23xePUwC6JXeZoBiIqod55')
  const [clientSecret, setClientSecret] = useState('rAEG/1mIGnVnYYXjyhLS7Qli168dAEPN9DkswJS2TJ15D75Kcf5L9fmOO0CU0/WRu8TcMoeNKPUvHD+E9sRXyw==')
  const [token, setToken] = useState('')
  const [test, setTest] = useState([])

  useEffect(() => {
    const newDiv = document.createElement('div')
    setTest(prevTest => [...prevTest, newDiv])
    console.log(test)
    const getAccessToken = async () => {
  
      const response = await fetch("https://api.sirv.com/v2/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${btoa(`${clientId}:${clientSecret}`)}`,
        },
        body: JSON.stringify({
          clientId,
          clientSecret,
        }),
      });
      if (!response.ok) {
        alert("Error getting token");
        return null;
      }
      const data = await response.json();
      setToken(data.token)
      // console.log(data.token)
    };
    getAccessToken()

    return () => getAccessToken()
  }, [])

  // Detajet e kerit
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [model, setModel] = useState('')
    const [price, setPrice] = useState('')
    const [exteriorPictures, setExteriorPictures] = useState(null)
    const [interiorPictures, setInteriorPictures] = useState(null)

    // Specifikat e kerit
    const [engine, setEngine] = useState('')
    const [power, setPower] = useState('')
    const [transmision, setTransmision] = useState('')
    const [dimensions, setDimensions] = useState('')
    const [fuel, setFuel] = useState('')

    function addColor(){

      const colorsDiv = document.getElementsByClassName('car-colors-stock')[0]
      const newInput = document.createElement('input')
      const newImageInput = document.createElement('input');
      const newLabel = document.createElement('label')
      newLabel.innerText = 'Select the images:'
      newImageInput.type = 'file'
      // newImageInput.attr
      newInput.placeholder = 'Enter color name'
      colorsDiv.prepend(newImageInput)
      colorsDiv.prepend(newLabel)
      colorsDiv.prepend(newInput)
    }

    async function UploadCar(e){
        e.preventDefault();

        // for loop-i per mi upload-u fotot e exteriorit
        for(let i = 0; i < exteriorPictures.length; i++){

          const formData = new FormData();
          formData.append("file", exteriorPictures[i]);
          formData.append("filename", exteriorPictures[i].name);
          formData.append("content_type", exteriorPictures[i].type);
          const uploadUrl = `https://api.sirv.com/v2/files/upload?filename=%2F/${brand + '-' + model}-exterior-folder/test/${formData.get(
            "filename"
          )}`;
          const response = await fetch(uploadUrl, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": exteriorPictures[i].type,
            },
            body: exteriorPictures[i],
          });
          // setIsLoading(false);
          if (!response.ok) {
            alert(`Error uploading file: ${response.status} ${response.statusText}`);
            return;
          }
          console.log("File uploaded successfully!");
        }
        // for loop-i per mi upload-u fotot e interiorit
        for(let i = 0; i < interiorPictures.length; i++){

          const formData = new FormData();
          formData.append("file", interiorPictures[i]);
          formData.append("filename", interiorPictures[i].name);
          formData.append("content_type", interiorPictures[i].type);
          const uploadUrl = `https://api.sirv.com/v2/files/upload?filename=%2F/${brand + '-' + model}-interior-folder/${formData.get(
            "filename"
          )}`;
          const response = await fetch(uploadUrl, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": interiorPictures[i].type,
            },
            body: interiorPictures[i],
          });
          // setIsLoading(false);
          if (!response.ok) {
            alert(`Error uploading file: ${response.status} ${response.statusText}`);
            return;
          }
          console.log("File uploaded successfully!");
        }

      const exteriorSpin = `https://mela05.sirv.com/${brand + '-' + model}-exterior-folder/${brand + '-' + model}-exterior-folder.spin`;
      const interiorSpin = `https://mela05.sirv.com/${brand + '-' + model}-interior-folder/${brand + '-' + model}-interior-folder.spin`;

        const carCollectionRef = collection(db, brand)
        await addDoc(carCollectionRef, {carBrand:brand, carModel:model, carCategory:category, carPrice:price,  exteriorLink: exteriorSpin,interiorLink:interiorSpin, carSpecs:{
          engine:engine,
          power:power,
          transmision:transmision,
          dimensions:dimensions,
          fuel:fuel
        }, 
        carStock:{
          blackStock:colorBlack,
          redStock:colorRed,
          orangeStock:colorOrange,
          grayStock:colorGray,
          greenStock:colorGreen
        }
      }).then(() => {
          alert("Car added successfully")
          window.location.reload()})
    }
  return (
    <div className="add-car-wrapper">
      <form className='add-car-form'>
        <div className="car-details">
          <h2>Car Details</h2>
          <input type="text" placeholder='Brand'/>
          <input type="text" placeholder='Model'/>
          <input type="text" placeholder='Category'/>
        </div>

        <div className="car-specs">
          <h2>Car Specs</h2>
        <input type="text" placeholder='Engine'/>
        <input type="text" placeholder='Transmission'/>
        <input type="text" placeholder='Fuel'/>
        <input type="text" placeholder='Dimensions'/>
        </div>

        <div className="car-stock-wrapper">
          <h2>Car Stock</h2>
          <div className="color-wrapper">
            <input className="color-name" type="text" placeholder='Enter color name'/>
            <label>Select the images of the desired color</label>
            <input type="file" multiple/> 
          </div>

          <div className="color-wrapper">
            <input className="color-name" type="text" placeholder='Enter color name'/>
            <label>Select the images of the desired color</label>
            <input type="file" multiple/> 
          </div>

          <div className="color-wrapper">
            <input type="text" placeholder='Enter color name'/>
            <label>Select the images of the desired color</label>
            <input type="file" multiple/> 
          </div>
        </div>
      </form>
    </div>
  )
}
