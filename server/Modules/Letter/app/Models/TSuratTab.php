<?php

namespace Modules\Letter\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Letter\Database\Factories\TSuratTabFactory;

class TSuratTab extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'no_surat',
        'tanggal_surat',
        'asal_surat',
        'disposisi'
    ];

    protected static function newFactory()
    {
        // Create a new instance
    }

    public function document(){
        return $this->hasMany(TSuratDocTab::class, 't_surat_tabs_id','id');
    }

    public function log(){
        return $this->hasMany(TSuratLogTab::class, 't_surat_tabs_id','id');
    }
}
