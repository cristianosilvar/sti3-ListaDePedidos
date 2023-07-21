import style from './style/Header.module.css'

import Logo from '../../assets/sti3-logo.svg'
import useDate from '../../hooks/useDate'

import { Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

export default function Header() {
  
  const {day, dayWeek, mounth} = useDate()
  
  return (
    <header>
      <Flex 
      justifyContent='space-between' py='1rem'>
        <Flex 
        gap='.75rem' 
        alignItems='center'>
          <Image src={Logo} alt='Logotipo da STI3'/>
          <div className={style.divider}></div>
          <Text 
          fontSize='1.125rem' 
          fontWeight='600'>
            Feito por Cris Silva
          </Text>
        </Flex>
        <Text 
        fontSize='1.125rem' 
        fontWeight='600'>
          {dayWeek}, {day} {mounth}
        </Text>
      </Flex>
    </header>
  )
}