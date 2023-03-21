import styles from "../styles/moveis.module.css";
import Image from "next/image";
import { Button, ButtonGroup } from "@chakra-ui/react";
export default function Moveis() {
  return (
    <div className={styles.moveis}>
      <h1>Estoque</h1>
      <div className={styles.grid_moveis}>
        <div className={styles.grid_movel}>
          <p>Geladeira</p>
          <Image
            src="/images/geladeira.jpg"
            width="200"
            height="200"
            alt="movel"
          />
          <p>249,99</p>
          <Button colorScheme="twitter">Verificar Disponibilidade
          </Button>
        </div>
        <div className={styles.grid_movel}>
          <p>Geladeira</p>
          <Image
            src="/images/geladeira.jpg"
            width="200"
            height="200"
            alt="movel"
          />
          <p>249,99</p>
        </div>
        <div className={styles.grid_movel}>
          <p>Geladeira</p>
          <Image
            src="/images/geladeira.jpg"
            width="200"
            height="200"
            alt="movel"
          />
          <p>249,99</p>
        </div>
        <div className={styles.grid_movel}>
          <p>Geladeira</p>
          <Image
            src="/images/geladeira.jpg"
            width="200"
            height="200"
            alt="movel"
          />
          <p>249,99</p>
        </div>
        <div className={styles.grid_movel}>
          <p>Geladeira</p>
          <Image
            src="/images/geladeira.jpg"
            width="200"
            height="200"
            alt="movel"
          />
          <p>249,99</p>
        </div>
        <div className={styles.grid_movel}>
          <p>Geladeira</p>
          <Image
            src="/images/geladeira.jpg"
            width="200"
            height="200"
            alt="movel"
          />
          <p>249,99</p>
        </div>
        <div className={styles.grid_movel}>
          <p>Geladeira</p>
          <Image
            src="/images/geladeira.jpg"
            width="200"
            height="200"
            alt="movel"
          />
          <p>249,99</p>
        </div>
        <div className={styles.grid_movel}>
          <p>Geladeira</p>
          <Image
            src="/images/geladeira.jpg"
            width="200"
            height="200"
            alt="movel"
          />
          <p>249,99</p>
        </div>
        <div className={styles.grid_movel}>
          <p>Geladeira</p>
          <Image
            src="/images/geladeira.jpg"
            width="200"
            height="200"
            alt="movel"
          />
          <p>249,99</p>
        </div>
        <div className={styles.grid_movel}>
          <p>Geladeira</p>
          <Image
            src="/images/geladeira.jpg"
            width="200"
            height="200"
            alt="movel"
          />
          <p>249,99</p>
        </div>
      </div>
    </div>
  );
}
