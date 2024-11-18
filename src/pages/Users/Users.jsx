import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { usersData } from '../../data';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
const columns = [
    { field: 'id', headerName: 'ID' },
    {
        field: 'customer', headerName: 'User name',
        renderCell: (params) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={params.row.img} // آدرس تصویر از داده‌ها
                    alt="avatar"
                    style={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        marginRight: 8,
                    }}
                />
                {params.row.customer}
            </div>
        ),
    },
    { field: 'email', headerName: 'Email' },
    {
        field: 'status', headerName: 'Status',
        renderCell: (params) => (
            <span className={`${params.row.status == 'active' ? 'text-green-500 ' : 'text-red-500 '}`}>
                {params.row.status}
            </span>
        )
    },
    {
        field: 'transaction',
        headerName: 'Transaction',

        renderCell: (params) => (
            <span>{params.row.transaction.toLocaleString()}</span>
        )
    },
    {
        field: 'action', headerName: 'Action',
        renderCell: (params) => (
            <div className='flex items-center gap-2'>
                <button><ModeEditIcon className='text-green-500'></ModeEditIcon></button>
                <button><DeleteIcon className='text-red-500'></DeleteIcon></button>

            </div>
        ),
    },
];

let rows = usersData;

const paginationModel = { page: 0, pageSize: 25 };

export default function Users() {
    const [users, setUsers] = useState(usersData)
    useEffect(() => {
        rows = users
    }, [users])




    return (
        <Paper sx={{ height: 'calc(100vh - 72px)', width: '100%', }} className=''>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[10, 25]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    )
}
