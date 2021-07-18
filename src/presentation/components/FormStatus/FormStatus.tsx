import React from 'react'

import Spinner from '@/presentation/components/Spinner'

import styles from './FormStatus.module.scss'

const FormStatus: React.FC = () => {
  return (
    <div className={styles.errorWrap}>
      <Spinner className={styles.spinner} />
      <span className={styles.error}>Erro</span>
    </div>
  )
}

export default FormStatus
