import { useEffect } from "react"
import Navbar from "../../Components/Navbar"
import { getGames } from "../../api's/games"
import { useDispatch, useSelector } from "react-redux"
import GameCard from "../../Components/GameCard"




const Home = () => {

    const dispatch = useDispatch();
    //use useEffect to call apis ,useEffect helps to call apis after page renders

    const { games } = useSelector(state => state.games)


    console.log(games)

    useEffect(() => {
        dispatch(getGames());

    }, [])
    return (<>
        <Navbar />
        <main className="flex gap-4 flex-wrap">
            {
                games?.length > 0 && games.map(game => <GameCard key={game.id} game={game} />)
            }
        </main>
    </>)
}

export default Home 