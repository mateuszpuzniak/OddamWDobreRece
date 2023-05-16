import React, { useState } from 'react'

function Lokal() {
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage] = useState(3)

	// Sample data for pagination
	const helpOptions = [
		{
			name: 'Zbiórka 1 “Dbam o Zdrowie”',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sunt.',
			itemsNeeded: 'Quibusdam, sunt.',
		},
		{
			name: 'Zbiórka 2 “Dla dzieci”',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sunt.',
			itemsNeeded: 'Quibusdam, sunt.',
		},
		{
			name: 'Zbiórka 3 “Bez domu”',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sunt.',
			itemsNeeded: 'Quibusdam, sunt.',
		},
		// Add more data objects here as needed
	]

	// Get current items
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = helpOptions.slice(indexOfFirstItem, indexOfLastItem)

	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber)

	return (
		<>
			<div className='helpOptionsDiv'>
				{currentItems.map((item, index) => (
					<div className='helpOption' key={index}>
						<div>
							<span className='helpOptionSpan'>{item.name}</span>
							<p className='helpOptionP'>{item.description}</p>
						</div>
						<div>
							<p className='helpOptionPP'>{item.itemsNeeded}</p>
						</div>
					</div>
				))}
			</div>
			<div className='pagination'>
				{helpOptions.length > itemsPerPage && (
					<ul>
						{Array.from({ length: Math.ceil(helpOptions.length / itemsPerPage) }, (_, index) => (
							<li key={index} className={currentPage === index + 1 && 'active'}>
								<button onClick={() => paginate(index + 1)}>{index + 1}</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	)
}

export default Lokal
