import React, { useState } from 'react'

import {
  Header,
  Footer,
  Input,
  FormStatus
} from '@/presentation/components'
import FormContext from '@/presentation/contexts/form'

import styles from './Login.module.scss'

const Login: React.FC = () => {
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    main: '',
  })

  const contextParams = {
    isLoading,
    error,
  }

  return (
    <div className={styles.login}>
      <Header />
      <FormContext.Provider value={contextParams}>
        <form className={styles.form}>
          <h2>Login</h2>
          <Input error={error.email} type="email" name="email" placeholder="Digite seu e-mail" />
          <Input error={error.password} type="password" name="password" placeholder="Digite sua senha" />
          <button
            data-testid='submit'
            className={styles.submit}
            type="submit"
            disabled
          >
            Entrar
          </button>
          <span className={styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </FormContext.Provider>
      <Footer />
    </div>
  )
}

export default Login
