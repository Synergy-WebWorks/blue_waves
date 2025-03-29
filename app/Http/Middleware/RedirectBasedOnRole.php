<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RedirectBasedOnRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $account = $request->user();
        if ($account) {
            if ($account->user_type == 1) {
                return redirect('/admin/dashboard');
            } else if ($account->user_type == 2) {
                return redirect('/staff/dashboard');
            } else if ($account->user_type == 3) {
                return redirect('/administrator/dashboard');
            }
        }
        return $next($request);
    }
}
