import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} | Toy Auto`
    },[title])
}

export default useTitle