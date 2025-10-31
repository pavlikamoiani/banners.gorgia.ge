<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Filters;
use App\Enums\FilterType;

class FilterController extends Controller
{
    public function index(Request $request)
    {
        $type = $request->query('type');
        if (!$type || !in_array($type, array_column(FilterType::cases(), 'value'))) {
            return response()->json(['error' => 'Type is required or invalid'], 400);
        }
        $filters = Filters::where('type', $type)->get();
        return response()->json($filters);
    }

    public function store(Request $request)
    {
        $request->validate([
            'type' => ['required', 'string', function ($attribute, $value, $fail) {
                if (!in_array($value, array_column(FilterType::cases(), 'value'))) {
                    $fail('Invalid type value.');
                }
            }],
            'name' => 'required|string'
        ]);
        $filter = Filters::create([
            'type' => $request->type,
            'name' => $request->name
        ]);
        return response()->json($filter, 201);
    }

    public function destroy($id)
    {
        $filter = Filters::find($id);
        if (!$filter) {
            return response()->json(['error' => 'Filter not found'], 404);
        }
        $filter->delete();
        return response()->json(null, 200);
    }
}
