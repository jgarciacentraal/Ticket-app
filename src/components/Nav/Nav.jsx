import * as React from 'react'
import styled from '@emotion/styled'
import { Button } from '@mui/material'

const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',

  margin: '10px 100px'
})
//create reusable button later
export function Nav() {
  return (
    <Header>
      <span>Inventory</span>
      <Button variant='contained'>Log In</Button>
    </Header>

  )
}