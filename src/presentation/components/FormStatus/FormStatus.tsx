import React, { useContext } from 'react'

import Spinner from '@/presentation/components/Spinner'
import FormContext from '@/presentation/contexts/form'

import styles from './FormStatus.module.scss'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(FormContext)

  return (
    <div data-testid="error-wrap" className={styles.errorWrap}>
      { isLoading && <Spinner className={styles.spinner} /> }
      { errorMessage && <span className={styles.error}>{errorMessage}</span> }
    </div>
  )
}

export default FormStatus
