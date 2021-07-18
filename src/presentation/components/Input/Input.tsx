import React from 'react'

import styles from './Input.module.scss'

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input: React.FC<InputProps> = ({...props}) => {
  return (
    <div className={styles.inputWrap}>
      <input {...props} />
      <span>🔴</span>
    </div>
  )
}

export default Input
