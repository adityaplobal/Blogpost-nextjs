import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'

const blog = () => {
  const[blogs,setblogs] = useState([])
  useEffect(()=>{
    console.log("useeffect is running");                   //only when blog is called 
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      return a.json();})
      .then((parsed)=>{
        //console.log(parsed)
        setblogs(parsed)
      })
  },[])
  return (
    <div>
      <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem)=>{
          return <div key={blogItem.slug}>
          <Link href={`/blogpost/${blogItem.slug}`} >
          <h3 className={styles.blogItemh3}>{blogItem.title}</h3></Link>

          <p className={styles.blogItemp}>{blogItem.content.substr(0,400)}</p>
          <br />
        </div>
        })}
          </main>
        </div>
    </div>
  )
}

export default blog
