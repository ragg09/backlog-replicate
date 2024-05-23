<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(2),
            'type' => $this->faker->randomElement(['task', 'bug', 'other']),
            'status' => $this->faker->randomElement(['open', 'in-progress', 'for-review', 'closed']),
            'priority' => $this->faker->randomElement(['low', 'normal', 'high']),
            'assignee' => $this->faker->name,
            'start_date' => $this->faker->date(),
            'due_date' => $this->faker->date(),
            'estimated_hours' => $this->faker->numberBetween(1, 50),
            'actual_hours' => $this->faker->numberBetween(0, 50),
        ];
    }
}
