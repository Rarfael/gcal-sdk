<?php
declare(strict_types=1);

// Gcal SDK utility: prepare_body

class GcalPrepareBody
{
    public static function call(GcalContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
