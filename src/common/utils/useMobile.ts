import { useMediaQuery } from "usehooks-ts"

const useMobile = () => {
    return !useMediaQuery('(min-width: 768px)')
}

export default useMobile