import React from 'react'

import Logo from '@/presentation/components/Logo'

import styles from './LoginHeader.module.scss'

const LoginHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para programadores</h1>
    </header>
  )
}

export default LoginHeader
