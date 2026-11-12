import Image from "next/image";
import styles from "./page.module.css";
import holdingLensImage from "../../public//agence-olloweb-lens.avif"


export default async function Home() {


  return (
    <>
      <section className={styles.welcomeSection}>
        <div className={styles.imageWrapper}>
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={holdingLensImage}
            loading="eager"
            alt="Closeup of lens - Photo by Agence Olloweb on Unsplash"
            title="Photo by Agence Olloweb on Unsplash" />
        </div>

        <div className={styles.welcomeContent}>
          <h1>Welcome to SprintLens&trade;</h1>
          <p>Keep track of blockers and bad moods.</p>
          <p>You <strong>know</strong> you have`em</p>
        </div>
      </section>
    </>
  );
}
