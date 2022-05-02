import React,{ useState }from 'react'
import Nav from './Nav'
import { getAllFacts } from '../apiClient'


function Facts() {
    const [fact, setFact] = useState([])

    const findPlantFact = () => {
      console.log(getAllFacts)
      getAllFacts()
      .then(factArr => {
        const factObj = factArr[Math.floor(Math.random() *factArr.length)]
        setFact(factObj)
      })
      .catch((err) => {
        console.error(err.message)
      })
    }
  return (
    <>
    
    <div className='fact-display'>
    <img src='../../images/FACT.png' className='get-fact' onClick={findPlantFact}/>
    <div className='fact'>
      <p className='text'>{fact.fact}</p>
    </div>
</div>
</>
  )
}

export default Facts