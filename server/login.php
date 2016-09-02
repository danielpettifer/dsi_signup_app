<?php
if (!isset($_GET['email']) OR !isset($_GET['password'])) {
    echo json_encode([
        'code' => 'error 1',
    ]);
    die();
}

$domainList = [
    'nesta.org.uk',
    'waag.org',
];

$domain = explode('@', $_GET['email'], 2)[1];
if (!in_array($domain, $domainList)) {
    echo json_encode([
        'code' => 'error 2',
    ]);
    die();
}

echo json_encode([
    'code' => 'ok',
]);
die();

/*
if ($_GET['email'] == 'alexandru.pandele@nesta.org.uk')
    echo json_encode([
        'code' => 'ok',
    ]);
else
    echo json_encode([
        'code' => 'error',
    ]);
*/