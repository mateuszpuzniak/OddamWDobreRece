import React, { useState } from 'react'

function Fundation() {
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage] = useState(3)

	const helpOptions = [
		{
			name: 'Fundacja “Dbam o Zdrowie1”',
			mission: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
			itemsNeeded: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki',
		},
		{
			name: 'Fundacja “Dla dzieci1”',
			mission: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
			itemsNeeded: 'ubrania, meble, zabawki',
		},
		{
			name: 'Fundacja “Bez domu1”',
			mission: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
			itemsNeeded: 'ubrania, jedzenie, ciepłe koce',
		},
		{
			name: 'Fundacja “Dbam o Zdrowie2”',
			mission: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
			itemsNeeded: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki',
		},
		{
			name: 'Fundacja “Dla dzieci2”',
			mission: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
			itemsNeeded: 'ubrania, meble, zabawki',
		},
		{
			name: 'Fundacja “Bez domu2”',
			mission: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
			itemsNeeded: 'ubrania, jedzenie, ciepłe koce',
		},
		{
			name: 'Fundacja “Dbam o Zdrowie3”',
			mission: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
			itemsNeeded: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki',
		},
		{
			name: 'Fundacja “Dla dzieci3”',
			mission: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
			itemsNeeded: 'ubrania, meble, zabawki',
		},
		{
			name: 'Fundacja “Bez domu3”',
			mission: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
			itemsNeeded: 'ubrania, jedzenie, ciepłe koce',
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
							<p className='helpOptionP'>{item.mission}</p>
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

export default Fundation
