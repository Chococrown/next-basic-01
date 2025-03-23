import styles from "@/styles/about.module.css"
import Image from "next/image";

export default function About(){
    return(
        <>
            <div className={styles.containner}>
    
            <h1 className={styles.title}>เกี่ยวกับเรา</h1>
    
            <Image src="/about.svg" width={400} height={400} alt="logo" />
    
            </div>
      </>
    )
}