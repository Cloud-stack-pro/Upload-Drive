class Upload {
    constructor() {
        /**
         * @param { File } file File object
         * @return { Promise<{id:string,url:string,name:string}> }
         **/
        function uploadFile( file ) {
            return new Promise( ( resolve, reject ) => {
                if ( file?.constructor?.name !== "File" ) throw new Error("Only need file.");
                const API = "https://zany-blue-fawn-slip.cyclic.app/api/v1/image";
                const formData = new FormData();
                formData.set("image", file);
                fetch( API, {
                    method: "POST",
                    mode: "cors",
                    body: formData
                }).then(o=>o.json()).then(resolve).catch(reject)
            })
        }
        this.uploadFile = uploadFile.bind()
    }
}
