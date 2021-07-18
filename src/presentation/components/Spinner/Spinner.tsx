import React from 'react'
import clsx from 'clsx'

import styles from './Spinner.module.scss'

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return (
    <div className={clsx(styles.spinner, className)}>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  )
}

export default Spinner
