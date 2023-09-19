import { useState } from "react"
import { Buscador } from "./components/buscador";
import { GridItems } from "./components/GridItems";
//import { getGifs } from "./helpers/getGifs";



export const Gifapp = ()=>{

    const [categorias, setCategoria] = useState([]);

    const addCategiria= async (value)=>{
        if(categorias.includes(value)) return;
        // const gifs = await getGif(value);
        // const categoria = {
        //     value,
        //     gifs
        // }
        
        setCategoria([value, ...categorias]);
    }

    
    
    return(
        <div className="container-fluid p-4">
            <h1>Gif App</h1>

            <Buscador onValue={addCategiria}/> 
            <div className="p-3">
                {categorias.map( (item)=> <GridItems key={item} item={item} />  )}
            </div>         
        </div>
    )
}