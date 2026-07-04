// 13 estrellas + 1 luna = 14 pasajes de "El Principito".
//
// Las coordenadas x/y (en % sobre el lienzo de 1600x900, misma resolución
// que la fotografía de referencia) fueron obtenidas por detección de
// blobs sobre la imagen real (centroide de cada trazo negro/gris de tinta),
// no a ojo — así el hitbox de Star.jsx queda centrado exactamente sobre
// cada estrella/luna en cualquier tamaño de pantalla.

export const CANVAS = { w: 1600, h: 900 };

export const celestialBodies = [
  {
    id: 'moon',
    type: 'moon',
    x: 33.4,
    y: 39.1,
    quote:
      'Mira el cielo. Cuando por la noche mires el cielo, ya que yo viviré en una de ellas, ya que yo reiré en una de ellas, entonces será para ti como si todas las estrellas rieran. ¡Tú tendrás estrellas que saben reír!',
    theme: 'inmensidad',
  },
  {
    id: 'star-1',
    type: 'star',
    x: 11.9,
    y: 56.4,
    quote: 'Solo se ve bien con el corazón; lo esencial es invisible a los ojos.',
    theme: 'amor',
  },
  {
    id: 'star-2',
    type: 'star',
    x: 14.5,
    y: 33.1,
    quote: 'Eres responsable para siempre de lo que has domesticado.',
    theme: 'amistad',
  },
  {
    id: 'star-3',
    type: 'star',
    x: 17.8,
    y: 69.6,
    quote: 'Todas las personas grandes fueron niños antes, aunque pocas lo recuerdan.',
    theme: 'viaje',
  },
  {
    id: 'star-4',
    type: 'star',
    x: 40.9,
    y: 22.9,
    quote: 'Lo que embellece al desierto es que esconde un pozo en alguna parte.',
    theme: 'inmensidad',
  },
  {
    id: 'star-5',
    type: 'star',
    x: 31.1,
    y: 66.6,
    quote: 'Las estrellas son hermosas por una flor que no se ve.',
    theme: 'amor',
  },
  {
    id: 'star-6',
    type: 'star',
    x: 49.5,
    y: 40.7,
    quote: 'Tú serás para mí único en el mundo, y yo seré para ti único en el mundo.',
    theme: 'amor',
  },
  {
    id: 'star-7',
    type: 'star',
    x: 44.1,
    y: 59.7,
    quote: 'Solo se conocen las cosas que se domestican, dijo el zorro.',
    theme: 'amistad',
  },
  {
    id: 'star-8',
    type: 'star',
    x: 61.2,
    y: 25.4,
    quote: 'Es tan misterioso el país de las lágrimas.',
    theme: 'inmensidad',
  },
  {
    id: 'star-9',
    type: 'star',
    x: 86.6,
    y: 30.9,
    quote:
      'Los mayores nunca comprenden nada por sí solos, y es cansado para los niños tener que darles siempre explicaciones.',
    theme: 'viaje',
  },
  {
    id: 'star-10',
    type: 'star',
    x: 74.4,
    y: 46.7,
    quote: 'Caminando en línea recta no se puede ir muy lejos.',
    theme: 'viaje',
  },
  {
    id: 'star-11',
    type: 'star',
    x: 76.8,
    y: 81.1,
    quote: 'Fue el tiempo que dedicaste a tu rosa lo que la hizo tan importante.',
    theme: 'amor',
  },
  {
    id: 'star-12',
    type: 'star',
    x: 22.8,
    y: 46.5,
    quote:
      'Todos los hombres tienen estrellas, pero no son las mismas para todos. Para los que viajan, las estrellas son guías. Para otros, no son más que pequeñas luces. Mas todas esas estrellas se callan. Tú, tú tendrás estrellas como nadie las tiene.',
    theme: 'inmensidad',
  },
  {
    id: 'star-13',
    type: 'star',
    x: 81.7,
    y: 61.2,
    quote: 'Uno corre el riesgo de llorar un poco si se ha dejado domesticar.',
    theme: 'amistad',
  },
];
