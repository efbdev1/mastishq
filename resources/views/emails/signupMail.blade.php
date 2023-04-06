@component('mail::message')
# {{ $details['title'] }}
  
you are registered successfully. 
   
@component('mail::button', ['url' => $details['url']])
Login Here
@endcomponent
   
Thanks,<br>
{{ config('app.name') }}
@endcomponent