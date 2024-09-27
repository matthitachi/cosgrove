<?php

namespace App\Http\Controllers;

use App\Mail\NewMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ApiController extends Controller
{
    //

    public function sendContact(Request $request){
//        Mail::to($to)->later(now()->addHours($hours), new SendTimedMails($content, $subject));
        Log::info('enter here');
        Log::info(json_encode($request->all()));
        $content = "<div>";

        if($request->has('name')){
            $content.= "<div><b>Name:</b> {$request->name}</div>";
        }
        if($request->has('email')){
            $content.= "<div><b>Email:</b> {$request->email}</div>";
        }
        if($request->has('project')){
            $content.= "<div><b>Project:</b> {$request->project}</div>";
        }
        if($request->has('phone')){
            $content.= "<div><b>Phone:</b> {$request->phone}</div>";
        }
        if($request->has('message')){
            $content.= "<div><b>Message:</b> {$request->message}</div>";
        }
        $content .= "<div>";
        try{
            $mailable = new NewMail('Contact Information', $content);
//            Mail::to('info@cosgroveafrica.com')->send($mailable);
            Mail::to('matthitachi@gmail.com')->send($mailable);
        }catch (\Exception $e){
            Log::info($e->getMessage());
            Log::info($e->getTraceAsString());
        }
        return response()->json([
           'status'=> true
        ]);
    }
    public function sendAgent(Request $request){
//        Mail::to($to)->later(now()->addHours($hours), new SendTimedMails($content, $subject));
        Log::info('enter here');
        Log::info(json_encode($request->all()));
        $content = "<div>";

        if($request->has('name')){
            $content.= "<div><b>Name:</b> {$request->name}</div>";
        }
        if($request->has('email')){
            $content.= "<div><b>Email:</b> {$request->email}</div>";
        }
        if($request->has('project')){
            $content.= "<div><b>Project:</b> {$request->project}</div>";
        }
        if($request->has('phone')){
            $content.= "<div><b>Phone:</b> {$request->phone}</div>";
        }
        if($request->has('message')){
            $content.= "<div><b>Message:</b> {$request->message}</div>";
        }
        $content .= "<div>";
        try{
            $mailable = new NewMail('Contact Information', $content);
            Mail::to('careers@cosgroveafrica.com')->send($mailable);
        }catch (\Exception $e){
            Log::info($e->getMessage());
            Log::info($e->getTraceAsString());
        }
        return response()->json([
           'status'=> true
        ]);
    }
}
