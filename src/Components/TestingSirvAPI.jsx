// import React, {useState} from 'react'
// import '../Styles/api.css'
// export default function TestingSirvAPI(){

//     const [file, setFile] = useState(null)
//     const [fileName, setFileName] = useState('testIMG')

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       if(!file){
//         alert("Please select an image");
//         return;
//       }
//       const token = await getAccessToken();
//       if(!token){
//         alert("Error getting access token")
//         return;
//       }
//       const formData = new FormData();
//       formData.append('file', file)
//       formData.append('fileName', fileName)
//       formData.append('content_type', file.type)
//       const uploadURL = `https://api.sirv.com/v2/files/upload?filename=%2F${formData.get('fileName')}`

//       const response = await fetch(uploadURL, {
//         method:"POST",
//         headers:{
//           Authorization:`Bearer ${token}`,
//           'Content-Type':file.type,
//         },
//         body:file
//       })

//       if(!response.ok) alert("Error uploading file")
//     }

//     const getAccessToken = async () =>{
//       const clientID = "YTOfy23xePUwC6JXeZoBiIqod55"
//       const clientSecret = "rAEG/1mIGnVnYYXjyhLS7Qli168dAEPN9DkswJS2TJ15D75Kcf5L9fmOO0CU0/WRu8TcMoeNKPUvHD+E9sRXyw=="

//       const response = await fetch("https://api.sirv.com/v2/token", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${btoa(`${clientID}:${clientSecret}`)}`,
//         },
//         body: JSON.stringify({
//           clientID,
//           clientSecret,
//         })
//       })
//         console.log(response)
//         if(!response.ok) return null;

//       const data = await response.json();
//       return data.token
//     }
    
//     return (
//         <div className='api-wrapper'>
//       <form onSubmit={e => handleSubmit(e)}>
//         <div>
//           <label htmlFor="file-input">Image file: </label>
//           <input
//             type="file"
//             accept="image/*"
//             id="file-input"
//             onChange={e => {setFile(e.target.files[0]); console.log(e.target.files[0])}}
//           />
//         </div>
//         <div>
//           <label htmlFor="filename-input">Filename (optional):</label>
//           <input
//             type="text"
//             id="filename-input"
//             value={fileName}
//             onChange={e => setFileName(e.target.value)}
//           />
//         </div>
//         <button type="submit" >Upload</button>
//       </form>
//     </div>
//   )
// }

import React, { useState } from "react";

const TestingSirvAPI = () => {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select an image file.");
      return;
    }
    setIsLoading(true);
    const token = await getAccessToken();
    if (!token) {
      alert("Error getting access token.");
      setIsLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("filename", filename || file.name);
    formData.append("content_type", file.type);
    const uploadUrl = `https://api.sirv.com/v2/files/upload?filename=%2F${formData.get(
      "filename"
    )}`;
    const response = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": file.type,
      },
      body: file,
    });
    setIsLoading(false);
    if (!response.ok) {
      alert(`Error uploading file: ${response.status} ${response.statusText}`);
      return;
    }
    alert("File uploaded successfully!");
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFilenameChange = (e) => {
    setFilename(e.target.value);
  };

  const getAccessToken = async () => {
    const clientId = "YTOfy23xePUwC6JXeZoBiIqod55";
    const clientSecret = "rAEG/1mIGnVnYYXjyhLS7Qli168dAEPN9DkswJS2TJ15D75Kcf5L9fmOO0CU0/WRu8TcMoeNKPUvHD+E9sRXyw==";

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
      return null;
    }
    const data = await response.json();
    return data.token;
  };

  return (
    <div className="api-wrapper" style={{marginTop:"10%"}}>
      <form onSubmit={handleSubmit} className="test-form">
        <div>
          <label htmlFor="file-input">Image file: </label>
          <input
            type="file"
            accept="image/*"
            id="file-input"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label htmlFor="filename-input">Filename (optional):</label>
          <input
            type="text"
            id="filename-input"
            value={filename}
            onChange={handleFilenameChange}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default TestingSirvAPI;
