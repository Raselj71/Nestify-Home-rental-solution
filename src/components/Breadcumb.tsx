"use client"

import {
  Breadcrumb,

  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function BreadcrumbComponent() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter((segment) => segment)

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/")
    const label = decodeURIComponent(segment.replace(/-/g, " "))
    const isLast = index === pathSegments.length - 1

    return (
      <div className="flex items-center" key={href}>
        <BreadcrumbItem>
          {isLast ? (
            <BreadcrumbPage>{label}</BreadcrumbPage>
          ) : (
            <BreadcrumbLink asChild>
              <Link href={href}>{label}</Link>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {!isLast && <BreadcrumbSeparator />}
      </div>
    )
  })

  return (
    <div className="py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathSegments.length > 0 && <BreadcrumbSeparator />}
          {breadcrumbs}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
