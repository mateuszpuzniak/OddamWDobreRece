import React, { useState } from 'react'

function Organization() {
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage] = useState(3)

	const helpOptions = [
		{
			name: 'Organizacja 11',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sunt.',
			itemsNeeded: 'Lorem, ipsum dolor.',
		},
		{
			name: 'Organizacja 11',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sunt.',
			itemsNeeded: 'Lorem, ipsum dolor.',
		},
		{
			name: 'Organizacja 11',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sunt.',
			itemsNeeded: 'Lorem, ipsum dolor.',
		},
		{
			name: 'Organizacja 22',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sunt.',
			itemsNeeded: 'Lorem, ipsum dolor.',
		},
		{
			name: 'Organizacja 22',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sunt.',
			itemsNeeded: 'Lorem, ipsum dolor.',
		},
		{
			name: 'Organizacja 22',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sunt.',
			itemsNeeded: 'Lorem, ipsum dolor.',
		},
	]

	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = helpOptions.slice(indexOfFirstItem, indexOfLastItem)

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

export default Organization
