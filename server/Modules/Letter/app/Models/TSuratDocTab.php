<?php

namespace Modules\Letter\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Letter\Database\Factories\TSuratDocTabFactory;

class TSuratDocTab extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    public $timestamps = false;
    protected $fillable = [
        'filename',
        't_surat_tabs_id',
    ];

    protected static function newFactory()
    {
        // Create
    }
}
