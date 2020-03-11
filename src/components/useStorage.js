import React, {useState} from 'react';


function useStorage(localItem){
    const[loc,setState] = useState(localStorage.getItem(localItem));

    function setLoc(newItem){
        localStorage.setItem(localItem,newItem);
    }

    return [loc,setLoc];
}