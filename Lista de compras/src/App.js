import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
	
	const [items, setItems] = useState([
		
		{ itemName: 'Manzana $', itemPrecio: "0.50", quantity: 0, isSelected: false },
		{ itemName: 'Uva $', itemPrecio: "0.25", quantity: 0, isSelected: false },
		{ itemName: 'Pera $', itemPrecio: "0.40", quantity: 0, isSelected: false },
		{ itemName: 'Naranja $', itemPrecio: "0.20", quantity: 0, isSelected: false },
		{ itemName: 'Mango $', itemPrecio: "0.55", quantity: 0, isSelected: false },
	
		
	]);

	const [inputValue, setInputValue] = useState('');
	const [nputValue, etInputValue] = useState("");
	const [totalItemCount, setTotalItemCount] = useState(0);

	const handleAddButtonClick = () => {
		const newItem = {
			itemName: inputValue,
			quantity: 0,
			itemPrecio:nputValue,
			isSelected: false,
		};

		const newItems = [...items, newItem];

		setItems(newItems);
		setInputValue('');
		calculateTotal();
		etInputValue("");
	};

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity++;

		setItems(newItems);
		calculateTotal();
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity--;

		setItems(newItems);
		calculateTotal();
	};

	const toggleComplete = (index) => {
		const newItems = [...items];

		newItems[index].isSelected = !newItems[index].isSelected;

		setItems(newItems);
	};

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item,l) => {
			l= item.itemPrecio*item.quantity ;
			return total +l;
			
		}, 0);

		setTotalItemCount(totalItemCount);
	};

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Agregar elementos'/>
				</div>
				<div className='pre'>
					<input value={nputValue} onChange={(event) => etInputValue(event.target.value)} className='add-item-input' placeholder='Precio'/>
				</div>
				<div className='jum'>
				<button onClick={() => handleAddButtonClick()} >Agregar</button>
				</div>
				<div className='item-list'>
					{items.map((item, index) => (
						<div className='item-container'>
							<div className='item-name' onClick={() => toggleComplete(index)}>
								{item.isSelected ?( 
									<>
										<FontAwesomeIcon icon={faCheckCircle} />
										<span className='completed'>{item.itemName}</span>
										<span className='completed'>{item.itemPrecio}</span>
									</>
								) : (
									<>
										<FontAwesomeIcon icon={faCircle} />
										<span>{item.itemName}</span>
										<span>{item.itemPrecio}</span>
									</>
								)}
							</div>
							<div className='quantity'>
								<button>
									<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
								</button>
								<span> {item.quantity} </span>
								<button>
									<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
								</button>
							</div>
						</div>
					))}
				</div>
				<div className='total'>Total:$ {totalItemCount}</div>
			</div>
		</div>
	);
};

export default App;
