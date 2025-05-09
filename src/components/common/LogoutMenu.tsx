'use client'
import React from 'react'

import { logoutAction } from '@/action/LoginAction'
import { Button } from '@radix-ui/themes'

function LogoutMenu() {


  return (
    <Button className='w-full' variant='ghost'  onClick={async ()=>{await logoutAction()}}>Log out</Button>
  )
}

export default LogoutMenu