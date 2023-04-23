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
### Support
True Money Wallet 0855927641
![TW](./image/IMG_20230423_173547.jpg)
Prompt Pay 0970493657
![PP](./image/IMG_20230423_173450.jpg)
