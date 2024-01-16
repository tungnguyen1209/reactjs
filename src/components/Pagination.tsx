import { useState } from 'react';

type PaginationProps = {
    onPageChanged: Function;
    totalRecords: number;
    pageSize: number;
    pageLimit: number;
};

export const Pagination = (props: PaginationProps) => {
    const { totalRecords, pageLimit, pageSize } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalRecords / pageSize);
    const startPageIndex = Math.max(currentPage - pageLimit, 1);
    const endPageIndex = Math.min(currentPage + pageLimit, totalPages);
    const range = (from: number, to: number, step = 1) => {
        let i = from;
        const range = [];

        while (i <= to) {
            range.push(i);
            i += step;
        }

        return range;
    };

    const pages = range(startPageIndex, endPageIndex);
    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        props.onPageChanged(pageNumber);
    };

    return (
        <nav className="datatable-pagination">
            <ul className="datatable-pagination-list">
                <li className={`datatable-pagination-list-item ${currentPage === 1 ? 'datatable-hidden datatable-disabled' : ''}`}>
                    <button
                        className='datatable-pagination-list-item-link'
                        onClick={() => handleClick(currentPage - 1)}
                    >
                        Prev
                    </button>
                </li>
                {pages.map((page, index) => {
                    return (
                        <li
                            key={index}
                            className={`datatable-pagination-list-item ${currentPage === page ? 'datatable-active' : ''}`}
                        >
                            <button onClick={() => handleClick(page)} className='datatable-pagination-list-item-link'>
                                {page}
                            </button>
                        </li>
                    );
                })}
                <li
                    className={`datatable-pagination-list-item ${
                        currentPage === totalPages ? 'datatable-hidden datatable-disabled' : ''
                    }`}
                >
                    <button className='datatable-pagination-list-item-link' onClick={() => handleClick(totalPages)}>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};