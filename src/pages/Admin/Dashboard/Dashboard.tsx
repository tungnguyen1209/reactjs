import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../store";
import {getCustomers} from "../../../store/customer/actions";
import {Pagination} from "../../../components/Pagination";
import {ICustomer} from "../../../store/customer/types";

function Dashboard() {
    const [curPage, setCurPage] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const customers = useSelector<AppState, ICustomer[]>((state) => state.customer.items);
    const totalItems = useSelector<AppState, number>((state) => state.customer.total);
    const loading = useSelector<AppState, boolean>((state) => state.customer.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCustomers(curPage, pageSize));
    }, [dispatch, curPage, pageSize]);
    const pageSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target;
        setPageSize(parseInt(value));
        dispatch(getCustomers(curPage, pageSize));
    };

    const curPageChange = (pageNumber: number) => {
        setCurPage(pageNumber);
        dispatch(getCustomers(curPage, pageSize));
    };

    const userElements: JSX.Element[] = customers.map((customer) => {
        return (
            <tr data-index={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
            </tr>
        );
    });


    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Dashboard</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard</li>
            </ol>
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Primary Card</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <a className="small text-white stretched-link" href="#">View Details</a>
                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-warning text-white mb-4">
                        <div className="card-body">Warning Card</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <a className="small text-white stretched-link" href="#">View Details</a>
                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-success text-white mb-4">
                        <div className="card-body">Success Card</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <a className="small text-white stretched-link" href="#">View Details</a>
                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-danger text-white mb-4">
                        <div className="card-body">Danger Card</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <a className="small text-white stretched-link" href="#">View Details</a>
                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6">
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-chart-area me-1"></i>
                            Area Chart Example
                        </div>
                        <div className="card-body">
                            <canvas id="myAreaChart" width="100%" height="40"></canvas>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-chart-bar me-1"></i>
                            Bar Chart Example
                        </div>
                        <div className="card-body">
                            <canvas id="myBarChart" width="100%" height="40"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header">
                    <svg className="svg-inline--fa fa-table me-1" aria-hidden="true" focusable="false" data-prefix="fas"
                         data-icon="table" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                         data-fa-i2svg="">
                        <path fill="currentColor"
                              d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                    </svg>
                    DataTable Example
                </div>
                <div className="card-body">
                    <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
                        <div className="datatable-top">
                            <div className="datatable-dropdown">
                                <label>
                                    <select name="pageSize" className="datatable-selector" onChange={pageSizeChange}>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="50">50</option>
                                    </select> entries per page
                                </label>
                            </div>
                            <div className="datatable-search">
                                <input className="datatable-input" placeholder="Search..." type="search"
                                       title="Search within table" aria-controls="datatablesSimple"/>
                            </div>
                        </div>
                        <div className="datatable-container">
                            {!loading && (<table id="datatablesSimple" className="datatable-table">
                                <thead>
                                <tr>
                                    <th data-sortable="true">
                                        <a href="#"
                                           className="datatable-sorter">Name</a>
                                    </th>
                                    <th data-sortable="true">
                                        <a href="#"
                                           className="datatable-sorter">Email</a>
                                    </th>
                                    <th data-sortable="true">
                                        <a href="#"
                                           className="datatable-sorter">Phone</a>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>{userElements}</tbody>
                            </table>)}
                        </div>
                        <div className="datatable-bottom">
                            <div className="datatable-info">{`Showing ${pageSize * (curPage - 1) + 1} to ${pageSize * curPage} of ${totalItems} entries`}</div>
                            <Pagination onPageChanged={curPageChange} totalRecords={totalItems} pageSize={pageSize} pageLimit={5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;