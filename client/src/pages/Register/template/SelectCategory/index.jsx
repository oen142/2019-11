import React, {useState} from 'react'
import styled from 'styled-components'

import PageBase from '../../../../components/PageBase'
import Button from '../../../../components/BoxButton'
import CategorySelector from '../../../../components/ItemCategorySelector'

import {categoryList} from '../../constants.jsx'

const ContentDiv = styled.div`
    width:60%;
    margin: 0 auto;
`

const ButtonContainer = styled.div`
    width: 100%;
    height: 3em;
    display:flex;
    justify-content:flex-end;
    margin: 1rem 0;
`

const Component = (props) => {

    const { width, next } = props

    const [leftIdx, setLeftIdx] = useState(-1);
    const [rightIdx, setRightIdx] = useState(-1);

    return (
        <PageBase width={width}>
            <ContentDiv>
                <CategorySelector
                    lTitle = {categoryList.leftTitle}
                    rTitle = {categoryList.rightTitle}
                    lList = {categoryList.leftList}
                    rList = {categoryList.rightList}
                    lIdx = {leftIdx}
                    rIdx = {rightIdx}
                    lHandler = {setLeftIdx}
                    rHandler = {setRightIdx}
                />
                <ButtonContainer>
                    <Button onClick={next} text={'다음'}/>
                </ButtonContainer>
            </ContentDiv>
        </PageBase>
    )
}

export default Component