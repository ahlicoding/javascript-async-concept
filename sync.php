<?php


echo '<h1>Test Callback</h1>
<p>by <a href="https://ahlicoding.com">Ahlicoding.com</a></p>
<p>Understanding concept of Async in Javascript, compare with async.php ..</p>';

function step3()
{
    sleep(6);
     echo '<br> Step 3 , after wait 6 seconds!';
}

echo '<br> Step 1';

// (try turn off the internet  Connection, and see what happended)!
// Get the string from the URL
$json = file_get_contents('http://jsonplaceholder.typicode.com/users');

// Decode the JSON string into an object
$obj = json_decode($json);
echo '<br> Step 2. we fetch this: ';
print_r($obj);

step3();

echo '<br> Step 4'; 