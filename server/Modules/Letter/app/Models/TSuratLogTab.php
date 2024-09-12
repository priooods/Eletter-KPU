<?php

namespace Modules\Letter\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Letter\Database\Factories\TSuratLogTabFactory;

class TSuratLogTab extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        't_surat_tabs_id',
        'm_user_tabs_id',
        'queue',
        'status',
        'disposisi',
    ];

    protected static function newFactory()
    {
        // Create
    }
}
