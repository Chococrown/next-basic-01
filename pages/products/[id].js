import Image from "next/image"

import styles from "@/styles/detail.module.css"


export async function getStaticPaths(){
    const res = await fetch("https://dummyjson.com/products?limit=9")
    const data = await res.json()

    const paths = data.products.map((item)=>{
        return{
            params:{id:String(item.id)}
        }
    })

    return{
        paths,
        fallback:false
    }

}


export async function getStaticProps({params}) {
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/"+id)
    const data = await res.json()

    return{
        props:{product:data}
    }
}


export default function ProductDetail({product}){



    return(
        <>

            <div className={styles.container}>

                <div>

                    <Image src={product.thumbnail} width={300} height={300} alt={product.title} />

                </div>

                <div className={styles.detail}>

                <h1>รหัสสินค้า : {product.id} </h1>

                <h2>ชื่อสินค้า : {product.title}</h2>

                <h2>ราคาสินค้า : {product.price}</h2>

                <h2>หมวดหมู่ : {product.category}</h2>

                <h2>แบรนด์ : {product.brand}</h2>

                <p>ข้อมูลพื้นฐาน : {product.description}</p>

                </div>

            </div>
        </>
    )
}