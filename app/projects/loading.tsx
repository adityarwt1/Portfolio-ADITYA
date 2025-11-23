import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

const loading = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 space-y-10">
      {[1, 2].map((i) => (
        <Card key={i} className="shadow-md border rounded-xl">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* LEFT skeleton image */}
              <div className="w-full md:w-1/3">
                <Skeleton className="h-48 w-full rounded-xl" />
              </div>

              {/* RIGHT text skeleton */}
              <div className="flex-1 space-y-4">
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />

                <div className="flex gap-2">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-20" />
                </div>

                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-56" />

                <div className="flex gap-4 pt-2">
                  <Skeleton className="h-10 w-28" />
                  <Skeleton className="h-10 w-28" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default loading