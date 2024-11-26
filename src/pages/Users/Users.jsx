import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { usersData } from '../../data';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Users() {
    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.2, minWidth: 10 },
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
            field: 'status', headerName: 'Status', flex:0.5, minWidth: 100,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            flex: 0.5, minWidth: 100,
            renderCell: (params) => (
                <span>{params.row.transaction.toLocaleString()}</span>
            )
        },
        {
            field: 'action', headerName: 'Action', flex: 1, minWidth: 100,
            renderCell: (params) => (
                <div className='flex items-center gap-2'>
                    <button onClick={() => editUserHandler(params.row.id)}><ModeEditIcon ></ModeEditIcon></button>
                    <button onClick={() => removeUserHandler(params.row.id)}><DeleteIcon className='text-red-500'></DeleteIcon></button>

                </div>
            ),
        },
    ];
    const paginationModel = { page: 0, pageSize: 25 };

    const [users, setUsers] = useState(usersData)

    const editUserHandler = (id) => {
        console.log(id);
    }
    const removeUserHandler = (id) => {
        const filterUsers = users.filter(user => user.id != id)
        setUsers(filterUsers)
    }

    return (
        <div className='w-full h-full  overflow-auto'>
            <Paper sx={{ height: 'calc(100vh - 72px)', width: '100%', overflowX: 'auto' }} >
                <DataGrid
                    rows={users}
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
        </div>
    )
}
