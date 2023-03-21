import Image from "next/image";

import styles from "../styles/Sobre.module.css";
export default function Sobre() {
  return (
    <div className={styles.about}>
      <h1>Conheça um pouco mais sobre o Moveis Eliane</h1>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        malesuada rutrum libero vel posuere. Etiam non neque ut elit bibendum
        euismod. Duis viverra vestibulum nulla, euismod viverra mi lacinia nec.
        Ut sit amet sagittis tortor, non posuere orci. Morbi luctus, tellus ut
        accumsan convallis, lacus dolor euismod dolor, maximus hendrerit purus
        orci at libero. Integer non leo lacus. Sed scelerisque varius lacus, non
        auctor est pharetra a. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.{" "}
      </p>
      <Image
        className={styles.about_image}
        src="/images/entrega.png"
        width="400"
        height="300"
        alt="entrega"
      />
    </div>
  );
}
