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
        Schema::table('house_types', function (Blueprint $table) {
            $table->text('description')->nullable()->after('area');
            $table->string('surface_area', 100)->nullable()->after('description');
            $table->unsignedSmallInteger('parking_spaces')->nullable()->after('surface_area');
            $table->unsignedSmallInteger('maids_quarters')->nullable()->after('parking_spaces');
            $table->unsignedSmallInteger('living_rooms')->nullable()->after('maids_quarters');
        });
    }

    public function down(): void
    {
        Schema::table('house_types', function (Blueprint $table) {
            $table->dropColumn(['description', 'surface_area', 'parking_spaces', 'maids_quarters', 'living_rooms']);
        });
    }
};
