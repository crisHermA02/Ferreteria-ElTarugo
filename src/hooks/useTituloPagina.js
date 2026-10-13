import {useEffect} from'react';

export function useTituloPagina(titulo){
    useEffect(()=> {
        document.title = titulo ? `${titulo} - Ferreteria El Tarugo` : 'Ferreteria El Tarugo';
    }, [titulo]);
}