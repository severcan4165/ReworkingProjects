import {useLocation } from "react-router-dom"
import Card,{Card1, Card2, Card3, Image} from "./Style.jsx"



const RecipeDetail = () => {
    
  const {state} = useLocation();
  return (
    <Card>
    <Card3>
              <Card1>
                <h2>{state.recipe.label}</h2>
                  <div>
                    {state.recipe.ingredientLines?.map((li,index)=>{
                    return(
                        <p key={index}>{li}</p>
                    )
                  } )}
                  </div>
                  <p>{state.recipe.title}</p>
             </Card1>
              <Card2>
                <Image src={state.recipe.images.REGULAR.url}/>
              </Card2>
    </Card3>
        

            
  </Card>
  )
}

export default RecipeDetail