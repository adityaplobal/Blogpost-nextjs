import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Blog.module.css'

const slug = () => {
  const[blogs,setblogs] = useState()
  const router = useRouter();
  useEffect(() => {
    if(!router.isReady) return;
    const {slug} = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
      return a.json();})
      .then((parsed)=>{
        //console.log(parsed)
        setblogs(parsed)
      })
  },[router.isReady]) //coz if router is not ready this function will give error this means if router changed 
  

  return <div className={styles.container}>
    <main className={styles.main}> 
    <h1>{blogs && blogs.title}</h1>
    <hr />
    <div> {blogs && blogs.content}</div>
    </main>
  </div>
}

export default slug;
