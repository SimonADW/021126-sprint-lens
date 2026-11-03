import Image from "next/image";
import styles from "./page.module.css";


export default async function Home() {


  return (
    <>
      <section className={styles.welcomeSection}>
        <div className={styles.imageWrapper}>
          <Image fill src="/agence-olloweb-lens.avif"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Closeup of lens - Photo by Agence Olloweb on Unsplash" />
        </div>

        <div className={styles.welcomeContent}>
          <h1>Welcome to SprintLens&trade;</h1>
          <p>Keep track of blockers and bad moods.</p>
          <p>You <strong>know</strong> you`ll encounter them</p>
        </div>
      </section>
    </>
  );
}
