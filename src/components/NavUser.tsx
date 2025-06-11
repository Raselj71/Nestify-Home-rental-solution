'use client';

import { useAuth } from '@/hooks/useAuth';
import React from 'react';
import {
  BadgeCheck,
  CreditCard,
  Heart,
  House,
  HousePlus,
  Star,
  UserIcon,
  History,
  HandCoins,
  LogOut,
} from 'lucide-react';

import { Avatar, Box, DropdownMenu, Flex, Text } from '@radix-ui/themes';
import { logoutAction } from '@/action/LoginAction';
import Link from 'next/link';

function NavUser() {
  const { user, loading } = useAuth();

  if (!user || loading) return null;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Box
          style={{
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          <Avatar
            size={{
              initial: '2',
              lg: '3',
            }}
            radius="large"
            fallback={<UserIcon size={16} />}
            src={user.avatar ?? ''}
            alt={user.fullName ?? ''}
          />
        </Box>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end" className="w-60" sideOffset={6}>
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
              <Text as="p" weight="bold" size="1" truncate>
                {user.fullName}
              </Text>
              <Text color="gray" size="1" truncate>
                Current Point: {user.point}
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
            <Link href="/profile">
              <Flex align="center" gap="2">
                <UserIcon size={16} />
                <Text size="2">Profile</Text>
              </Flex>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <Link className=" hover:border-none" href="/order">
              <Flex align="center" gap="2">
                <Star size={16} />
                <Text size="2">Order Now</Text>
              </Flex>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <Link className=" hover:border-none" href="/order-history">
              <Flex align="center" gap="2">
                <History size={16} />
                <Text size="2">Order History</Text>
              </Flex>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <Link className=" hover:border-none" href="/add-property">
              <Flex align="center" gap="2">
                <HousePlus size={16} />
                <Text size="2">Add Property</Text>
              </Flex>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <Link href="/my-property">
              <Flex align="center" gap="2">
                <House size={16} />
                <Text size="2">My Property</Text>
              </Flex>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <Link href="/purchase-history">
              <Flex align="center" gap="2">
                <CreditCard size={16} />
                <Text size="2">Purchase History</Text>
              </Flex>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <Link href="/save-property">
              <Flex align="center" gap="2">
                <Heart size={16} />
                <Text size="2">Saved Property</Text>
              </Flex>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <Link href="/buy-point">
              <Flex align="center" gap="2">
                <HandCoins size={16} />
                <Text size="2">Buy Point</Text>
              </Flex>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Separator />

          <DropdownMenu.Item
            onClick={async () => {
              await logoutAction();
            }}
          >
            <Flex align="center" gap="2">
              <LogOut size={16} />
              <Text size="2">Log out</Text>
            </Flex>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default NavUser;
