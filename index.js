var photoData = [
  {
  	name: 'doge',
  	url: 'https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg'
  },
  {
  	name: 'pupper',
  	url: 'https://i.ytimg.com/vi/1wtV29XrXu8/maxresdefault.jpg'
  },
  {
  	name: 'doggo',
  	url:'https://pics.onsizzle.com/u-thought-it-was-bee-but-it-was-doggo-bumboozled-2489112.png'
  }
];

ReactDOM.render(
  <PhotoTable photos={photoData} />,
  document.getElementById('app')
);