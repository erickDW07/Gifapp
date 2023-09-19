import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useGifController = ( category ) => {
 
    const [gifs, addGifs] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const cargarGifs = async() => {
        const newGifs = await getGifs( category );
        addGifs(newGifs);
        setIsLoading(false);
    }
    
    useEffect( () => {
        cargarGifs();
    }, []);



    return {
        gifs,
        isLoading
    }

}