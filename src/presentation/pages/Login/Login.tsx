import React from 'react'

import Spinner from '@/presentation/components/Spinner'
import Header from '@/presentation/components/LoginHeader'
import Footer from '@/presentation/components/Footer'

import styles from './Login.module.scss'

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <Header />
      <form className={styles.form}>
        <h2>Login</h2>
        <div className={styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
          <span>🔴</span>
        </div>
        <div className={styles.inputWrap}>
          <input type="password" name="password" placeholder="Digite sua senha" />
          <span>🔴</span>
        </div>
        <button className={styles.submit} type="submit">Entrar</button>
        <span className={styles.link}>Criar conta</span>
        <div className={styles.errorWrap}>
          <Spinner className={styles.spinner} />
          <span className={styles.error}>Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login
