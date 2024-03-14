import React from 'react'
import { useRouter } from 'next/router'

const Blog = () => {

  const router = useRouter();
  const {slug} = router.query

  return (
    <div>{slug}</div>
  )
}

export default Blog