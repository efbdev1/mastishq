<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Crypt;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use DB;
use Doctrine\DBAL\Schema\Table;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\MailController;

class UserRedirectController extends Controller
{
    //

    public function index()
    {

        $URL  = $user = auth()->user();
        $url = 'http://nictus.qwiktest.test/open-redirect?email=' . $user->email . '&fname=' . $user->first_name . '&lname=' . $user->last_name . '';
        return \Redirect::away($url);
    }

    public function away($path, $status = 302, $headers = array())
    {
        return $this->createRedirect($path, $status, $headers);
    }

    /**
     * Get an instance of the redirector.
     *
     * @param  string|null  $to
     * @param  int     $status
     * @param  array   $headers
     * @param  bool    $secure
     * @return \Illuminate\Routing\Redirector|\Illuminate\Http\RedirectResponse
     */
    function redirect($to = null, $status = 302, $headers = [], $secure = null)
    {
        if (is_null($to)) {
            return app('redirect');
        }

        return app('redirect')->to($to, $status, $headers, $secure);
    }



    public function checkAuth(Request $request)
    {
        // dd('not loging');
        $email = $request->email;
        $password = 'password';
        $remember = '';
        $emailExist = User::where('email', $email)->first();

        //if user not exist or not registered 
        if (is_null($emailExist)) {
            //register users here if not exist 
            $data = DB::connection('mysql2')->Table('users')->where('email', $email)->first();

            $user = User::create([
                'first_name' => $data->first_name,
                'last_name' => $data->last_name,
                'user_name' => $email,
                'email' => $email,
                'email_verified_at' =>  now(),
                'password' => Hash::make($password),
            ]);

            // By default assign guest role to new user
            if ($user) {
                $user->assignRole('guest');
            }

            if ($user) {

                if (Auth::loginUsingId($user->id, true)) {
                    return redirect('/dashboard');
                }
            }
        }

        if ($emailExist) {
            $mail = new MailController();
           
            if ($emailExist != null) {
                if (Auth::loginUsingId($emailExist->id, true)) {
                    //send signup email
                    $mail->sendSignupMail($email);
                    //redirect to dashbord
                    return redirect('/dashboard');
                }
            }
        }
    }

}

 // if (Auth::attempt(['email' => $email, 'password' => $password], $remember)) {
            //     // The user is being remembered...
            //     return redirect('/dashboard');
            // }
