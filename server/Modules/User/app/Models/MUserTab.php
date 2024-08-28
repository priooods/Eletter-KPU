<?php

namespace Modules\User\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\User\Database\Factories\MUserTabFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class MUserTab extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'name',
        'email',
        'username',
        'password',
        'm_access_tabs_id'
    ];
    
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected static function newFactory()
    {
        // Create a new instance
    }
}
