import Gallery from './gallery.tsx';
import Filter from './filter.tsx';
import Search from './search.tsx';

export default function Main() {
  return (
    <main>
      <Search />
      <Filter />
      <Gallery />
    </main>
  );
}
