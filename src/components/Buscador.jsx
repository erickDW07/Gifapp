import { useState } from "react"

export const Buscador = ({onValue})=>{
    const [txtBusqueda, setValue] = useState('');   

    const summitBusqueda = (event) =>{
        event.preventDefault();
        const value = txtBusqueda.trim().toUpperCase();
        if(value.length<=1) return;

        onValue(value);
        setValue('');       
    }

    const changeValue = ({target})=>{
        setValue(target.value);
    }

    return( 
        <form onSubmit={summitBusqueda}>
            <div className="input-group">
                <input className="form-control" value={txtBusqueda} onChange={changeValue} placeholder="Shearch" />
                <button className="btn btn-primary" type='submit'> Buscar</button>
            </div>            
        </form>        
    )
}