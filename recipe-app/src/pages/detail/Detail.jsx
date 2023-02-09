import React from 'react'
import Cards from '../../components/cards/Cards'
import SearchForm from "../../components/search-form/SearchForm"
import { FlexCardDiv } from './Detail.style'

const Detail = () => {
  return (
    <div style={{width:"100vw", backgroundColor:"#AFA8A8"}}>
      <SearchForm/>
      <FlexCardDiv>
        <Cards/>
      </FlexCardDiv>
  
    </div>
  )
}

export default Detail
