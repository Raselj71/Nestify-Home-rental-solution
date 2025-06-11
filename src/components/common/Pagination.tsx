'use client';

import { Button, Flex, Text } from '@radix-ui/themes';
import React from 'react';

type Props = {
  page: number;
  total: number;
  perPage: number;
  onPageChange: (newPage: number) => void;
};

const Pagination = ({ page, total, perPage, onPageChange }: Props) => {
  const totalPages = Math.ceil(total / perPage);

  return (
    <Flex gap="2" align="center" justify="center" mt="4">
      <Button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        Previous
      </Button>
      <Text size="2">
        Page {page} of {totalPages}
      </Text>
      <Button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
