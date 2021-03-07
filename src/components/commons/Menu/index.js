
import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        Logo area (esquerda)
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        Links area (centro)
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        Buttons area (direita)
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}