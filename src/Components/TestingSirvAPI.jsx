import React, { useState, useEffect } from "react";
// import '../Styles/api.css'

const TestingSirvAPI = () => {

  const [clientId, setClientID] = useState('YTOfy23xePUwC6JXeZoBiIqod55')
  const [clientSecret, setClientSecret] = useState('rAEG/1mIGnVnYYXjyhLS7Qli168dAEPN9DkswJS2TJ15D75Kcf5L9fmOO0CU0/WRu8TcMoeNKPUvHD+E9sRXyw==')
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState('');

  // Funksioni per me mar Token-in
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

  // Funksioni per mi Upload-u fotot
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select an image file.");
      return;
    }
    setIsLoading(true);
    for(let i = 0; i < file.length; i++){

      const formData = new FormData();
      formData.append("file", file[i]);
      formData.append("filename", file[i].name);
      formData.append("content_type", file[i].type);
      const uploadUrl = `https://api.sirv.com/v2/files/upload?filename=%2F/mela-folder/${formData.get(
        "filename"
      )}`;
      const response = await fetch(uploadUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": file[i].type,
        },
        body: file[i],
      });
      setIsLoading(false);
      if (!response.ok) {
        alert(`Error uploading file: ${response.status} ${response.statusText}`);
        return;
      }
      console.log("File uploaded successfully!");
    }
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
            multiple
            onChange={e => setFile(e.target.files)}
          />
        </div>
        <div>
          <label htmlFor="filename-input">Filename (optional):</label>
          <input
            type="text"
            id="filename-input"
            value={filename}
            onChange={e => setFilename(e.target.value)}
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