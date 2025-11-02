// components/products-pagination.tsx
"use client"

import { useRouter } from "next/navigation"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination"

export default function ProductsPagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  const router = useRouter()

  const goToPage = (page: number) => {
    router.push(`?page=${page}`, {scroll: false})
  }

  return (
    <Pagination >
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => { 
              e.preventDefault(); 
              if (currentPage > 1) goToPage(currentPage - 1) 
            }}
            className={currentPage === 1 ? "opacity-50 pointer-events-none" : ""}
          />
        </PaginationItem>

        {/* Show first page */}
        <PaginationItem>
          <PaginationLink href="#" onClick={(e) => { 
            e.preventDefault(); 
            goToPage(1) }} 
            isActive={currentPage === 1}
          > 1 </PaginationLink>
        </PaginationItem>

        {/* Ellipsis before current */}
        {currentPage > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Pages around current */}
        {Array.from({ length: 3 }, (_, i) => currentPage - 1 + i)
          .filter((p) => p > 1 && p < totalPages)
          .map((page) => (
            <PaginationItem key={page}>
              <PaginationLink href="#" isActive={currentPage === page} onClick={(e) => { e.preventDefault(); goToPage(page) }}>
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

        {/* Ellipsis after current */}
        {currentPage < totalPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Last page */}
        {totalPages > 1 && (
          <PaginationItem>
            <PaginationLink href="#" onClick={(e) => { e.preventDefault(); goToPage(totalPages) }} isActive={currentPage === totalPages}>
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => { e.preventDefault(); if (currentPage < totalPages) goToPage(currentPage + 1) }}
            className={currentPage === totalPages ? "opacity-50 pointer-events-none" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
