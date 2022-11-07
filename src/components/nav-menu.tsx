import { chakra, HStack } from '@chakra-ui/react';
import Link from 'next/link';

const ChNextLink = chakra(Link);

const menu = {
  about: '/about',
  services: '/services',
  packages: '/reviews',
  contact: '/contact',
};

export const NavMenu = () => {
  return (
    <HStack
      as="nav"
      w="full"
      flex={1}
      justify="flex-end"
      mr={20}
    >
      {Object.keys(menu).length &&
        Object.entries(menu).map(([key, value]) => (
          <ChNextLink
            key={key}
            href={value}
            px={3}
            fontSize="xl"
            letterSpacing="widest"
          >
            {key.toUpperCase()}
          </ChNextLink>
        ))}
    </HStack>
  );
};
