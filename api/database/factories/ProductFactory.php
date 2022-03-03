<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'description' => $this->faker->sentence($nbWords = 4, $variableNbWords = true),
            'price' => $this->faker->regexify('[0-9]{2,4}+,[0-9]{2}'),
            'stock' => $this->faker->numberBetween($min = 1, $max = 100),
        ];
    }
}
