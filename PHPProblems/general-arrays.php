<?

function MaxArray($arr)
{
    $max = $arr[0];
    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i] > $max) {
            $max = $arr[$i];
        }
    }
    return $max;
}

echo MaxArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
