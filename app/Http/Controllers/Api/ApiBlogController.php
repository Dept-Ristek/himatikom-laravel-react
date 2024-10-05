<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;

class ApiBlogController extends Controller
{
    public function getAllData($id = null, $count = null)
    {
        if ($id != 'all' && $count) {
            return BlogResource::collection(
                Blog::where('id', '!=', $id)->paginate($count)
            );
        }
        return BlogResource::collection(
            Blog::paginate($count)
        );
    }
}
