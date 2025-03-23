import styles from "@/styles/Home.module.css"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.container}>

        <h1 className={styles.title}>หน้าแรกของเว็บไชต์</h1>

        <Image src="/shopping.svg" width={300} height={300} />

      </div>
    </>
  );
}
