import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const img_set = [
  {
    src: require('../assets/images/fulls/01.jpg'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    title: 'Great Sky',
    desc: 'Be one with the Universe',
  },
  {
    src: require('../assets/images/fulls/02.jpg'),
    thumbnail: require('../assets/images/thumbs/02.jpg'),
    title: 'High Mountains',
    desc: 'Be one with the mountains',
  },
  {
    src: require('../assets/images/fulls/03.jpg'),
    thumbnail: require('../assets/images/thumbs/03.jpg'),
    title: 'Any time ',
    desc: 'Be one with the time',
  },
  {
    src: require('../assets/images/fulls/04.jpg'),
    thumbnail: require('../assets/images/thumbs/04.jpg'),
    title: 'Any source of light',
    desc: 'Be one with the light',
  }
];
const IndexPage = () => (
  <Layout>
    <Gallery images={img_set} />
  </Layout>
);

export default IndexPage;
