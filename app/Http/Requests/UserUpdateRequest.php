<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->hasAnyRole(['admin', 'pengurus']);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nim' => ['required', 'numeric'],
            'name' => ['required', 'string'],
            'email' => ['required', 'string', 'email'],
            'password' => ['nullable', 'string', 'min:4'],
            'repeat_password' => ['nullable', 'string', 'same:password'],
        ];
    }
}
