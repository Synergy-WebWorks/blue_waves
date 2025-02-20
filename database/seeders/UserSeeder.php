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
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'Admin User',
                'fname' => 'Admin',
                'lname' => 'User',
                'mname' => null,
                'suffix' => null,
                'address' => 'Admin Address',
                'contact' => '1234567890',
                'profile' => null,
                'email' => 'admin@gmail.com',
                'email_verified_at' => now(),
                'password' => Hash::make('admin'),
                'user_type' => '1', // Admin
                'remember_token' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Staff User',
                'fname' => 'Staff',
                'lname' => 'User',
                'mname' => null,
                'suffix' => null,
                'address' => 'Staff Address',
                'contact' => '0987654321',
                'profile' => null,
                'email' => 'staff@gmail.com',
                'email_verified_at' => now(),
                'password' => Hash::make('admin'),
                'user_type' => '2', // Staff
                'remember_token' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

    }
}
