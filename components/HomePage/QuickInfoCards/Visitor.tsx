import { Badge } from '@/components/ui/badge';
import React from 'react'

interface PageProps {
    visitors:number
}

const Visitor:React.FC<PageProps> = ({visitors}) => {
  return (
    
    <Badge>Visitors: {visitors}</Badge>
  );
}



export default Visitor
