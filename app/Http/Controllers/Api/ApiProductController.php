<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ApiProductController extends Controller
{
    public function getAllData($id = null, $count = null)
    {
        if ($id != 'all' && $count) {
            return ProductResource::collection(
                Product::where('id', '!=', $id)->paginate($count)
            );
        }
        return ProductResource::collection(
            Product::paginate($count)
        );
    }
}
