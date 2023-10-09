"use client";

import React, { useState } from "react";
import { Pagination } from "antd";
import styles from "./pagination.module.css";

const PaginationComponent = ({ blogCardData }) => {
  const itemsPerPage = 6;
  const totalItems = 50;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const itemsToDisplay = blogCardData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.mainLayout}>
      {itemsToDisplay.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        total={totalItems}
        pageSize={itemsPerPage}
      />
    </div>
  );
};

export default PaginationComponent;
