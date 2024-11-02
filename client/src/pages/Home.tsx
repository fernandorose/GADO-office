import { css } from "@emotion/css";
import Layout from "../Layout/Layout";

const Home = () => {
  return (
    <Layout title="Home">
      <main
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
        `}
      >
        <div
          className={css`
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          `}
        >
          <h1
            className={css`
              position: relative;
              font-size: 4rem;

              /* Texto con degradado */
              background: linear-gradient(to top, #000000 30%, #616161);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              -webkit-text-stroke: 1px transparent; /* Stroke transparente */
            `}
          >
            <span
              className={css`
                /* Pseudo-elemento simulado para stroke en degradado */
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(
                  360deg,
                  #000000,
                  #f5f5f5
                ); /* Degradado del stroke */
                -webkit-background-clip: text;
                color: transparent;
                -webkit-text-stroke: 2px transparent; /* Stroke transparente en pseudo-elemento */
                z-index: -1;
              `}
            >
              GADO-office
            </span>
            GADO-office
          </h1>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
