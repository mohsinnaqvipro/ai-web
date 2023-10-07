'use client'

import React, { useState } from 'react'
import BlogCard from '../BlogCard'
import { Pagination } from 'antd'
import { useRouter } from 'next/navigation'
import styles from './blogArticles.module.css'

function BlogArticles ({ blogCardData }) {
  const router = useRouter()
  const itemsPerPage = 6
  const totalItems = blogCardData.length
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems)

  const itemsToDisplay = blogCardData.slice(startIndex, endIndex)

  const handlePageChange = page => {
    setCurrentPage(page)
  }
  return (
    <>
      <div className={styles.blogContainer}>
        {itemsToDisplay.map((data, index) => (
          <div
            className={styles.blogCard}
            key={index}
            onClick={() => router.push('/BlogPage')}
          >
            <BlogCard data={data} />
          </div>
        ))}
      </div>
      <div className={styles.paginatin}>
        <Pagination
          current={currentPage}
          onChange={handlePageChange}
          total={totalItems}
          pageSize={itemsPerPage}
          responsive={true}
          showSizeChanger={false}
        />
      </div>
    </>
  )
}

export default BlogArticles
