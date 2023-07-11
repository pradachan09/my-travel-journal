import React from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/navbar.js'
import Card from './components/cards.js'
import Data from './components/data.js'


const div = document.getElementById('root')
const root = createRoot(div)


// console.log(data)
// function CardItem(){
//     return(
//         data
//     )
// }

            // <CardItem />
export default function App(){
    const cards = Data.map(item =>{
        return(
            <Card 
                key={item.id}
                {...item} 
            />
            
        )
    }
    )
    
    return(
        <div>
            <Navbar />
            {cards}
        </div>
    )
}



root.render(<App />)
