import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center sm:min-h-[60vh]">
      <p className="text-xs uppercase tracking-wide text-muted-foreground sm:text-sm">
        404
      </p>
      <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button className="mt-4 w-full max-w-xs sm:w-auto" asChild>
        <Link href="/">Back to dashboard</Link>
      </Button>
    </div>
  )
}
