import type { FC } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'
import { Spin } from 'antd'
import { observer } from 'mobx-react-lite'
import { useRootStore } from '#/contexts/root-store'

// App loading spinner
//* ------------------------------------------------------------------------------------------ *//
export const AppLoader: FC = observer(() => {
  const { appStore } = useRootStore()

  const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />

  if (!appStore.state.loading) return null

  return (
    <AppLoaderStyled>
      <Spin indicator={antIcon} />
    </AppLoaderStyled>
  )
})

// Styles
//* ------------------------------------------------------------------------------------------ *//
const AppLoaderStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.bg.main};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.palette.bg.highlight};
  }
`
