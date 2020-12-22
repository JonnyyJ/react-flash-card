import React, { use} from 'react'

export default function Flashcard({ flashcard }){
  const [flip, setFlip] = useState(false)
  const [heigth, setHeight] = useState('initial')

  const frontEl = useRef()
  const backEl = useRef()

  function setMaxHeight(){
      const frontHeight = frontEl.current.getBoundingClientrRect().height
      const backHeight = backEl.current.getBoundingClientrRect().height
      setHeight(Math.max(frontHeight, backHeight, 100))
  }
  useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
  useEffect(() => {
      window.addEventListener('resize', setMaxHeight)
      return () => window.removeEventListener('resize', setMaxHeight)
  },[])
    return(
        <div
          className={`card ${flip ? 'flip' : ''}`}
          style={{ height: height}}
          onClick={() => setFlip(!flip)}
        >
            <div className="front" ref={frontEl}>
                {flashcard.question}
            </div>


        </div>
    )
}