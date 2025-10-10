<?php

use App\Models\Alat;
use App\Models\Kelas;
use App\Models\Peminjam;
use App\Models\Peminjaman;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Alat Routes
Route::get('/alat', function () {
    return Alat::all();
});

Route::post('/alat', function (Request $request) {
    return Alat::create($request->all());
});

Route::delete('/alat/{id}', function ($id) {
    $alat = Alat::findOrFail($id);
    $alat->delete();
    return response()->json(['message' => 'Alat deleted successfully']);
});

Route::put('/alat/{id}', function (Request $request, $id) {
    $alat = Alat::findOrFail($id);
    $alat->update($request->all());
    return response()->json($alat);
});

// Kelas Routes
Route::get('/kelas', function () {
    return Kelas::all();
});

Route::post('/kelas', function (Request $request) {
    return Kelas::create($request->all());
});

Route::delete('/kelas/{id}', function ($id) {
    $kelas = Kelas::findOrFail($id);
    $kelas->delete();
    return response()->json(['message' => 'Kelas deleted successfully']);
});

Route::put('/kelas/{id}', function (Request $request, $id) {
    $kelas = Kelas::findOrFail($id);
    $kelas->update($request->all());
    return response()->json($kelas);
});

// Peminjam Routes
Route::get('/peminjam', function () {
    return Peminjam::with('kelas')->get();
});

Route::post('/peminjam', function (Request $request) {
    return Peminjam::create($request->all());
});

Route::delete('/peminjam/{id}', function ($id) {
    $peminjam = Peminjam::findOrFail($id);
    $peminjam->delete();
    return response()->json(['message' => 'Peminjam deleted successfully']);
});

Route::put('/peminjam/{id}', function (Request $request, $id) {
    $peminjam = Peminjam::findOrFail($id);
    $peminjam->update($request->all());
    return response()->json($peminjam);
});

// Peminjaman Routes
Route::get('/peminjaman', function () {
    return Peminjaman::with(['peminjam', 'alat'])->get();
});

Route::post('/peminjaman', function (Request $request) {
    return Peminjaman::create($request->all());
});

Route::delete('/peminjaman/{id}', function ($id) {
    $peminjaman = Peminjaman::findOrFail($id);
    $peminjaman->delete();
    return response()->json(['message' => 'Peminjaman deleted successfully']);
});

Route::put('/peminjaman/{id}', function (Request $request, $id) {
    $peminjaman = Peminjaman::findOrFail($id);
    $peminjaman->update($request->all());
    return response()->json($peminjaman);
});
