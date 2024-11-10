<?php

namespace App\Http\Controllers;

use App\Models\TempPemilihan;
use App\Models\TempToken;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TempPemilihanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Front/Program/Mubes/Page', [
            'title' => 'MUBES 2024'
        ]);
    }

    public function pemilihan(): Response
    {
        return Inertia::render('Front/Program/Mubes/Pemilihan', [
            'title' => 'Pemilihan Ketua & Wakil Ketua'
        ]);
    }

    public function token_check($token)
    {
        // return $token;
        $token = TempToken::where('token', $token)->first();

        if (!$token) {
            return response()->json([
                'status' => 500,
                'title' => 'Gagal Cek Token',
                'message' => 'Tidak dapat menemukan token tersebut, harap hubungi panitia segera!'
            ]);
        }

        if ($token->is_used) {
            return response()->json([
                'status' => 500,
                'title' => 'Gagal Cek Token',
                'message' => 'Token yang sudah digunakan tidak dapat dipakai! harap hubungi panitia segera!'
            ]);
        }

        return $token;

    }

    public function store(Request $request)
    {
        $paslon = TempPemilihan::find($request->id);
        $token = TempToken::where('token', $request->token)->first();
        $paslon->total += 1;
        $paslon->save();
        $token->is_used = true;
        $token->temp_pemilihan_id = $paslon->id;
        $token->save();
        return response()->json([
            'title' => 'Berhasil memilih',
            'message' => 'Terimakasih telah menggunakan hak suara, mari bangun himpunan lebih baik lagi!'
        ]);
    }
}
