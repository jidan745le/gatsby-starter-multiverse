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
  },
  {
    src: require('../assets/images/fulls/05.jpg'),
    thumbnail: require('../assets/images/thumbs/04.jpg'),
    title: 'Any source of light',
    desc: 'Be one with the light',
  },
  {
    src: require('../assets/images/fulls/06.jpg'),
    thumbnail: require('../assets/images/thumbs/04.jpg'),
    title: 'Any source of light',
    desc: 'Be one with the light',
  },
  {
    src: require('../assets/images/fulls/07.jpg'),
    thumbnail: require('../assets/images/thumbs/04.jpg'),
    title: 'Any source of light',
    desc: 'Be one with the light',
  }
];
const IndexPage = () => {
  const [imgset,setSet] = React.useState(img_set.slice(0,3));
//   React.useEffect(()=>{
//     const VConsole = require("vconsole");
//     const vConsole = new VConsole();
// },[])
  React.useEffect(()=>{
    const listener = ()=>{
      const html = window.document.documentElement;
      console.log(html.clientHeight,
          html.scrollTop,
          html.clientHeight + (html.scrollTop || document.body.scrollTop),
          html.scrollHeight,
          window.document.body.scrollTop)
      if(Math.ceil(html.clientHeight + (html.scrollTop || document.body.scrollTop))+100 >= html.scrollHeight){   
        if(imgset.length < img_set.length){
          const newImgset = [...imgset];
          console.log(newImgset)
          newImgset.push(...img_set.slice(newImgset.length,newImgset.length+2));
          setSet(newImgset)
          window.removeEventListener("scroll",listener)
        }
        
        
      }
      
    }
    window.addEventListener("scroll",listener)
  })
  return <Layout>
    <Gallery images={imgset} />
  </Layout>
}



export default IndexPage;
