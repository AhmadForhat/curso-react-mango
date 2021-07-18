import React, { memo } from 'react'

import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} />
  )
}

export default memo(Footer)
