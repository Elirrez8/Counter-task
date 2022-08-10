import React from "react";

//create your first component
function Home(props){
		return <div className="container">
		<span className="num">🕑</span>
		<span className="num">{props.sec} sec</span>
		</div>
	}
export default Home;

