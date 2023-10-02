<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ApiController extends Controller
{
    //

    public function sendContact(Request $request){
        Log::info('enter here');
        Log::info(json_encode($request->all()));
        return response()->json([
           'status'=> true
        ]);
    }
}
