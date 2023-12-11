import { Button, Container, HStack, Heading, Input,Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Courses = () => {
    const [keyword, setKeyword] = useState('')
    const [category,setCategory] = useState('')
    const categories = ["web devlopment", "Artificial Intelligence","Data Science", "com[utesr Science"]
  return (
    <Container minH={'95vh'} maxW="container.lg" padding={'8'}>
        <Heading children="All courses" m={'8'}/>
        <Input value={keyword} onChange={e =>setKeyword(e.target.value)}
        placeContent="Search a COurse.."
        type={'text'}
        focusBorderColor="yellow.500"/>
        <HStack>
            {categories.map((item, index)=>(
                <Button key={index} onClick={()=>setCategory(item)} minW={'60'}>
                <Text children={item}/>
            </Button>

            )

            )}
            
        </HStack>
    </Container>
   
  )
}

export default Courses