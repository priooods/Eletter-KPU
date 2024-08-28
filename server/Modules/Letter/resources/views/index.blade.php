@extends('letter::layouts.master')

@section('content')
    <h1>Hello World</h1>

    <p>Module: {!! config('letter.name') !!}</p>
@endsection
