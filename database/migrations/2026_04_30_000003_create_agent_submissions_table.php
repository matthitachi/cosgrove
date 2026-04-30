<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('agent_submissions', function (Blueprint $table) {
            $table->id();
            $table->string('first_name', 100);
            $table->string('last_name', 100);
            $table->string('email', 255)->index();
            $table->string('phone', 50);
            $table->string('company', 255)->nullable();
            $table->string('status', 50)->default('new')->index();
            $table->text('notes')->nullable();
            $table->timestamp('submitted_at')->nullable()->index();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('agent_submissions');
    }
};
