<?php

namespace Modules\User\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Modules\User\Models\MUserTab;

class UserController extends Controller
{
    protected $mUserTab;
    protected $controller;
    public function __construct(MUserTab $mUserTab, Controller $controller) {
        $this->mUserTab = $mUserTab;
        $this->controller = $controller;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->controller->respons('USER LIST', $this->mUserTab->where('id', '!=', auth()->user()->id)->get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('user::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->controller->validasi($request->all(), [
            'username' => 'required|max:50',
            'email' => 'required|email|max:50',
            'm_access_tabs_id' => 'required',
            'password' => 'required|min:8',
        ]);

        try {
            DB::beginTransaction();
            $request['password'] = Hash::make($request->password);
            $users = $this->mUserTab->create($request->all());
            DB::commit();
            $tokens = $users->createToken('Angeline-KPU');
            return $this->controller->respons('USER CREATED', [
                'token' => $tokens->plainTextToken
            ], [
                'title' => 'Akun Berhasil dibuat',
                'body' => 'Selamat datang ' . $request->username,
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            abort(400, $th->getMessage());
        }
    }

    public function login(Request $request){
        $this->controller->validasi($request->all(), [
            'username' => 'required|max:50',
            'password' => 'required|min:8',
        ]);

        $credentials = request(['username', 'password']);

        if (!Auth::attempt($credentials)) {
            abort(401, 'Informasi akun yang anda masukan salah !');
        } 

        $tokenResult = auth()->user()->createToken('Angeline-UMKM');
        return $this->controller->respons('LOGIN SUKSES', 
        [ 'token' => $tokenResult->plainTextToken ], 
        [
            'theme' => 'success',
            'title' => 'Login berhasil !',
            'body' => 'Selamat datang kembali di UMKM Digital',
        ]);
    }

    /**
     * Show the specified resource.
     */
    public function show()
    {
        return $this->controller->respons('ME', auth()->user());
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('user::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function logout()
    {
        try {
            auth()->user()->currentAccessToken()->delete();
            return $this->controller->respons('USER LOGOUT', null);
        } catch (\Throwable $th) {
            abort(400, $th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            DB::beginTransaction();
            $user = $this->mUserTab->find($id);
            $user->delete();
            DB::commit();
            return $this->controller->respons('USER DELETE', null);
        } catch (\Throwable $th) {
            DB::rollBack();
            abort(400, $th->getMessage());
        }
    }
}
