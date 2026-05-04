<?php

namespace App\Http\Controllers;

use App\Mail\NewMail;
use App\Models\AgentSubmission;
use App\Models\ContactSubmission;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ApiController extends Controller
{
    public function sendContact(Request $request): JsonResponse
    {
        $request->validate([
            'name'  => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'token' => 'required|string',
        ]);

        // Honeypot — bots fill hidden salutation field
        if ($request->filled('salutation')) {
            return response()->json(['status' => true, 'message' => 'Completed successfully']);
        }

        if (! $this->verifyRecaptcha($request->token)) {
            return response()->json(['status' => false, 'message' => 'reCAPTCHA verification failed.'], 422);
        }

        $source = ($request->filled('project'))
            ? ContactSubmission::SOURCE_CONTACT
            : ContactSubmission::SOURCE_FOOTER;

        try {
            ContactSubmission::create([
                'name'         => $request->name,
                'email'        => $request->email,
                'phone'        => $request->phone ?? null,
                'project'      => $request->project ?? null,
                'message'      => $request->message ?? null,
                'source'       => $source,
                'status'       => ContactSubmission::STATUS_NEW,
                'submitted_at' => now(),
            ]);
        } catch (\Exception $e) {
            Log::error('Contact submission DB save failed: ' . $e->getMessage());
        }

        $content = '<div><h3>Contact Us Information</h3>';
        foreach (['name', 'email', 'project', 'phone', 'message'] as $field) {
            if ($request->filled($field)) {
                $label   = ucfirst($field);
                $content .= "<div><b>{$label}:</b> " . e($request->input($field)) . '</div>';
            }
        }
        $content .= '</div>';

        try {
            $mailable = new NewMail('Contact Us Information', $content);
            $to = config('app.env') === 'production'
                ? 'nafisa.aliyu@cosgroveafrica.com'
                : 'matthitachi@gmail.com';
            Mail::to($to)->send($mailable);
        } catch (\Exception $e) {
            Log::error('sendContact mail failed: ' . $e->getMessage());
        }

        return response()->json(['status' => true, 'message' => 'Completed successfully']);
    }

    public function sendAgent(Request $request): JsonResponse
    {
        $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'phone'   => 'required|string|max:50',
            'token'   => 'required|string',
            'company' => 'nullable|string|max:255',
        ]);

        if (! $this->verifyRecaptcha($request->token)) {
            return response()->json(['status' => false, 'message' => 'reCAPTCHA verification failed.'], 422);
        }

        $nameParts = explode(' ', trim($request->name), 2);
        AgentSubmission::create([
            'first_name'   => $nameParts[0],
            'last_name'    => $nameParts[1] ?? '',
            'email'        => $request->email,
            'phone'        => $request->phone,
            'company'      => $request->company ?? null,
            'status'       => AgentSubmission::STATUS_NEW,
            'submitted_at' => now(),
        ]);

        $content = '<div>';
        foreach (['name', 'email', 'project', 'phone', 'company', 'message'] as $field) {
            if ($request->filled($field)) {
                $label   = ucfirst($field);
                $content .= "<div><b>{$label}:</b> " . e($request->input($field)) . '</div>';
            }
        }
        $content .= '</div>';

        try {
            $mailable = new NewMail('Agent Registration', $content);
            Mail::to('careers@cosgroveafrica.com')->send($mailable);
        } catch (\Exception $e) {
            Log::error('sendAgent mail failed: ' . $e->getMessage());
        }

        return response()->json(['status' => true]);
    }

    private function verifyRecaptcha(string $token): bool
    {
        $secret = config('services.recaptcha.secret_key');
        if (empty($secret)) {
            Log::warning('RECAPTCHA_SECRET_KEY not configured — skipping verification');
            return true;
        }

        try {
            $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
                'secret'   => $secret,
                'response' => $token,
            ]);

            $success = $response->json('success', false);
            $score   = $response->json('score', 0);

            Log::info('reCAPTCHA result', ['success' => $success, 'score' => $score]);

            return $success && $score >= 0.5;
        } catch (\Exception $e) {
            Log::error('reCAPTCHA request failed: ' . $e->getMessage());
            return false;
        }
    }
}
