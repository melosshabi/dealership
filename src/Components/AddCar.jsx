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

  useEffect(() => {
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

    // Specifikat e kerit
    const [engine, setEngine] = useState('')
    const [transmision, setTransmision] = useState('')
    const [dimensions, setDimensions] = useState('')
    const [fuel, setFuel] = useState('')

    // Ngjyrat
    
    const [color1, setColor1] = useState('')
    const [color1Stock, setColor1Stock] = useState(undefined)
    const [color1Images, setColor1Images] = useState(null)
    const [color2, setColor2] = useState('')
    const [color2Stock, setColor2Stock] = useState(undefined)
    const [color2Images, setColor2Images] = useState(null)
    const [color3, setColor3] = useState('')
    const [color3Stock, setColor3Stock] = useState(undefined)
    const [color3Images, setColor3Images] = useState(null)
    const [interiorPictures, setInteriorPictures] = useState(null)
    const [mainPicture, setMainPicture] = useState(null)

    async function uploadCar(e){
        e.preventDefault();

        let uploadingDiv = document.getElementsByClassName('uploading-div')[0]
        uploadingDiv.style.display = 'flex'

        // for loop-i per mi upload-u fotot e exteriorit
        for(let i = 0; i < color1Images.length; i++){

          const formData = new FormData();
          formData.append("file", color1Images[i]);
          formData.append("filename", color1Images[i].name);
          formData.append("content_type", color1Images[i].type);
          const uploadUrl = `https://api.sirv.com/v2/files/upload?filename=%2F/${brand + '-' + model + '-' + color1}/${formData.get(
            "filename"
          )}`;
          const response = await fetch(uploadUrl, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": color1Images[i].type,
            },
            body: color1Images[i],
          });

          if (!response.ok) {
            alert(`Error uploading file: ${response.status} ${response.statusText}`);
            return;
          }
          console.log("Color 1 File uploaded successfully!");
        }

        for(let i = 0; i < color2Images.length; i++){

          const formData = new FormData();
          formData.append("file", color2Images[i]);
          formData.append("filename", color2Images[i].name);
          formData.append("content_type", color2Images[i].type);
          const uploadUrl = `https://api.sirv.com/v2/files/upload?filename=%2F/${brand + '-' + model + '-' + color2}/${formData.get(
            "filename"
          )}`;
          const response = await fetch(uploadUrl, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": color2Images[i].type,
            },
            body: color2Images[i],
          });

          if (!response.ok) {
            alert(`Error uploading file: ${response.status} ${response.statusText}`);
            return;
          }
          console.log("Color 2 File uploaded successfully!");
        }
         
        for(let i = 0; i < color3Images.length; i++){

          const formData = new FormData();
          formData.append("file", color3Images[i]);
          formData.append("filename", color3Images[i].name);
          formData.append("content_type", color3Images[i].type);
          const uploadUrl = `https://api.sirv.com/v2/files/upload?filename=%2F/${brand + '-' + model + '-' + color3}/${formData.get(
            "filename"
          )}`;
          const response = await fetch(uploadUrl, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": color3Images[i].type,
            },
            body: color3Images[i],
          });

          if (!response.ok) {
            alert(`Error uploading file: ${response.status} ${response.statusText}`);
            return;
          }
          console.log("Color 3 File uploaded successfully!");
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
          console.log("Interior File uploaded successfully!");
        }

        const color1Spin = `https://mela05.sirv.com/${brand + '-' + model + '-' + color1}/${brand + '-' + model + '-' + color1}.spin?autospin=off&fullscreen=off`;
        const color2Spin = `https://mela05.sirv.com/${brand + '-' + model + '-' + color2}/${brand + '-' + model + '-' + color2}.spin?autospin=off&fullscreen=off`;
        const color3Spin = `https://mela05.sirv.com/${brand + '-' + model + '-' + color3}/${brand + '-' + model + '-' + color3}.spin?autospin=off&fullscreen=off`;
        const interiorSpin = `https://mela05.sirv.com/${brand + '-' + model}-interior-folder/${brand + '-' + model}-interior-folder.spin?autospin=off&fullscreen=off`;

        let mainPictureURL;
        const storageRef = ref(storage, `${brand}/${model}/${model}`)
        await uploadBytes(storageRef, mainPicture)
        await getDownloadURL(storageRef)
        .then(res => mainPictureURL = res)

        const carCollectionRef = collection(db, brand)
        await addDoc(carCollectionRef, {carBrand:brand, carModel:model, carCategory:category, carPrice:price, mainPicture:mainPictureURL,interiorLink:interiorSpin, carSpecs:{
          engine:engine,
          transmision:transmision,
          dimensions:dimensions,
          fuel:fuel
        }, 
        carStock:{
          color1Name:color1,
          color1Stock:color1Stock,
          color1Spin:color1Spin,
          color2Name:color2,
          color2Stock:color2Stock,
          color2Spin:color2Spin,
          color3Name:color3,
          color3Stock:color3Stock,
          color3Spin:color3Spin
        }
      }).then(() => {
          alert("Car added successfully")
          window.location.reload()})
    }   

    function switchActiveDiv(action){
      const leftDiv = document.querySelector('.left-div')
      const centerDiv = document.querySelector('.center-div')
      const rightDiv = document.querySelector('.right-div')
      const nextBtn = document.querySelector('.next-btn')
      const backBtn = document.querySelector('.back-btn')
      const addCarBtn = document.querySelector('.add-car-btn')

      if(action === 'next'){
        if(leftDiv.classList.contains('active-left-div')){
          leftDiv.classList.remove('active-left-div')
          centerDiv.classList.add('active-center-div')
          backBtn.classList.add('active-back-btn')
        }else if(centerDiv.classList.contains('active-center-div')){
          centerDiv.classList.remove('active-center-div')
          centerDiv.classList.add('inactive-center-div')
          rightDiv.classList.add('active-right-div')
          nextBtn.classList.remove('active-next-btn')
          addCarBtn.classList.add('active-back-btn')
        }
      }else if(action === 'prev'){
          if(centerDiv.classList.contains('active-center-div')){
            centerDiv.classList.remove('active-center-div')
            leftDiv.classList.add('active-left-div')
            backBtn.classList.remove('active-back-btn')
          }else if(rightDiv.classList.contains('active-right-div')){
            rightDiv.classList.remove('active-right-div')
            centerDiv.classList.remove('inactive-center-div')
            centerDiv.classList.add('active-center-div')
            nextBtn.classList.add('active-next-btn')
            addCarBtn.classList.remove('active-back-btn')
          }
      }
    }
  return (
    <div className="add-car-wrapper">
      <div className="uploading-div">
        <h2>Adding Car...</h2>
      </div>
      <form className="add-car-form" noValidate onSubmit={e => uploadCar(e)}>

          <div className="animation-div">

            <div className="left-div active-left-div">
              <div className="car-details">
                <h2>Car Details</h2>
                <input type="text" placeholder='Brand' required value={brand} onChange={e => setBrand(e.target.value)}/>
                <input type="text" placeholder='Model' required value={model} onChange={e => setModel(e.target.value)}/>
                <input type="text" placeholder='Category' required value={category} onChange={e => setCategory(e.target.value)}/>
                <input type="text" placeholder='Price' required value={price} onChange={e => setPrice(e.target.value)}/>
                <label>Select a main picture</label>
                <input type="file" style={{color:'white'}}/>
              </div>
            </div>

            <div className="center-div">
              <div className="add-car-specs">
                <h2>Car Specs</h2>
                <input type="text" placeholder='Engine' required value={engine} onChange={e => setEngine(e.target.value)}/>
                <input type="text" placeholder='Transmision' required value={transmision} onChange={e => setTransmision(e.target.value)}/>
                <input type="text" placeholder='Fuel' required value={fuel} onChange={e => setFuel(e.target.value)}/>
                <input type="text" placeholder='Dimensions' required value={dimensions} onChange={e => setDimensions(e.target.value)}/>
              </div>
            </div>
            <div className="right-div">
              <div className="car-stock">
                <h2>Car Stock</h2>
                {/* Color 1 */}
                <input type="text" placeholder='Enter Color Name' required value={color1} onChange={e => setColor1(e.target.value)}/>
                <input type="text" placeholder='Enter the stock of the selected color' required value={color1Stock} onChange={e => setColor1Stock(e.target.value)}/>
                <input type="file" multiple required onChange={e => setColor1Images(e.target.value)}/>

                {/* Color 2 */}
                <input type="text" placeholder='Enter Color Name' required value={color2} onChange={e => setColor2(e.target.value)}/>
                <input type="text" placeholder='Enter the stock of the selected color' required value={color2Stock} onChange={e => setColor2Stock(e.target.value)}/>
                <input type="file" multiple required onChange={e => setColor2Images(e.target.value)}/>

                {/* Color 3 */}
                <input type="text" placeholder='Enter Color Name' required value={color3} onChange={e => setColor3(e.target.value)}/>
                <input type="text" placeholder='Enter the stock of the selected color' required value={color3Stock} onChange={e => setColor3Stock(e.target.value)}/>
                <input type="file" multiple required onChange={e => setColor3Images(e.target.value)}/>
              </div>
            </div>
          </div>

          <div className="add-car-btns-wrapper">
            <button className="back-btn" type="button" onClick={() => switchActiveDiv('prev')}>Back</button>
            <button className="next-btn active-next-btn" type="button" onClick={() => switchActiveDiv('next')}>Next</button>
            <button className="add-car-btn" type="submit">Add Car</button>
          </div>
      </form>
    </div>
  )
}