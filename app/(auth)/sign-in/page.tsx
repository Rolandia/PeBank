'use client'
import { Grid, GridItem, Image, Box, Text} from '@chakra-ui/react'

import ImgLogin from '@/public/img-sign-in.png'
import Logo from '@/public/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Grid templateColumns='repeat(2, 1fr)' position='relative'>
        <GridItem w={'100%'}  h={'100vh'} >
          <Image loading='lazy' src={'https://www.datocms-assets.com/39397/1704720890-nu_core_login.png?h=1080'} sx={{ objectFit: 'cover', objectPosition:'top', width: '100%', height: '100%', borderStyle: 'none'}} alt={'Tela de início'} />
        </GridItem>
        <GridItem w={'100%'} h={'100vh'}>
          <Grid templateRows='1fr 13vh' height={'100%'}>
            <GridItem bgColor={'#000'}></GridItem>
            <GridItem bg={'#343434'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', py: 6}}>
                <Link href={'/conta'}><Text fontSize={'xl'} color='#bc84f7' fontWeight={'600'}>Esqueci a senha</Text></Link>
                <Link href={'/conta'}><Text fontSize={'xl'} color='#bc84f7' fontWeight={'600'}>Não sou cliente</Text></Link>
              </Box>

            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
      <Box sx={{ position: 'absolute', top: 6, left: 6, }} width={20} height={20}>
      <Link href={'/sign-in'}><Logo /></Link>
      </Box>
    </>
  );
}
