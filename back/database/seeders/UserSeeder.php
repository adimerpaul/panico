<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'admin',
            'lastName' => 'admin',
            'email' => 'admin@test.com',
            'password' => Hash::make('admin') ,
            'phone' => '1010',
            'address' => 'admin',
            'city' => 'ORURO',
            'type' => 'Administrador',
        ]);
    }
}
