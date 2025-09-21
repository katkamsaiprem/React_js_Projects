import { useEffect } from "react"
import Navbar from "../../Components/Navbar"
import { getGames } from "../../api's/games"
import { useDispatch } from "react-redux"



const Home = () => {

    const dispatch = useDispatch();
    //use useEffect to call apis ,useEffect helps to call apis after page renders
    useEffect(() => {
        dispatch(getGames());
       
    }, [])
    return (<>
        <Navbar />
    </>)
}

export default Home 