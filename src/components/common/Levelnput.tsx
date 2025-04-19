'use client'
import { Label } from '@radix-ui/react-select'
import React from 'react'
import { Input } from '../ui/input'

function Levelnput({inputName,placeholder, type, className ,level}:{inputName:string,placeholder:string, type:string, className?:string, level:string}) {  
  return (
    <div>
        
        <Label>{level}</Label>
        <Input name={inputName} type={type} placeholder={placeholder} className='w-full' />
    </div>
  )
}

export default Levelnput