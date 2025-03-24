import { useRouter } from "next/router"


export default function ProductDetail(){

    const router = useRouter()

    const {id} = router.query

    return(
        <>
            <h1>รหัสสินค้า : {id} </h1>
        </>
    )
}