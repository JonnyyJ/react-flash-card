import React from 'react'
import Flashcard from './Flashcard'

export default function FlashcardList({ falshcards }){
    return(
        <div className='card-grid'>
            {falshcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id}/>
            })}
        </div>
    )
}