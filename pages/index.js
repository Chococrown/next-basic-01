import styles from "@/styles/home.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>

        <h1 className={styles.title}>หน้าแรกของเว็บไชต์</h1>

        <Image src="/shopping.svg" width={400} height={400} alt="logo" />

        <p>ยินดีต้อนรับสู่ร้านค้า Prasert</p>

        <Link href="/products" className={styles.btn}>ดูสินค้าทั้งหมด</Link>

      </div>
    </>
  );
}
