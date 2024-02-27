import { Button } from '@chakra-ui/react'
import React from 'react'

export interface CustomButtonPropsInterface 
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function CustomButton({
    children,
    disabled
}: CustomButtonPropsInterface) {  
  return (
    <Button
        type="submit"
        bgColor={disabled ? 'rgb(34, 34, 34)' : 'rgb(90, 29, 140)'}
        cursor={disabled ? 'not-allowed' : 'pointer'}
        disabled={disabled}
        sx={{ 
        width: "100%", 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'transparent solid 2px',
        outlineOffset: '2px',
        borderColor: 'rgb(239, 239, 239)',
        borderWidth: '0px',
        borderStyle: 'none',
        borderRadius: '64px',
        padding: '0px 24px',
        boxShadow: 'rgba(255, 255, 255, 0.96) 0px 0px 0px 0px',
        fontFamily: 'Graphik, sans-serif',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '1.3',
        letterSpacing: '-0.01px',
        color: `${disabled ? 'rgba(255, 255, 255, 0.32)' : 'rgba(255, 255, 255, 0.96)'}`,
        minWidth: '48px',
        minHeight: '48px',
        height: '56px',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            backgroundColor: `${disabled ? 'rgb(34, 34, 34)' : 'rgb(90, 29, 140)'}`,
            opacity: `${disabled ? '1' : '0.8'}`
        }
        }}
    >
        {children}
    </Button>
  )
}
