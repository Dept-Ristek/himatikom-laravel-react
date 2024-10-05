<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DocumentStoreRequest extends FormRequest
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
            'name' => ['required', 'string'],
            'tag' => ['required'],
            'type' => ['sometimes'],
            'filepath' => ['required', 'file', 'mimes:pdf,xlsx,docx', 'max:10240'],
            'description' => ['required', 'string'],
            'doc_from' => ['sometimes'],
            'doc_to' => ['sometimes'],
        ];
    }
}
