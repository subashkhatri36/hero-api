const{parse,join}=require('path');
const {createWriteStream} =require('fs');
const {APP_PORT,App_URL} =require('../config');
const fs=require('fs');

module.exports.readFile=async (file)=>{
    const { crateReadStream,filename}=await file;
    const stream=crateReadStream();
    var{ext,name} =parse(filename);
    name=`${Math.floor((Math.random()*1000)+1)}`;
    let url=join(__dirname,`../Upload/${name}-${ext}`);
    const imageStream=await createWriteStream(url);
    await stream.pipe(imageStream);
    // return `${App_URL}${url.split('Upload')[1]}`;
    return file;
    
}