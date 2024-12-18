"use client"

import { useRouter, useSearchParams } from 'next/navigation'

const sortOptions = [
  { value: "asc", label: "Publish Year - Ascending" },
  { value: "desc", label: "Publish Year - Descending" }
]

export default function BookFilters(props:any) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const currentGenre = props.genre
  const currentSort = props.sort || 'asc'

  const genres = props.genres;

  const handleGenreChange = (genre: string) => {
    const params = new URLSearchParams(searchParams)
    
    if (genre) {
      params.set('genre', genre)
    } else {
      params.delete('genre')
    }
    
    router.push(`/books?${params.toString()}`)
  }

  const handleSortChange = (sort: string) => {
    const params = new URLSearchParams(searchParams)
    
    if (sort) {
      params.set('sort', sort)
    } else {
      params.delete('sort')
    }
    
    router.push(`/books?${params.toString()}`)
  }

  return (
    <div className="flex space-x-4 mb-6">
      <div className="w-full max-w-xs">
        <label 
          htmlFor="genre-select" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Filter by Genre
        </label>
        <select
          id="genre-select"
          value={currentGenre}
          onChange={(e) => handleGenreChange(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-800 text-white border-gray-600 focus:outline-none focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm rounded-md"
        >
          <option value="">All Genres</option>
          {genres.map((genre:any) => (
            <option key={genre} value={genre.toLowerCase()} className="bg-gray-800 text-white">
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full max-w-xs">
        <label 
          htmlFor="sort-select" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Sort by Publish Year
        </label>
        <select
            id="sort-select"
            value={currentSort}
            onChange={(e) => handleSortChange(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-800 text-white border-gray-600 focus:outline-none focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm rounded-md"
            >
            {sortOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                {option.label}
                </option>
            ))}
        </select>

      </div>
    </div>
  )
}