<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpeechToTextController extends Controller
{
    public function index()
    {
        return view('speechToText.speechToText');
    }


    public function processing_audio(Request $request)
    {

        $googleAccessToken  = '';
        // Initiate cURL Server bject
        // $_cURL = new CurlServer($_SESSION['google_access_tokens']['access_token']);
        $curl = curl_init();

        // Receive the RAW Audio data
        $content = trim(file_get_contents("php://input"));

        // Generate parameters for API request
        $parameters = '{
                            "config": {
                                "encoding": "WEBM_OPUS",
                                "languageCode": "en-US",
                                "sampleRateHertz": 48000,
                                "audioChannelCount": 1,
                                "alternativeLanguageCodes": [],
                                "speechContexts": [],
                                "adaptation": {
                                "phraseSets": [],
                                "phraseSetReferences": [],
                                "customClasses": []
                                },
                                "enableWordTimeOffsets": true,
                                "enableWordConfidence": true,
                                "model": "default"
                            },
                            "audio": {
                                "content": "' . base64_encode($content) . '"
                            }
                        }';

        $response = $_cURL->post_request("https://speech.googleapis.com/v1p1beta1/speech:recognize", $parameters);





curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://speech.googleapis.com/v1p1beta1/speech:recognize',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => $parameters,
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
        $async_response = new stdClass();
        $async_response->response_received_data = 'Audio data was received';
        $async_response->response_received_transcript = $response->results[0]->alternatives[0]->transcript;
        $async_response = json_encode($async_response);
        echo $async_response;
    }
}
