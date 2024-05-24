<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        // update the nullable later
        return [
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string|max:255',
            'type' => 'nullable|string|max:255',
            'status' => 'required|in:open,in-progress,for-review,closed',
            'priority' => 'nullable|string|max:255',
            'assignee' => 'nullable|string|max:255',
            'start_date' => 'nullable|date',
            'due_date' => 'nullable|date',
            'estimated_hours' => 'nullable|integer|min:0',
            'actual_hours' => 'nullable|integer|min:0',
        ];
    }
}
