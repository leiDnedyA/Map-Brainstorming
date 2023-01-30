import {queryArtwork} from "./metAPI.js";

/**
 * 
 * artInterface object
 * 
 * controls the UI to interact w/ the met API
 * 
 */

const artInterface = {
    nextButton: null,
    backButton: null,
    imgElement: null,
    objectIDs: [],
    currentIndex: 0,
    init: function(nextButton, backButton, imgElement){
        this.nextButton = nextButton;
        this.backButton = backButton;
        this.imgElement = imgElement;
    },
    loadObject: function(objectID){
        queryArtwork(objectID)
        .then((res)=>{
            const resJSON = JSON.parse(res);
            console.log(resJSON);
            this.setImage(resJSON.primaryImage);
        })
    },
    loadObjectIDs: function(ids){
        if(ids){
            this.objectIDs = ids;
            this.currentIndex = 0;
            this.loadObject(this.objectIDs[this.currentIndex]);
        }
    },
    setImage: function(src){
        this.imgElement.src = src;
    },
    nextFunc: function(){
        this.currentIndex+=1;
        this.loadObject(this.objectIDs[this.currentIndex]);
    },
    backFunc: function(){
        this.currentIndex-=1;
        this.loadObject(this.objectIDs[this.currentIndex]);
    }
};

export {artInterface};