<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->hasAnyRole(['pengurus', 'admin']);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nim' => ['required', 'numeric', Rule::unique(User::class)],
            'name' => ['required', 'string'],
            'email' => ['required', 'string', 'email', Rule::unique(User::class)],
            'avatar' => ['image', 'mimes:png,jpg,jpeg', 'max:4096'],
        ];
    }
}
