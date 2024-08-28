<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class Controller
{
    public function validasi($request, $rule){
        $validasi = Validator::make($request,$rule);
        if($validasi->fails()) {
            abort(400, implode(',', $validasi->errors()->all()));
        }
        else {return null;}
    }

    public function respons($message, $data, $notifikasi = null ,$code = 200){
        return response()->json([
            'response_message' => $message,
            'response_data' => $data,
            'response_notifikasi' => $notifikasi
        ],$code);
    }

    public function responsList($message, $data, $column, $filterable = null, $sortable = null){
        return response()->json(
            [
               'response_message' => $message,
               'response_data' => $data ? $data->getCollection() : null,
               'property' => [
                    'totalItem' => $data ? $data->total() : null,
                    'countItem' => $data ? $data->count() : null,
                    'per_page' => $data ? $data->perPage() : null,
                    'currentPage' => $data ? $data->currentPage() : null,
                    'totalPage' => $data ? $data->lastPage() : null
                ],
               'response_column' => $column,
               'response_filterable' => $filterable,
               'response_sortable' => $sortable
            ]
        );
    }

    public function unlinkFile($dir, $name){
        if ($name==null){ return; }
        $file_loc = public_path($dir."\\") . $name;
        if (file_exists($file_loc)){
            unlink($file_loc);
        }
    }

    public function download(Request $request){
        $files = public_path($request->folder).'/'. $request->filename;
        if (file_exists($files)){
            return response()->download($files);
        }
        return response('',404);
    }
}
