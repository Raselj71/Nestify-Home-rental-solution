"use client"

import { Slot } from "@radix-ui/react-slot"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Fragment } from "react"

export function BreadcrumbComponent() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter(Boolean)

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/")
    const label = decodeURIComponent(segment.replace(/-/g, " "))
    const isLast = index === pathSegments.length - 1

    return (
      <Fragment key={href}>
        <li>
          {isLast ? (
            <span className="text-muted-foreground capitalize">{label}</span>
          ) : (
            <Slot className="text-sm font-medium capitalize text-primary hover:underline">
              <Link href={href}>{label}</Link>
            </Slot>
          )}
        </li>
        {!isLast && (
          <li aria-hidden="true">
            <span className="mx-2 text-muted-foreground">/</span>
          </li>
        )}
      </Fragment>
    )
  })

  return (
    <nav className="py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 text-sm">
        <li>
          <Link href="/" className="text-primary font-medium hover:underline">
            Home
          </Link>
        </li>
        {pathSegments.length > 0 && (
          <li aria-hidden="true">
            <span className="mx-2 text-muted-foreground">/</span>
          </li>
        )}
        {breadcrumbs}
      </ol>
    </nav>
  )
}
