import {
  Badge,
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import type { Services } from '@/_content';
import { MotionBox } from 'chakra.ui';
import type { FC } from 'react';

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

const categoryScheme: Record<keyof Services, string> = {
  eyebrows: 'teal',
  facials: 'blue',
  waxing: 'green',
  other: 'red',
};

export const NeonCard: FC<{ title: string; category: keyof Services }> = ({
  title,
  category,
}) => {
  return (
    <Center as={MotionBox} py={12} cursor="pointer" whileHover={{ scale: 1.1 }}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'115px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            alt=""
            rounded={'lg'}
            height={115}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {title}
          </Heading>

          <HStack w="full" justify="flex-end" pt={6}>
            <Badge colorScheme={String(categoryScheme[category])}>
              {category}
            </Badge>
          </HStack>
        </Stack>
      </Box>
    </Center>
  );
};
