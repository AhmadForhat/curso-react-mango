import React from 'react'

import styles from './Input.module.scss'

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error: string
}

const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
  event.target.readOnly = false
}

const Input: React.FC<InputProps> = ({error, ...props}) => {
  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <div className={styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      <span data-testid={`${props.name}-status`} title={getTitle()} >{getStatus()}</span>
    </div>
  )
}

export default Input
