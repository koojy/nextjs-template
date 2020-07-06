import React from 'react'

interface IProps {
  children: React.ReactNode
}

export const Button = (props: IProps) => {
  const { children } = props

  return <button>{children}</button>
}