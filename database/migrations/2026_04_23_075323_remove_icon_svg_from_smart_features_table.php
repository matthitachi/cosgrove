<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('smart_features', function (Blueprint $table) {
            $table->dropColumn('icon_svg');
        });
    }

    public function down(): void
    {
        Schema::table('smart_features', function (Blueprint $table) {
            $table->text('icon_svg')->nullable()->after('description');
        });
    }
};
