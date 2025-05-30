import { delay, http, HttpResponse } from 'msw';

export const artistMocks = [
  http.get(`/artistList`, async () => {
    await delay(5000);
    return HttpResponse.json(
      {
        artistList: [
          {
            id: 'quevedo',
            name: 'Quevedo',
            image:
              'https://i.scdn.co/image/ab67616d0000b27372694fed173af6d24d22eefb',
            description:
              'Post Malone es un cantante y productor estadounidense conocido por fusionar géneros como hip-hop, pop y country, creando un sonido único y melódico.',
            genre: 'Hip-hop, pop, R&B, trap, country',
            origin: 'Syracuse, Nueva York, EE. UU.',
          },
          {
            id: 'melendi',
            name: 'Melendi',
            image:
              'https://i.scdn.co/image/ab67616d0000b27372694fed173af6d24d22eefb',
            description:
              'Post Malone es un cantante y productor estadounidense conocido por fusionar géneros como hip-hop, pop y country, creando un sonido único y melódico.',
            genre: 'Hip-hop, pop, R&B, trap, country',
            origin: 'Syracuse, Nueva York, EE. UU.',
          },
          {
            id: 'eminem',
            name: 'Eminem',
            image:
              'https://i.scdn.co/image/ab67616d0000b27372694fed173af6d24d22eefb',
            description:
              'Post Malone es un cantante y productor estadounidense conocido por fusionar géneros como hip-hop, pop y country, creando un sonido único y melódico.',
            genre: 'Hip-hop, pop, R&B, trap, country',
            origin: 'Syracuse, Nueva York, EE. UU.',
          },
        ],
      },
      {
        status: 200,
        statusText: 'OK',
      }
    );
  }),
];
