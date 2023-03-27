import React from "react";
import styles from '@/styles/Home.module.css'
import Image from "next/image";
export default function Header(){
    return (
        <div className={styles.Heading}>
      

            <Image
            className={styles.Heading}
            src="/Create task.png"
            width={420}
            height={100}
            />
        </div>
    )
}