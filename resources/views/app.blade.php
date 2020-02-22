<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <title>Polaris Demo</title>
</head>
<body>
    <div id="app"></div>

    <input type="hidden" id="apiKey" value="{{ config('shopify-app.api_key') }}">
    <input type="hidden" id="shopOrigin" value="{{session('shopify_domain')}}">

    <script src="{{asset('js/app.js')}}"></script>

</body>
</html>