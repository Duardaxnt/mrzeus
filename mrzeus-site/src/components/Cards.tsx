export default function Cards() {
    return (
        <main className="cards-container">


        <div className="card">
            <h2>Shopee</h2>
            <img
                src="https://seeklogo.com/images/S/shopee-logo-68120CB6BD-seeklogo.com.png"
                alt="Shopee"
                className="card-img"
            />
            <button onClick={() => window.open("LINK_SHOPEE", "_blank")}>
                Comprar
            </button>
        </div>


        <div className="card">
            <h2>YouTube</h2>
            <img
                src="https://seeklogo.com/images/Y/youtube-icon-logo-CF8E72F331-seeklogo.com.png"
                alt="YouTube"
                className="card-img"
            />
            <button onClick={() => window.open("LINK_YOUTUBE", "_blank")}>
                Comprar
            </button>
        </div>


        <div className="card">
            <h2>Amazon</h2>
                <img
                    src="https://seeklogo.com/images/A/amazon-logo-8E3F929A05-seeklogo.com.png"
                    alt="Amazon"
                    className="card-img"
                />
                <button onClick={() => window.open("LINK_AMAZON", "_blank")}>
                    Comprar
                </button>
        </div>
</main>
);
}