import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { usersData } from '../../data';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
const columns = [
    { field: 'id', headerName: 'ID', flex: 1, minWidth: 100 },
    {
        field: 'customer', headerName: 'User name', flex: 1, minWidth: 100,
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
    { field: 'email', headerName: 'Email', flex: 1, minWidth: 100, },
    {
        field: 'status', headerName: 'Status', flex: 1, minWidth: 100,
    },
    {
        field: 'transaction',
        headerName: 'Transaction',
        flex: 1, minWidth: 100,
        renderCell: (params) => (
            <span>{params.row.transaction.toLocaleString()}</span>
        )
    },
    {
        field: 'action', headerName: 'Action', flex: 1, minWidth: 100,
        renderCell: (params) => (
            <div className='flex items-center gap-2'>
                <button><ModeEditIcon ></ModeEditIcon></button>
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
        <Paper sx={{ height: 'calc(100vh - 72px)', width: '100%', overflowX: 'auto' }} >
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[10, 25]}
                checkboxSelection
                sx={{
                    border: 0,
                    overflowX: 'auto',
                }}
                className='overflow-x-auto'
            />
        </Paper>
    )
}
