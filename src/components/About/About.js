import Button from '../Button/Button';
import styles from './About.module.scss';
function About() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>It's easy</h1>
        <h2>Here's how it works</h2>
        <div className={styles.items}>
          <div className={styles.box}>
            <img src="https://res.cloudinary.com/stitch-fix/image/upload/q_auto/v1718416285/landing-pages/pages/US/gateway/SITE-FY24-Gateway%20Update%20V1%20and%20V1.5%20-1207050307893278/2_HIW/HIW-1-Top.svg" />

            <h3>
              1. Take your <br /> style quiz
            </h3>
            <p>
              Tell us about your style, sizes and <br />
              budget—the more we know, the more
              <br />
              your men’s Stylist can help.
            </p>

            <img src="https://res.cloudinary.com/stitch-fix/image/upload/q_auto/v1719601200/landing-pages/pages/US/gateway/SITE-FY24-Gateway%20Update%20V1%20and%20V1.5%20-1207050307893278/2_HIW/HIW-1-Bottom.svg" />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/stitch-fix/image/upload/q_auto/v1718416284/landing-pages/pages/US/gateway/SITE-FY24-Gateway%20Update%20V1%20and%20V1.5%20-1207050307893278/2_HIW/HIW-2-Top.svg"
              width="224"
              height="85"
            />
            <h3>
              2. Match with your
              <br /> (human!) Stylist
            </h3>
            <p>
              Let your Stylist know what you’re <br /> looking for. They’ll
              select 5 personalized
              <br /> pieces, and send your men's clothing <br /> box straight to
              your door.
            </p>{' '}
            <img
              src="https://res.cloudinary.com/stitch-fix/image/upload/q_auto/v1718416283/landing-pages/pages/US/gateway/SITE-FY24-Gateway%20Update%20V1%20and%20V1.5%20-1207050307893278/2_HIW/HIW-2-Bottom.svg"
              width="224"
              height="22"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/stitch-fix/image/upload/q_auto/v1719601201/landing-pages/pages/US/gateway/SITE-FY24-Gateway%20Update%20V1%20and%20V1.5%20-1207050307893278/2_HIW/HIW-3-Top.svg"
              width="224"
              height="85"
            />

            <h3>
              3. Get your <br /> personalized Fix
            </h3>
            <p>
              There’s a $20 styling fee per box (aka <br />
              "Fix") order, which is then credited to
              <br /> whatever you choose to keep. Shipping <br /> and returns
              are always free.
            </p>

            <img
              src="https://res.cloudinary.com/stitch-fix/image/upload/q_auto/v1718416287/landing-pages/pages/US/gateway/SITE-FY24-Gateway%20Update%20V1%20and%20V1.5%20-1207050307893278/2_HIW/HIW-3-Bottom.svg"
              width="224"
              height="25"
            />
          </div>
        </div>
      </div>

      <Button>Let's get started</Button>
    </div>
  );
}

export default About;
