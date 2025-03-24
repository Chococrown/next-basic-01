import Image from 'next/image';

import styles from "@/styles/product.module.css"

import Link from "next/link"

export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/products?limit=9")
    const data = await res.json()
    console.log(data)

    return{
        props:{products:data.products}
    }
}

export default function Index({products}){
    return(
        <>
            <h1>สินค้าทั้งหมด</h1>

            <div className={styles.container}>
                {products.map(item=>(
                    <div key={item.id}>
                        <Link href={'/products/'+item.id}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <Image src={item.thumbnail} width={280} height={230} alt={item.title}/>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}