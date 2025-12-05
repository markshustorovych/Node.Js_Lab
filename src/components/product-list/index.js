import React, { useState } from 'react';
import ProductCard from '@/components/product-card';
import { ListWrapper, PaginationWrapper, PageButton } from './styled';

const PRODUCTS_PER_PAGE = 4;

export default function ProductList({ products }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <ListWrapper>
      {currentProducts.map((product) => (
        <ProductCard
          key={product._id}
          id={product._id}
          title={product.title}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}

      <PaginationWrapper>
        <PageButton onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
          prebious
        </PageButton>
        <span>page {currentPage} of {totalPages}</span>
        <PageButton onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
          next
        </PageButton>
      </PaginationWrapper>
    </ListWrapper>
  );
}
