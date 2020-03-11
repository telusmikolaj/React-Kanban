import React, { useState } from 'react';

function useStorage(localItem) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('myCat', 'Tom');
    }

    function setLoc(newItem) {
        localStorage.setItem(localItem, newItem);
    }

    return [loc, setLoc];
}
