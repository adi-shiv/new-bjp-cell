import moment from 'moment'
import styles from '../assets/style/certificateGenerator.module.css'
// import { Form } from 'react-router-dom'

const Certificate = ({ name, course, dateOfConductStart, dateOfConductEnd, signature, signatureDetails , number,email,age, address,qualification }) => {

    


  return (
    <>
      <div className={styles.certificateWrapper}  >
        <div className={styles.certificateContainer}>
          {/* <div>Logo Here</div> */}

          <h1>MEMBERSHIP ID</h1>

          <span className={styles.smallText}>This certificate is proudly awarded to</span>

          <p className={styles.primaryItalicText}>{name}</p>

          <span className={styles.smallText}>for successfully completing the course</span>

          <h2>{qualification}</h2>

          <span className={styles.smallText}>{`conducted from ${
            dateOfConductStart ? moment(dateOfConductStart).format('MMMM YYYY') : '-'
          } to ${dateOfConductEnd ? moment(dateOfConductEnd).format('MMMM YYYY') : '-'}`}</span>

          <div className={styles.signatureBlock}>
            <img className={styles.signatureImage} src={signature.preview} alt='' />

            <span className={styles.horizontalBar} />

            <span className={styles.smallText}>{signatureDetails}</span>
          </div>
        </div>

        <button style={{ marginTop: ' 3rem' }}>Download PDF</button>
      </div>
    </>
  )
}

export default Certificate