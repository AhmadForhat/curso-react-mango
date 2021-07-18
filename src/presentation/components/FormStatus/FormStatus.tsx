import React, { useContext } from 'react'

import Spinner from '@/presentation/components/Spinner'
import FormContext from '@/presentation/contexts/form'

import styles from './FormStatus.module.scss'

const FormStatus: React.FC = () => {
  const { isLoading, error } = useContext(FormContext)

  return (
    <div data-testid="error-wrap" className={styles.errorWrap}>
      { isLoading && <Spinner className={styles.spinner} /> }
      { error.main && <span className={styles.error}>{error.main}</span> }
    </div>
  )
}

export default FormStatus
