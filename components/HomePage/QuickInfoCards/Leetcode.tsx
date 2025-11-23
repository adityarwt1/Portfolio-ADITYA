"use client"
import { Badge } from '@/components/ui/badge'
import React from 'react'

interface LeetcodePorps{
  easy:number
  medium:number
  hard:number
}
const Leetcode:React.FC <LeetcodePorps> = ({easy, medium, hard}) => {
  return (
    <Badge>
      LeetCode: Easy:{easy}, Medium:{medium} Hard:{hard}
    </Badge>
  );
}

export default Leetcode
