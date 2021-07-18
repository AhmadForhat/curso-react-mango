import React from 'react'

import styles from './Input.module.scss'

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error: string
  setState: (event: any) => void
  state: string
}

const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
  event.target.readOnly = false
}

const Input: React.FC<InputProps> = ({error, setState, state, ...props}) => {
  const getStatus = (): string => {
    return error ? '🔴' : '🟢'
  }

  const getTitle = (): string => {
    return error || 'Tudo certo!'
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState(event.target.value)
  }

  return (
    <div className={styles.inputWrap}>
      <input
        {...props}
        data-testid={props.name}
        readOnly
        onFocus={enableInput}
        onChange={handleChange}
        value={state}
      />
      <span data-testid={`${props.name}-status`} title={getTitle()} >{getStatus()}</span>
    </div>
  )
}

export default Input
