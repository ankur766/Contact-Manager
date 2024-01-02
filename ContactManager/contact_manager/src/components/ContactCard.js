import React from 'react';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

const ContactCard = (props) => {
  const { id, fname, lname, email } = props.contact;

  const contactCardStyle = {
    width: '100%',
    marginTop: '20px',
  };

  const tableContainerStyle = {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const tableHeaderCellStyle = {
    padding: '12px',
    textAlign: 'left',
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold',
  };

  const evenRowStyle = {
    backgroundColor: '#f9f9f9',
  };

  const hoverRowStyle = {
    backgroundColor: '#e0e0e0',
    cursor: 'pointer',
  };

  const updateButtonStyle = {
    textDecoration: 'none',
  };

  const buttonStyle = {
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: '#3f51b5',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#303f9f',
  };

  return (
    <div style={contactCardStyle}>
      <TableContainer style={tableContainerStyle}>
        <Table style={tableStyle}>
          <TableHead>
            <TableRow>
              <TableCell style={tableHeaderCellStyle}>ID</TableCell>
              <TableCell style={tableHeaderCellStyle}>First</TableCell>
              <TableCell style={tableHeaderCellStyle}>Last</TableCell>
              <TableCell style={tableHeaderCellStyle}>Email</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{id}</TableCell>
              <TableCell>{fname}</TableCell>
              <TableCell>{lname}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell onClick={() => props.deleteByid(id)}><MdDelete /></TableCell>
              <TableCell>
                <Link to={"/edit"} style={updateButtonStyle}>
                  <Button onClick={() => props.updateByByid(id)} variant="contained" color="primary" style={buttonStyle}>
                    Update
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContactCard;
