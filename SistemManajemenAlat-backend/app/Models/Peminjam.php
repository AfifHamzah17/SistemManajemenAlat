<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peminjam extends Model
{
    use HasFactory;

    protected $fillable = ['nama', 'nis', 'kelas_id'];

    public function kelas()
    {
        return $this->belongsTo(Kelas::class);
    }

    public function peminjaman()
    {
        return $this->hasMany(Peminjaman::class);
    }
}
