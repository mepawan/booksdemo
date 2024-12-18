import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.book.createMany({
    data: [
        { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "fantasy", publishYear: 1937, readingDifficulty: "medium" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "fiction", publishYear: 1960, readingDifficulty: "easy" },
        { title: "1984", author: "George Orwell", genre: "dystopian", publishYear: 1949, readingDifficulty: "medium" },
        { title: "The Da Vinci Code", author: "Dan Brown", genre: "mystery", publishYear: 2003, readingDifficulty: "easy" },
        { title: "Pride and Prejudice", author: "Jane Austen", genre: "romance", publishYear: 1813, readingDifficulty: "easy" },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "fiction", publishYear: 1925, readingDifficulty: "medium" },
        { title: "Brave New World", author: "Aldous Huxley", genre: "dystopian", publishYear: 1932, readingDifficulty: "medium" },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "fiction", publishYear: 1951, readingDifficulty: "medium" },
        { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "fantasy", publishYear: 1997, readingDifficulty: "easy" },
        { title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", genre: "fantasy", publishYear: 1954, readingDifficulty: "medium" },
        { title: "Moby Dick", author: "Herman Melville", genre: "adventure", publishYear: 1851, readingDifficulty: "hard" },
        { title: "Jane Eyre", author: "Charlotte Brontë", genre: "romance", publishYear: 1847, readingDifficulty: "medium" },
        { title: "Animal Farm", author: "George Orwell", genre: "satire", publishYear: 1945, readingDifficulty: "easy" },
        { title: "War and Peace", author: "Leo Tolstoy", genre: "historical", publishYear: 1869, readingDifficulty: "hard" },
        { title: "Crime and Punishment", author: "Fyodor Dostoevsky", genre: "psychological", publishYear: 1866, readingDifficulty: "hard" },
        { title: "The Odyssey", author: "Homer", genre: "epic", publishYear: -800, readingDifficulty: "hard" },
        { title: "A Game of Thrones", author: "George R.R. Martin", genre: "fantasy", publishYear: 1996, readingDifficulty: "medium" },
        { title: "The Shining", author: "Stephen King", genre: "horror", publishYear: 1977, readingDifficulty: "medium" },
        { title: "Dracula", author: "Bram Stoker", genre: "horror", publishYear: 1897, readingDifficulty: "medium" },
        { title: "The Road", author: "Cormac McCarthy", genre: "post-apocalyptic", publishYear: 2006, readingDifficulty: "medium" },
        { title: "The Hunger Games", author: "Suzanne Collins", genre: "dystopian", publishYear: 2008, readingDifficulty: "easy" },
        { title: "Fahrenheit 451", author: "Ray Bradbury", genre: "dystopian", publishYear: 1953, readingDifficulty: "medium" },
        { title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "philosophical", publishYear: 1890, readingDifficulty: "medium" },
        { title: "Frankenstein", author: "Mary Shelley", genre: "horror", publishYear: 1818, readingDifficulty: "medium" },
        { title: "The Kite Runner", author: "Khaled Hosseini", genre: "fiction", publishYear: 2003, readingDifficulty: "medium" },
        { title: "The Book Thief", author: "Markus Zusak", genre: "historical", publishYear: 2005, readingDifficulty: "medium" },
        { title: "Les Misérables", author: "Victor Hugo", genre: "historical", publishYear: 1862, readingDifficulty: "hard" },
        { title: "Wuthering Heights", author: "Emily Brontë", genre: "romance", publishYear: 1847, readingDifficulty: "medium" },
        { title: "Dune", author: "Frank Herbert", genre: "science fiction", publishYear: 1965, readingDifficulty: "medium" },
        { title: "The Alchemist", author: "Paulo Coelho", genre: "philosophical", publishYear: 1988, readingDifficulty: "easy" },
        { title: "The Chronicles of Narnia", author: "C.S. Lewis", genre: "fantasy", publishYear: 1950, readingDifficulty: "easy" },
        { title: "It", author: "Stephen King", genre: "horror", publishYear: 1986, readingDifficulty: "medium" },
        { title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "fantasy", publishYear: 2007, readingDifficulty: "medium" },
        { title: "The Secret Garden", author: "Frances Hodgson Burnett", genre: "children", publishYear: 1911, readingDifficulty: "easy" },
        { title: "Life of Pi", author: "Yann Martel", genre: "adventure", publishYear: 2001, readingDifficulty: "medium" },
        { title: "The Fault in Our Stars", author: "John Green", genre: "romance", publishYear: 2012, readingDifficulty: "easy" },
        { title: "The Maze Runner", author: "James Dashner", genre: "science fiction", publishYear: 2009, readingDifficulty: "easy" },
        { title: "A Wrinkle in Time", author: "Madeleine L'Engle", genre: "science fiction", publishYear: 1962, readingDifficulty: "easy" },
        { title: "Catch-22", author: "Joseph Heller", genre: "satire", publishYear: 1961, readingDifficulty: "medium" },
        { title: "The Bell Jar", author: "Sylvia Plath", genre: "fiction", publishYear: 1963, readingDifficulty: "medium" },
        { title: "The Goldfinch", author: "Donna Tartt", genre: "fiction", publishYear: 2013, readingDifficulty: "hard" },
        { title: "Gone Girl", author: "Gillian Flynn", genre: "mystery", publishYear: 2012, readingDifficulty: "medium" },
        { title: "The Night Circus", author: "Erin Morgenstern", genre: "fantasy", publishYear: 2011, readingDifficulty: "medium" },
        { title: "The Handmaid's Tale", author: "Margaret Atwood", genre: "dystopian", publishYear: 1985, readingDifficulty: "medium" },
        { title: "The Shadow of the Wind", author: "Carlos Ruiz Zafón", genre: "mystery", publishYear: 2001, readingDifficulty: "medium" },
        { title: "The Giver", author: "Lois Lowry", genre: "dystopian", publishYear: 1993, readingDifficulty: "easy" },
        { title: "The Stand", author: "Stephen King", genre: "horror", publishYear: 1978, readingDifficulty: "hard" },
        { title: "Shantaram", author: "Gregory David Roberts", genre: "fiction", publishYear: 2003, readingDifficulty: "hard" },
        { title: "The Wind-Up Bird Chronicle", author: "Haruki Murakami", genre: "magical realism", publishYear: 1995, readingDifficulty: "hard" },
        { title: "Cloud Atlas", author: "David Mitchell", genre: "science fiction", publishYear: 2004, readingDifficulty: "hard" },
        { title: "A Man Called Ove", author: "Fredrik Backman", genre: "fiction", publishYear: 2012, readingDifficulty: "medium" },
        { title: "Big Little Lies", author: "Liane Moriarty", genre: "fiction", publishYear: 2014, readingDifficulty: "medium" },
        { title: "The Martian", author: "Andy Weir", genre: "science fiction", publishYear: 2011, readingDifficulty: "medium" },
        { title: "The Poisonwood Bible", author: "Barbara Kingsolver", genre: "fiction", publishYear: 1998, readingDifficulty: "hard" },
        { title: "Sapiens", author: "Yuval Noah Harari", genre: "non-fiction", publishYear: 2011, readingDifficulty: "medium" },
        { title: "Educated", author: "Tara Westover", genre: "non-fiction", publishYear: 2018, readingDifficulty: "medium" },
        { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", genre: "self-help", publishYear: 2016, readingDifficulty: "easy" },
        { title: "Atomic Habits", author: "James Clear", genre: "self-help", publishYear: 2018, readingDifficulty: "easy" },
        { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", genre: "psychology", publishYear: 2011, readingDifficulty: "hard" },
      ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
