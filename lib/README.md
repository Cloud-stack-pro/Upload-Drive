## Axios Upload Image

HTML
``` html
<input type="file" onchange="upload(this.files[0])">
```
JavaScript 
``` js
function upload( file ) {
    console.log("Uploading")
    axios.uploadImage( file ).then( obj => {
        console.log("Successful")
        console.log( obj )
    })
}
```
