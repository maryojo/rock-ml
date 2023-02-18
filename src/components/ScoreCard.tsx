

interface ScoreProps{
  YourScore: number,
  ComputerScore: number
}

const ScoreCard:React.FC<ScoreProps> = ({YourScore, ComputerScore}) => {
  return (
    <div className="flex justify-around">
      <div className="flex flex-col justify-center items-center">
        <p>You</p>
        <p>{YourScore}</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p>Scissors King</p>
        <p>{ComputerScore}</p>
      </div>
    </div>
  )
}

export default ScoreCard