import { Badge } from '@/components/ui/badge';
import React from 'react'

interface PageProps {
  interviewes:number
}
const InterViews:React.FC<PageProps> = ({interviewes}) => {
  return <Badge>Interviews:{interviewes}</Badge>;
}

export default InterViews
