import { ScaleLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div
      className=" min-h-screen
      flex 
      flex-col 
      justify-center 
      items-center "
    >
      <ScaleLoader color='red' />
    </div>
  )
}

export default Loader