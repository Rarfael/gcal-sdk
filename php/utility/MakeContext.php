<?php
declare(strict_types=1);

// Gcal SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class GcalMakeContext
{
    public static function call(array $ctxmap, ?GcalContext $basectx): GcalContext
    {
        return new GcalContext($ctxmap, $basectx);
    }
}
