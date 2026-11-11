import React from 'react'
import styles from "./Card.module.css"

function CardSkeleton() {
  return (
	<article className={`${styles.card} ${styles.cardSkeleton} skeleton`}></article>
  )
}

export default CardSkeleton