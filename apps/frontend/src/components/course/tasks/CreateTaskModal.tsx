// CreateTaskModal.tsx

import React, { useState } from 'react';
import {
    Modal,
    Box,
    TextField,
    Button,
    Typography
} from '@mui/material';

interface CreateTaskModalProps {
    open: boolean;
    onClose: () => void;
    onCreate: (title: string, description: string, enddate: string) => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ open, onClose, onCreate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [enddate, setEnddate] = useState('');

    const handleCreate = () => {
        onCreate(title, description, enddate);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ p: 4, bgcolor: 'background.paper', mx: 'auto', my: '20%', maxWidth: 400 }}>
                <Typography variant="h6" gutterBottom>
                    Crear Nueva Tarea
                </Typography>
                <TextField
                    fullWidth
                    label="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    label="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    label="Fecha de Finalización"
                    type="date"
                    value={enddate}
                    onChange={(e) => setEnddate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    sx={{ mb: 2 }}
                />
                <Button variant="contained" color="primary" onClick={handleCreate}>
                    Crear
                </Button>
            </Box>
        </Modal>
    );
};

export default CreateTaskModal;