import React, { useState } from "react";

const Home = () => {
	let counter = 0

	// useState
	// const [variable con memoria,funcion que modifica la variable con memomria] = useState(valor incial)
	const [memoryCount, setMemoryCount] = useState(0)
	const [numeroClicks,setNumeroClicks] = useState(0)


	function increase(){
		console.log('increase')
		console.log(counter)
		counter++
		// memoryCount = 23
		setMemoryCount(memoryCount + 1)
		setNumeroClicks(numeroClicks + 1)
		// setMemoryCount(memoryCount++) ===> memoryCount = memoryCount++
		// setMemoryCount(memoryCount++) ===> memoryCount =  memoryCount =  memoryCount +. 1
		//setMemoryCount(45) ===>. memoryCount = 45
		// memoryCount++. =====> memoryCount =  memoryCount +. 1
		console.log(counter)
	}

	function decrease(){
		console.log('decrease')
		setMemoryCount(memoryCount - 1)
		setNumeroClicks(numeroClicks + 1)
	}

	return (	
		<>
			<h1 className="text-center mt-5">Bienvenidos a React Hooks!</h1>
			<h2>{counter}</h2>	
			<button onClick={decrease}>Quitar</button>
			<h2>{memoryCount}</h2>	
			<button onClick={increase}>Agregar</button>
			<p>le diste click {numeroClicks} veces </p>
		</>	
	);
};

export default Home;
