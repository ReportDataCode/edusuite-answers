<?
// a function GetUniqueOnes, which accepts a single argument: an array of integers.
// The function should return the number of unique elements in the array.

function GetUniqueOnes($arr)
{
    $unique = array();
    foreach ($arr as $value) {
        if (!in_array($value, $unique)) {
            array_push($unique, $value);
        }
    }
    return count($unique);
}
