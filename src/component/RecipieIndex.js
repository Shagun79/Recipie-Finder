import React from 'react'

export const RecipieIndex = (props) => {
    const alpha= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','I', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z'];
  return (
    <>
    {
        alpha.map(item=>{
            return(
                <div className='numBox' onClick={()=>{props.GetAlpha(item)}}>
                    <h3>{item}</h3>
                </div>
            )
        })
    }
    </>
    
   
  )
}
