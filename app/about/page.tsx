"use client";

import { CompanyBadge } from "@/components/company-badge";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutMe() {
  return (
    <Card className="max-w-4xl mx-auto p-6 shadow-md rounded-xl">
      <CardContent className="space-y-6">
        {/* Title */}
        <h2 className="text-2xl font-semibold">About Me</h2>

        {/* Story */}
        <div className="space-y-4 text-black/80 dark:text-white/80 leading-relaxed">
          <p>
            I am Aditya Rawat, and I am from Sidhi in Madhya Pradesh. I come
            from a small family of four members. During my childhood, I used to
            accompany my father while he worked on online-related tasks. That
            was the first time I became curious about technology. Later, for the
            first time, I edited an HTML element using Chrome DevTools, which
            made me even more excited.
          </p>

          <p>
            One day, I asked my father, “Who created Microsoft Windows?” He
            replied, “Microsoft software engineers.” From that day onward, I
            started dreaming of working at Microsoft. In 8th grade, I started
            planning how I could actually get into coding. I wanted to build
            software like Windows, but since I didn’t have a powerful PC, I
            began learning web development instead.
          </p>

          <p>
            In May 2024, I wrote my first lines of code. I felt extremely
            excited when I deployed my first project and realized anyone in the
            world could access it. Within six months, I cleared all my basics
            because of “Complete Coding” by Prashant Jain, and then moved on to
            React and backend development.
          </p>

          <p>
            For interviews and deep understanding, I wanted to learn how things
            work under the hood, so I started following the Complete Frontend
            roadmap. In May 2025, after one year of learning the MERN stack, I
            received my first internship at a company called Tripx. There, I
            worked on user e-KYC for both consumers and merchants, and also
            developed the admin dashboard. Even though it was an unpaid
            internship, I learned a lot—especially how to manage both frontend
            and backend.
          </p>

          <p>
            Later, the company offered me a full-time position at TripxPay. Now,
            I am improving myself through DSA, and I have already solved 150+
            problems. My goal is to join my first dream company—the place where
            my dream started: Microsoft.
          </p>
        </div>

        {/* Companies Section */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Companies & Inspirations</h3>

          <div className="flex flex-wrap gap-4">
            <CompanyBadge
              name="Microsoft"
              logo="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            />
            <CompanyBadge name="TripxPay" logo="https://tripxpay.in/logo.svg" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
