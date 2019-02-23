var Seed = (function () {
    function generateVoteCount() {
      return Math.floor((Math.random() * 50) + 15);
    }
  
    const books = [
      {
        id: 1,
        title: 'Ascent of Man',
        author: 'Jacob Bronowksi',
        description: "Dr Jacob Bronowksi's The Ascent of Man traces the development of human society through our understanding of science. First published in 1973 to accompany the groundbreaking BBC television series, it is considered one of the first works of 'popular science', illuminating the historical and social context of scientific development for a generation of readers. In his highly accessible style, Dr Bronowski discusses human invention from the flint tool to geometry, agriculture to genetics, and from alchemy to the theory of relativity, showing how they all are expressions of our ability to understand and control nature.",
        url: '#',
        votes:generateVoteCount(),
        BookImageUrl: 'images/book-covers/ascent-of-man.jpeg',
      },
      {
        id: 2,
        title: "The Hitchhiker's Guide to galaxy",
        author: 'Douglas Adam',
        description: "The Hitchhiker's Guide to the Galaxy[1] (sometimes referred to as HG2G,[2] HHGTTG[3] or H2G2[4]) is a comedy science fiction series created by Douglas Adams. Originally a radio comedy broadcast on BBC Radio 4 in 1978, it was later adapted to other formats, including stage shows, novels, comic books, a 1981 TV series, a 1984 video game, and 2005 feature film.",
        url: '#',
        votes:generateVoteCount(),
        BookImageUrl: 'images/book-covers/hitch-galaxy.jpg',
      },
      {
        id: 3,
        title: 'Animal Farm',
        author: 'George Orwell',
        description: "Animal Farm is an allegorical novella by George Orwell, first published in England on 17 August 1945.[1][2] According to Orwell, the fable reflects events leading up to the Russian Revolution of 1917 and then on into the Stalinist era of the Soviet Union",
        url: '#',
        votes:generateVoteCount(),
        BookImageUrl: 'images/book-covers/animal-farm.jpg',
      }
    ];
  
    return { books: books };
  }());

  export default Seed;