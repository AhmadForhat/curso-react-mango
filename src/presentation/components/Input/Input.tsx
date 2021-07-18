import React from 'react'

import styles from './Input.module.scss'

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
  event.target.readOnly = false
}

const Input: React.FC<InputProps> = ({...props}) => {
  return (
    <div className={styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      <span>🔴</span>
    </div>
  )
}

export default Input
