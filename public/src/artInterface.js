
/**
 * 
 * artInterface object
 * 
 * controls the UI to interact w/ the met API
 * 
 */

const artInterface = {
    init: (nextButton, backButton, imgElement, nextFunc, backFunc)=>{
        this.nextButton = nextButton;
        this.backButton = backButton;
        this.imgElement = imgElement;
        this.nextFunc = nextFunc;
        this.backFunc = backFunc;
    },
    setImage: (src)=>{
        this.imgElement.src = src;
    },
    nextButton: null,
    backButton: null,
    imgElement: null,
    nextFunc: null,
    backFunc: null
};

export default {artInterface};