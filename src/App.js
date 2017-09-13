// @flow

import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'

type Props = {
  foo: number,
  bar?: string,
}

const spin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`

const Main = styled.main`text-align: center;`

const MainHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const AppLogo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 80px;
`

const AppIntro = styled.p`font-size: large;`

class App extends Component<Props> {
  render() {
    return (
      <Main>
        <MainHeader>
          <AppLogo src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </MainHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </Main>
    )
  }
}

export default App
