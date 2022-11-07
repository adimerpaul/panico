<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if ($user) {
            if (password_verify($request->password, $user->password)) {
                $token = $user->createToken('authToken')->accessToken;
                return response(['user' => $user, 'token' => $token]);
            } else {
                return response(['message' => 'Contraseña incorrecta']);
            }
        } else {
            return response(['message' => 'Usuario no encontrado']);
        }
    }
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'lastName' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6',
            'phone' => 'required',
            'address' => 'required',
            'city' => 'required',
            'type' => 'required',
        ]);
        $user = User::where('email', $request->email)->first();
        if ($user) {
            return response(['message' => 'Usuario ya registrado']);
        } else {
            $user = User::create($request->all());
            $token = $user->createToken('authToken')->accessToken;
            return response(['user' => $user, 'token' => $token]);
        }
    }
    function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response(['message' => 'Logged out']);
    }
    function me(Request $request)
    {
        return response($request->user());
    }
    public function index(){return User::all();}
    public function show(User $user){return $user;}
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'lastName' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6',
            'phone' => 'required',
            'address' => 'required',
            'city' => 'required',
            'type' => 'required',
        ]);
        $user = User::where('email', $request->email)->first();
        if ($user) {
            return response(['message' => 'Usuario ya registrado']);
        } else {
            $user = User::create($request->all());
            return response($user);
        }
    }
    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required',
            'lastName' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6',
            'phone' => 'required',
            'address' => 'required',
            'city' => 'required',
            'type' => 'required',
        ]);
        $user->update($request->all());
        return response($user);
    }
    public function destroy(User $user)
    {
        $user->delete();
        return response(['message' => 'Usuario eliminado']);
    }
}
