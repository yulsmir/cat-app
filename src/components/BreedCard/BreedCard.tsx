import { useState, useEffect } from 'react';

interface Breed {
  id: string;
  name: string;
  breed: string;
  image: string;
}

function BreedCard() {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>('All');
  const [filteredBreeds, setFilteredBreeds] = useState<Breed[]>([]);

  useEffect(() => {
    const sampleBreeds: Breed[] = [
      { id: '1', name: 'Fluffy', breed: 'Persian', image: 'cat1.jpg' },
      { id: '2', name: 'Whiskers', breed: 'Siamese', image: 'cat2.jpg' },
      { id: '3', name: 'Mittens', breed: 'Maine Coon', image: 'cat3.jpg' },
    ];

    setBreeds(sampleBreeds);
    setFilteredBreeds(sampleBreeds);
  }, []);

  useEffect(() => {
    if (selectedBreed === 'All') {
      setFilteredBreeds(breeds);
    } else {
      const filtered = breeds.filter((breed) => breed.breed === selectedBreed);
      setFilteredBreeds(filtered);
    }
  }, [selectedBreed, breeds]);

  const breedOptions = ['All', 'Persian', 'Siamese', 'Maine Coon']; // Add more breeds as needed

  return (
    <div>
      <div>
        <label htmlFor="breedSelect">Filter by Breed:</label>
        <select
          id="breedSelect"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          {breedOptions.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      <div className="breed-list">
        {filteredBreeds.map((breed) => (
          <div key={breed.id} className="breed-card">
            <img src={breed.image} alt={breed.name} />
            <h3>{breed.name}</h3>
            <p>Breed: {breed.breed}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BreedCard;
