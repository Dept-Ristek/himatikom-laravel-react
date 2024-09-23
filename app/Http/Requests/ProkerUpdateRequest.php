<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProkerUpdateRequest extends FormRequest
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
            'name' => ['sometimes', 'string'],
            'is_proker' => ['nullable'],
            'schedule' => ['sometimes'],
            'need_to_register' => ['nullable'],
            'start_register' => ['nullable'],
            'end_register' => ['nullable'],
        ];
    }
}
