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
            <button onClick={() => window.open("LINK_SHOPEE", "_blank")}>
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
            <button onClick={() => window.open("LINK_SHOPEE", "_blank")}>
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
            <button onClick={() => window.open("LINK_SHOPEE", "_blank")}>
                Comprar
            </button>
        </div>
</main>
);
}