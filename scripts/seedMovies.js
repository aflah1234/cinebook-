import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from '../src/config/db.js';
import Movie from '../src/models/movieModel.js';

// Load server/.env explicitly so script works when run from workspace root
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const sampleMovies = [
  {
    title: 'The Great Adventure',
    duration: '2h 15m',
    genre: ['Action', 'Adventure'],
    plot: 'A thrilling journey across unknown lands.',
    cast: ['Alice Johnson', 'Bob Smith'],
    releaseDate: new Date('2023-06-15'),
    language: ['English'],
    bannerImg: 'https://placehold.co/600x400?text=The+Great+Adventure',
    verticalImg: 'https://placehold.co/300x450?text=The+Great+Adventure'
  },
  {
    title: 'Romance in Paris',
    duration: '1h 45m',
    genre: ['Romance', 'Drama'],
    plot: 'Two strangers meet and fall in love in Paris.',
    cast: ['Clara Bell', 'Daniel Grey'],
    releaseDate: new Date('2024-02-14'),
    language: ['English', 'French'],
    bannerImg: 'https://placehold.co/600x400?text=Romance+in+Paris',
    verticalImg: 'https://placehold.co/300x450?text=Romance+in+Paris'
  },
  {
    title: 'Mystery of the Night',
    duration: '2h 00m',
    genre: ['Mystery', 'Thriller'],
    plot: 'A detective races against time to solve a case.',
    cast: ['Eve Stone', 'Max Kline'],
    releaseDate: new Date('2022-10-31'),
    language: ['English'],
    bannerImg: 'https://placehold.co/600x400?text=Mystery+of+the+Night',
    verticalImg: 'https://placehold.co/300x450?text=Mystery+of+the+Night'
  }
];

const run = async () => {
  try {
    const ok = await connectDB();
    if (!ok) throw new Error('DB connection failed');

    // Clear existing sample movies with same titles to avoid duplicates
    const titles = sampleMovies.map(m => m.title);
    await Movie.deleteMany({ title: { $in: titles } });

    const inserted = await Movie.insertMany(sampleMovies);
    console.log(`Inserted ${inserted.length} sample movies`);
    process.exit(0);
  } catch (err) {
    console.error('Error seeding movies', err);
    process.exit(1);
  }
};

run();
