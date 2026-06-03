
interface HighlightCardProps {
  title: string;
  description: string;
}

export function HighlightCard({ title, description }: HighlightCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-muted/30 border border-border hover:bg-muted/50 transition-colors">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}