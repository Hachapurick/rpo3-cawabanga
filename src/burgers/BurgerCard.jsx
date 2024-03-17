function BurgerCard({ burger }) {
    return(
        <div className="burger-card">
			<div className="burger-img">
				<img src={burger.imageUrl} alt={burger.name} />
			</div>
			<h3 className="burger-name">{burger.name}</h3>
			<h4 className="burger-size">{burger.size}</h4>
			<h4 className="burger-price">{burger.price}</h4>
		</div>
    );
}

export default BurgerCard;