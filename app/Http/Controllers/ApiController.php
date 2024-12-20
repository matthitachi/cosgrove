<?php

namespace App\Http\Controllers;

use App\Mail\NewMail;
use Google\Cloud\RecaptchaEnterprise\V1\Event;
use Google\Cloud\RecaptchaEnterprise\V1\RecaptchaEnterpriseServiceClient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ApiController extends Controller
{
    //
    protected $client;
    public function __construct()
    {
//        $this->client = new RecaptchaEnterpriseServiceClient();
    }

    public function sendContact(Request $request){
        $request->validate([
           'token' => 'required'
        ]);
        if($request->has('salutation')){
            return response()->json([
                'status'=> true,
                'message' => 'Completed successfully'
            ]);
        }
        $token = $request->token;
        Log::info("Token");
        Log::info($token);
        $action = "CosgroveContactUs";
//        Mail::to($to)->later(now()->addHours($hours), new SendTimedMails($content, $subject));

//        $score = $this->verifyToken($token, $action);
//
//        if ($score === null || $score < 0.5) {
//            Log::info("Check the score for this to see  here");
//            Log::info("Score failed here. '.$score");
//            return response()->json([
//                'status'=> false,
//                'message' => 'System was unable to verify user'.
//            ]);
//        }

        $content = "<div> <h3>Contact Us Information</h3>";

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
            $mailable = new NewMail('Contact Us Information', $content);
            if(config('app.env') == 'production'){
                Mail::to('nafisa.aliyu@cosgroveafrica.com')->send($mailable);
            }else{
                Mail::to('matthitachi@gmail.com')->send($mailable);
            }
        }catch (\Exception $e){
            Log::info($e->getMessage());
            Log::info($e->getTraceAsString());
        }
        return response()->json([
           'status'=> true,
            'message' => 'Completed successfully'
        ]);
    }
    public function verifyToken($token, $action)
    {
        $projectName = $this->client->projectName(env('GOOGLE_CLOUD_PROJECT'));

        $event = (new Event())
            ->setSiteKey(env('RECAPTCHA_ENTERPRISE_SITE_KEY'))
            ->setToken($token);

        $assessment = (new \Google\Cloud\RecaptchaEnterprise\V1\Assessment())
            ->setEvent($event);

        try {
            $response = $this->client->createAssessment($projectName, $assessment);
            Log::info($response->serializeToJsonString());

            if (!$response->getTokenProperties()->getValid()) {
                Log::info('$response->getTokenProperties()->getValid()');
                Log::info($response->getTokenProperties()->getValid());
                $invalidReason = $response->getTokenProperties()->getInvalidReason();
                Log::info($invalidReason);

                return null; // Token is invalid
            }

            if ($response->getTokenProperties()->getAction() !== $action) {
                Log::info('$response->getTokenProperties()->getAction()');
                Log::info($response->getTokenProperties()->getAction());
                return null; // Action mismatch
            }

            return $response->getRiskAnalysis()->getScore();
        } catch (\Exception $e) {
            logger()->error('Error in reCAPTCHA verification: ' . $e->getMessage());
            return null;
        }
    }
    public function sendAgent(Request $request){
//        Mail::to($to)->later(now()->addHours($hours), new SendTimedMails($content, $subject));
//        Log::info('enter here');
//        Log::info(json_encode($request->all()));
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
