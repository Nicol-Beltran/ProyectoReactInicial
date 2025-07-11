import imagen1 from "../assets/imagen1.png";
import styles from "../components/features.module.css";
export default function Features() {
  return (
    <>
    <h2>Caracteristicas principales</h2>
      <section id="features" className={styles.features}>
        
        <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://media.istockphoto.com/id/1420676204/es/foto/retrato-de-un-tigre-real-de-bengala-alerta-y-mirando-a-la-c%C3%A1mara-animal-nacional-de-bangladesh.jpg?s=1024x1024&w=is&k=20&c=-Wgtez5zKlIoxEWsNxJpC_FehTdfGzoCua_TPW9cafw="
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img src={imagen1} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
          </div>
        </div>
         <div class="card" style={{ width: "18rem" }}>
          <img src={imagen1} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
