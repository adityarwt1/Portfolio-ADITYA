"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DocLayoutProps {
  topics: { id: string; title: string }[];
  activeId: string;
  onSelect: (id: string) => void;
  children: React.ReactNode;
}

export default function DocLayout({
  topics,
  activeId,
  onSelect,
  children,
}: DocLayoutProps) {
  return (
    <div className="flex w-full gap-6">
      {/* LEFT SIDEBAR */}
      <Card className="w-64 h-[80vh] border rounded-xl shadow-sm">
        <CardContent className="p-0">
          <ScrollArea className="h-full p-3">
            {topics.map((t) => (
              <button
                key={t.id}
                onClick={() => onSelect(t.id)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-md text-sm mb-1 transition",
                  activeId === t.id
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                )}
              >
                {t.title}
              </button>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>

      {/* RIGHT CONTENT AREA */}
      <Card className="flex-1 border rounded-xl shadow-sm">
        <CardContent className="p-6 prose max-w-none">{children}</CardContent>
      </Card>
    </div>
  );
}
