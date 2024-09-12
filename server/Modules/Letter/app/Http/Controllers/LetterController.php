<?php

namespace Modules\Letter\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Modules\Letter\Models\TSuratDocTab;
use Modules\Letter\Models\TSuratLogTab;
use Modules\Letter\Models\TSuratTab;

class LetterController extends Controller
{
    protected $controller;
    protected $tSuratTab;
    protected $tSuratDocTab;
    protected $tSuratLogTab;
    public function __construct(
        Controller $controller,
        TSuratTab $tSuratTab,
        TSuratDocTab $tSuratDocTab,
        TSuratLogTab $tSuratLogTab
        // Your model or repository here
    ) {
        $this->controller = $controller;
        $this->tSuratTab = $tSuratTab;
        $this->tSuratLogTab = $tSuratLogTab;
        $this->tSuratDocTab = $tSuratDocTab;
    }
    /**
     * Display a listing of the resource.
     */
    public function myinLetter()
    {
        return $this->controller->respons('MESSAGE LIST', $this->tSuratTab
            ->with(['document', 'log'])
            ->whereHas('log',function($a){
                $a->where('m_user_tabs_id', auth()->user()->id)
                    ->where('status',1);
            })
            ->orderBy('id', "DESC")
            ->get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function myoutLetter()
    {
        return $this->controller->respons('MESSAGE LIST', $this->tSuratTab
            ->with(['document', 'log'])
            ->whereHas('log',function($a){
                $a->where('m_user_tabs_id', auth()->user()->id)
                    ->where('status',0);
            })
            ->orderBy('id', "DESC")
            ->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->controller->validasi($request->all(), [
            'image' => 'required',
            'no_surat' => 'required',
            'tanggal_surat' => 'required',
            'asal_surat' => 'required',
        ]);

        try {
            DB::beginTransaction();
            $letter = $this->tSuratTab->create([
                'no_surat' => $request->no_surat,
                'tanggal_surat' => $request->tanggal_surat,
                'asal_surat' => $request->asal_surat,
            ]);

            $this->tSuratLogTab->create([
                't_surat_tabs_id' => $letter->id,
                'm_user_tabs_id' => auth()->user()->id,
                'status' => 1
            ]);

            foreach ($request->image as $key => $value) {
                if ($request->hasFile('image.'.$key.'.path')) {
                    $file = $request->file('image.'.$key.'.path');
                    $filename = $letter->id . '_' .$request->no_surat . '_' . $file->getClientOriginalName();
                    $file->move(public_path('image'), $filename);
                    $this->tSuratDocTab->create(['t_surat_tabs_id' => $letter->id,'filename' => $filename]);
                }
            }
            DB::commit();
            return $this->controller->respons('LETTER CREATED', null,[
                'title' => 'Surat berhasil di buat',
                'body' => 'Surat baru berhasil di tambahkan ',
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            abort(400, $th->getMessage());
        }
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return $this->controller->respons('DETAIL',
        $this->tSuratTab->where('id',$id)
            ->with([
                'log',
                'document'
            ])
            ->first()
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('letter::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $this->controller->validasi($request->all(), [
            'tujuan' => 'required',
            'disposisi' => 'required',
            't_surat_tabs_id' => 'required',
        ]);

        try {
            DB::beginTransaction();
            $myLog = $this->tSuratLogTab->where('m_user_tabs_id', auth()->user()->id)
                ->where('t_surat_tabs_id',$request->t_surat_tabs_id)
                ->where('status',1)
                ->first();
            $this->tSuratLogTab->create([
                't_surat_tabs_id' => $request->t_surat_tabs_id,
                'm_user_tabs_id' => $request->tujuan,
                'disposisi' => $request->disposisi,
                'status' => 1
            ]);
            $myLog->update([
                'status' => 0
            ]);
            DB::commit();
            return $this->controller->respons('LETTER CREATED', null,[
                'title' => 'Surat berhasil di Disposisi',
                'body' => 'Disposisi berhasil di tambahkan ',
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            abort(400, $th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }
}
