import {useEffect} from'react';

export function useTituloPgina(titulo){
    useEffect(()=> {
        document.title = titulo ? '${titulo} - Ferreteria El Tarugo' : 'Ferreteria El Tarugo';
    }, [titulo]);
}