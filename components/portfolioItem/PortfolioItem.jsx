import Image from "next/image";
import styles from "./PortfolioItem.module.scss";

const PortfolioItem = ({id,title,imgUrl, type, description}) => {
  return (

    <div className={styles.itemContainer}>
        <div className={styles.imgContainer}>
            <Image src={imgUrl} width={300} height={150} alt={title} />
        </div>
        {/* transition container */}

        <div className={styles.hoverContainer}>
            <div className={styles.colLeft}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>Type: {type} </p>
                <p className={styles.description}>{description.slice(0,30)}</p>
            </div>
            <div className={styles.colRight}>
            <svg className={styles.link} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>
            <svg className={styles.more} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m480-193 85-85 57 56L480-80 338-222l57-56 85 85ZM193-480l85 85-56 57L80-480l142-142 56 57-85 85Zm574 0-85-85 56-57 142 142-142 142-56-57 85-85ZM480-767l-85 85-57-56 142-142 142 142-57 56-85-85Z"/></svg>
            </div>
        </div>
    </div>

  )
}


export default PortfolioItem;