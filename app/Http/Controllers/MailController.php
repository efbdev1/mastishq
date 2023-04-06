<?php

namespace App\Http\Controllers;
use App\Mail\MyDemoMail;
use App\Mail\SignupMail;
use Mail;
use Illuminate\Http\Request;

class MailController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function myDemoMail()
    {
        $myEmail = 'aatmaninfotech@gmail.com';
   
        $details = ['title' => 'Mail Demo from ItSolutionStuff.com','url' => 'http://nictus.qwiktest.test/login'];
  
        Mail::to($myEmail)->send(new MyDemoMail($details));
   
        dd("Mail Send Successfully");
    }

    public function sendSignupMail($to){
        
        $details = [
            'title' => 'Welcome To Mastishq',
             'url' => 'nictus.qwiktest.test/login'
            ];
  
        Mail::to($to)->send(new SignupMail($details));
    }

}
