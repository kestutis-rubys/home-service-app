import { TextField } from '../../components/TextField/TextField';
import styles from './AboutUsPage.module.scss';

export const AboutUsPage = () => {
  return (
    <div className={styles.aboutUsPageContainer}>
      <h2>About Us</h2>
      <div className={styles.contentBlock}>
        <div className={styles.contentBlockText}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <img
          src='https://img.freepik.com/free-photo/cleaning-home-tools-background-with-large-copy-space_1409-7603.jpg?t=st=1726927934~exp=1726931534~hmac=a1b563ce18a21b7ed3ca967076146c4a9d3a579479fd29d22c87f1ed72b54307&w=1800'
          alt='Stars repair'
        />
      </div>
      <div className={styles.contentBlock}>
        <img
          src='https://img.freepik.com/free-photo/service-maintenance-worker-repairing_23-2149176718.jpg'
          alt='Stars repair'
        />
        {/* <div className={styles.contactBlock}>
          <h3>Contact Us</h3>
          <form>
            <TextField label='Your name' name='username' style='simple' />
            <TextField label='Your email' name='email' style='simple' />
          </form>
        </div> */}
      </div>
    </div>
  );
};
