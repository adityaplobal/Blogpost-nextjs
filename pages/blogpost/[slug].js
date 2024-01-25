import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Blog.module.css'
import * as fs from 'fs';

const Slug = (props) => {
  function createMarkup(content) {
    return {__html: content };
  }
  const[blogs,setblogs] = useState(props.theBlog)
  

  return <div className={styles.container}>
    <main className={styles.main}> 
    <h1>{blogs && blogs.title}</h1>
    <hr />
    {blogs && <div dangerouslySetInnerHTML={createMarkup(blogs.content)}></div>}
    </main>
  </div>
}

//get static paths function:
export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  return {
    paths: [
      {params:{ slug: 'how-to-learn-anything'}},
      {params:{ slug: 'how-to-learn-javascript'}},
      {params:{ slug: 'how-to-learn-reacr'}},
    ],
    fallback: true,
  }
}

export async function getStaticProps(context) {  
  console.log(context.params)
  const {slug} = context.params;               //slug is in context.params
  let theBlog =await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')

  return {            
    props: {theBlog:JSON.parse(theBlog)}, // will be passed to the page component as props
  }
}


export default Slug;

// //Code before adding getServerSideProps
// const slug = () => {
//   const[blogs,setblogs] = useState()
//   const router = useRouter();
//   useEffect(() => {
//     if(!router.isReady) return;
//     const {slug} = router.query;
//     fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
//       return a.json();})
//       .then((parsed)=>{
//         //console.log(parsed)
//         setblogs(parsed)
//       })
//   },[router.isReady]) //coz if router is not ready this function will give error this means if router changed 
  
