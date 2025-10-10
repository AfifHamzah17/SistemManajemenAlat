<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peminjaman extends Model
{
    use HasFactory;

    protected $fillable = ['peminjam_id', 'alat_id', 'tanggal_peminjaman', 'tanggal_pengembalian'];

    public function peminjam()
    {
        return $this->belongsTo(Peminjam::class);
    }

    public function alat()
    {
        return $this->belongsTo(Alat::class);
    }
}
