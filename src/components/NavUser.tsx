'use client'

import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import { BadgeCheck, Bell, UserIcon } from 'lucide-react'
import LogoutMenu from './common/LogoutMenu'
import { Avatar, Box, DropdownMenu, Flex, Link, Text } from '@radix-ui/themes'

function NavUser() {
  const { user, loading } = useAuth()

  if (!user || loading) return null

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {/* Use Box to wrap Avatar, no button styling applied */}
        <Box
          style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
        >
          <Avatar
            size="3"
            radius="large"
            fallback={<UserIcon size={16} />}
            src={user.avatar ?? ''}
            alt={user.fullName ?? ''}
          />
        </Box>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end" sideOffset={6}>
        <DropdownMenu.Label>
          <Flex align="center" gap="3">
            <Avatar
              size="2"
              radius="large"
              fallback={<UserIcon size={14} />}
              src={user.avatar ?? ''}
              alt={user.fullName ?? ''}
            />
            <Box>
              <Text as='p' weight="bold" size="1" truncate>
                {user.fullName}
              </Text>
              <Text color="gray" size="1" truncate>
                {user.email}
              </Text>
            </Box>
          </Flex>
        </DropdownMenu.Label>

        <DropdownMenu.Separator />

        <DropdownMenu.Group>
          {user?.user_metadata?.phone_verified && (
            <DropdownMenu.Item>
              <Flex align="center" gap="2">
                <BadgeCheck size={16} />
                <Text size="2">Verify</Text>
              </Flex>
            </DropdownMenu.Item>
          )}

          <DropdownMenu.Item asChild>
            <Link href="/profile" underline="none">
              <Flex align="center" gap="2">
                <UserIcon size={16} />
                <Text size="2">Profile</Text>
              </Flex>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <Flex align="center" gap="2">
              <Bell size={16} />
              <Text size="2">Notifications</Text>
            </Flex>
          </DropdownMenu.Item>

          <DropdownMenu.Separator />
          <LogoutMenu />
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default NavUser
