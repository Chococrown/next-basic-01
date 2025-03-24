import styles from "@/styles/home.module.css"
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";



export default function Home() {
  return (
    <>

      <Head>

        <title>หน้าแรกของเว็บไชต์ | Prasert Shop</title>
        <meta name="keyword" />

      </Head>

      <div className={styles.container}>

        <h1 className={styles.title}>หน้าแรกของเว็บไชต์</h1>

        <Image src="/shopping.svg" width={400} height={400} alt="logo" />

        <p>ยินดีต้อนรับสู่ร้านค้า Prasert</p>

        <Link href="/products" className={styles.btn}>ดูสินค้าทั้งหมด</Link>

      </div>
    </>
  );
}
