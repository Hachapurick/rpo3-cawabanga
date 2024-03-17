import BurgerCard from "./BurgerCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useEffect, useState } from "react";

function BurgerList() {
    const [burgers, setBurgers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchBurgers() {
            try {
                setIsLoading(true);
                const res = await fetch(
                    "https://65f45a03f54db27bc0217d69.mockapi.io/burger"
                );
                const data = await res.json();
                setBurgers(data);
            } catch (e) {
                console.error(e);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchBurgers();

    }, []);

    return(
        <section className="burger-page">
			<div className="container">
				<h1 className="title">Choose your burger</h1>
				<div className="row">
                    {isLoading ? (<Loading />) :
                    (burgers.map((burger) => <BurgerCard burger={burger} key={burger.id}/>))}
                    
				</div>
                {isError && <Error />}
			</div>
		</section>
    );
}

export default BurgerList;