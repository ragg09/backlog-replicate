<?php

namespace App\Policies;

use App\Models\Task;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class TaskPolicy
{
    /**
     * Determine whether the user can view any tasks.
     */
    public function viewAny(User $user): bool
    {
        // Allow any user to view any task
        return true;
    }

    /**
     * Determine whether the user can view the task.
     */
    public function view(User $user, Task $task): bool
    {
        // // Allow viewing if the user is the owner of the task or has a specific role
        // return $user->id === $task->user_id || $user->role === 'admin';

        // Allow any user to view any task
        return true;
    }

    /**
     * Determine whether the user can create tasks.
     */
    public function create(User $user): bool
    {
        // // Allow any authenticated user to create a task
        // return $user->exists();

        // Allow any user to view any task
        return true;
    }

    /**
     * Determine whether the user can update the task.
     */
    public function update(User $user, Task $task): bool
    {
        // // Allow updating if the user is the owner of the task or has a specific role
        // return $user->id === $task->user_id || $user->role === 'admin';

        // Allow any user to view any task
        return true;
    }

    /**
     * Determine whether the user can delete the task.
     */
    public function delete(User $user, Task $task): bool
    {
        // // Allow deleting if the user is the owner of the task or has a specific role
        // return $user->id === $task->user_id || $user->role === 'admin';

        // Allow any user to view any task
        return true;
    }

    /**
     * Determine whether the user can restore the task.
     */
    public function restore(User $user, Task $task): bool
    {
        // // Allow restoring if the user is the owner of the task or has a specific role
        // return $user->id === $task->user_id || $user->role === 'admin';

        // Allow any user to view any task
        return true;
    }

    /**
     * Determine whether the user can permanently delete the task.
     */
    public function forceDelete(User $user, Task $task): bool
    {
        // // Allow permanently deleting if the user is the owner of the task or has a specific role
        // return $user->id === $task->user_id || $user->role === 'admin';

        // Allow any user to view any task
        return true;
    }
}
