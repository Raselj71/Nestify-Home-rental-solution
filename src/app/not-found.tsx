'use client'

import { Button, Flex, Heading, Text } from '@radix-ui/themes'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-6">
      <Flex direction="column" gap="3" align="center" className="text-center">
        <Heading as="h1" size="6">
          Page Not Found
        </Heading>
        <Text color="gray">
          Sorry, the page you are looking for does not exist or has been moved.
        </Text>
        <Link href="/">
          <Button size="3" radius="large">
            Go Home
          </Button>
        </Link>
      </Flex>
    </div>
  )
}
