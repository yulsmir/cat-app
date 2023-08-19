import Gallery from './gallery.tsx';
import Filter from './filter.tsx';
import Search from './search.tsx';

export default function Main() {
  return (
    <main>
      <section>
        <Search />
        <Filter />
      </section>

      <section>
        <Gallery />
      </section>
    </main>
  );
}
