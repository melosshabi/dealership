import React, {useState} from 'react'

export default function TestingSirvAPI(){

    // Get API Token

    let data = "{\"clientId\":\"YTOfy23xePUwC6JXeZoBiIqod55\",\"clientSecret\":\"rAEG/1mIGnVnYYXjyhLS7Qli168dAEPN9DkswJS2TJ15D75Kcf5L9fmOO0CU0/WRu8TcMoeNKPUvHD+E9sRXyw==\"}"

    let xhr = new XMLHttpRequest();
     xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "https://api.sirv.com/v2/token");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("authorization", "Bearer mela05");

    xhr.send(data);

    // Upload file
    // const [image, setImage] = useState()
    // let data = "{\"clientId\":\"YTOfy23xePUwC6JXeZoBiIqod55\",\"clientSecret\":\"rAEG/1mIGnVnYYXjyhLS7Qli168dAEPN9DkswJS2TJ15D75Kcf5L9fmOO0CU0/WRu8TcMoeNKPUvHD+E9sRXyw==\"}"


    // var xhr = new XMLHttpRequest();
    // // xhr.withCredentials = true;



    // xhr.addEventListener("readystatechange", function () {
    //   if (this.readyState === this.DONE) {
    //     console.log(this.responseText);
    //   }
    // });



    // xhr.open("POST", `https://api.sirv.com/v2/files/upload?filename=${image}`);
    // xhr.setRequestHeader("content-type", "application/json");
    // xhr.setRequestHeader("authorization", "Bearer BEARER_TOKEN_HERE");



    // xhr.send(data);
    
    return (
        <div className="api-wrapper">
          
          <input style={{marginTop:'500px'}} type='file' onChange={e => setImage(e.target.value)}/>
        </div>
    )
}