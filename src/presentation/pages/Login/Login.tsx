import React, { useEffect, useState } from 'react'

import {
  Header,
  Footer,
  Input,
  FormStatus
} from '@/presentation/components'
import FormContext from '@/presentation/contexts/form'
import { Validation } from '@/presentation/protocols/validation'

import styles from './Login.module.scss'

type LoginProps = {
  validation?: Validation
}

const Login: React.FC<LoginProps> = ({ validation }) => {
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState({
    email: '',
    password: '',
    main: '',
  })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const contextParams = {
    isLoading,
    setLoading,
    error,
    setError,
    email,
    setEmail,
    password,
    setPassword
  }

  useEffect(() => {
    setError({
      ...error,
      email: validation.validate('email', email),
      password: validation.validate('password', password)
    })
  },[email, password])

  return (
    <div className={styles.login}>
      <Header />
      <FormContext.Provider value={contextParams}>
        <form className={styles.form}>
          <h2>Login</h2>
          <Input state={email} setState={setEmail} error={error.email} type="email" name="email" placeholder="Digite seu e-mail" />
          <Input state={password} setState={setPassword} error={error.password} type="password" name="password" placeholder="Digite sua senha" />
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
