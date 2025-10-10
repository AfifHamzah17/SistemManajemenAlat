// Peminjaman.js
import React, { useState } from 'react';

function Peminjaman({ peminjaman, fetchPeminjaman, addPeminjaman, updatePeminjaman, deletePeminjaman }) {
  const [newPeminjaman, setNewPeminjaman] = useState({ peminjam_id: '', alat_id: '', tanggal_peminjaman: '', tanggal_pengembalian: '' });
  const [editingPeminjaman, setEditingPeminjaman] = useState(null);

  const handleAddPeminjaman = () => {
    addPeminjaman(newPeminjaman);
    setNewPeminjaman({ peminjam_id: '', alat_id: '', tanggal_peminjaman: '', tanggal_pengembalian: '' });
  };

  const handleUpdatePeminjaman = () => {
    updatePeminjaman(editingPeminjaman.id, editingPeminjaman);
    setEditingPeminjaman(null);
  };

  return (
    <section>
      <h2>Peminjaman</h2>
      <table>
        <thead>
          <tr>
            <th>Peminjam ID</th>
            <th>Alat ID</th>
            <th>Tanggal Peminjaman</th>
            <th>Tanggal Pengembalian</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {peminjaman.map((item) => (
            <tr key={item.id}>
              <td>{item.peminjam_id}</td>
              <td>{item.alat_id}</td>
              <td>{item.tanggal_peminjaman}</td>
              <td>{item.tanggal_pengembalian}</td>
              <td>
                <button onClick={() => setEditingPeminjaman(item)}>Edit</button>
                <button onClick={() => deletePeminjaman(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <input
        type="text"
        value={newPeminjaman.peminjam_id}
        onChange={(e) => setNewPeminjaman({ ...newPeminjaman, peminjam_id: e.target.value })}
        placeholder="Peminjam ID"
      />
      <input
        type="text"
        value={newPeminjaman.alat_id}
        onChange={(e) => setNewPeminjaman({ ...newPeminjaman, alat_id: e.target.value })}
        placeholder="Alat ID"
      />
      <input
        type="date"
        value={newPeminjaman.tanggal_peminjaman}
        onChange={(e) => setNewPeminjaman({ ...newPeminjaman, tanggal_peminjaman: e.target.value })}
      />
      <input
        type="date"
        value={newPeminjaman.tanggal_pengembalian}
        onChange={(e) => setNewPeminjaman({ ...newPeminjaman, tanggal_pengembalian: e.target.value })}
      />
      <button onClick={handleAddPeminjaman}>Add Peminjaman</button>
      {editingPeminjaman && (
        <div>
          <h3>Edit Peminjaman</h3>
          <input
            type="text"
            value={editingPeminjaman.peminjam_id}
            onChange={(e) => setEditingPeminjaman({ ...editingPeminjaman, peminjam_id: e.target.value })}
            placeholder="Peminjam ID"
          />
          <input
            type="text"
            value={editingPeminjaman.alat_id}
            onChange={(e) => setEditingPeminjaman({ ...editingPeminjaman, alat_id: e.target.value })}
            placeholder="Alat ID"
          />
          <input
            type="date"
            value={editingPeminjaman.tanggal_peminjaman}
            onChange={(e) => setEditingPeminjaman({ ...editingPeminjaman, tanggal_peminjaman: e.target.value })}
          />
          <input
            type="date"
            value={editingPeminjaman.tanggal_pengembalian}
            onChange={(e) => setEditingPeminjaman({ ...editingPeminjaman, tanggal_pengembalian: e.target.value })}
          />
          <button onClick={handleUpdatePeminjaman}>Update</button>
        </div>
      )}
    </section>
  );
}

export default Peminjaman;