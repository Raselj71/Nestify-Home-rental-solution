'use client'
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { cn } from '@/lib/utils'

function LevelSelect({title,name, level,data,className,onChange}:{title:string,name:string, level:string, data:string[], className?:string,onChange?:any}) {
  return (
    <div className={cn('',className)} >
    <p className="text-xs mb-0.5 text-gray-400">{title}</p>
    <Select  name={name} required>
  <SelectTrigger className="w-[240px]">
    <SelectValue placeholder={level} />
  </SelectTrigger>
  <SelectContent >
    {data.map((d) => (
      <SelectItem key={d} value={d}>
        {d}
      </SelectItem>
    ))}
  </SelectContent>
</Select>




  </div>
  )
}

export default LevelSelect