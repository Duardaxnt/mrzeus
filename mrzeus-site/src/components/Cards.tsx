export default function Cards() {
    return (
        <main className="cards-container">


        <div className="card">
            <div className="card-top">
                <img
                    src="shopee.png"
                    alt="Shopee"
                    className="card-img"
                />
                <h2>Shopee</h2>
            </div>
            <button onClick={() => window.open("https://collshp.com/zeus.mr")}>
                Comprar
            </button>
        </div>


        <div className="card">
            <div className="card-top">
                <img
                    src="youtube.png"
                    alt="Youtube"
                    className="card-img"
                />
                <h2>YouTube</h2>
            </div>
            <button onClick={() => window.open("https://www.youtube.com/@mr.zeus.")}>
                Seguir
            </button>
        </div>


        <div className="card">
            <div className="card-top">
                <img
                    src="amazon.png"
                    alt="Amazon"
                    className="card-img"
                />
                <h2>Amazon</h2>
            </div>
            <button onClick={() => window.open("https://www.amazon.com.br/MOUGOL-RX580-exibi%C3%A7%C3%A3o-Express-ventiladores/dp/B0FS15NFJF?crid=2RPGHEHJY8BRC&dib=eyJ2IjoiMSJ9.eDmO3fg4NzAQ6tfnfFdddhmSZUM1ih4gjF3P3HhHajNC9wUaafyQyU5LOEPOxKai6qD_Op6G7qY4zdYLAzny_Hh2vBPSF8K_LMbhbW_rJvFG1hJIzu6VAO3pPrDWRTLA2JcgtmQJXKo2JarIcy5uID_xoeGpIUIoQ7tM-7uzR9VjefMG7oHCDhuK08OC-Ie5H7r7GRKqATbDP_zmzSmkbbG90XU9cWgFs-lUG4lUk7FtVQAbwp-FM1A_4Ox_GiXreJXhE89iSQevdCI3uxALcP2yG5eNpBF-XW9l5a9LICc.uP3tOmz9MPHgW9TVzaXAKYDaOO2JqbPc-zsPi66CbZg&dib_tag=se&keywords=placa%2Bde%2Bvideo&qid=1759427214&sprefix=placa%2Bde%2B%2Caps%2C184&sr=8-5&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751&th=1&linkCode=sl1&tag=mrzeus-20&linkId=cd86809f798a646f1a6cab041d0125ae&language=pt_BR&ref_=as_li_ss_tl")}>
                Comprar
            </button>
        </div>
</main>
);
}