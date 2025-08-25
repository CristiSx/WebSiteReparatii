import React from 'react'

interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    isDisabled?: boolean;
    className?: string;
}


const Button: React.FC<ButtonProps> = (
    {
        onClick,
        children,
        type = 'button',
        isDisabled = false,
        className = ''
    }
) => {
  return (
      <button
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            className={` ${className}`}
            children={children}
      />
  )
}

export default Button