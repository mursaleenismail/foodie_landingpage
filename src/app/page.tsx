import Header from '@/layouts/Header/header'
import HomeHero from '@/sections/home/Home-hero/Homehero'
import Categories from '@/sections/home/Popular-categories/Categories'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Image from 'next/image'

export default function Home() {
  return (
  <Box>
    <HomeHero/>
    {/* <Header/> */}
    {/* <Stack>
    <Categories/>
    </Stack> */}
  </Box>
  )
}
