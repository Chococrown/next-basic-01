import Image from 'next/image';

export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/products?limit=10")
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

            <div>
                {products.map(item=>(
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <Image src={item.thumbnail} width={300} height={300} alt={item.title}/>


                    </div>
                ))}
            </div>
        </>
    )
}