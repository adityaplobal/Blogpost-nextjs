import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs';

const Blog = (props) => {
  // console.log(props);
  const[blogs,setblogs] = useState(props.allBlogs)
  return (
    <div>
      <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem)=>{
          return <div key={blogItem.slug}>
          <Link href={`/blogpost/${blogItem.slug}`} >
          <h3 className={styles.blogItemh3}>{blogItem.title}</h3></Link>

          <p className={styles.blogItemp}>{blogItem.metadesc.substr(0,400)}</p>
          <br />
        </div>
        })}
          </main>
        </div>
    </div>
  )
};

//Static Side Rendering:
export async function getStaticProps(context) {   //this function adds the json files in the html page source of the website
  //const fs = require('fs');
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for(let index=0; index< data.length; index++){
    const item = data[index];
    console.log(item)
    myfile = await fs.promises.readFile(("blogdata/"+item),'utf-8');
    //console.log(myfile);
    allBlogs.push(JSON.parse(myfile))
  } 

  return {            
    props: {allBlogs}, // will be passed to the page component as props
  }
}

// //Server Side Rendering:
// export async function getServerSideProps(context) {   //this function adds the json files in the html page source of the website
//   let data = await fetch('http://localhost:3000/api/blogs')
//   let allBlogs = await data.json()

//   return {            
//     props: {allBlogs}, // will be passed to the page component as props
//   }
// }

// // This was the code before including getServerSideProps():
// const blog = () => {
//   const[blogs,setblogs] = useState([])
//   useEffect(()=>{
//     console.log("useeffect is running");                   //only when blog is called 
//     fetch('http://localhost:3000/api/blogs').then((a)=>{
//       return a.json();})
//       .then((parsed)=>{
//         //console.log(parsed)
//         setblogs(parsed)
//       })
//   },[])
//   return (
//     <div>
//       <div className={styles.container}>
//       <main className={styles.main}>
//         {blogs.map((blogItem)=>{
//           return <div key={blogItem.slug}>
//           <Link href={`/blogpost/${blogItem.slug}`} >
//           <h3 className={styles.blogItemh3}>{blogItem.title}</h3></Link>

//           <p className={styles.blogItemp}>{blogItem.content.substr(0,400)}</p>
//           <br />
//         </div>
//         })}
//           </main>
//         </div>
//     </div>
//   )
// }

export default Blog
