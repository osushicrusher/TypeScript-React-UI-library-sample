import { VFC } from 'react'
import styled from 'styled-components'
import { fontSize } from './constants'

const Wrapper = styled.p`
    font-size: ${fontSize.m}
`

// 型エイリアスを使ってpropsの型を宣言する
type Props = {
    text: string
    className?: string
}

export const Text: VFC<Props> = ({ text, className }) => {
    return <Wrapper className={className}>{ text }</Wrapper>
}