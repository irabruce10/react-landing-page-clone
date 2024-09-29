import styles from './Production.module.scss';
function Products() {
  return (
    <div className={styles.products_container}>
      <div className={styles.products_wrapper}>
        <div className={styles.products_card}>
          <h1>What you get</h1>
          <h2>Your style on your budget</h2>

          <div className={styles.card_products}>
            <div className={styles.card_item}>
              <img
                src="https://res.cloudinary.com/stitch-fix/image/upload/f_auto,q_auto/v1724105606/landing-pages/pages/US/men/Rebrand%20Launch%20'24/3_M_WIAF_1.jpg"
                width="350"
                height="480"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/stitch-fix/image/upload/f_auto,q_auto/v1719602781/landing-pages/pages/US/men/All24-WEB-LOB%20Gateway%20Update%20-1207339213227223-Men/3_WIAF/3_M_WIAF_3.png"
                width="350"
                height="480"
              />
            </div>
            <img
              src="https://res.cloudinary.com/stitch-fix/image/upload/f_auto,q_auto/v1719602781/landing-pages/pages/US/men/All24-WEB-LOB%20Gateway%20Update%20-1207339213227223-Men/3_WIAF/3_M_WIAF_1.png"
              width="350"
              height="480"></img>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://res.cloudinary.com/stitch-fix/image/upload/f_auto,q_auto/v1724105603/landing-pages/pages/US/men/Rebrand%20Launch%20'24/4_M_Price_1.jpg"
            width="400"
            height="400"
          />
        </div>
        <div>
          <img
            a
            src="https://res.cloudinary.com/stitch-fix/image/upload/f_auto,q_auto/v1724105602/landing-pages/pages/US/men/Rebrand%20Launch%20'24/4_M_Price_2.jpg"
            width="400"
            height="400"
          />
        </div>
        <img
          src="https://res.cloudinary.com/stitch-fix/image/upload/f_auto,q_auto/v1724105598/landing-pages/pages/US/men/Rebrand%20Launch%20'24/4_M_Price_3.jpg"
          width="400"
          height="400"
        />
      </div>
      Products
    </div>
  );
}

export default Products;
