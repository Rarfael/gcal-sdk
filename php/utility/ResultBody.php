<?php
declare(strict_types=1);

// Gcal SDK utility: result_body

class GcalResultBody
{
    public static function call(GcalContext $ctx): ?GcalResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
