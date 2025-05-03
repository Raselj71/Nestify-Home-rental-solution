'use client'
import React from 'react'
import { Button } from '../ui/Button'
import { logoutAction } from '@/action/LoginAction'

function LogoutMenu() {


  return (
    <Button className='w-full cursor-pointer' variant={'ghost'} onClick={async ()=>{await logoutAction()}}>Log out</Button>
  )
}

export default LogoutMenu