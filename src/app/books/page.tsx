
import { PrismaClient, Book } from "@prisma/client";
import BookFilters  from './filters'

const prisma = new PrismaClient();
//type SearchParams = Record<string, string | string[] | undefined>;

interface PageProps {
    searchParams: Record<string, string | string[] | undefined>;
  }

export default async function Books({ searchParams }: PageProps) {
    
    const genre = typeof searchParams['genre'] === 'string' && searchParams['genre'] !== ''  ? searchParams['genre'] : undefined;
    const sort = typeof searchParams['sort'] === 'string' && searchParams['sort'] == 'desc'  ? 'desc' : 'asc';
  
    const whereClause = genre ? { genre } : {};

    const books = await prisma.book.findMany({
        where: whereClause,
        orderBy: { publishYear: sort },
    });

    const genres = await prisma.book.findMany({
        select: { genre: true },
        distinct: ["genre"],
      });
    
      const genreOptions = genres.map((book) => book.genre);



    return (
        <div className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen  pb-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="mb-4 text-4xl">Books({books.length})</h1>
                <BookFilters genre={genre} sort={sort} genres={genreOptions} />
                <ul>
                    {books.map((book:Book, index) => (
                        <li key={book.id} className="mb-2">
                          <span>{index + 1}</span>.   <span>{book.title}</span> - <span>{book.author}</span> - <span>{book.genre}</span> - <span>{book.publishYear}</span> - <span>{book.readingDifficulty}</span>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
}
export const dynamic = 'force-dynamic'
export const dynamicParams = true;