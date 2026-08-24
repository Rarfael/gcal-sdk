<?php
declare(strict_types=1);

// Gcal SDK utility: result_headers

class GcalResultHeaders
{
    public static function call(GcalContext $ctx): ?GcalResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
