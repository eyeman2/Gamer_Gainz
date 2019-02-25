import "../components/share.css"
import React from "react";
import mirror from "../images/mirror.jpg";
import killabee from "../images/killabee.png";
import sunbasket from "../images/sunbasket.jpg";

const styles = {
    promo: {
        marginTop: "20px",
        marginBottom: "20px",
        maxWidth: "335px"
    }
}

const Sponsors = () => {
    return (
        <div>
            <h2 className="sponsor-head">Sponsors</h2>
            <div className="sponsor-body">
                <a href="https://www.sunbasket.com/" style={styles.promo}><img style={styles.promo} alt="sunbasket" src={sunbasket} /></a>
                <a href="https://www.killabee-gaming.com/" style={styles.promo}><img style={styles.promo} alt="killabee" src={killabee} /></a>
                <a href="https://www.mirror.co/" style={styles.promo}><img style={styles.promo} alt="mirror" src={mirror} /></a>
            </div>
        </div>
    )
}

export default Sponsors