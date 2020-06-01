import React, { useEffect, useReducer } from 'react';
import './index.css';

function App() {
    const imgReducer = (state, action) => {
        switch (action.type) {
            case 'STACK_IMAGES':
                return { ...state, images: state.images.concat(action.images) };
            case 'FETCHING_IMAGES':
                return { ...state, fetching: action.fetching };
            default:
                return state;
        }
    };
    const [imgData, imgDisPatch] = useReducer(imgReducer, {
        image: [],
        fetching: true,
    });
}

export default App;
